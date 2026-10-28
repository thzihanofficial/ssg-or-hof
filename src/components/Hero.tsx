import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { HERO_CONTENT, BRAND } from '../data/landingContent';
import { LiquidParticleTitle } from './ui/liquid-particle-title';
import { ScrollReveal } from './ui/ScrollReveal';
import { CosmicBackground } from './ui/CosmicBackground';

export const Hero: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>('https://v1.pinimg.com/videos/iht/expMp4/11/09/56/110956ca69b4a3a36bdbee450c531685_720w.mp4');
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);

  useEffect(() => {
    const videoUrl = 'https://v1.pinimg.com/videos/iht/expMp4/11/09/56/110956ca69b4a3a36bdbee450c531685_720w.mp4';
    let localUrl = '';

    // Check online status immediately
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      // If offline, check if video exists in cache
      if ('caches' in window) {
        caches.open('hero-video-vault-v1').then(async (cache) => {
          const match = await cache.match(videoUrl);
          if (match) {
            const blob = await match.blob();
            localUrl = URL.createObjectURL(blob);
            setVideoSrc(localUrl);
          } else {
            setVideoError(true);
          }
        }).catch(() => {
          setVideoError(true);
        });
      } else {
        setVideoError(true);
      }
      return;
    }

    const loadAndCacheVideo = async () => {
      try {
        if ('caches' in window) {
          const cacheName = 'hero-video-vault-v1';
          const cache = await caches.open(cacheName);
          
          let cachedResponse = await cache.match(videoUrl);
          if (cachedResponse) {
            const blob = await cachedResponse.blob();
            localUrl = URL.createObjectURL(blob);
            setVideoSrc(localUrl);
            return;
          }

          // Fetch with no-cors / cors fallback
          try {
            const networkResponse = await fetch(videoUrl, { mode: 'cors' });
            if (networkResponse.ok) {
              await cache.put(videoUrl, networkResponse.clone());
              const blob = await networkResponse.blob();
              localUrl = URL.createObjectURL(blob);
              setVideoSrc(localUrl);
            }
          } catch {
            // direct streaming through <video>
          }
        }
      } catch (err) {
        console.warn('Direct stream fallback:', err);
      }
    };

    loadAndCacheVideo();

    return () => {
      if (localUrl) {
        URL.revokeObjectURL(localUrl);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-[64px] sm:pt-[76px] pb-[80px] bg-[#07080f] text-white flex flex-col justify-between overflow-hidden border-b-4 border-white"
    >
      {/* Dynamic Cosmic Space Background — Always visible even completely offline */}
      <CosmicBackground />

      {/* Video Loop Overlay — Blends seamlessly with cosmic nebula when available */}
      {!videoError && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <video
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-55' : 'opacity-0'
            }`}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => {
              setVideoError(true);
              setVideoLoaded(false);
            }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#07080f]" />
        </div>
      )}

      {/* Subtle CRT Scanline and ambient vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] z-[1]" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[980px] w-full mx-auto px-6 text-center my-auto flex flex-col items-center">
        
        {/* Main Title - Pure Interactive Liquid Particle Model */}
        <div className="w-full max-w-[960px] h-[190px] min-[440px]:h-[240px] sm:h-[300px] md:h-[360px] lg:h-[390px] mb-8">
          <LiquidParticleTitle className="w-full h-full" />
        </div>

        {/* Lead Tagline */}
        <ScrollReveal direction="up" distance="25px" delay={80}>
          <p className="text-[18px] sm:text-[22px] md:text-[24px] font-bold leading-[1.3] text-[#e0e0e0] max-w-[780px] mb-8 tracking-tight bg-black/90 border-3 border-white p-5 shadow-[6px_6px_0px_0px_#ffffff]">
            {HERO_CONTENT.tagline}
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" distance="20px" delay={140}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => scrollTo('destinations')}
              className="w-full sm:w-auto bg-[#0066cc] hover:bg-[#0071e3] text-white text-[16px] sm:text-[18px] font-black uppercase px-8 py-4 rounded-none border-3 border-white transition-all flex items-center justify-center space-x-3 shadow-[6px_6px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </ScrollReveal>

        {/* Central Exploration Hardware Box */}
        <ScrollReveal direction="up" distance="30px" delay={200} className="w-full max-w-[640px]">
          <div className="relative w-full pt-2">
            <div className="relative rounded-none bg-[#242426] border-3 border-white p-6 md:p-8 shadow-[8px_8px_0px_0px_#ffffff] text-left">
              <div className="flex items-center justify-between border-b-2 border-white/30 pb-3 mb-4">
                <h2 className="text-[16px] md:text-[18px] font-black text-white uppercase tracking-wider">
                  AUTONOMOUS SURFACE HARDWARE
                </h2>
                <span className="text-[11px] font-black text-white bg-black border-2 border-white px-2 py-0.5 shadow-[2px_2px_0px_0px_#2997ff]">
                  SURFACE TELEMETRY
                </span>
              </div>

              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#e0e0e0] font-medium mb-6">
                From seismic sensors deployed during the Apollo era to robotic wheels stationary on Martian plateaus, each unit holds a permanent place in the scientific map of our solar system.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-[12px] text-[#cccccc]">
                <div className="border-l-3 border-[#2997ff] pl-3 bg-black/60 p-2.5 border-1 border-white/30">
                  <span className="block text-[#2997ff] font-black uppercase text-[12px]">MOON</span>
                  <span className="text-[11px] font-medium">Seismic & Ranging</span>
                </div>
                <div className="border-l-3 border-[#ff6b4a] pl-3 bg-black/60 p-2.5 border-1 border-white/30">
                  <span className="block text-[#ff6b4a] font-black uppercase text-[12px]">MARS</span>
                  <span className="text-[11px] font-medium">Geology & Atmosphere</span>
                </div>
                <div className="border-l-3 border-emerald-400 pl-3 bg-black/60 p-2.5 border-1 border-white/30">
                  <span className="block text-emerald-400 font-black uppercase text-[12px]">DEEP SPACE</span>
                  <span className="text-[11px] font-medium">Solar Wind & Void</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Bottom Metadata Bar */}
      <ScrollReveal direction="up" distance="20px" delay={80} className="relative z-10 w-full">
        <div className="max-w-[1440px] w-full mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-white/90 font-bold uppercase tracking-wider pt-8 border-t-2 border-white/30">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span>PROJECT BY <strong className="text-white font-black">{BRAND.team}</strong></span>
            <span>•</span>
            <span>{BRAND.theme}</span>
          </div>
          <button 
            onClick={() => scrollTo('destinations')}
            className="flex items-center space-x-1 text-white border-2 border-white bg-black px-3 py-1 shadow-[3px_3px_0px_0px_#ffffff] hover:text-[#2997ff] cursor-pointer"
          >
            <span>Explore Destinations</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};
