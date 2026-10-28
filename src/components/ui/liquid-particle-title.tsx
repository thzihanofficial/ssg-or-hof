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

  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    isDown: false,
    radius: 140,
    active: false,
  });

  const animFrameRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  // Initialize and sample dense micro-particles directly from the styled text model
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width <= 0 || height <= 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // High-resolution offscreen canvas to sample particle anchor points
    const off = document.createElement("canvas");
    off.width = Math.round(width * dpr);
    off.height = Math.round(height * dpr);
    const octx = off.getContext("2d", { willReadFrequently: true });
    if (!octx) return;

    octx.scale(dpr, dpr);
    octx.textAlign = "center";
    octx.textBaseline = "middle";

    // Responsive font scaling
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

    // Clear transparent
    octx.clearRect(0, 0, width, height);

    // Line 1: "SOLAR SYSTEM"
    // Dark shadow particles for 3D depth
    octx.font = `900 ${fontSize}px ${fontFamily}`;
    octx.fillStyle = "#18181b";
    octx.fillText("SOLAR SYSTEM", centerX + 5, line1Y + 5);

    // Main text
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

    // Shadow
    octx.font = `900 ${fontSize}px ${fontFamily}`;
    octx.textAlign = "left";
    octx.fillStyle = "#18181b";
    octx.fillText(graveText, line2StartX + 5, line2Y + 5);

    // Main GRAVEYARD... in neon electric cyan-blue
    octx.fillStyle = "#2997ff";
    octx.fillText(graveText, line2StartX, line2Y);

    // Shadow for OR
    octx.font = `900 ${Math.round(fontSize * 0.76)}px ${fontFamily}`;
    octx.fillStyle = "#18181b";
    octx.fillText(orText, line2StartX + graveWidth + 4, line2Y + 4);

    // Main OR in space grey
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

    // Brutalist 3D white shadow
    octx.fillStyle = "#ffffff";
    octx.fillRect(badgeX + 6, badgeY + 6, badgeW, badgeH);

    // Black outline
    octx.fillStyle = "#18181b";
    octx.fillRect(badgeX + 3, badgeY + 3, badgeW, badgeH);

    // Main Space-Blue Box
    octx.fillStyle = "#0066cc";
    octx.fillRect(badgeX, badgeY, badgeW, badgeH);

    // Thick White Border
    octx.strokeStyle = "#ffffff";
    octx.lineWidth = Math.max(3, Math.round(fontSize * 0.05));
    octx.strokeRect(badgeX, badgeY, badgeW, badgeH);

    // Text inside box
    octx.textAlign = "center";
    octx.fillStyle = "#ffffff";
    octx.fillText(hallText, centerX, line3Y + 3);

    // Sample pixels densely to build tens of thousands of micro-particles
    const imgData = octx.getImageData(0, 0, off.width, off.height);
    const data = imgData.data;

    // Fine step size: 2.2px gives ~20,000+ crisp micro-dots
    const step = width < 640 ? 2.6 : 2.2;
    const newParticles: Particle[] = [];

    for (let py = 0; py < off.height; py += step) {
      for (let px = 0; px < off.width; px += step) {
        const idx = (Math.floor(py) * off.width + Math.floor(px)) * 4;
        const a = data[idx + 3];
        if (a < 100) continue;

        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];

        const x = px / dpr;
        const y = py / dpr;

        // Categorize color
        let colorType: 0 | 1 | 2 | 3 | 4 = 0;

        if (r < 35 && g < 35 && b < 35) {
          // Dark drop-shadow
          colorType = 4;
        } else if (r > 200 && g > 200 && b > 200) {
          // Pure white
          colorType = 0;
        } else if (b > 200 && r < 100) {
          // Neon electric blue (#2997ff)
          colorType = 1;
        } else if (b > 150 && r < 50) {
          // Deep space blue (#0066cc)
          colorType = 3;
        } else {
          // Metallic grey
          colorType = 2;
        }

        // Tiny micro-particle size (0.85px - 1.25px)
        const size = (width < 640 ? 0.75 : 0.95) + Math.random() * 0.35;

        newParticles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size,
          colorType,
          friction: 0.87 + Math.random() * 0.04,
          spring: 0.055 + Math.random() * 0.035,
        });
      }
    }

    particlesRef.current = newParticles;
    setReady(true);
  }, []);

  // Main 60 FPS Render Loop with Batched Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;
    let time = 0;

    const render = () => {
      if (!running) return;
      time += 0.016;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const count = particles.length;

      // Mouse velocity
      mouse.vx = (mouse.x - mouse.prevX) * 0.5;
      mouse.vy = (mouse.y - mouse.prevY) * 0.5;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      const mSpeed = Math.hypot(mouse.vx, mouse.vy);
      const effRadius = mouse.radius * (1 + Math.min(1.4, mSpeed / 16));

      ctx.save();
      ctx.scale(dpr, dpr);

      // Separate arrays or fast batching for resting particles
      // Group particles by colorType to draw tens of thousands of particles in 5 draw calls
      const groups: { [key: number]: Particle[] } = { 0: [], 1: [], 2: [], 3: [], 4: [] };
      const fastParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Interaction with mouse / touch
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < effRadius && dist > 0.1) {
            const force = (effRadius - dist) / effRadius;
            const push = force * force * (mouse.isDown ? 28 : 15);

            // Radial outward blast
            p.vx += (dx / dist) * push;
            p.vy += (dy / dist) * push;

            // Liquid curl-noise tangential swirl
            const swirl = force * 6.5;
            p.vx += (-dy / dist) * swirl;
            p.vy += (dx / dist) * swirl;

            // Mouse wake transfer
            p.vx += mouse.vx * force * 0.38;
            p.vy += mouse.vy * force * 0.38;
          }
        }

        // Return to origin with elastic spring
        const hx = p.originX - p.x;
        const hy = p.originY - p.y;
        p.vx += hx * p.spring;
        p.vy += hy * p.spring;

        // Friction
        p.vx *= p.friction;
        p.vy *= p.friction;

        // Ambient micro-shimmer
        const ambient = Math.sin(time * 2.5 + i * 0.4) * 0.12;
        p.x += p.vx + ambient;
        p.y += p.vy + Math.cos(time * 2.0 + i * 0.6) * 0.12;

        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 1.3) {
          fastParticles.push(p);
        } else {
          groups[p.colorType].push(p);
        }
      }

      // 1. Draw resting/slow particles in 5 ultra-fast batched draw calls
      for (let cType = 0; cType <= 4; cType++) {
        const list = groups[cType];
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

      // 2. Draw fast moving particles as stretched liquid streaks / glowing trails
      if (fastParticles.length > 0) {
        for (let j = 0; j < fastParticles.length; j++) {
          const p = fastParticles[j];
          const sp = Math.hypot(p.vx, p.vy);
          const len = Math.min(16, sp * 2.4);
          const nx = p.vx / sp;
          const ny = p.vy / sp;

          ctx.beginPath();
          ctx.moveTo(p.x - nx * len * 0.5, p.y - ny * len * 0.5);
          ctx.lineTo(p.x + nx * len * 0.5, p.y + ny * len * 0.5);
          ctx.strokeStyle = STREAK_COLOR_MAP[p.colorType];
          ctx.lineWidth = p.size * 1.4;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      ctx.restore();
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Handle Resize and Orientation
  useEffect(() => {
    initParticles();

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initParticles]);

  // Pointer interaction handlers
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mouse = mouseRef.current;
    if (mouse.x < -9000) {
      mouse.prevX = x;
      mouse.prevY = y;
    }
    mouse.x = x;
    mouse.y = y;
    mouse.active = true;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    const mouse = mouseRef.current;
    mouse.isDown = true;
    handlePointerMove(e);

    // Cosmic shockwave burst on click / tap
    const particles = particlesRef.current;
    const mx = mouse.x;
    const my = mouse.y;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const dx = p.x - mx;
      const dy = p.y - my;
      const d = Math.hypot(dx, dy);
      if (d < 220 && d > 0.1) {
        const force = (220 - d) / 220;
        p.vx += (dx / d) * force * 32;
        p.vy += (dy / d) * force * 32;
      }
    }
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
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none cursor-pointer flex items-center justify-center ${className}`}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      style={{ touchAction: "pan-y" }}
      aria-label="Solar System Graveyard... or Hall of Fame?"
    >
      {/* Screen-reader and SEO accessible title */}
      <h1 className="sr-only">Solar System Graveyard... or Hall of Fame?</h1>

      {/* 
        The particle canvas IS the complete visual title.
        Formed by tens of thousands of dense, microscopic stardust particles.
      */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
      />
    </div>
  );
};

export default LiquidParticleTitle;
