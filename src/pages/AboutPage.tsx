import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { 
  BookOpen, 
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
  ArrowRight,
  Play,
  CheckCircle2,
  Rocket,
  Satellite,
  Radio,
  ChevronRight,
  ShieldAlert,
  Globe2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  // Simple state for count-up or interactive preview
  const [activeStep, setActiveStep] = useState(0);

  const sourcesList = [
    { label: "nasa.gov", href: "https://www.nasa.gov", desc: "NASA Official Portal" },
    { label: "science.nasa.gov", href: "https://science.nasa.gov", desc: "NASA Science Mission Directorate" },
    { label: "mars.nasa.gov", href: "https://mars.nasa.gov", desc: "Mars Exploration Program" },
    { label: "images.nasa.gov", href: "https://images.nasa.gov", desc: "Image and Video Library" },
    { label: "eyes.nasa.gov", href: "https://eyes.nasa.gov", desc: "Eyes on the Solar System" },
  ];

  return (
    <div className="min-h-screen bg-[#07080c] text-white flex flex-col font-sans selection:bg-[#2997ff] selection:text-black relative overflow-x-clip">
      {/* Subtle Dot Grid Canvas Backdrop */}
      <div 
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:28px_28px] z-0" 
        aria-hidden="true" 
      />

      <Navbar />

      <main className="relative z-10 flex-1 w-full flex flex-col space-y-20 sm:space-y-28 md:space-y-36 pb-24">

        {/* =====================================================
            SECTION 1: HERO (Full Viewport feel ~80vh)
            ===================================================== */}
        <section 
          id="hero"
          className="relative min-h-[78vh] sm:min-h-[82vh] flex items-center justify-center overflow-hidden border-b-4 border-white/20 px-4 sm:px-8 md:px-12 pt-16 pb-20"
        >
          {/* Real NASA Imagery Background with rich dimmed gradient */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop"
              alt="NASA Earth and Space Backdrop" 
              className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
              loading="eager"
            />
            {/* Ambient Lighting & Scanlines Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#07080c]/60 via-[#07080c]/85 to-[#07080c]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0066cc]/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1240px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading, Subtitle & Byline */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <ScrollReveal direction="up" distance="25px" duration={600}>
                <div className="inline-flex items-center gap-2.5 border-2 border-[#2997ff] bg-black/80 px-4 py-1.5 shadow-[3px_3px_0px_#2997ff]">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#2997ff] tracking-widest uppercase">
                    [ ABOUT THE PROJECT ]
                  </span>
                </div>
              </ScrollReveal>

              {/* Three-Line Brand Title with Color Rhythm */}
              <ScrollReveal direction="up" distance="30px" delay={80} duration={700}>
                <h1 className="text-[38px] min-[440px]:text-[48px] sm:text-[62px] md:text-[76px] lg:text-[84px] font-black uppercase tracking-tighter text-white leading-[0.96]">
                  SOLAR SYSTEM <br />
                  <span className="text-[#2997ff]">GRAVEYARD...</span> <br />
                  <span className="inline-block mt-2 bg-[#0066cc] text-white border-3 border-white px-3 sm:px-5 py-0.5 sm:py-1 shadow-[5px_5px_0px_0px_#ffffff]">
                    OR HALL OF FAME?
                  </span>
                </h1>
              </ScrollReveal>

              {/* Subheading */}
              <ScrollReveal direction="up" distance="25px" delay={160} duration={700}>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 leading-snug max-w-2xl pt-2">
                  Where NASA's retired machines tell their own stories.
                </p>
              </ScrollReveal>

              {/* Byline Row in Mono */}
              <ScrollReveal direction="up" distance="20px" delay={240} duration={600}>
                <div className="pt-4 border-t-2 border-white/20 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-white/80">
                  <span className="font-black text-white uppercase tracking-wider">
                    UNIVERSE BREAKERS
                  </span>
                  <span className="text-[#2997ff]">//</span>
                  <span className="tracking-wide">NASA SPACE APPS CHALLENGE 2026</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column (Desktop Only): Floating Mission Control Telemetry Card */}
            <div className="hidden lg:block lg:col-span-4">
              <ScrollReveal direction="left" distance="35px" delay={300} duration={800}>
                <div className="border-3 border-white bg-black/90 backdrop-blur-md p-6 sm:p-7 shadow-[8px_8px_0px_0px_#2997ff] space-y-5 font-mono text-xs">
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-3">
                    <span className="text-[#2997ff] font-black tracking-widest uppercase flex items-center gap-2">
                      <Radio className="w-4 h-4 text-[#2997ff] animate-pulse" />
                      MISSION TELEMETRY
                    </span>
                  </div>

                  <div className="space-y-4 text-white">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="text-white/60 uppercase">CATALOGED MISSIONS</span>
                      <strong className="text-base text-[#2997ff] font-black">36 STORIES</strong>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-white/60 uppercase">EXPLORATION REALMS</span>
                      <strong className="text-base text-white font-black">3 REGIONS</strong>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0c1018] border border-[#2997ff]/40 text-[11px] text-white/80 leading-relaxed">
                    Declassified equipment records preserved from the Moon, Mars, and the Deep Space cosmic void.
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 2: THE BIG QUESTION (Full-Bleed, Centered)
            ===================================================== */}
        <section id="the-question" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="space-y-12 md:space-y-16">
            {/* Break the Box Pattern: Giant Centered Pull Quote */}
            <ScrollReveal direction="up" distance="30px">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
                  <span>[ WHY WE BUILT THIS ]</span>
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
                  "Abandoned, or remembered?"
                </h2>
              </div>
            </ScrollReveal>

            {/* Two-Column Story + Challenge Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Left Column: Story Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal direction="up" distance="25px" delay={80}>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-normal">
                    Since the 1960s, NASA has left spacecraft, rovers, and telescopes on the Moon, on Mars, and in deep space. Some are still working. Many have been silent for decades. Most people only ever see them as cold lists of facts and dates.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" distance="25px" delay={140}>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed border-l-4 border-[#2997ff] pl-5">
                    We wanted to ask a different question: are these machines a graveyard, or a hall of fame? So we gave each one a voice. Every page on this site is told by the machine itself, in the first person.
                  </p>
                </ScrollReveal>
              </div>

              {/* Right Column: Bordered Challenge Card */}
              <div className="lg:col-span-5">
                <ScrollReveal direction="left" distance="30px" delay={180}>
                  <div className="border-3 border-[#2997ff] bg-[#0c1018] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#2997ff] space-y-4">
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <span className="text-xs font-mono font-bold text-[#2997ff] uppercase tracking-widest">
                        // THE CHALLENGE
                      </span>
                      <span className="text-[11px] font-mono text-white/50">NASA SPACE APPS</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-snug">
                      Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 font-mono leading-relaxed pt-2">
                      An educational interactive repository connecting high school students and curious minds to the human stories of cosmic exploration.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Visual Divider with Spacecraft Icon */}
            <div className="relative flex items-center justify-center pt-6">
              <div className="w-full border-t border-white/20" />
              <div className="absolute px-4 bg-[#07080c] border border-white/30 text-[#2997ff] flex items-center gap-2 py-1 font-mono text-xs shadow-[2px_2px_0px_#2997ff]">
                <Satellite className="w-4 h-4 text-[#2997ff]" />
                <span className="tracking-widest uppercase">TRANSMISSION ACTIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 3: NUMBERS STRIP (Full-Width Proof of Scale)
            ===================================================== */}
        <section id="numbers-strip" className="w-full bg-[#0d0f17] border-y-3 border-white py-12 md:py-16">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {/* Stat 1 */}
              <ScrollReveal direction="up" distance="25px" delay={0}>
                <div className="border-l-3 border-[#2997ff] pl-4 sm:pl-6 space-y-2">
                  <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#2997ff] tracking-tighter font-mono">
                    36
                  </div>
                  <div className="text-sm sm:text-base font-black uppercase text-white tracking-wide">
                    MISSION STORIES
                  </div>
                  <div className="text-xs font-mono text-white/60">
                    Moon, Mars, & Deep Space
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 2 */}
              <ScrollReveal direction="up" distance="25px" delay={80}>
                <div className="border-l-3 border-white pl-4 sm:pl-6 space-y-2">
                  <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter font-mono">
                    3
                  </div>
                  <div className="text-sm sm:text-base font-black uppercase text-white tracking-wide">
                    EXPLORATION REALMS
                  </div>
                  <div className="text-xs font-mono text-white/60">
                    Planetary & cosmic archives
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 3 */}
              <ScrollReveal direction="up" distance="25px" delay={160}>
                <div className="border-l-3 border-[#2997ff] pl-4 sm:pl-6 space-y-2">
                  <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#2997ff] tracking-tighter font-mono">
                    60+
                  </div>
                  <div className="text-sm sm:text-base font-black uppercase text-white tracking-wide">
                    YEARS OF MISSIONS
                  </div>
                  <div className="text-xs font-mono text-white/60">
                    1960 to Present day
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 4 */}
              <ScrollReveal direction="up" distance="25px" delay={240}>
                <div className="border-l-3 border-white pl-4 sm:pl-6 space-y-2">
                  <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter font-mono">
                    1
                  </div>
                  <div className="text-sm sm:text-base font-black uppercase text-white tracking-wide">
                    CENTRAL QUESTION
                  </div>
                  <div className="text-xs font-mono text-white/60">
                    Graveyard or Hall of Fame?
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 4: WHAT YOU'LL FIND (Bento Grid Architecture)
            ===================================================== */}
        <section id="features" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 space-y-10 md:space-y-12">
          <div className="space-y-4">
            <ScrollReveal direction="up" distance="20px">
              <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
                <span>[ FEATURES ]</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance="25px" delay={60}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                Everything a story page gives you
              </h2>
            </ScrollReveal>
          </div>

          {/* 12-Column Varied Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* TILE 1: LISTEN TO MY STORY (Hero Feature - 7 cols) */}
            <div className="md:col-span-12 lg:col-span-7">
              <ScrollReveal direction="up" distance="30px" delay={50} className="h-full">
                <div className="h-full border-3 border-white bg-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#2997ff] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <div className="flex items-center gap-2.5">
                        <Volume2 className="w-6 h-6 text-[#2997ff]" />
                        <span className="text-xs font-mono font-bold text-[#2997ff] tracking-wider uppercase">
                          HERO FEATURE
                        </span>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 bg-[#0066cc]/30 border border-[#2997ff] text-[#2997ff] uppercase">
                        AI-GENERATED VOICE
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      Listen to My Story
                    </h3>

                    <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                      Prefer listening? Every single machine speaks its own tale. Play full dramatized audio narration voiced in the first person.
                    </p>
                  </div>

                  {/* Interactive Audio Waveform Mock Preview */}
                  <div className="border-2 border-white/40 bg-[#0d0f17] p-4 sm:p-5 shadow-[4px_4px_0px_#ffffff20] space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-white/60">
                      <span className="flex items-center gap-2">
                        VOICE SYNTHESIS // AUDIO LOG
                      </span>
                      <span>01:42 / 03:56</span>
                    </div>

                    {/* Waveform Bars Preview */}
                    <div className="flex items-center gap-1.5 h-12 py-2 overflow-hidden">
                      <div className="p-2 bg-[#0066cc] border border-white text-white mr-3 shrink-0 cursor-default">
                        <Play className="w-4 h-4 fill-white" />
                      </div>
                      {[40, 65, 80, 45, 90, 70, 30, 85, 100, 60, 45, 75, 95, 55, 35, 70, 85, 90, 60, 40, 75, 50, 65, 80, 45, 90].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-[#2997ff] transition-all duration-300"
                          style={{ height: `${h}%`, opacity: i < 14 ? 1 : 0.35 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* TILE 2: FIRST-PERSON CHAPTERS (Medium - 5 cols) */}
            <div className="md:col-span-12 lg:col-span-5">
              <ScrollReveal direction="up" distance="30px" delay={100} className="h-full">
                <div className="h-full border-3 border-white bg-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#ffffff] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <div className="flex items-center gap-2.5">
                        <BookOpen className="w-5 h-5 text-white" />
                        <span className="text-xs font-mono font-bold text-white/70 tracking-wider uppercase">
                          STORY CHAPTERS
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-white/40">4 CHAPTERS EACH</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                      First-Person Chapters
                    </h3>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                      Each machine explains why it was built, what went wrong, what it discovered, and what it left behind.
                    </p>
                  </div>

                  {/* Real Story Excerpt Preview */}
                  <div className="border-l-3 border-[#2997ff] bg-[#0c1018] p-4 text-xs sm:text-sm text-white/90 italic font-mono leading-relaxed">
                    "I was built with one urgent purpose in mind — to answer a terrifying question before any astronaut ever stepped onto the Moon: 'Will a spacecraft sink like a stone or land safely?'"
                    <span className="block not-italic text-[11px] text-[#2997ff] mt-2 font-black uppercase tracking-wider">
                      — Surveyor 1 // Chapter 1
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* TILE 3: 36 MISSION STORIES (4 cols) */}
            <div className="md:col-span-6 lg:col-span-4">
              <ScrollReveal direction="up" distance="25px" delay={120} className="h-full">
                <div className="h-full border-2 border-white/60 bg-[#0b0c12] p-6 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_#2997ff]">
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[#2997ff] font-bold block uppercase tracking-wider">
                      // COMPLETE CATALOG
                    </span>
                    <h4 className="text-lg font-black uppercase text-white tracking-tight">
                      36 Mission Stories
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      Moon, Mars, and Deep Space archives, from Surveyor 1 to the James Webb Space Telescope.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 text-[10px] font-mono font-bold">
                    <span className="px-2 py-1 bg-black border border-[#2997ff] text-[#2997ff]">MOON (7)</span>
                    <span className="px-2 py-1 bg-black border border-[#ff6b4a] text-[#ff6b4a]">MARS (17)</span>
                    <span className="px-2 py-1 bg-black border border-emerald-400 text-emerald-400">DEEP SPACE (12)</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* TILE 4: MISSION STATS (4 cols) */}
            <div className="md:col-span-6 lg:col-span-4">
              <ScrollReveal direction="up" distance="25px" delay={150} className="h-full">
                <div className="h-full border-2 border-white/60 bg-[#0b0c12] p-6 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_#ffffff]">
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-white/60 font-bold block uppercase tracking-wider">
                      // TELEMETRY HUD
                    </span>
                    <h4 className="text-lg font-black uppercase text-white tracking-tight">
                      Mission Stats
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      Launch date, destination, data returned, and current hardware status at a glance.
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/10 text-[11px] font-mono">
                    <div className="flex justify-between text-white/70">
                      <span>&gt; LAUNCH:</span>
                      <span className="text-white font-bold">MAY 30, 1966</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>&gt; DATA RETURNED:</span>
                      <span className="text-[#2997ff] font-bold">11,237 PHOTOS</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* TILE 5: DID YOU KNOW? (4 cols) */}
            <div className="md:col-span-12 lg:col-span-4">
              <ScrollReveal direction="up" distance="25px" delay={180} className="h-full">
                <div className="h-full border-2 border-amber-400/80 bg-[#0b0c12] p-6 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_#f59e0b]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-amber-400">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        SURPRISING FACTS
                      </span>
                    </div>
                    <h4 className="text-lg font-black uppercase text-white tracking-tight">
                      Did You Know?
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      One declassified, astonishing historical fact featured on every mission page.
                    </p>
                  </div>

                  <div className="p-3 bg-black border border-amber-400/40 text-[11px] text-amber-200/90 italic font-mono">
                    "Before Surveyor landed, scientists feared miles of dust quicksand would swallow it whole!"
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* TILE 6: QUICK QUIZ (4 cols) */}
            <div className="md:col-span-6 lg:col-span-4">
              <ScrollReveal direction="up" distance="25px" delay={200} className="h-full">
                <div className="h-full border-2 border-white/60 bg-[#0b0c12] p-6 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_#2997ff]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#2997ff]">
                      <HelpCircle className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        TEST RETENTION
                      </span>
                    </div>
                    <h4 className="text-lg font-black uppercase text-white tracking-tight">
                      Quick Quiz
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      A trivia question with full explanation so students can test what they just learned.
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs font-mono">
                    <div className="p-2 bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-between">
                      <span>[A] Verified solid soil</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* TILE 7: REAL NASA IMAGES (4 cols) */}
            <div className="md:col-span-6 lg:col-span-4">
              <ScrollReveal direction="up" distance="25px" delay={220} className="h-full">
                <div className="h-full border-2 border-white/60 bg-[#0b0c12] p-6 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_#ffffff]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white/70">
                      <Camera className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        ORIGINAL PHOTOS
                      </span>
                    </div>
                    <h4 className="text-lg font-black uppercase text-white tracking-tight">
                      Real NASA Images
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      High-resolution galleries of authentic footage returned by the actual spacecraft.
                    </p>
                  </div>

                  {/* 3-Image Miniature Collage */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                    <img 
                      src="https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_2_model.jpg" 
                      alt="Surveyor 1" 
                      className="w-full h-12 object-cover border border-white/30"
                      loading="lazy"
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Sojourner_on_Mars_PIA01122.jpg" 
                      alt="Sojourner" 
                      className="w-full h-12 object-cover border border-white/30"
                      loading="lazy"
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Hubble_2009_close-up_2.jpg" 
                      alt="Hubble" 
                      className="w-full h-12 object-cover border border-white/30"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* TILE 8: KEEP EXPLORING (4 cols) */}
            <div className="md:col-span-12 lg:col-span-4">
              <ScrollReveal direction="up" distance="25px" delay={240} className="h-full">
                <div className="h-full border-2 border-white/60 bg-[#0b0c12] p-6 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_#2997ff]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#2997ff]">
                      <Compass className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        VOYAGE FLOW
                      </span>
                    </div>
                    <h4 className="text-lg font-black uppercase text-white tracking-tight">
                      Keep Exploring
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      Previous and next buttons take you chronologically from one machine's story to the next.
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10 text-[11px] font-mono font-black">
                    <span className="px-2 py-1 bg-black border border-white/40 text-white/80">&lt; PREV STORY</span>
                    <span className="px-2 py-1 bg-[#0066cc] border border-white text-white">NEXT STORY &gt;</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* =====================================================
            SECTION 5: WHO IT'S FOR (Split Layout with App Frame)
            ===================================================== */}
        <section id="audience" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left Column: Heading, Copy, and Chips */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="up" distance="20px">
                <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
                  <span>[ AUDIENCE ]</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" distance="30px" delay={60}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                  Made for high school students
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" distance="25px" delay={120}>
                <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal">
                  Space science can feel heavy and disconnected. We wrote every mission narrative in plain language, structured in short accessible chapters, with interactive quizzes at the end — so anyone can read a story in five minutes and truly remember it.
                </p>
              </ScrollReveal>

              {/* Three Characteristic Chips */}
              <ScrollReveal direction="up" distance="20px" delay={180}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-3.5 py-1.5 bg-black border-2 border-white text-xs font-mono font-bold text-white shadow-[2px_2px_0px_#2997ff]">
                    [ PLAIN LANGUAGE ]
                  </span>
                  <span className="px-3.5 py-1.5 bg-black border-2 border-white text-xs font-mono font-bold text-white shadow-[2px_2px_0px_#2997ff]">
                    [ SHORT CHAPTERS ]
                  </span>
                  <span className="px-3.5 py-1.5 bg-black border-2 border-white text-xs font-mono font-bold text-white shadow-[2px_2px_0px_#2997ff]">
                    [ QUIZ AT THE END ]
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Mission Page Mockup Frame tilted 2 degrees with offset shadow */}
            <div className="lg:col-span-6 flex justify-center">
              <ScrollReveal direction="left" distance="30px" delay={150}>
                <div className="w-full max-w-[500px] transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="border-3 border-white bg-[#10121a] shadow-[10px_10px_0px_0px_#2997ff] overflow-hidden">
                    {/* Browser Frame Header */}
                    <div className="bg-[#191b24] border-b-2 border-white px-4 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                      </div>
                      <span className="font-mono text-[11px] text-white/60 bg-black/50 px-3 py-0.5 border border-white/20">
                        solar-graveyard.space/#/mars/curiosity
                      </span>
                    </div>

                    {/* Mock Page Content Inside Frame */}
                    <div className="p-5 space-y-4 font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-400 px-2 py-0.5 font-bold">
                          ● STATUS: ACTIVE ON MARS
                        </span>
                        <span className="text-[10px] text-white/50">GALE CRATER</span>
                      </div>

                      <div className="text-xl font-black text-white uppercase tracking-tight">
                        CURIOSITY ROVER
                      </div>

                      <div className="aspect-[16/9] bg-black border border-white/40 overflow-hidden relative">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg" 
                          alt="Curiosity on Mars" 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/80 text-[10px] text-white px-2 py-0.5 border border-white/40">
                          LOG: 3,000+ SOLS COMPLETED
                        </div>
                      </div>

                      <div className="p-3 bg-black border border-white/20 text-[11px] text-white/80 leading-relaxed italic">
                        "I am a chemist on wheels, drilling into alien rock to find if Mars ever supported life..."
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 6: HOW TO EXPLORE (Connected Timeline)
            ===================================================== */}
        <section id="how-to-explore" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 space-y-10">
          <div className="space-y-4">
            <ScrollReveal direction="up" distance="20px">
              <div className="inline-flex items-center gap-2 border-2 border-[#2997ff] bg-[#2997ff]/10 px-4 py-1 text-xs font-mono font-bold text-[#2997ff] tracking-widest uppercase">
                <span>[ HOW IT WORKS ]</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance="25px" delay={60}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                Three steps
              </h2>
            </ScrollReveal>
          </div>

          {/* 3-Step Horizontal Timeline with dashed line and working links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Step 1 */}
            <ScrollReveal direction="up" distance="30px" delay={80} className="h-full">
              <div className="h-full border-3 border-white bg-black p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_#ffffff] space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-4">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-[#2997ff]">
                      01
                    </span>
                    <Rocket className="w-6 h-6 text-[#2997ff]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                    Choose a destination.
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Moon, Mars, or Deep Space. Select your realm of interest from our three interactive catalogues.
                  </p>
                </div>

                {/* Real Working Destination Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  <button 
                    onClick={() => { window.location.hash = "#/moon"; }}
                    className="text-xs font-mono font-black uppercase bg-[#2997ff] text-black hover:bg-white px-3 py-1.5 border border-white transition-all cursor-pointer shadow-[2px_2px_0px_#ffffff]"
                  >
                    Moon →
                  </button>
                  <button 
                    onClick={() => { window.location.hash = "#/mars"; }}
                    className="text-xs font-mono font-black uppercase bg-[#ff6b4a] text-black hover:bg-white px-3 py-1.5 border border-white transition-all cursor-pointer shadow-[2px_2px_0px_#ffffff]"
                  >
                    Mars →
                  </button>
                  <button 
                    onClick={() => { window.location.hash = "#/deep-space"; }}
                    className="text-xs font-mono font-black uppercase bg-emerald-400 text-black hover:bg-white px-3 py-1.5 border border-white transition-all cursor-pointer shadow-[2px_2px_0px_#ffffff]"
                  >
                    Deep Space →
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal direction="up" distance="30px" delay={160} className="h-full">
              <div className="h-full border-3 border-white bg-black p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_#2997ff] space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-4">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-white">
                      02
                    </span>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                    Open a mission.
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Read the first-person story chapters or press play to listen to the narration as voiced by the machine.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#2997ff] font-bold">
                  // READ OR LISTEN ANYWHERE
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal direction="up" distance="30px" delay={240} className="h-full">
              <div className="h-full border-3 border-white bg-black p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_#ffffff] space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-4">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-[#2997ff]">
                      03
                    </span>
                    <HelpCircle className="w-6 h-6 text-[#2997ff]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                    Test yourself.
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Try the quiz at the end of the chapter, then jump straight to the next historic mission transmission.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-emerald-400 font-bold">
                  // EARN KNOWLEDGE // MOVE FORWARD
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =====================================================
            SECTION 7: DATA SOURCES & CREDITS
            ===================================================== */}
        <section id="sources" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
          <ScrollReveal direction="up" distance="30px">
            <div className="border-3 border-white bg-[#0b0d13] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#2997ff] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-white/20 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#2997ff] font-bold uppercase tracking-widest block">
                    // DATA SOURCES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    Where the facts and images come from
                  </h3>
                </div>
                <span className="text-xs font-mono text-white/60 uppercase">PUBLIC ARCHIVES</span>
              </div>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                All facts and images come from publicly available NASA material. The story text is our own writing, based on those sources.
              </p>

              {/* Source Chips in a Wrapping Row */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
                  NASA Sources:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {sourcesList.map((src) => (
                    <a
                      key={src.label}
                      href={src.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black border-2 border-white/50 hover:border-[#2997ff] text-white px-3.5 py-1.5 text-xs sm:text-sm font-mono transition-all hover:bg-[#2997ff]/10 hover:-translate-y-0.5"
                    >
                      <Globe2 className="w-3.5 h-3.5 text-[#2997ff]" />
                      <span>{src.label}</span>
                      <ExternalLink className="w-3 h-3 text-[#2997ff]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Other Credits */}
              <div className="pt-4 border-t border-white/10 text-xs sm:text-sm font-mono text-white/70 space-y-1 leading-relaxed">
                <div className="text-white/90 font-bold uppercase tracking-wider">
                  Other Credits:
                </div>
                <p>
                  Additional historical reference imagery courtesy of Wikimedia Commons (Public Domain / Creative Commons). Mission telemetry archives compiled from NASA Jet Propulsion Laboratory (JPL) and Goddard Space Flight Center records.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* =====================================================
            SECTION 8: USE OF AI (Transparent Disclosure)
            ===================================================== */}
        <section id="ai-disclosure" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
          <ScrollReveal direction="up" distance="30px">
            <div className="border-3 border-white bg-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#ffffff] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-white/20 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#2997ff] font-bold uppercase tracking-widest block">
                    // TRANSPARENCY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    How we used AI
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-[#0066cc]/30 border border-[#2997ff] text-[#2997ff] px-3 py-1">
                  <span>AI-GENERATED VOICE</span>
                </div>
              </div>

              {/* Two Column Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="border-2 border-white/40 bg-[#0d0f17] p-5 sm:p-6 space-y-2.5">
                  <strong className="text-lg font-black uppercase text-white block tracking-tight">
                    Story writing:
                  </strong>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                    We wrote the stories ourselves to give each machine a unique personality. We used Claude to help check facts and tighten the writing.
                  </p>
                </div>

                <div className="border-2 border-white/40 bg-[#0d0f17] p-5 sm:p-6 space-y-2.5">
                  <strong className="text-lg font-black uppercase text-white block tracking-tight">
                    Audio narration:
                  </strong>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                    Mission audio is generated using ElevenLabs AI voice technology so you can listen along from the machine's viewpoint.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* =====================================================
            SECTION 9: THE TEAM
            ===================================================== */}
        <section id="team" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
          <ScrollReveal direction="up" distance="30px">
            <div className="border-3 border-white bg-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#2997ff] space-y-8">
              <div className="space-y-2 border-b-2 border-white/20 pb-5">
                <span className="text-xs font-mono text-[#2997ff] font-bold uppercase tracking-widest block">
                  // THE TEAM
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                  Universe Breakers
                </h3>
                <p className="text-base sm:text-xl text-white/90 font-medium">
                  We are a team from Bangladesh who love space, design, and storytelling.
                </p>
              </div>

              {/* Team Member Card with High Craft */}
              <div className="border-2 border-white/60 bg-[#0e1017] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#ffffff]">
                <div className="flex items-center gap-5">
                  {/* Avatar Photo */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black border-3 border-white overflow-hidden shrink-0 shadow-[3px_3px_0px_#2997ff] ring-2 ring-[#0066cc]/40">
                    <img
                      src="/zihan.png"
                      alt="Tasnimul Hasan Zihan"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#2997ff] font-bold uppercase tracking-wider block">
                      CREATOR & ARCHIVIST
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      Tasnimul Hasan Zihan
                    </h4>
                  </div>
                </div>

                {/* 4 Roles Badges */}
                <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
                  <span className="inline-flex items-center gap-1.5 bg-black border border-white px-3 py-1.5 text-white">
                    <Code2 className="w-3.5 h-3.5 text-[#2997ff]" />
                    Developer
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-black border border-white px-3 py-1.5 text-white">
                    <PenTool className="w-3.5 h-3.5 text-[#2997ff]" />
                    Story Writer
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-black border border-white px-3 py-1.5 text-white">
                    <Palette className="w-3.5 h-3.5 text-[#2997ff]" />
                    Designer
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-black border border-white px-3 py-1.5 text-white">
                    <Search className="w-3.5 h-3.5 text-[#2997ff]" />
                    Researcher
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* =====================================================
            SECTION 10: CLOSING CALL TO ACTION
            ===================================================== */}
        <section id="closing-cta" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 text-center">
          <ScrollReveal direction="up" distance="25px">
            <div className="border-3 border-white bg-gradient-to-b from-black via-[#0d0f17] to-black p-8 sm:p-14 shadow-[8px_8px_0px_0px_#2997ff] space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#2997ff] font-bold uppercase tracking-widest block">
                  [ BEGIN EXPEDITION ]
                </span>
                <h3 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  Pick a mission. Hear its story.
                </h3>
                <p className="text-base sm:text-xl text-white/80 max-w-xl mx-auto">
                  Thirty-six machines are waiting across the solar system to tell you what they saw.
                </p>
              </div>

              {/* 3 Prominent Destination Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => { window.location.hash = "#/moon"; }}
                  className="px-6 py-3.5 bg-[#0066cc] hover:bg-[#0071e3] text-white border-2 border-white text-sm sm:text-base font-black uppercase tracking-wider shadow-[4px_4px_0px_#ffffff] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Explore The Moon</span>
                </button>
                <button
                  onClick={() => { window.location.hash = "#/mars"; }}
                  className="px-6 py-3.5 bg-black hover:bg-[#ff6b4a] hover:text-black text-white border-2 border-white text-sm sm:text-base font-black uppercase tracking-wider shadow-[4px_4px_0px_#ffffff] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Globe2 className="w-4 h-4" />
                  <span>Journey To Mars</span>
                </button>
                <button
                  onClick={() => { window.location.hash = "#/deep-space"; }}
                  className="px-6 py-3.5 bg-black hover:bg-emerald-400 hover:text-black text-white border-2 border-white text-sm sm:text-base font-black uppercase tracking-wider shadow-[4px_4px_0px_#ffffff] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Satellite className="w-4 h-4" />
                  <span>Deep Space Void</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* =====================================================
            SECTION 11: DISCLAIMER (Thin Bordered Strip at the End)
            ===================================================== */}
        <section id="disclaimer" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="border border-white/30 bg-black/60 p-4 sm:p-5 flex items-start sm:items-center gap-3 text-xs sm:text-sm font-mono text-white/70">
            <ShieldAlert className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              This website was created as a participant in the NASA Space Apps Challenge 2026. It is an independent educational project and is not affiliated with, sponsored by, or endorsed by NASA or the United States Government.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
