import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { PolaroidLineCarousel, Slide } from '../components/ui/polaroid-line-carousel';

export const DeepSpacePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deepSpaceMissions = [
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
  ];

  const deepSpaceSlides: Slide[] = deepSpaceMissions.map((card, idx) => ({
    title: card.name,
    caption: card.desc,
    image: card.img,
    tag: `DEEP SPACE LOG [0${idx < 9 ? `0${idx + 1}` : idx + 1}]`,
    time: card.time,
    hash: card.hash,
    status: card.time.toLowerCase().includes("present") ? "Still Active" : "Gone Silent",
    palette: "deepspace",
    seed: idx * 29 + 17,
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
              onClick={() => window.location.hash = ''}
              className="inline-flex items-center space-x-2.5 text-[15px] sm:text-[16px] font-black uppercase text-white bg-black border-2 border-white px-5 py-2.5 shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#2997ff] hover:text-black transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[3]" />
              <span>Back to Explorer</span>
            </button>
          </div>

          {/* Header Block - Wide & Professional */}
          <div className="w-full border-l-6 border-[#2997ff] bg-black border-2 border-white p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#ffffff] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
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
        </div>

        {/* POLAROID LINE CAROUSEL (Full Width Screen Stage, No Border, Increased Height) */}
        <div className="w-full flex-1 relative overflow-hidden bg-gradient-to-b from-black/80 via-[#09090c] to-black py-4">
          {/* Top Bar Label */}
          <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 mb-2 gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#2997ff] shadow-[0_0_8px_#2997ff]" />
              <h2 className="text-[18px] sm:text-[22px] font-black uppercase text-white tracking-wide">
                COSMIC EXPEDITION POLAROIDS // WIRELINE ARCHIVE
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
            slides={deepSpaceSlides}
            height="780px"
            cardWidth={440}
            sag={55}
            swing={1.05}
            autoplay={0}
            string="#2997ff"
            accentColor="#2997ff"
            background="transparent"
            ariaLabel="Deep Space Probe Mission Polaroid Prints"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DeepSpacePage;
