"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  colorType: 0 | 1 | 2 | 3 | 4; // 0 = white, 1 = neon blue, 2 = grey, 3 = space blue badge, 4 = dark shadow
  friction: number;
  spring: number;
}

export interface LiquidParticleTitleProps {
  className?: string;
  interactive?: boolean;
}

const COLOR_MAP = {
  0: "#ffffff", // Pure white
  1: "#2997ff", // Neon electric cyan-blue
  2: "#9ca3af", // Space metallic grey
  3: "#0066cc", // Space blue badge
  4: "#18181b", // Dark brutalist shadow
};

const STREAK_COLOR_MAP = {
  0: "rgba(255, 255, 255, 0.9)",
  1: "rgba(41, 151, 255, 0.95)",
  2: "rgba(156, 163, 175, 0.8)",
  3: "rgba(0, 102, 204, 0.9)",
  4: "rgba(24, 24, 27, 0.6)",
};

export const LiquidParticleTitle: React.FC<LiquidParticleTitleProps> = ({
  className = "",
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Grouped by colorType so zero array allocations occur during 60fps render
  const particlesByColorRef = useRef<Particle[][]>([[], [], [], [], []]);
  const allParticlesRef = useRef<Particle[]>([]);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    isDown: false,
    radius: 135,
    active: false,
  });

  const animFrameRef = useRef<number>(0);
  const isSleepingRef = useRef<boolean>(false);
  const isVisibleRef = useRef<boolean>(true);
  const wakeUpRef = useRef<() => void>(() => {});
  const [ready, setReady] = useState(false);

  // Initialize and sample optimal micro-particles for rock-solid 60 FPS on any device
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width <= 0 || height <= 0) return;

    // Use optimal DPR (capped at 1.5 to prevent GPU fill-rate choke on mobile while remaining pin-sharp)
    const isLowPower =
      typeof navigator !== "undefined" &&
      ((navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
        width < 640);

    const dpr = Math.min(window.devicePixelRatio || 1, isLowPower ? 1.25 : 1.75);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Offscreen canvas for sampling
    const off = document.createElement("canvas");
    off.width = Math.round(width * dpr);
    off.height = Math.round(height * dpr);
    const octx = off.getContext("2d", { willReadFrequently: true });
    if (!octx) return;

    octx.scale(dpr, dpr);
    octx.textAlign = "center";
    octx.textBaseline = "middle";

    // Responsive font sizing
    let fontSize = 80;
    if (width < 440) fontSize = 38;
    else if (width < 640) fontSize = 52;
    else if (width < 768) fontSize = 66;
    else if (width < 1024) fontSize = 76;
    else fontSize = 84;

    const fontFamily = '"Arial Black", "Inter Display", Inter, -apple-system, sans-serif';
    const lineHeight = fontSize * 1.08;
    const centerX = width / 2;
    const centerY = height / 2;

    const line1Y = centerY - lineHeight * 0.98;
    const line2Y = centerY + 2;
    const line3Y = centerY + lineHeight * 1.05;

    octx.clearRect(0, 0, width, height);

    // Line 1: "SOLAR SYSTEM"
    octx.font = `900 ${fontSize}px ${fontFamily}`;
    octx.fillStyle = "#18181b";
    octx.fillText("SOLAR SYSTEM", centerX + 5, line1Y + 5);

    octx.fillStyle = "#ffffff";
    octx.fillText("SOLAR SYSTEM", centerX, line1Y);

    // Line 2: "GRAVEYARD... OR"
    const graveText = "GRAVEYARD...";
    const orText = " OR";
    octx.font = `900 ${fontSize}px ${fontFamily}`;
    const graveWidth = octx.measureText(graveText).width;
    octx.font = `900 ${Math.round(fontSize * 0.76)}px ${fontFamily}`;
    const orWidth = octx.measureText(orText).width;
    const line2TotalW = graveWidth + orWidth;
    const line2StartX = (width - line2TotalW) / 2;

    octx.font = `900 ${fontSize}px ${fontFamily}`;
    octx.textAlign = "left";
    octx.fillStyle = "#18181b";
    octx.fillText(graveText, line2StartX + 5, line2Y + 5);

    octx.fillStyle = "#2997ff";
    octx.fillText(graveText, line2StartX, line2Y);

    octx.font = `900 ${Math.round(fontSize * 0.76)}px ${fontFamily}`;
    octx.fillStyle = "#18181b";
    octx.fillText(orText, line2StartX + graveWidth + 4, line2Y + 4);

    octx.fillStyle = "#9ca3af";
    octx.fillText(orText, line2StartX + graveWidth, line2Y);

    // Line 3: "HALL OF FAME?"
    const hallText = "HALL OF FAME?";
    octx.font = `900 ${fontSize}px ${fontFamily}`;
    const hallW = octx.measureText(hallText).width;
    const badgePadX = Math.round(fontSize * 0.28);
    const badgeW = hallW + badgePadX * 2;
    const badgeH = Math.round(fontSize * 1.15);
    const badgeX = (width - badgeW) / 2;
    const badgeY = line3Y - badgeH / 2;

    octx.fillStyle = "#ffffff";
    octx.fillRect(badgeX + 6, badgeY + 6, badgeW, badgeH);

    octx.fillStyle = "#18181b";
    octx.fillRect(badgeX + 3, badgeY + 3, badgeW, badgeH);

    octx.fillStyle = "#0066cc";
    octx.fillRect(badgeX, badgeY, badgeW, badgeH);

    octx.strokeStyle = "#ffffff";
    octx.lineWidth = Math.max(3, Math.round(fontSize * 0.05));
    octx.strokeRect(badgeX, badgeY, badgeW, badgeH);

    octx.textAlign = "center";
    octx.fillStyle = "#ffffff";
    octx.fillText(hallText, centerX, line3Y + 3);

    // Smart density sampling: Step calibrated with dot size for zero gaps and 5x performance
    const imgData = octx.getImageData(0, 0, off.width, off.height);
    const data = imgData.data;

    const step = isLowPower ? 3.1 : 2.75;
    const colorGroups: Particle[][] = [[], [], [], [], []];
    const allList: Particle[] = [];

    const baseSize = isLowPower ? 1.35 : 1.18;

    for (let py = 0; py < off.height; py += step) {
      for (let px = 0; px < off.width; px += step) {
        const idx = (Math.floor(py) * off.width + Math.floor(px)) * 4;
        const a = data[idx + 3];
        if (a < 95) continue;

        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];

        const x = px / dpr;
        const y = py / dpr;

        let colorType: 0 | 1 | 2 | 3 | 4 = 0;
        if (r < 35 && g < 35 && b < 35) {
          colorType = 4;
        } else if (r > 200 && g > 200 && b > 200) {
          colorType = 0;
        } else if (b > 200 && r < 100) {
          colorType = 1;
        } else if (b > 150 && r < 50) {
          colorType = 3;
        } else {
          colorType = 2;
        }

        const size = baseSize + (Math.random() * 0.35 - 0.15);

        const p: Particle = {
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size,
          colorType,
          friction: 0.86 + Math.random() * 0.04,
          spring: 0.06 + Math.random() * 0.03,
        };

        colorGroups[colorType].push(p);
        allList.push(p);
      }
    }

    particlesByColorRef.current = colorGroups;
    allParticlesRef.current = allList;
    setReady(true);

    // Initial render and then sleep until interaction
    if (wakeUpRef.current) {
      wakeUpRef.current();
    }
  }, []);

  // Optimized Render Loop with Freeze-Proof Lifecycle and Zero GC
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let running = true;
    let isLoopRunning = false;
    let quietFrames = 0;

    const drawFrame = (dpr: number, colorGroups: Particle[][], maxSpeed: number) => {
      ctx.save();
      ctx.scale(dpr, dpr);

      // Fast Draw: Render particles by static color group
      for (let cType = 0; cType <= 4; cType++) {
        const list = colorGroups[cType];
        if (!list || list.length === 0) continue;

        ctx.fillStyle = COLOR_MAP[cType as 0 | 1 | 2 | 3 | 4];
        ctx.beginPath();
        for (let j = 0; j < list.length; j++) {
          const p = list[j];
          const s = p.size;
          ctx.rect(p.x - s, p.y - s, s * 2, s * 2);
        }
        ctx.fill();
      }

      // Fast moving streaks batched by color (stroke calls reduced to max 5)
      if (maxSpeed > 1.2) {
        for (let cType = 0; cType <= 4; cType++) {
          const list = colorGroups[cType];
          let hasStreaks = false;

          ctx.beginPath();
          for (let j = 0; j < list.length; j++) {
            const p = list[j];
            const spSq = p.vx * p.vx + p.vy * p.vy;
            if (spSq > 1.8) {
              const sp = Math.sqrt(spSq);
              const len = Math.min(14, sp * 2.2);
              const nx = p.vx / sp;
              const ny = p.vy / sp;
              ctx.moveTo(p.x - nx * len * 0.5, p.y - ny * len * 0.5);
              ctx.lineTo(p.x + nx * len * 0.5, p.y + ny * len * 0.5);
              hasStreaks = true;
            }
          }

          if (hasStreaks) {
            ctx.strokeStyle = STREAK_COLOR_MAP[cType as 0 | 1 | 2 | 3 | 4];
            ctx.lineWidth = 1.6;
            ctx.lineCap = "round";
            ctx.stroke();
          }
        }
      }

      ctx.restore();
    };

    const render = () => {
      if (!running || !isVisibleRef.current) {
        isLoopRunning = false;
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const allParticles = allParticlesRef.current;
      const colorGroups = particlesByColorRef.current;
      const count = allParticles.length;

      // Mouse velocity
      mouse.vx = (mouse.x - mouse.prevX) * 0.5;
      mouse.vy = (mouse.y - mouse.prevY) * 0.5;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      const mSpeed = Math.hypot(mouse.vx, mouse.vy);
      const effRadius = mouse.radius * (1 + Math.min(1.3, mSpeed / 18));
      const effRadiusSq = effRadius * effRadius;

      let maxSpeed = 0;

      // Physics update loop
      for (let i = 0; i < count; i++) {
        const p = allParticles[i];

        // Sanitize coordinates if any NaN or out-of-bounds anomaly occurred
        if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) {
          p.x = p.originX;
          p.y = p.originY;
          p.vx = 0;
          p.vy = 0;
        }

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < effRadiusSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (effRadius - dist) / effRadius;
            const push = force * force * (mouse.isDown ? 26 : 14);

            p.vx += (dx / dist) * push;
            p.vy += (dy / dist) * push;

            const swirl = force * 6.2;
            p.vx += (-dy / dist) * swirl;
            p.vy += (dx / dist) * swirl;

            p.vx += mouse.vx * force * 0.35;
            p.vy += mouse.vy * force * 0.35;
          }
        }

        // Return to origin spring
        const hx = p.originX - p.x;
        const hy = p.originY - p.y;
        p.vx += hx * p.spring;
        p.vy += hy * p.spring;

        // Friction
        p.vx *= p.friction;
        p.vy *= p.friction;

        // Clamp extreme speeds to prevent runaway motion
        p.vx = Math.max(-45, Math.min(45, p.vx));
        p.vy = Math.max(-45, Math.min(45, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        const spSq = p.vx * p.vx + p.vy * p.vy;
        if (spSq > maxSpeed) {
          maxSpeed = spSq;
        }
      }

      // Draw the updated particles
      drawFrame(dpr, colorGroups, maxSpeed);

      // Sleep management: When mouse is inactive and particles settled, snap to origin and sleep
      if (!mouse.active && maxSpeed < 0.02) {
        quietFrames++;
        if (quietFrames > 20) {
          isSleepingRef.current = true;
          isLoopRunning = false;
          // Clean snap to exact origins
          for (let i = 0; i < count; i++) {
            const p = allParticles[i];
            p.x = p.originX;
            p.y = p.originY;
            p.vx = 0;
            p.vy = 0;
          }
          // Crisp static redraw at resting positions
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawFrame(dpr, colorGroups, 0);
          return;
        }
      } else {
        quietFrames = 0;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!running || !isVisibleRef.current) return;
      if (isLoopRunning) return; // Already animating smoothly

      isLoopRunning = true;
      isSleepingRef.current = false;
      quietFrames = 0;
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(render);
    };

    const stopLoop = () => {
      isLoopRunning = false;
      cancelAnimationFrame(animFrameRef.current);
    };

    wakeUpRef.current = startLoop;
    startLoop();

    // Viewport IntersectionObserver: Cleanly pause when scrolled out of view, and unfreeze immediately upon return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const intersecting = entry.isIntersecting;
        isVisibleRef.current = intersecting;

        if (intersecting) {
          // Re-entering viewport: reset stale mouse coordinates so particles return home smoothly
          mouseRef.current.active = false;
          mouseRef.current.isDown = false;
          mouseRef.current.x = -9999;
          mouseRef.current.y = -9999;
          mouseRef.current.prevX = -9999;
          mouseRef.current.prevY = -9999;
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );

    if (canvas) {
      observer.observe(canvas);
    }

    // Scroll listener: If the user suddenly scrolls down, immediately deactivate mouse force
    // so particles do not freeze exploded or skewed while scrolling
    const handleWindowScroll = () => {
      if (mouseRef.current.active) {
        mouseRef.current.active = false;
        mouseRef.current.isDown = false;
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
        mouseRef.current.prevX = -9999;
        mouseRef.current.prevY = -9999;
      }
      if (isVisibleRef.current) {
        startLoop();
      }
    };

    // Tab visibility and blur listener
    const handleVisibilityChange = () => {
      if (document.hidden) {
        mouseRef.current.active = false;
        mouseRef.current.isDown = false;
        stopLoop();
      } else if (isVisibleRef.current) {
        startLoop();
      }
    };

    const handleWindowBlur = () => {
      mouseRef.current.active = false;
      mouseRef.current.isDown = false;
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      running = false;
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      stopLoop();
    };
  }, []);

  // Handle Resize and Orientation
  useEffect(() => {
    initParticles();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initParticles();
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [initParticles]);

  // Pointer interaction handlers
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    // Safety boundary check
    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      handlePointerLeave();
      return;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const mouse = mouseRef.current;
    if (mouse.x < -9000 || !mouse.active) {
      mouse.prevX = x;
      mouse.prevY = y;
    }
    mouse.x = x;
    mouse.y = y;
    mouse.active = true;

    wakeUpRef.current();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    const mouse = mouseRef.current;
    mouse.isDown = true;
    handlePointerMove(e);

    const particles = allParticlesRef.current;
    const mx = mouse.x;
    const my = mouse.y;
    const shockRadiusSq = 200 * 200;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const dx = p.x - mx;
      const dy = p.y - my;
      const dSq = dx * dx + dy * dy;
      if (dSq < shockRadiusSq && dSq > 0.01) {
        const d = Math.sqrt(dSq);
        const force = (200 - d) / 200;
        p.vx += (dx / d) * force * 28;
        p.vy += (dy / d) * force * 28;
      }
    }

    wakeUpRef.current();
  };

  const handlePointerUp = () => {
    mouseRef.current.isDown = false;
  };

  const handlePointerLeave = () => {
    const mouse = mouseRef.current;
    mouse.active = false;
    mouse.x = -9999;
    mouse.y = -9999;
    mouse.prevX = -9999;
    mouse.prevY = -9999;
    mouse.isDown = false;
    wakeUpRef.current();
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none cursor-pointer flex items-center justify-center ${className}`}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerLeave}
      onPointerLeave={handlePointerLeave}
      style={{ touchAction: "pan-y" }}
      aria-label="Solar System Graveyard... or Hall of Fame?"
    >
      <h1 className="sr-only">Solar System Graveyard... or Hall of Fame?</h1>
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
      />
    </div>
  );
};

export default LiquidParticleTitle;
