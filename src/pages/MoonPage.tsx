import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { PolaroidLineCarousel, Slide } from '../components/ui/polaroid-line-carousel';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { navigateBack } from '../services/scrollRestoration';

export const MoonPage: React.FC = () => {
  const moonMissions = [
    {
      name: "Surveyor 1",
      time: "June 1966 - July 1966",
      desc: "I was the first American spacecraft to land softly on the Moon—back then, no one even knew whether the lunar soil was hard or soft.",
      img: "https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_2_model.jpg",
      hash: "#/moon/surveyor1",
      fitImage: true
    },
    {
      name: "Surveyor 3",
      time: "April 1967 - May 1967",
      desc: "I was digging the soil alone on the moon; there was no one with me. Two and a half years later, two astronauts suddenly walked up—to see me!",
      img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/as12-48-7134_1280.jpg?w=1280&h=1280&fit=crop&crop=faces%2Cfocalpoint",
      hash: "#/moon/surveyor3"
    },
    {
      name: "Surveyor 5, 6, 7",
      time: "Sept 1967 - Jan 1968",
      desc: "We are three siblings. We were able to tell what elements were present in the Moon’s soil without even touching it.",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Surveyor_NASA_lunar_lander.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
      hash: "#/moon/surveyor567",
      fitImage: true
    },
    {
      name: "Apollo 15 LRV (1971)",
      time: "July 1971 - August 1971",
      desc: "I was the first vehicle on the Moon — no roads, no maps, just me and two astronauts in a completely unknown world.",
      img: "https://www.nasa.gov/wp-content/uploads/2023/03/as15-88-11901orig.jpg",
      hash: "#/moon/apollo15lrv",
      fitImage: true
    },
    {
      name: "Apollo 16 LRV (1972)",
      time: "April 1972 - April 1972",
      desc: "My brother, the Apollo 15 LRV, explored the Moon, but I wanted to know — how fast could I go? The answer surprised all of NASA.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Moon_Buggy_Ap16-KSC-71PC-777.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
      hash: "#/moon/apollo16lrv"
    },
    {
      name: "Apollo 17 LRV (1972)",
      time: "December 1972",
      desc: "I am the vehicle that carried the last humans to explore the Moon. More than 50 years have passed since then, and no one has returned.",
      img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/eugene_cernan-full-a.jpg?w=3295&h=1764&fit=clip&crop=faces%2Cfocalpoint",
      hash: "#/moon/apollo17lrv"
    },
    {
      name: "Clementine (1994)",
      time: "January 1994 - June 1994",
      desc: "I mapped the entire Moon, peeking into every corner. And one day, my radar detected something that shocked the entire scientific community — ice!",
      img: "https://images-assets.nasa.gov/image/PIA18159/PIA18159~orig.jpg",
      hash: "#/moon/clementine"
    }
  ];

  const moonSlides: Slide[] = moonMissions.map((card, idx) => ({
    title: card.name,
    caption: card.desc,
    image: card.img,
    tag: `LUNAR LOG [0${idx + 1}]`,
    time: card.time,
    hash: card.hash,
    status: card.time.toLowerCase().includes("present") ? "Still Active" : "Gone Silent",
    fitImage: card.fitImage,
    palette: "lunar",
    seed: idx * 23 + 42,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-[#141416] text-white selection:bg-[#0066cc]/30 selection:text-[#0066cc]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-6 sm:pt-8 pb-20 flex flex-col font-mono-retro">
        {/* Header Section (Readable Constrained Width) */}
        <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-6 sm:mb-8">
          {/* Back Navigation Button */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => navigateBack('')}
              className="inline-flex items-center space-x-2.5 text-[15px] sm:text-[16px] font-black uppercase text-white bg-black border-2 border-white px-5 py-2.5 shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#0066cc] hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[3]" />
              <span>Back to Explorer</span>
            </button>
          </div>

          {/* Header Block - Wide & Professional */}
          <ScrollReveal direction="up" distance="25px" duration={700}>
            <div className="w-full border-l-6 border-[#2997ff] bg-black border-2 border-white p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#ffffff] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-[#2997ff] animate-pulse" />
                  <span className="text-[13px] sm:text-[15px] font-black text-[#2997ff] uppercase tracking-widest">
                    LUNAR ARCHIVE // CATALOG 01
                  </span>
                </div>
                <h1 className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-black tracking-tighter text-white uppercase leading-none">
                  Moon Exploration
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-white">
                <span className="px-3.5 py-1.5 bg-zinc-900 border border-white/40 shadow-[2px_2px_0px_0px_#2997ff]">
                  7 SURFACE MISSIONS
                </span>
                <span className="px-3.5 py-1.5 bg-zinc-900 border border-white/40 shadow-[2px_2px_0px_0px_#2997ff]">
                  1966 - 1994
                </span>
                <span className="px-3.5 py-1.5 bg-[#0066cc]/30 border border-[#2997ff] text-[#2997ff]">
                  NASA ARCHIVAL RECORDS
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* POLAROID LINE CAROUSEL (Full Width Screen Stage, No Border, Increased Height) */}
        <ScrollReveal direction="up" distance="30px" delay={100} duration={800} className="w-full flex-1 flex flex-col">
          <div className="w-full flex-1 relative overflow-hidden bg-gradient-to-b from-black/80 via-[#09090c] to-black py-4">
            {/* Top Bar Label */}
            <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 mb-2 gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 bg-[#2997ff] shadow-[0_0_8px_#2997ff]" />
                <h2 className="text-[18px] sm:text-[22px] font-black uppercase text-white tracking-wide">
                  LUNAR EXPEDITION POLAROIDS // WIRELINE ARCHIVE
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] sm:text-[12px] font-bold uppercase text-[#2997ff] bg-black/80 border border-[#2997ff]/60 px-3.5 py-1.5 shadow-[2px_2px_0px_0px_#2997ff]">
                  HORIZONTAL SCROLL / DRAG TO BROWSE • VERTICAL SCROLL MOVES PAGE
                </span>
              </div>
            </div>

            {/* Polaroid Line Carousel Component */}
            <PolaroidLineCarousel
              slides={moonSlides}
              height="780px"
              cardWidth={440}
              sag={55}
              swing={1.05}
              autoplay={0}
              string="#2997ff"
              accentColor="#2997ff"
              background="transparent"
              ariaLabel="Lunar Expedition Mission Polaroid Prints"
              initialIndex={Number(sessionStorage.getItem('moon_carousel_idx')) || 0}
              onChange={(idx) => sessionStorage.setItem('moon_carousel_idx', String(idx))}
            />
          </div>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MoonPage;
