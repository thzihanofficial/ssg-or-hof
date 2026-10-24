import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { 
  ArrowLeft, Calendar, MapPin, Target, Lightbulb, CheckCircle2, 
  XCircle, ArrowRight, BookOpen, Sparkles, Images, Maximize2,
  X, ExternalLink
} from 'lucide-react';

export interface MissionChapter {
  title: string;
  content: string;
}

export interface MissionStats {
  launchDate: string;
  landingDate: string;
  dataSent: string;
  status: string;
  isStillActive?: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MissionDetailProps {
  categoryName: string; // e.g. 'Moon Exploration'
  categoryHash: string; // e.g. '#/moon'
  statusBadge: string; // e.g. 'Historical Landmark'
  isStillActive?: boolean;
  name: string;
  dateRange: string;
  location: string;
  imageSrc: string;
  imageAlt?: string;
  iframeSrc?: string;
  
  // Custom images arrays for new feature
  capturedImages?: string[]; // 4 images for modal popup
  galleryImages?: string[];  // 3 images for interactive card carousel
  hideCapturedImagesButton?: boolean;
  
  // 1st Person Narrative Chapters
  chapters: MissionChapter[];
  
  // Stats Box
  stats: MissionStats;
  
  // Did You Know?
  didYouKnow: string;
  
  // Objectives
  objectives: string[];
  
  // Interactive Quiz
  quiz?: QuizQuestion;
  
  // Bottom Navigation
  prevStory?: { name: string; hash: string };
  nextStory?: { name: string; hash: string };
}

// Fallback high quality space imagery if not custom provided
const DEFAULT_CAPTURED_IMAGES = [
  'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1000&auto=format&fit=crop'
];

export const MissionDetailLayout: React.FC<MissionDetailProps> = ({
  categoryName,
  categoryHash,
  statusBadge,
  isStillActive = false,
  name,
  dateRange,
  location,
  imageSrc,
  imageAlt,
  iframeSrc,
  capturedImages,
  galleryImages,
  chapters,
  stats,
  didYouKnow,
  objectives,
  quiz,
  prevStory,
  nextStory,
  hideCapturedImagesButton = false
}) => {
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isCapturedModalOpen, setIsCapturedModalOpen] = useState(false);
  // Ensure 4 images for the popup modal
  const modalImages: string[] = capturedImages && capturedImages.length >= 4
    ? capturedImages.slice(0, 4)
    : [
        imageSrc,
        capturedImages?.[1] || DEFAULT_CAPTURED_IMAGES[1],
        capturedImages?.[2] || DEFAULT_CAPTURED_IMAGES[2],
        capturedImages?.[3] || DEFAULT_CAPTURED_IMAGES[3]
      ];

  // Prevent background scroll when modal is active, and add ESC key shortcut
  useEffect(() => {
    if (isCapturedModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsCapturedModalOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isCapturedModalOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c10] text-white selection:bg-[#0066cc]/20 selection:text-[#0066cc] font-mono-retro retro-grid-pattern">
      <Navbar />

      <main className="flex-1 w-full pt-6 sm:pt-10 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1780px] 2xl:max-w-[1920px] mx-auto flex flex-col">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <button
            onClick={() => window.location.hash = categoryHash}
            className="inline-flex items-center space-x-2.5 text-[14px] sm:text-[16px] font-black uppercase tracking-wider text-white hover:text-[#2997ff] transition-all focus:outline-none rounded-none px-5 py-3 bg-black border-2 border-white shadow-[4px_4px_0px_0px_#2997ff] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer font-mono-retro"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>&lt; BACK TO {categoryName}</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-10 pb-8 border-b-4 border-white/20">
          <div className={`inline-flex items-center space-x-2.5 px-5 py-2 bg-black border-2 ${isStillActive ? 'border-emerald-400 shadow-[4px_4px_0px_0px_#10b981]' : 'border-red-500 shadow-[4px_4px_0px_0px_#ef4444]'} rounded-none mb-5`}>
            <span className={`w-3.5 h-3.5 rounded-none ${isStillActive ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
            <span className={`text-[13px] sm:text-[14px] font-black uppercase tracking-widest ${isStillActive ? 'text-emerald-400' : 'text-red-400'}`}>
              [ STATUS: {statusBadge} ]
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[56px] md:text-[70px] lg:text-[82px] xl:text-[92px] font-black tracking-tighter text-white uppercase mb-6 leading-[0.95] font-mono-retro retro-glow-blue">
            {name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[15px] sm:text-[17px] text-[#a1a1a6]">
            <span className="flex items-center text-white font-bold uppercase tracking-wide border-2 border-white/50 px-4 py-2 bg-black rounded-none shadow-[3px_3px_0px_0px_#2997ff]">
              <Calendar className="w-4 h-4 mr-2.5 text-[#2997ff]" />
              {dateRange}
            </span>
            <span className="flex items-center text-white font-bold uppercase tracking-wide border-2 border-white/50 px-4 py-2 bg-black rounded-none shadow-[3px_3px_0px_0px_#2997ff]">
              <MapPin className="w-4 h-4 mr-2.5 text-[#2997ff]" />
              {location}
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 2xl:gap-14">
          {/* Left Column: Story + Stats & Did You Know */}
          <div className="xl:col-span-7 flex flex-col space-y-8 xl:space-y-10">
            {/* MY STORY Header */}
            <div className="bg-[#121318] border-3 border-white rounded-none p-8 sm:p-10 md:p-12 lg:p-14 shadow-[10px_10px_0px_0px_#2997ff]">
              <div className="flex items-center space-x-3.5 mb-8 pb-5 border-b-2 border-white/20">
                <BookOpen className="w-8 h-8 text-[#2997ff]" />
                <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-black text-white uppercase tracking-wider font-mono-retro">
                  &gt; MISSION CHRONICLES [LOGS]
                </h2>
              </div>

              {/* Chapters */}
              <div className="space-y-9">
                {chapters.map((chapter, idx) => (
                  <div key={idx} className="space-y-3.5">
                    <h3 className="text-[19px] sm:text-[22px] lg:text-[24px] font-black text-[#2997ff] uppercase tracking-wide flex items-center font-mono-retro">
                      <span className="w-3 h-3 rounded-none bg-[#2997ff] mr-3.5 shrink-0" />
                      [{idx + 1}] {chapter.title}
                    </h3>
                    <p className="text-[#e8e8ed] text-[17px] sm:text-[19px] lg:text-[20px] leading-relaxed pl-6 border-l-4 border-[#2997ff] font-mono-retro">
                      "{chapter.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Box & Did You Know Box Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
              {/* STATS BOX */}
              <div className="bg-[#121318] border-3 border-white rounded-none p-7 sm:p-9 shadow-[8px_8px_0px_0px_#2997ff] flex flex-col justify-between font-mono-retro min-h-[300px]">
                <h3 className="text-[17px] sm:text-[19px] font-black text-white uppercase tracking-wider mb-6 pb-3 border-b-2 border-white/20 flex items-center justify-between">
                  <span>TELEMETRY DATA</span>
                  <span className="text-[12px] text-[#2997ff]">[SYS.STAT]</span>
                </h3>
                <div className="space-y-5">
                  <div>
                    <span className="text-[12px] text-[#86868b] uppercase font-black block mb-1">&gt; LAUNCH DATE</span>
                    <strong className="text-white text-[16px] sm:text-[18px] font-bold">{stats.launchDate}</strong>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#86868b] uppercase font-black block mb-1">&gt; LANDING / TARGET</span>
                    <strong className="text-white text-[16px] sm:text-[18px] font-bold">{stats.landingDate}</strong>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#86868b] uppercase font-black block mb-1">&gt; TRANSMITTED DATA</span>
                    <strong className="text-white text-[16px] sm:text-[18px] font-bold">{stats.dataSent}</strong>
                  </div>
                  <div>
                    <span className="text-[12px] text-[#86868b] uppercase font-black block mb-1">&gt; HARDWARE STATUS</span>
                    <strong className={`text-[16px] sm:text-[18px] font-extrabold uppercase ${stats.isStillActive || isStillActive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {stats.status}
                    </strong>
                  </div>
                </div>
              </div>

              {/* DID YOU KNOW? BOX */}
              <div className="bg-black border-3 border-amber-400 rounded-none p-7 sm:p-9 shadow-[8px_8px_0px_0px_#f59e0b] flex flex-col justify-between font-mono-retro min-h-[300px]">
                <div>
                  <div className="flex items-center space-x-3 mb-5 text-amber-400">
                    <Lightbulb className="w-7 h-7 fill-amber-400/20" />
                    <h3 className="text-[17px] sm:text-[19px] font-black uppercase tracking-wider">&gt; ARCHIVE FACT</h3>
                  </div>
                  <p className="text-[#f1f1f1] text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed italic font-medium">
                    "{didYouKnow}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-amber-400/30 text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                  // DECLASSIFIED NASA MISSION RECORD
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Media Box + Objectives + Quiz */}
          <div className="xl:col-span-5 flex flex-col space-y-8 xl:space-y-10">
            
            {/* Task 1 Link: "The images I captured." -> Opens Popup Modal */}
            {!hideCapturedImagesButton && (
              <button
                onClick={() => setIsCapturedModalOpen(true)}
                className="w-full flex items-center justify-between p-6 sm:p-7 bg-[#121318] hover:bg-[#1a1b22] border-3 border-[#2997ff] rounded-none transition-all group cursor-pointer shadow-[8px_8px_0px_0px_#2997ff] text-left hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none font-mono-retro"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#0066cc] border-2 border-black rounded-none text-white shrink-0">
                    <Images className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[17px] sm:text-[19px] font-black uppercase text-white tracking-wide block">
                      &gt; VIEW CAPTURED ARCHIVE &lt;
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-[#2997ff] font-bold uppercase block mt-0.5">
                      Open Multi-Frame Photographic Gallery
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-black border-2 border-white rounded-none text-[#2997ff] group-hover:bg-[#2997ff] group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </button>
            )}

            {/* Single Primary Mission Image Box or 3D Interactive Embed - Height & Width Increased */}
            <div className="rounded-none overflow-hidden border-3 border-white shadow-[10px_10px_0px_0px_#ffffff] relative w-full bg-black crt-scanlines">
              <div className="bg-[#121318] border-b-2 border-white px-4 py-2.5 flex items-center justify-between text-[11px] font-black tracking-widest text-[#a1a1a6] uppercase font-mono-retro">
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 bg-[#2997ff] animate-pulse" />
                  FEED // {name.toUpperCase()}
                </span>
                <span className="text-[#2997ff]">HI-RES OPTICAL SENSOR</span>
              </div>
              <div className="relative w-full overflow-hidden bg-black flex items-center justify-center min-h-[460px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[720px] xl:min-h-[760px] 2xl:min-h-[800px]">
                {iframeSrc ? (
                  <iframe
                    src={iframeSrc}
                    title={imageAlt || name}
                    className="w-full h-[460px] sm:h-[560px] md:h-[640px] lg:h-[720px] xl:h-[760px] 2xl:h-[800px] border-0 rounded-none block"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={imageSrc}
                    alt={imageAlt || name}
                    className="w-full h-[460px] sm:h-[560px] md:h-[640px] lg:h-[720px] xl:h-[760px] 2xl:h-[800px] block object-cover object-center rounded-none"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </div>

            {/* Mission Objectives Box */}
            <div className="bg-[#121318] border-3 border-white rounded-none p-8 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#ffffff] space-y-6 font-mono-retro">
              <h3 className="text-[18px] sm:text-[21px] font-black uppercase tracking-wider text-white flex items-center pb-4 border-b-2 border-white/20">
                <Target className="w-7 h-7 mr-3 text-[#2997ff]" />
                &gt; PRIMARY OBJECTIVES
              </h3>
              <ul className="space-y-4 text-[16px] sm:text-[18px] text-[#dedede] font-medium leading-relaxed">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#2997ff] mr-3.5 font-black text-[20px] leading-none">&gt;</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Mini Quiz Widget */}
            {quiz && (
              <div className="bg-[#121318] border-3 border-[#2997ff] rounded-none p-8 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#2997ff] space-y-6 font-mono-retro">
                <div className="flex items-center space-x-2 text-[#2997ff]">
                  <h3 className="text-[18px] sm:text-[20px] font-black uppercase tracking-wider text-white">&gt; TELEMETRY QUIZ</h3>
                </div>
                <p className="text-[16px] sm:text-[18px] font-bold text-white leading-relaxed">
                  {quiz.question}
                </p>
                <div className="space-y-3.5 pt-1">
                  {quiz.options.map((opt, oIdx) => {
                    const isSelected = selectedQuizOption === oIdx;
                    const isCorrect = oIdx === quiz.correctIndex;
                    let btnStyle = "bg-black border-2 border-white text-white hover:bg-white/10 shadow-[3px_3px_0px_0px_#ffffff]";

                    if (selectedQuizOption !== null) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-500 border-2 border-black text-black font-black shadow-[3px_3px_0px_0px_#000000]";
                      } else if (isSelected) {
                        btnStyle = "bg-red-500 border-2 border-black text-white font-bold shadow-[3px_3px_0px_0px_#000000]";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => setSelectedQuizOption(oIdx)}
                        className={`w-full text-left p-4 sm:p-5 rounded-none text-[15px] sm:text-[16px] font-bold transition-all duration-150 flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span>[{oIdx + 1}] {opt}</span>
                        {selectedQuizOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-black shrink-0 ml-2" />}
                        {selectedQuizOption !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-white shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>

                {selectedQuizOption !== null && (
                  <div className="mt-4 p-5 bg-black border-2 border-white rounded-none text-[15px] text-[#cccccc] leading-relaxed">
                    <strong className="text-white uppercase font-black block mb-2 text-[16px]">
                      {selectedQuizOption === quiz.correctIndex ? "🎉 TRANSMISSION CONFIRMED!" : "💡 TELEMETRY EXPLANATION:"}
                    </strong>
                    {quiz.explanation}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t-4 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-5 font-mono-retro">
          {prevStory ? (
            <button
              onClick={() => {
                window.location.hash = prevStory.hash;
                window.scrollTo(0, 0);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-7 py-4 bg-[#121318] hover:bg-[#1a1b22] border-2 border-white rounded-none text-[15px] font-black uppercase text-white transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-[#2997ff] transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <span className="text-[11px] text-[#86868b] uppercase block font-black">&lt; PREVIOUS TRANSMISSION</span>
                <span>{prevStory.name}</span>
              </div>
            </button>
          ) : <div />}

          <button
            onClick={() => {
              window.location.hash = categoryHash;
              window.scrollTo(0, 0);
            }}
            className="text-[15px] font-black uppercase text-[#2997ff] border-2 border-[#2997ff] px-8 py-4 bg-black hover:bg-[#2997ff] hover:text-white transition-all shadow-[4px_4px_0px_0px_#2997ff] cursor-pointer"
          >
            [ EXPLORE ALL {categoryName} ]
          </button>

          {nextStory ? (
            <button
              onClick={() => {
                window.location.hash = nextStory.hash;
                window.scrollTo(0, 0);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-7 py-4 bg-[#0066cc] hover:bg-[#0071e3] border-2 border-white rounded-none text-[15px] font-black uppercase text-white transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
            >
              <div className="text-right">
                <span className="text-[11px] text-white/80 uppercase block font-black">NEXT TRANSMISSION &gt;</span>
                <span>{nextStory.name}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
            </button>
          ) : <div />}
        </div>
      </main>

      {/* Fullscreen Popup Modal for Captured Images Archive (Grid View Only - Rendered via Portal into body) */}
      {isCapturedModalOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsCapturedModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-6xl 2xl:max-w-7xl h-[92vh] max-h-[920px] bg-[#101115] border-3 sm:border-4 border-white rounded-none shadow-[8px_8px_0px_0px_#0066cc] sm:shadow-[14px_14px_0px_0px_#0066cc] flex flex-col overflow-hidden font-mono-retro subpage-scale-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 sm:px-7 py-4 sm:py-5 border-b-3 sm:border-b-4 border-white flex items-center justify-between bg-[#191a20] shrink-0">
              <h2 className="text-[18px] sm:text-[22px] lg:text-[24px] font-black text-white uppercase tracking-wider truncate">
                {name}
              </h2>

              {/* Close Button */}
              <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
                <button
                  onClick={() => setIsCapturedModalOpen(false)}
                  className="px-3 sm:px-4 py-2 bg-black hover:bg-red-600 border-2 border-white text-white font-black uppercase text-[12px] sm:text-[13px] flex items-center space-x-1.5 transition-all shadow-[2px_2px_0px_0px_#ffffff] hover:shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                  title="Close (Esc)"
                >
                  <span className="hidden sm:inline">ESC</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body - Pure Grid View */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-7 bg-[#101115]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {modalImages.map((imgUrl, index) => {
                  return (
                    <div 
                      key={index} 
                      className="bg-[#181920] border-3 border-white rounded-none overflow-hidden shadow-[6px_6px_0px_0px_#ffffff] flex flex-col"
                    >
                      <a 
                        href={imgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-[16/10] bg-black overflow-hidden border-b-2 border-white block cursor-pointer"
                        title="Open original high-resolution frame"
                      >
                        <img
                          src={imgUrl}
                          alt={`${name} Captured frame ${index + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/85 border border-white/60 px-2.5 py-1 text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider shadow-[2px_2px_0px_0px_#0066cc]">
                          FRAME 0{index + 1}
                        </div>
                      </a>

                      {/* Card Action */}
                      <div className="p-3 sm:p-4 bg-[#14151b] flex items-center justify-end">
                        <a
                          href={imgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto text-[11px] sm:text-[12px] font-black uppercase text-white bg-[#0066cc] hover:bg-[#0071e3] border-2 border-white px-5 py-2.5 transition-all shadow-[2px_2px_0px_0px_#ffffff] hover:shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-0.5 active:translate-y-0.5 inline-flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          <span>VIEW FULL RES</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-7 py-3.5 bg-[#191a20] border-t-3 sm:border-t-4 border-white flex items-center justify-end shrink-0">
              <button
                onClick={() => setIsCapturedModalOpen(false)}
                className="px-6 sm:px-8 py-2.5 bg-[#0066cc] hover:bg-[#0071e3] text-white font-black uppercase border-2 border-white shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer text-[13px] sm:text-[14px]"
              >
                Close Archive
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      <Footer />
    </div>
  );
};

