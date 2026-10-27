import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  BookOpen, 
  MessageSquare, 
  Volume2, 
  BarChart3, 
  Sparkles, 
  HelpCircle, 
  Camera, 
  Compass, 
  ExternalLink,
  Code2,
  PenTool,
  Palette,
  Search,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featureCards = [
    {
      num: "01",
      icon: <BookOpen className="w-5 h-5 text-[#2997ff]" />,
      title: "36 Mission Stories",
      desc: "Moon, Mars, and Deep Space, from Surveyor 1 to the James Webb Space Telescope."
    },
    {
      num: "02",
      icon: <MessageSquare className="w-5 h-5 text-[#2997ff]" />,
      title: "First-Person Chapters",
      desc: "Each machine tells why it was built, what went wrong, what it discovered, and what it left behind."
    },
    {
      num: "03",
      icon: <Volume2 className="w-5 h-5 text-[#2997ff]" />,
      title: "Listen to My Story",
      desc: "Prefer listening? Play the full story as audio.",
      sub: "(AI-generated voice)"
    },
    {
      num: "04",
      icon: <BarChart3 className="w-5 h-5 text-[#2997ff]" />,
      title: "Mission Stats",
      desc: "Launch date, destination, data returned, and current status."
    },
    {
      num: "05",
      icon: <Sparkles className="w-5 h-5 text-[#2997ff]" />,
      title: "Did You Know?",
      desc: "One surprising fact on every page."
    },
    {
      num: "06",
      icon: <HelpCircle className="w-5 h-5 text-[#2997ff]" />,
      title: "Quick Quiz",
      desc: "A trivia question with an explanation, so you can test what you learned."
    },
    {
      num: "07",
      icon: <Camera className="w-5 h-5 text-[#2997ff]" />,
      title: "Real NASA Images",
      desc: "A gallery of photos from each mission."
    },
    {
      num: "08",
      icon: <Compass className="w-5 h-5 text-[#2997ff]" />,
      title: "Keep Exploring",
      desc: "Previous and next buttons take you from one story to the next."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Choose a destination.",
      desc: "Moon, Mars, or Deep Space.",
      links: [
        { label: "Moon", href: "#/moon" },
        { label: "Mars", href: "#/mars" },
        { label: "Deep Space", href: "#/deep-space" }
      ]
    },
    {
      step: "02",
      title: "Open a mission.",
      desc: "Read the chapters or press play to listen."
    },
    {
      step: "03",
      title: "Test yourself.",
      desc: "Try the quiz, then jump to the next story."
    }
  ];

  const sources = [
    {
      name: "NASA Official Websites",
      urls: [
        { label: "nasa.gov", href: "https://www.nasa.gov" },
        { label: "science.nasa.gov", href: "https://science.nasa.gov" },
        { label: "mars.nasa.gov", href: "https://mars.nasa.gov" }
      ]
    },
    {
      name: "NASA Image and Video Library",
      urls: [
        { label: "images.nasa.gov", href: "https://images.nasa.gov" }
      ]
    },
    {
      name: "NASA Eyes on the Solar System",
      urls: [
        { label: "eyes.nasa.gov", href: "https://eyes.nasa.gov" }
      ]
    },
    {
      name: "Wikimedia Commons",
      urls: [
        { label: "public domain NASA imagery", href: "https://commons.wikimedia.org" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080c] text-white flex flex-col font-sans selection:bg-[#2997ff] selection:text-black relative">
      {/* Subtle Dot Grid Canvas Backdrop */}
      <div 
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:28px_28px] z-0" 
        aria-hidden="true" 
      />

      <Navbar />

      <main className="relative z-10 flex-1 w-full max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-16 space-y-16 md:space-y-24">

        {/* SECTION 1: HERO */}
        <section 
          id="hero" 
          className="relative border-4 border-white bg-black p-8 sm:p-12 md:p-16 lg:p-20 shadow-[10px_10px_0px_0px_#2997ff] overflow-hidden"
        >
          {/* Subtle Ambient Depth Lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2997ff]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Corner Technical Crosshairs */}
          <span className="absolute top-3 left-3 text-white/30 font-mono text-xs select-none">+</span>
          <span className="absolute top-3 right-3 text-white/30 font-mono text-xs select-none">+</span>
          <span className="absolute bottom-3 left-3 text-white/30 font-mono text-xs select-none">+</span>
          <span className="absolute bottom-3 right-3 text-white/30 font-mono text-xs select-none">+</span>

          <div className="relative z-10 max-w-4xl space-y-6 md:space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
              <span>[ ABOUT THE PROJECT ]</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08]">
              Solar System Graveyard... <br />
              <span className="text-[#2997ff] underline decoration-4 md:decoration-6 underline-offset-8">
                or Hall of Fame?
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 leading-snug max-w-3xl">
              Where NASA's retired machines tell their own stories.
            </p>

            {/* Byline */}
            <div className="pt-4 border-t-2 border-white/20 text-sm sm:text-base font-mono text-white/80">
              By Universe Breakers · NASA Space Apps Challenge 2026
            </div>
          </div>
        </section>

        {/* SECTION 2: THE BIG QUESTION */}
        <section 
          id="why-we-built-this" 
          className="relative border-4 border-white bg-[#0b0c12] p-8 sm:p-12 md:p-16 shadow-[10px_10px_0px_0px_#ffffff]"
        >
          {/* Corner Crosshairs */}
          <span className="absolute top-3 left-3 text-white/30 font-mono text-xs select-none">+</span>
          <span className="absolute top-3 right-3 text-white/30 font-mono text-xs select-none">+</span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Heading & Label */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
                <span>[ WHY WE BUILT THIS ]</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                Are they abandoned, or are they remembered?
              </h2>
            </div>

            {/* Right Column: Narrative Body + Challenge Box */}
            <div className="lg:col-span-7 space-y-8 lg:border-l-2 lg:border-white/20 lg:pl-10">
              <div className="space-y-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-sans">
                <p>
                  Since the 1960s, NASA has left spacecraft, rovers, and telescopes on
                  the Moon, on Mars, and in deep space. Some are still working. Many
                  have been silent for decades. Most people only ever see them as lists
                  of facts and dates.
                </p>
                <p>
                  We wanted to ask a different question: are these machines a
                  graveyard, or a hall of fame? So we gave each one a voice. Every page
                  on this site is told by the machine itself, in the first person.
                </p>
              </div>

              {/* Challenge Banner */}
              <div className="border-3 border-[#2997ff] bg-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#2997ff] space-y-2">
                <div className="text-xs font-mono font-bold text-[#2997ff] uppercase tracking-widest">
                  Challenge:
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                  Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT YOU'LL FIND HERE */}
        <section id="features" className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
              <span>[ FEATURES ]</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              Everything a story page gives you
            </h2>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((feat) => (
              <div 
                key={feat.title}
                className="group border-3 border-white bg-black p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_#2997ff] hover:shadow-[8px_8px_0px_0px_#ffffff] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/20 pb-3">
                    <span className="font-mono text-xs font-black text-white/50 group-hover:text-[#2997ff] transition-colors">
                      {feat.num}
                    </span>
                    <div className="p-2 bg-white/5 border border-white/20 group-hover:border-[#2997ff] transition-colors">
                      {feat.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-black uppercase text-white tracking-tight group-hover:text-[#2997ff] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>

                {feat.sub && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#2997ff] font-bold">
                    {feat.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: WHO IT'S FOR */}
        <section 
          id="audience" 
          className="relative border-4 border-white bg-black p-8 sm:p-12 md:p-16 shadow-[10px_10px_0px_0px_#2997ff] border-l-8 border-l-[#2997ff] space-y-6"
        >
          <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
            <span>[ AUDIENCE ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Made for high school students
          </h2>

          <p className="text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed font-sans max-w-4xl pt-2">
            Space science can feel heavy. We wrote every story in plain
            language, in short chapters, with a quiz at the end, so you can
            read a mission in a few minutes and remember it.
          </p>
        </section>

        {/* SECTION 5: HOW TO EXPLORE */}
        <section id="how-to-explore" className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
              <span>[ HOW IT WORKS ]</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              Three steps
            </h2>
          </div>

          {/* Connected Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((st) => (
              <div 
                key={st.step}
                className="relative border-4 border-white bg-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[8px_8px_0px_0px_#2997ff] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-4">
                    <span className="font-mono text-3xl font-black text-[#2997ff]">
                      {st.step}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                      PHASE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                    {st.title}
                  </h3>

                  <p className="text-base text-white/80 font-sans leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {st.links && (
                  <div className="mt-8 pt-4 border-t-2 border-white/20 flex flex-wrap gap-2.5">
                    {st.links.map((lnk) => (
                      <button
                        key={lnk.label}
                        onClick={() => { window.location.hash = lnk.href; }}
                        className="text-xs font-black uppercase bg-[#2997ff] text-black hover:bg-white px-3.5 py-2 border-2 border-white shadow-[3px_3px_0px_#ffffff] transition-all cursor-pointer"
                      >
                        {lnk.label} →
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: DATA SOURCES & CREDITS */}
        <section 
          id="sources" 
          className="border-4 border-white bg-black p-8 sm:p-12 md:p-16 shadow-[10px_10px_0px_0px_#2997ff] space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
              <span>[ SOURCES ]</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              Where the facts and images come from
            </h2>
          </div>

          <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
            Sources:
          </div>

          {/* Sources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sources.map((src) => (
              <div 
                key={src.name}
                className="border-2 border-white/40 hover:border-white bg-[#0b0d13] p-6 flex flex-col justify-between transition-colors shadow-[4px_4px_0px_0px_#ffffff15]"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2997ff] shrink-0" />
                    <h3 className="font-black text-white text-base sm:text-lg uppercase tracking-tight">
                      {src.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {src.urls.map((u) => (
                      <a 
                        key={u.label}
                        href={u.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#2997ff] bg-black px-3 py-1.5 border border-white/20 hover:border-[#2997ff] transition-all"
                      >
                        <span>{u.label}</span>
                        <ExternalLink className="w-3 h-3 text-[#2997ff]" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Public Domain Note */}
          <div className="p-5 border-2 border-white/30 bg-white/5 text-sm sm:text-base text-white/90 font-sans leading-relaxed">
            All space imagery used on this site is courtesy of NASA and is in the public domain, unless otherwise noted.
          </div>
        </section>

        {/* SECTION 7: USE OF AI (TRANSPARENCY) */}
        <section 
          id="transparency" 
          className="border-4 border-white bg-black p-8 sm:p-12 md:p-16 shadow-[10px_10px_0px_0px_#ffffff] space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
              <span>[ TRANSPARENCY ]</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              How we used AI
            </h2>
          </div>

          <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
            Details:
          </div>

          {/* Dual Panel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-3 border-[#2997ff] bg-[#0c1018] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#2997ff] space-y-3">
              <strong className="text-lg sm:text-xl font-black uppercase text-white block tracking-tight">
                Story writing:
              </strong>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans">
                We wrote the stories ourselves to give each machine a unique personality. We used Claude to help check facts and tighten the writing.
              </p>
            </div>

            <div className="border-3 border-white bg-[#0c1018] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#ffffff] space-y-3">
              <strong className="text-lg sm:text-xl font-black uppercase text-white block tracking-tight">
                Audio narration:
              </strong>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans">
                Mission audio is generated using ElevenLabs AI voice technology so you can listen along.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: DISCLAIMER */}
        <section 
          id="disclaimer" 
          className="border-2 border-white/60 bg-black p-6 sm:p-8 space-y-3 shadow-[4px_4px_0px_0px_#ffffff30]"
        >
          <div className="inline-block border border-white/50 bg-white/5 px-3 py-1 text-xs font-mono font-bold text-white/80 tracking-widest uppercase">
            [ DISCLAIMER ]
          </div>

          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed max-w-4xl">
            This website was created as a participant in the NASA Space Apps
            Challenge 2026. It is an independent educational project and is not
            affiliated with, sponsored by, or endorsed by NASA or the United
            States Government.
          </p>
        </section>

        {/* SECTION 9: THE TEAM */}
        <section 
          id="team" 
          className="border-4 border-white bg-black p-8 sm:p-12 md:p-16 shadow-[10px_10px_0px_0px_#2997ff] space-y-10"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
              <span>[ TEAM ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              Universe Breakers
            </h2>

            <p className="text-base sm:text-xl md:text-2xl text-white/90 font-medium max-w-3xl">
              We are a team from Bangladesh who love space, design, and storytelling.
            </p>
          </div>

          {/* Member Card with High-End Layout */}
          <div className="border-3 border-white bg-[#0b0d13] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#ffffff] max-w-3xl space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#2997ff] font-bold uppercase tracking-widest block">
                Member:
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Tasnimul Hasan Zihan
              </h3>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-2.5">
                Role:
              </span>
              <div className="flex flex-wrap gap-2.5 text-xs sm:text-sm font-mono font-bold">
                <span className="inline-flex items-center gap-2 bg-black border-2 border-white px-3.5 py-1.5 text-white shadow-[2px_2px_0px_#2997ff]">
                  <Code2 className="w-4 h-4 text-[#2997ff]" />
                  Developer
                </span>
                <span className="inline-flex items-center gap-2 bg-black border-2 border-white px-3.5 py-1.5 text-white shadow-[2px_2px_0px_#2997ff]">
                  <PenTool className="w-4 h-4 text-[#2997ff]" />
                  Story Writer
                </span>
                <span className="inline-flex items-center gap-2 bg-black border-2 border-white px-3.5 py-1.5 text-white shadow-[2px_2px_0px_#2997ff]">
                  <Palette className="w-4 h-4 text-[#2997ff]" />
                  Designer
                </span>
                <span className="inline-flex items-center gap-2 bg-black border-2 border-white px-3.5 py-1.5 text-white shadow-[2px_2px_0px_#2997ff]">
                  <Search className="w-4 h-4 text-[#2997ff]" />
                  Researcher
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
