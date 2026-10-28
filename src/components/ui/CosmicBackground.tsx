import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const CosmicBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate static stars
    const starCount = Math.floor(Math.min(220, (width * height) / 7000));
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() < 0.85 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.5 + 1.2,
        brightness: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Drifting cosmic dust
    const dustCount = 45;
    const dustColors = [
      'rgba(41, 151, 255, ',
      'rgba(168, 85, 247, ',
      'rgba(244, 63, 94, ',
      'rgba(255, 255, 255, ',
    ];
    const dust: DustParticle[] = [];
    for (let i = 0; i < dustCount; i++) {
      dust.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.4) * 0.25,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.4 + 0.15,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;
    const render = () => {
      time += 0.016;

      // Deep galactic backdrop gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#05060b');
      bgGrad.addColorStop(0.5, '#090a14');
      bgGrad.addColorStop(1, '#05070e');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Deep space atmospheric nebula glows
      // Nebula 1: Deep cosmic purple (Upper center)
      const rad1 = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        20,
        width * 0.5,
        height * 0.35,
        width * 0.55
      );
      rad1.addColorStop(0, 'rgba(88, 28, 135, 0.22)');
      rad1.addColorStop(0.5, 'rgba(49, 46, 129, 0.12)');
      rad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = rad1;
      ctx.fillRect(0, 0, width, height);

      // Nebula 2: Electric cyan-blue (Bottom right horizon)
      const rad2 = ctx.createRadialGradient(
        width * 0.75,
        height * 0.7,
        10,
        width * 0.75,
        height * 0.7,
        width * 0.45
      );
      rad2.addColorStop(0, 'rgba(14, 116, 144, 0.18)');
      rad2.addColorStop(0.6, 'rgba(30, 58, 138, 0.08)');
      rad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = rad2;
      ctx.fillRect(0, 0, width, height);

      // Nebula 3: Crimson/amber solar flare glow (Top left)
      const rad3 = ctx.createRadialGradient(
        width * 0.18,
        height * 0.2,
        5,
        width * 0.18,
        height * 0.2,
        width * 0.35
      );
      rad3.addColorStop(0, 'rgba(190, 24, 93, 0.12)');
      rad3.addColorStop(0.7, 'rgba(124, 45, 18, 0.05)');
      rad3.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = rad3;
      ctx.fillRect(0, 0, width, height);

      // Draw Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const alpha = Math.max(0.1, s.brightness + Math.sin(time * 3 + s.twinklePhase) * 0.35);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Cross flare on bright stars
        if (s.size > 2.0 && alpha > 0.6) {
          ctx.strokeStyle = `rgba(147, 197, 253, ${(alpha * 0.3).toFixed(2)})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(s.x - s.size * 2.5, s.y);
          ctx.lineTo(s.x + s.size * 2.5, s.y);
          ctx.moveTo(s.x, s.y - s.size * 2.5);
          ctx.lineTo(s.x, s.y + s.size * 2.5);
          ctx.stroke();
        }
      }

      // Draw drifting cosmic dust
      for (let i = 0; i < dust.length; i++) {
        const p = dust[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
