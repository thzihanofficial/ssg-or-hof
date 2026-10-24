import React from 'react';
import { Compass } from 'lucide-react';
import { BRAND } from '../data/landingContent';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer 
      id="footer"
      className="w-full bg-[#121214] text-[#ffffff] pt-16 pb-12 px-6 border-t-4 border-white relative"
    >
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* Dense Link Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Project Identity */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-[#1c1c1e] border-3 border-white p-6 shadow-[6px_6px_0px_0px_#ffffff]">
            <div className="flex items-center space-x-2 text-[#ffffff] font-black text-[16px] mb-3 uppercase tracking-wider">
              <Compass className="w-5 h-5 text-[#2997ff]" />
              <span className="font-black text-[14px]">{BRAND.name}</span>
            </div>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#e0e0e0] mb-4 max-w-[320px]">
              Telling the stories of NASA's discarded equipment on the Moon, on Mars, and in deep space to inspire the next generation of explorers.
            </p>
            <div className="text-[12px] font-black uppercase text-[#ffffff] border-2 border-white p-2 bg-black inline-block shadow-[3px_3px_0px_0px_#2997ff]">
              TEAM: <span className="text-[#2997ff]">{BRAND.team}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-[14px] font-black text-[#ffffff] uppercase tracking-wider mb-4 pb-2 border-b-3 border-[#2997ff]">
              NAVIGATION
            </h3>
            <ul className="text-[14px] leading-[2.2] text-[#ffffff] font-bold">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#2997ff] uppercase transition-colors text-left cursor-pointer">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('destinations')} className="hover:text-[#2997ff] uppercase transition-colors text-left cursor-pointer">
                  EXPLORE
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('closing-cta')} className="hover:text-[#2997ff] uppercase transition-colors text-left cursor-pointer">
                  ABOUT
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div>
            <h3 className="text-[14px] font-black text-[#ffffff] uppercase tracking-wider mb-4 pb-2 border-b-3 border-[#2997ff]">
              TARGETS
            </h3>
            <ul className="text-[14px] leading-[2.2] text-[#ffffff] font-bold">
              <li>
                <a href="#/moon" className="hover:text-[#2997ff] uppercase transition-colors text-left cursor-pointer block">
                  THE MOON
                </a>
              </li>
              <li>
                <a href="#/mars" className="hover:text-[#ff6b4a] uppercase transition-colors text-left cursor-pointer block">
                  MARS
                </a>
              </li>
              <li>
                <a href="#/deep-space" className="hover:text-[#2997ff] uppercase transition-colors text-left cursor-pointer block">
                  DEEP SPACE
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Micro-Legal Bar */}
        <div className="pt-6 border-t-3 border-white/30 flex flex-col sm:flex-row items-center justify-between text-[12px] uppercase text-[#ffffff] font-bold gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-emerald-400 inline-block" />
            <span>COPYRIGHT © 2026 {BRAND.team}. ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
