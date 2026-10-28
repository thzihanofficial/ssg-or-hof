import React, { useState, useEffect } from 'react';

export type LandPalette = 'dawn' | 'alpine' | 'dusk' | 'mist' | 'lunar' | 'martian' | 'deepspace';

interface SafeMissionImageProps {
  src?: string;
  alt?: string;
  className?: string;
  fitImage?: boolean;
  missionTitle?: string;
  missionTime?: string;
  palette?: LandPalette;
  seed?: number;
}

export const SafeMissionImage: React.FC<SafeMissionImageProps> = ({
  src,
  alt = 'Mission archive visual',
  className = '',
  fitImage = false,
  missionTitle = 'NASA MISSION ARCHIVE',
  missionTime,
  palette = 'deepspace',
  seed = 42,
}) => {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    setLoaded(false);

    if (!src) {
      setHasError(true);
      return;
    }

    // Pre-check if browser is offline and asset is not yet loaded
    const testImg = new Image();
    testImg.src = src;
    testImg.onload = () => setLoaded(true);
    testImg.onerror = () => {
      // If error occurs, activate the architectural wireframe fallback
      setHasError(true);
    };

    return () => {
      testImg.onload = null;
      testImg.onerror = null;
    };
  }, [src]);

  // If there's an error or no image source, render the retro NASA Blueprint Schematic
  if (hasError || !src) {
    const isMars = palette === 'martian' || missionTitle.toLowerCase().includes('mars');
    const isMoon = palette === 'lunar' || missionTitle.toLowerCase().includes('surveyor') || missionTitle.toLowerCase().includes('apollo');
    const accentHex = isMars ? '#ff6b4a' : isMoon ? '#ffffff' : '#2997ff';
    const bgGradient = isMars
      ? 'from-[#1a0a05] via-[#100705] to-[#0a0503]'
      : isMoon
      ? 'from-[#12141a] via-[#0d0f14] to-[#07080b]'
      : 'from-[#070d1e] via-[#050814] to-[#020308]';

    return (
      <div
        className={`relative w-full h-full min-h-[160px] bg-gradient-to-b ${bgGradient} border border-white/20 flex flex-col items-center justify-between p-4 overflow-hidden select-none font-mono`}
        role="img"
        aria-label={`${missionTitle} schematic wireframe`}
      >
        {/* Technical Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, ${accentHex}22 1px, transparent 1px), linear-gradient(to bottom, ${accentHex}22 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Diagonal Reticle Crosshairs */}
        <div className="absolute top-2 left-2 text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
          SYS.DIAG // ARCHIVE RECORD
        </div>
        <div className="absolute top-2 right-2 text-[10px] font-mono tracking-widest uppercase" style={{ color: accentHex }}>
          [TELEMETRY BLUEPRINT]
        </div>

        {/* Center Spacecraft Wireframe SVG */}
        <div className="relative my-auto flex flex-col items-center justify-center py-2">
          <svg
            className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_0_12px_rgba(41,151,255,0.3)]"
            viewBox="0 0 200 200"
            fill="none"
            stroke={accentHex}
            strokeWidth="1.5"
          >
            {/* Spacecraft Central Bus */}
            <circle cx="100" cy="100" r="28" strokeDasharray="3 3" opacity="0.6" />
            <rect x="80" y="80" width="40" height="40" strokeWidth="2" fill="#000000" fillOpacity="0.8" />
            
            {/* Parabolic High Gain Antenna */}
            <path d="M 50 55 Q 100 20 150 55" strokeWidth="2" />
            <line x1="100" y1="36" x2="100" y2="80" strokeWidth="1.5" />
            <circle cx="100" cy="36" r="3" fill={accentHex} />

            {/* Solar Panel Arrays Left */}
            <line x1="80" y1="100" x2="20" y2="100" strokeWidth="2" />
            <rect x="25" y="85" width="22" height="30" strokeWidth="1.2" />
            <rect x="50" y="85" width="22" height="30" strokeWidth="1.2" />
            <line x1="25" y1="100" x2="47" y2="100" opacity="0.6" />
            <line x1="50" y1="100" x2="72" y2="100" opacity="0.6" />

            {/* Solar Panel Arrays Right */}
            <line x1="120" y1="100" x2="180" y2="100" strokeWidth="2" />
            <rect x="128" y="85" width="22" height="30" strokeWidth="1.2" />
            <rect x="153" y="85" width="22" height="30" strokeWidth="1.2" />
            <line x1="128" y1="100" x2="150" y2="100" opacity="0.6" />
            <line x1="153" y1="100" x2="175" y2="100" opacity="0.6" />

            {/* Science Instrument Boom & Magnetometer */}
            <line x1="90" y1="120" x2="70" y2="165" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="70" cy="165" r="4" fill={accentHex} />

            <line x1="110" y1="120" x2="130" y2="165" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="130" cy="165" r="4" fill={accentHex} />

            {/* Propulsion Thruster Nozzle */}
            <path d="M 92 120 L 108 120 L 114 135 L 86 135 Z" fill={accentHex} fillOpacity="0.25" strokeWidth="1.5" />
          </svg>

          {/* Machine Title & Identifier */}
          <div className="mt-2 text-center px-2">
            <span className="block text-[13px] sm:text-[14px] font-black uppercase tracking-wider text-white">
              {missionTitle}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest mt-0.5 block">
              HISTORICAL TELEMETRY // SCHEMATIC DECLASSIFIED
            </span>
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="w-full flex items-center justify-between text-[10px] text-zinc-400 border-t border-white/10 pt-1.5 mt-auto">
          <span className="truncate">COORDS: 0.00°N 0.00°W</span>
          <span className="text-emerald-400 font-black">LOCAL CACHE READY</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${fitImage ? 'object-contain p-2 bg-black' : 'object-cover'} ${
        loaded ? 'opacity-100' : 'opacity-90'
      } transition-opacity duration-300`}
      loading="eager"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      onLoad={() => setLoaded(true)}
    />
  );
};
