import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const MoonPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#141416] text-white selection:bg-[#0066cc]/30 selection:text-[#0066cc]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-8 sm:pt-12 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1780px] 2xl:max-w-[1920px] mx-auto flex flex-col justify-center">
        {/* Back Navigation Button */}
        <div className="mb-8">
          <button
            onClick={() => window.location.hash = ''}
            className="inline-flex items-center space-x-2.5 text-[15px] sm:text-[16px] font-black uppercase text-white bg-black border-2 border-white px-5 py-2.5 shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#0066cc] hover:text-white transition-all cursor-pointer font-mono-retro"
          >
            <ArrowLeft className="w-5 h-5 stroke-[3]" />
            <span>Back to Explorer</span>
          </button>
        </div>

        {/* Header Block - Wide & Professional */}
        <div className="w-full mb-12 border-l-6 border-[#2997ff] bg-black border-2 border-white p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#ffffff] font-mono-retro flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
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

        {/* 7 Moon Mission Cards Stacked - Expanded Height & Width */}
        <div className="flex flex-col items-center gap-10 lg:gap-12 w-full mx-auto font-mono-retro">
          {[
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
          ].map((card, idx) => (
            <div 
              key={idx}
              className="w-full md:h-[480px] lg:h-[510px] xl:h-[530px] bg-[#1a1a1e] border-3 border-white rounded-none overflow-hidden flex flex-col-reverse md:flex-row justify-between transition-all duration-200 group shadow-[10px_10px_0px_0px_#ffffff] hover:shadow-[14px_14px_0px_0px_#2997ff]"
            >
              {/* Left Column: Info & Button */}
              <div className="p-6 sm:p-8 md:p-9 lg:p-10 flex flex-col justify-between flex-grow md:w-[54%] lg:w-[52%] xl:w-[50%] h-full gap-3">
                <div className="space-y-1.5 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-black uppercase tracking-widest text-[#86868b]">
                      MISSION FILE [0{idx + 1}]
                    </span>
                  </div>
                  <h3 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-black uppercase text-white tracking-tight leading-[0.96]">
                    {card.name}
                  </h3>
                  <div>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-black text-[#2997ff] uppercase tracking-widest inline-block border-l-4 border-[#2997ff] pl-3 py-0.5">
                      {card.time}
                    </span>
                  </div>
                </div>

                {/* Mission Statement Quote Box - Expanded Height & Width */}
                <div className="w-full my-auto flex-1 flex items-center py-1">
                  <div className="w-full p-4 sm:p-5 lg:p-6 bg-black/60 border-2 border-white/20 border-l-6 border-l-[#2997ff] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)]">
                    <p className="text-white text-[19px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[27px] font-semibold leading-[1.4] sm:leading-[1.44] tracking-tight">
                      "{card.desc}"
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3.5 border-t border-white/15 shrink-0">
                  <button
                    onClick={() => window.location.hash = card.hash}
                    className="w-full sm:w-auto text-center py-3.5 px-8 sm:px-9 bg-[#0066cc] hover:bg-[#0071e3] text-[15px] sm:text-[16px] font-black uppercase border-2 border-white text-white shadow-[4px_4px_0px_0px_#ffffff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
                  >
                    Read My Story
                  </button>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2.5 self-start sm:self-auto px-4 py-2.5 bg-black border-2 border-white/70 rounded-none text-[14px] sm:text-[15px] font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#ffffff]">
                    {card.time.toLowerCase().includes("present") ? (
                      <>
                        <span className="w-3 h-3 bg-emerald-500 shrink-0 animate-pulse" />
                        <span>Still Active</span>
                      </>
                    ) : (
                      <>
                        <span className="w-3 h-3 bg-red-500 shrink-0" />
                        <span>Gone Silent</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="md:w-[46%] lg:w-[48%] xl:w-[50%] h-[300px] md:h-full relative overflow-hidden shrink-0 border-b-3 md:border-b-0 md:border-l-3 border-white bg-black flex items-center justify-center">
                <img 
                  src={card.img}
                  alt={card.name}
                  className={`w-full h-full ${card.fitImage ? 'object-contain p-6 bg-black' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 border border-white/40 text-[11px] font-bold uppercase tracking-wider text-white/90">
                  LUNAR LOG {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
