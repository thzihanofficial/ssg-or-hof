"use client"

import * as React from "react"

/*
 * Polaroid Line Carousel — instant photos pegged to a sagging string. Drag the
 * line (or use the arrows) and the prints slide along it, swinging on their
 * pegs with the speed you give them and settling back with a little
 * overshoot; even at rest they sway in a light breeze. The one in the middle
 * is the one you're looking at.
 *
 * Drag, click a print, ←/→ and autoplay. Slides without an `image` get a
 * painted landscape, so it works with no assets at all.
 */

export type LandPalette = "dawn" | "alpine" | "dusk" | "mist" | "lunar" | "martian" | "deepspace"

export type Slide = {
  image?: string
  title?: string
  caption?: string
  alt?: string
  /** Palette and seed of the painted landscape used when `image` is empty. */
  palette?: LandPalette
  seed?: number
  tag?: string
  time?: string
  hash?: string
  status?: string
  fitImage?: boolean
}

export type PolaroidLineCarouselProps = {
  slides?: Slide[]
  /** Any CSS length. Default 580px or 100svh. */
  height?: number | string
  /** Width of a print in px (it shrinks on narrow screens). */
  cardWidth?: number
  /** How far the string sags in the middle, px. */
  sag?: number
  /** How much the prints swing; 0 holds them still. */
  swing?: number
  /** ms per print; 0 turns autoplay off. It waits while someone is interacting. */
  autoplay?: number
  /** Colour of the string and pegs. */
  string?: string
  background?: string
  ink?: string
  accentColor?: string
  onChange?: (index: number) => void
  onSelectSlide?: (slide: Slide, index: number) => void
  initialIndex?: number
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
}

// #region logic
export function wrap(i: number, n: number): number {
  return n ? ((i % n) + n) % n : 0
}

export function clamp(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, v))
}

/** Height of a string sagging by `sag` between (0, y0) and (w, y0), at x. */
export function stringY(x: number, w: number, y0: number, sag: number): number {
  if (w <= 0) return y0
  const t = clamp(x / w, 0, 1)
  return y0 + 4 * sag * t * (1 - t)
}

/** Slope angle (in radians) of the sagging string at x */
export function stringSlope(x: number, w: number, sag: number): number {
  if (w <= 0) return 0
  const t = clamp(x / w, 0, 1)
  // dy/dx of y0 + 4 * sag * (t - t^2) where dt/dx = 1/w
  const dy_dx = (4 * sag * (1 - 2 * t)) / w
  return Math.atan(dy_dx)
}

/** One step of a critically damped spring toward target. */
export function springStep(x: number, v: number, target: number, dt: number, k = 70): [number, number] {
  const c = 2 * Math.sqrt(k)
  const nv = v + (k * (target - x) - c * v) * dt
  return [x + nv * dt, nv]
}

/** One step of a print's swing. lineVel is the prints' on-screen speed (px/s, + = moving right); a print lags behind the motion, is pulled back by gravity and damped. */
export function swingStep(a: number, w: number, lineVel: number, dt: number, gain: number): [number, number] {
  const nw = w + (-38 * a - 4.2 * w + lineVel * 0.0034 * gain) * dt
  return [clamp(a + nw * dt, -0.6, 0.6), nw]
}

/** Index of the print nearest the centre for a line offset. */
export function nearestAt(off: number, spacing: number, n: number): number {
  if (n <= 0 || spacing <= 0) return 0
  return clamp(Math.round(off / spacing), 0, Math.max(0, n - 1))
}

export function pad2(n: number): string {
  return n < 10 ? "0" + n : String(n)
}
// #endregion logic

/* ------------------------------------------------------- painted images */

export const PALETTES: Record<string, { top: string; bottom: string; sun: string; far: string; near: string; mist: string }> = {
  dawn: { top: "#e7b7a5", bottom: "#f8e8d6", sun: "#fff4df", far: "#d2b2bb", near: "#3a2a3b", mist: "255,240,232" },
  alpine: { top: "#7ea5c8", bottom: "#e3ecf2", sun: "#ffffff", far: "#a9bfd0", near: "#1c3044", mist: "236,244,250" },
  dusk: { top: "#2a2450", bottom: "#ef8d60", sun: "#ffd9a6", far: "#93607c", near: "#18121f", mist: "255,196,160" },
  mist: { top: "#c4d0cb", bottom: "#eef1ec", sun: "#ffffff", far: "#aebcb5", near: "#2c3a33", mist: "246,248,245" },
  lunar: { top: "#0f172a", bottom: "#334155", sun: "#e2e8f0", far: "#64748b", near: "#020617", mist: "148,163,184" },
  martian: { top: "#451a03", bottom: "#9a3412", sun: "#fdba74", far: "#c2410c", near: "#1c0a00", mist: "251,146,60" },
  deepspace: { top: "#020617", bottom: "#1e1b4b", sun: "#38bdf8", far: "#4338ca", near: "#000000", mist: "56,189,248" }
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Painted procedural canvas fallback for slides without images */
const ProceduralLandscape: React.FC<{ palette?: LandPalette; seed?: number; width: number; height: number }> = ({
  palette = "lunar",
  seed = 42,
  width,
  height,
}) => {
  const pal = PALETTES[palette] || PALETTES.lunar
  const prng = React.useMemo(() => mulberry32(seed), [seed])
  const sunX = Math.round((0.3 + prng() * 0.4) * width)
  const sunY = Math.round((0.2 + prng() * 0.25) * height)

  return (
    <svg width={width} height={height} className="w-full h-full block" viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={`sky-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={pal.top} />
          <stop offset="100%" stopColor={pal.bottom} />
        </linearGradient>
      </defs>
      <rect width={width} height={height} fill={`url(#sky-${seed})`} />
      <circle cx={sunX} cy={sunY} r={height * 0.16} fill={pal.sun} opacity={0.85} />
      {/* Mountain silhouettes */}
      <path
        d={`M 0 ${height * 0.7} Q ${width * 0.25} ${height * 0.45} ${width * 0.5} ${height * 0.65} T ${width} ${height * 0.55} L ${width} ${height} L 0 ${height} Z`}
        fill={pal.far}
        opacity={0.7}
      />
      <path
        d={`M 0 ${height * 0.8} Q ${width * 0.3} ${height * 0.6} ${width * 0.65} ${height * 0.75} T ${width} ${height * 0.7} L ${width} ${height} L 0 ${height} Z`}
        fill={pal.near}
      />
    </svg>
  )
}

export const PolaroidLineCarousel: React.FC<PolaroidLineCarouselProps> = ({
  slides = [],
  height = "780px",
  cardWidth = 440,
  sag = 52,
  swing = 1.05,
  autoplay = 0,
  string = "#2997ff",
  background = "transparent",
  ink = "#ffffff",
  accentColor = "#2997ff",
  onChange,
  onSelectSlide,
  initialIndex,
  className = "",
  style,
  ariaLabel = "Polaroid Mission Archive Carousel",
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = React.useState(1100)
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex ?? 0)
  const [isInteracting, setIsInteracting] = React.useState(false)

  // Responsive effective card width and photo frame height
  const effectiveCardWidth = Math.min(cardWidth, Math.max(containerWidth - 48, 280))
  const photoHeight = Math.round(effectiveCardWidth * 0.67)

  // Layout spacing between prints along the wire
  const spacing = Math.max(effectiveCardWidth * 0.86, 260)
  const y0 = 65 // string baseline height

  // Physics state
  const offsetRef = React.useRef((initialIndex ?? 0) * spacing) // target scroll offset in pixels
  const animPosRef = React.useRef((initialIndex ?? 0) * spacing) // current interpolated position
  const animVelRef = React.useRef(0) // current velocity
  const anglesRef = React.useRef<number[]>(slides.map(() => 0))
  const angleVelsRef = React.useRef<number[]>(slides.map(() => 0))
  const lastTimeRef = React.useRef<number | null>(null)
  const dragStartRef = React.useRef<{ x: number; offset: number } | null>(null)
  const hasMovedRef = React.useRef(false)
  const [, setRenderTrigger] = React.useState(0)

  const n = slides.length

  // Measure container
  React.useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Clamp current target offset
  const setTargetIndex = React.useCallback(
    (idx: number) => {
      const clamped = clamp(idx, 0, Math.max(0, n - 1))
      setCurrentIndex(clamped)
      offsetRef.current = clamped * spacing
      onChange?.(clamped)
    },
    [n, spacing, onChange]
  )

  // Physics animation loop
  React.useEffect(() => {
    let animId: number

    const tick = (time: number) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = time
      }
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.05)
      lastTimeRef.current = time

      // Critically damped spring toward target offset
      const targetOff = offsetRef.current
      const [newPos, newVel] = springStep(animPosRef.current, animVelRef.current, targetOff, dt, 45)
      animPosRef.current = newPos
      animVelRef.current = newVel

      // Natural sway & drag swing for each slide
      const lineSpeed = newVel
      const angles = anglesRef.current
      const angleVels = angleVelsRef.current
      if (angles.length !== n) {
        anglesRef.current = Array.from({ length: n }, () => 0)
        angleVelsRef.current = Array.from({ length: n }, () => 0)
      }

      // Wind sway oscillation
      const ambientSway = Math.sin(time * 0.0018) * 0.015

      for (let i = 0; i < n; i++) {
        const [nextAngle, nextW] = swingStep(
          angles[i],
          angleVels[i],
          -lineSpeed, // opposite to drag motion
          dt,
          swing
        )
        angles[i] = nextAngle + ambientSway * 0.2
        angleVels[i] = nextW
      }

      // Re-render
      setRenderTrigger((prev) => (prev + 1) % 10000)
      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [n, spacing, swing])

  // Autoplay (Disabled when autoplay <= 0)
  React.useEffect(() => {
    if (autoplay <= 0 || isInteracting || n <= 1) return
    const timer = setInterval(() => {
      setTargetIndex((currentIndex + 1) % n)
    }, autoplay)
    return () => clearInterval(timer)
  }, [autoplay, currentIndex, isInteracting, n, setTargetIndex])

  // Trackpad / Mouse horizontal scroll on hover
  React.useEffect(() => {
    const el = containerRef.current
    if (!el || n <= 1) return

    let wheelSnapTimer: number | null = null

    const handleWheel = (e: WheelEvent) => {
      // Determine if user intent is horizontal scrolling:
      // 1) Trackpad horizontal swipe or horizontal wheel (Math.abs(deltaX) > Math.abs(deltaY))
      // 2) Shift + mouse wheel (standard desktop horizontal scroll modifier)
      const isShiftWheel = e.shiftKey && Math.abs(e.deltaY) > 0
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || isShiftWheel

      // If user is scrolling vertically, allow native vertical page scrolling completely
      if (!isHorizontalScroll) {
        return
      }

      const delta = isShiftWheel ? (e.deltaX !== 0 ? e.deltaX : e.deltaY) : e.deltaX
      if (Math.abs(delta) < 0.5) return

      // Prevent browser horizontal back/forward swipe history navigation
      e.preventDefault()

      const scrollSpeed = 1.15
      const maxOffset = Math.max(0, (n - 1) * spacing)
      offsetRef.current = clamp(offsetRef.current + delta * scrollSpeed, 0, maxOffset)

      // Add responsive dynamic swing velocity along the line
      animVelRef.current = clamp(animVelRef.current + delta * 0.45, -1200, 1200)

      const near = nearestAt(offsetRef.current, spacing, n)
      setCurrentIndex(near)
      onChange?.(near)

      // Debounce snap to nearest card when horizontal scrolling stops
      if (wheelSnapTimer != null) {
        clearTimeout(wheelSnapTimer)
      }
      wheelSnapTimer = window.setTimeout(() => {
        const snapIndex = nearestAt(offsetRef.current, spacing, n)
        setTargetIndex(snapIndex)
      }, 240)
    }

    el.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      el.removeEventListener("wheel", handleWheel)
      if (wheelSnapTimer != null) {
        clearTimeout(wheelSnapTimer)
      }
    }
  }, [n, spacing, onChange, setTargetIndex])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setTargetIndex(currentIndex - 1)
      } else if (e.key === "ArrowRight") {
        setTargetIndex(currentIndex + 1)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, setTargetIndex])

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsInteracting(true)
    hasMovedRef.current = false
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current }
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragStartRef.current) return
    const dx = e.clientX - dragStartRef.current.x
    if (Math.abs(dx) > 4) {
      hasMovedRef.current = true
    }
    offsetRef.current = dragStartRef.current.offset - dx
    // update current index as drag moves
    const near = nearestAt(offsetRef.current, spacing, n)
    if (near !== currentIndex) {
      setCurrentIndex(near)
      onChange?.(near)
    }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragStartRef.current) return
    setIsInteracting(false)
    ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
    // Snap to nearest slide
    const nearest = nearestAt(offsetRef.current, spacing, n)
    setTargetIndex(nearest)
    dragStartRef.current = null
  }

  // Cable SVG Path Calculation
  const w = containerWidth || 1000
  const pathData = `M 0,${y0} Q ${w / 2},${y0 + 2 * sag} ${w},${y0}`

  const currentSlide = slides[currentIndex]

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden font-mono-retro ${className}`}
      style={{
        height,
        background,
        color: ink,
        touchAction: "pan-y",
        ...style,
      }}
      aria-label={ariaLabel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Background Ambience / Subtle Grid Line */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Sagging Cable SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-[220px] pointer-events-none z-10 overflow-visible"
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))" }}
      >
        {/* Glow behind cable */}
        <path d={pathData} fill="none" stroke={accentColor} strokeWidth="4" strokeOpacity="0.25" />
        {/* Main Cable */}
        <path
          d={pathData}
          fill="none"
          stroke={string}
          strokeWidth="2.5"
          strokeDasharray="6 3"
          strokeLinecap="round"
        />
        {/* Left and Right Anchor Wall Brackets */}
        <circle cx="12" cy={y0} r="7" fill="#000" stroke={string} strokeWidth="3" />
        <circle cx="12" cy={y0} r="2.5" fill={accentColor} />
        <circle cx={w - 12} cy={y0} r="7" fill="#000" stroke={string} strokeWidth="3" />
        <circle cx={w - 12} cy={y0} r="2.5" fill={accentColor} />
      </svg>

      {/* Hanging Polaroid Prints */}
      <div className="absolute inset-0 pointer-events-none">
        {slides.map((slide, i) => {
          // Slide position along x-axis relative to center
          const cx = w / 2 + (i * spacing - animPosRef.current)
          // Don't render far offscreen
          if (cx < -effectiveCardWidth - 100 || cx > w + effectiveCardWidth + 100) return null

          const cy = stringY(cx, w, y0, sag)
          const slope = stringSlope(cx, w, sag)
          const swingAngle = (anglesRef.current[i] || 0) + slope * 0.4
          const isSelected = i === currentIndex
          const distFromCenter = Math.abs(cx - w / 2)
          const depthScale = clamp(1 - distFromCenter * 0.00045, 0.88, 1)

          return (
            <div
              key={i}
              className="absolute pointer-events-auto cursor-grab active:cursor-grabbing will-change-transform origin-top transition-shadow duration-300"
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
                transform: `translateX(-50%) rotate(${swingAngle}rad) scale(${depthScale})`,
                zIndex: isSelected ? 30 : Math.max(1, 20 - Math.round(distFromCenter / 40)),
              }}
              onClick={(e) => {
                if (hasMovedRef.current) return
                e.stopPropagation()
                if (isSelected) {
                  onSelectSlide?.(slide, i)
                  if (slide.hash) {
                    window.location.hash = slide.hash
                  }
                } else {
                  setTargetIndex(i)
                }
              }}
            >
              {/* Clothespin / Metal Peg */}
              <div
                className="absolute -top-4.5 left-1/2 -translate-x-1/2 z-20 w-6 h-9 flex flex-col items-center pointer-events-none"
                style={{
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.85))",
                }}
              >
                {/* Metallic Clip Head */}
                <div
                  className="w-4 h-7 rounded-[2px] border border-black/40"
                  style={{
                    background: isSelected
                      ? `linear-gradient(to bottom, #ffffff, ${accentColor}, #000000)`
                      : "linear-gradient(to bottom, #e4e4e7, #71717a, #18181b)",
                  }}
                />
                {/* Pin Spring loop */}
                <div className="w-5 h-1.5 bg-zinc-300 border border-black/70 -mt-3 rounded-full" />
              </div>

              {/* The Polaroid Card */}
              <div
                className={`group/card relative bg-[#18181b] border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-white shadow-[10px_10px_0px_0px_#ffffff] scale-100 ring-2 ring-[#2997ff]"
                    : "border-white/50 opacity-85 hover:opacity-100 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]"
                }`}
                style={{
                  width: `${effectiveCardWidth}px`,
                  padding: "14px 14px 18px 14px",
                }}
              >
                {/* Top Corner Tape / Indicator */}
                <div className="flex items-center justify-between pb-2.5 text-[11px] uppercase font-black tracking-wider text-zinc-400 border-b border-zinc-800">
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-[#2997ff] animate-ping" : "bg-zinc-600"
                      }`}
                    />
                    <span>{slide.tag || `POLAROID #${pad2(i + 1)}`}</span>
                  </span>
                  <span className="text-zinc-400 font-mono text-[11px]">{slide.time || "LOG FILE"}</span>
                </div>

                {/* Photo Area */}
                <div
                  className="relative mt-2.5 w-full bg-black overflow-hidden border border-zinc-800 flex items-center justify-center"
                  style={{ height: `${photoHeight}px` }}
                >
                  {slide.image ? (
                    <img
                      src={slide.image}
                      alt={slide.alt || slide.title || `Polaroid print ${i + 1}`}
                      className={`w-full h-full ${
                        slide.fitImage ? "object-contain p-3 bg-black" : "object-cover"
                      } transition-transform duration-500 group-hover/card:scale-105`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <ProceduralLandscape
                      palette={slide.palette}
                      seed={slide.seed ?? i * 13 + 7}
                      width={effectiveCardWidth - 28}
                      height={photoHeight}
                    />
                  )}

                  {/* Archival Stamp */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-black/90 border border-white/40 text-[10px] font-mono font-black uppercase text-white tracking-wider shadow-sm">
                    ARCHIVE {pad2(i + 1)}
                  </div>
                </div>

                {/* Polaroid Bottom Caption Area */}
                <div className="mt-4 space-y-1.5">
                  <h4 className="text-[19px] sm:text-[21px] font-black uppercase text-white tracking-tight line-clamp-1 leading-snug">
                    {slide.title || "MISSION RECORD"}
                  </h4>
                  {slide.caption && (
                    <p className="text-[13px] sm:text-[14px] text-zinc-300 font-medium line-clamp-2 leading-relaxed">
                      "{slide.caption}"
                    </p>
                  )}
                </div>

                {/* Interactive Card Action Button */}
                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                  {slide.hash ? (
                    <a
                      href={slide.hash}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[12px] font-black uppercase px-3.5 py-2 bg-[#0066cc] hover:bg-[#0071e3] text-white border border-white shadow-[2px_2px_0px_0px_#ffffff] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>Read Story</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-[11px] uppercase font-bold text-[#2997ff]">CLICK TO INSPECT</span>
                  )}

                  {slide.status && (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-zinc-300">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          slide.status.toLowerCase().includes("active")
                            ? "bg-emerald-400 animate-pulse"
                            : "bg-red-500"
                        }`}
                      />
                      <span>{slide.status}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom Bar: Retro Brutalist Navigation & Slide Counter */}
      <div className="absolute bottom-5 left-0 right-0 max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
        {/* Active Mission Quick Spec */}
        <div className="pointer-events-auto bg-black/90 border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_#ffffff] flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#2997ff] animate-pulse" />
          <span className="text-[13px] font-black uppercase text-white tracking-wider">
            {currentSlide?.title || "EXPLORATION LOG"}
          </span>
          {currentSlide?.time && (
            <span className="text-[11px] font-mono text-[#2997ff] border-l border-zinc-700 pl-2">
              {currentSlide.time}
            </span>
          )}
        </div>

        {/* Counter and Arrows */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Numerical Counter */}
          <div className="bg-black/90 border-2 border-white px-3.5 py-1.5 text-[14px] font-black text-white shadow-[3px_3px_0px_0px_#ffffff] font-mono tracking-widest">
            <span className="text-[#2997ff]">{pad2(currentIndex + 1)}</span>
            <span className="text-zinc-500 mx-1">/</span>
            <span>{pad2(n)}</span>
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => setTargetIndex(currentIndex - 1)}
            disabled={currentIndex <= 0}
            aria-label="Previous Polaroid"
            className="w-10 h-10 flex items-center justify-center bg-black border-2 border-white text-white shadow-[3px_3px_0px_0px_#ffffff] hover:bg-[#2997ff] hover:text-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => setTargetIndex(currentIndex + 1)}
            disabled={currentIndex >= n - 1}
            aria-label="Next Polaroid"
            className="w-10 h-10 flex items-center justify-center bg-black border-2 border-white text-white shadow-[3px_3px_0px_0px_#ffffff] hover:bg-[#2997ff] hover:text-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PolaroidLineCarousel
