import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const DeepSpacePage: React.FC = () => {
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
            className="inline-flex items-center space-x-2.5 text-[15px] sm:text-[16px] font-black uppercase text-white bg-black border-2 border-white px-5 py-2.5 shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#2997ff] hover:text-black transition-all cursor-pointer font-mono-retro"
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
                DEEP SPACE ARCHIVE // CATALOG 03
              </span>
            </div>
            <h1 className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] font-black tracking-tighter text-white uppercase leading-none">
              Deep Space
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-white">
            <span className="px-3.5 py-1.5 bg-zinc-900 border border-white/40 shadow-[2px_2px_0px_0px_#2997ff]">
              12 DEEP SPACE PROBES & OBSERVATORIES
            </span>
            <span className="px-3.5 py-1.5 bg-zinc-900 border border-white/40 shadow-[2px_2px_0px_0px_#2997ff]">
              1960 - PRESENT
            </span>
            <span className="px-3.5 py-1.5 bg-[#0066cc]/30 border border-[#2997ff] text-[#2997ff]">
              INTERPLANETARY & COSMIC VOYAGES
            </span>
          </div>
        </div>

        {/* 13 Deep Space Mission Cards Stacked - Expanded Height & Width */}
        <div className="flex flex-col items-center gap-10 lg:gap-12 w-full mx-auto font-mono-retro">
          {[
            {
              name: "TIROS-1",
              time: "1960",
              desc: "I was the first instrument to capture images of Earth’s clouds from space — before me, no one knew it was possible to see storms coming from above.",
              img: "https://www.sri.com/wp-content/uploads/2021/11/TIROS-1-weather-satellite.jpg",
              hash: "#/deep-space/tiros1"
            },
            {
              name: "Mariner Program",
              time: "1962–1973",
              desc: "We are 10 siblings who flew past Venus, Mars, and Mercury one after another — we were the first to show humanity what other planets looked like up close.",
              img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Mariner_5.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
              hash: "#/deep-space/marinerprogram"
            },
            {
              name: "Pioneer 10 & 11",
              time: "1972–1997",
              desc: "We were the first to cross the asteroid belt and capture images of Jupiter and Saturn. And attached to us is a golden plaque — if extraterrestrial life ever finds us, they will know where we came from.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHt2aJCzmgrBsEacizamxXaFUv29hfV17WqLQXs8g7g&s=10",
              hash: "#/deep-space/pioneer10and11"
            },
            {
              name: "Voyager 1 & 2",
              time: "1977–Present",
              desc: "We are still flying, the farthest human-made objects ever to travel through the Solar System. With us is a golden record containing Earth’s music, languages, and sounds, in case someone ever finds us.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUx20_mnEqD9w4LEkGQVL21Aa2sf6hZhOXBFahOICkzQ&s=10",
              hash: "#/deep-space/voyager1and2"
            },
            {
              name: "Hubble Space Telescope",
              time: "1990–Present",
              desc: "I have captured images of galaxies in space whose light has traveled for billions of years — as if I were looking back through time.",
              img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Hubble_2009_close-up_2.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
              hash: "#/deep-space/hubbletelescope"
            },
            {
              name: "Chandra X-ray Observatory",
              time: "1999–Present",
              desc: "I see what the human eye cannot — the fiery regions around black holes, the remnants of dead stars exploding. The invisible universe is an open book to me.",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/missions/Chandra20years.webp?w=1536",
              hash: "#/deep-space/chandraobservatory"
            },
            {
              name: "New Horizons",
              time: "2006–Present",
              desc: "I flew for nine years just to capture the first close-up images of Pluto — and those images revealed a massive heart-shaped icy feature!",
              img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/15-011a-NewHorizons-PlutoFlyby-ArtistConcept-14July2015-20150115.jpg/960px-15-011a-NewHorizons-PlutoFlyby-ArtistConcept-14July2015-20150115.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
              hash: "#/deep-space/newhorizons"
            },
            {
              name: "Kepler Space Telescope",
              time: "2009–2018",
              desc: "I have stared at millions of stars, watching for just one thing — when a star’s light dims slightly. That’s how I discovered thousands of new planets beyond our Solar System!",
              img: "https://images-assets.nasa.gov/image/PIA18904/PIA18904~large.jpg?w=1920&h=1536&fit=clip&crop=faces%2Cfocalpoint",
              hash: "#/deep-space/keplertelescope"
            },
            {
              name: "Juno",
              time: "2011–2025",
              desc: "I fly over Jupiter’s poles, and below me, I see massive storms — including one larger than Earth that has been raging for hundreds of years!",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2024/03/pia21770large.jpg?w=1920&h=1280&fit=crop&crop=faces%2Cfocalpoint",
              hash: "#/deep-space/juno"
            },
            {
              name: "MESSENGER",
              time: "2011–2015",
              desc: "I was the first spacecraft to orbit Mercury — a planet where one side reaches 400°C, while ice hides inside dark craters!",
              img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/MESSENGER_-_spacecraft_at_mercury_-_atmercury_lg.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
              hash: "#/deep-space/messenger"
            },
            {
              name: "OSIRIS-REx / OSIRIS-APEX",
              time: "2016–Present",
              desc: "I touched an asteroid, collected its rocks, and brought them back to Earth — and now I’m heading toward another asteroid that may one day pass close to Earth.",
              img: "https://science.nasa.gov/wp-content/uploads/2023/10/230924-osiris-apex-0001.jpg",
              hash: "#/deep-space/osirisrexapex"
            },
            {
              name: "James Webb Space Telescope",
              time: "2021–Present",
              desc: "I can see light from so far away that it comes from the early universe, from the time when the first galaxies were being born — I am almost looking back to the beginning of time.",
              img: "https://science.nasa.gov/wp-content/uploads/2024/05/jwst_artist_concept_0.png",
              hash: "#/deep-space/jameswebbtelescope"
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
                      PROBE FILE [0{idx < 9 ? `0${idx + 1}` : idx + 1}]
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 border border-white/40 text-[11px] font-bold uppercase tracking-wider text-white/90">
                  DEEP SPACE PROBE {idx + 1}
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
