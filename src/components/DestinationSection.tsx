import React from 'react';
import { SolarSystem3D } from './SolarSystem3D';

export const DestinationSection: React.FC = () => {
  return (
    <section 
      id="destinations" 
      className="w-full bg-[#121318] text-white py-[80px] px-6 border-b-4 border-white relative overflow-hidden"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1650px] 2xl:max-w-[1750px] w-full mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-[900px] mb-10 border-l-6 border-[#2997ff] pl-6 py-5 bg-black/90 border-3 border-white p-6 shadow-[8px_8px_0px_0px_#2997ff] relative">
          <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-black leading-tight tracking-tighter text-white uppercase mb-4">
            SOLAR SYSTEM EXPLORER
          </h2>

          <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-[#e0e0e0]">
            Select <strong className="text-[#2997ff]">Moon</strong> or <strong className="text-[#2997ff]">Mars</strong> to inspect NASA landers, rovers, and surface equipment, or launch into <strong className="text-[#00f0ff]">Deep Space</strong> via the floating capsule!
          </p>
        </div>

        {/* 3D Solar System Centerpiece Container */}
        <div className="mt-6 w-full">
          <SolarSystem3D />
        </div>

      </div>
    </section>
  );
};
