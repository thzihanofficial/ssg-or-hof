import React from 'react';
import { ChevronRight, ArrowUpRight, Compass } from 'lucide-react';
import { BRAND } from '../data/landingContent';

export const CTASection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="closing-cta" 
      className="w-full bg-[#141416] text-white py-[100px] px-6 border-b-4 border-white relative overflow-hidden"
    >
      <div className="relative z-10 max-w-[860px] w-full mx-auto text-center flex flex-col items-center bg-black/90 border-3 border-white p-8 md:p-12 shadow-[10px_10px_0px_0px_#ffffff]">
        
        {/* Display Heading */}
        <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-black leading-none tracking-tighter text-white uppercase mb-6">
          THE JOURNEY DOESN'T END WHEN THE MISSION DOES.
        </h2>

        {/* Lead sentence */}
        <p className="text-[16px] sm:text-[18px] font-medium leading-relaxed text-[#e0e0e0] max-w-[680px] mb-8">
          Decades after the final transmission was received on Earth, NASA hardware stands silent on the Moon and Mars—silent witnesses to the courage of exploration and the relentless pursuit of scientific truth.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={() => scrollTo('destinations')}
            className="w-full sm:w-auto bg-[#0066cc] hover:bg-[#0071e3] text-white text-[16px] font-black uppercase px-8 py-4 border-3 border-white shadow-[6px_6px_0px_0px_#ffffff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>START EXPLORING</span>
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Participant-Created Project Attribution */}
        <div className="text-[12px] font-bold uppercase tracking-wider text-[#a1a1a6] flex items-center space-x-2 border-2 border-white/30 px-4 py-2 bg-black">
          <span>PROJECT BY <strong className="text-white font-black">{BRAND.team}</strong></span>
        </div>

      </div>
    </section>
  );
};
