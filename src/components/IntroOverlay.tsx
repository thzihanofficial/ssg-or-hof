import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import introVideo from '../assets/intro.mp4';

interface IntroOverlayProps {
  onComplete: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const isCompletingRef = useRef(false);

  const handleFinish = () => {
    if (isCompletingRef.current) return;
    isCompletingRef.current = true;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1.0;
    video.defaultPlaybackRate = 2.0;
    video.playbackRate = 2.0;

    const startPlayback = async () => {
      try {
        // Try playing with sound unmuted
        video.muted = false;
        video.playbackRate = 2.0;
        await video.play();
      } catch (err) {
        // If browser blocks unmuted autoplay on refresh, play muted so video NEVER pauses
        video.muted = true;
        try {
          video.playbackRate = 2.0;
          await video.play();
        } catch (mutedErr) {
          console.error("Muted play error:", mutedErr);
        }
      }
    };

    startPlayback();

    // On any user interaction, immediately enable sound
    const enableSoundOnGesture = () => {
      if (video) {
        video.muted = false;
        video.volume = 1.0;
        video.playbackRate = 2.0;
        if (video.paused) {
          video.play().catch(() => {});
        }
      }
    };

    window.addEventListener('click', enableSoundOnGesture);
    window.addEventListener('touchstart', enableSoundOnGesture);
    window.addEventListener('pointerdown', enableSoundOnGesture);
    window.addEventListener('keydown', enableSoundOnGesture);

    return () => {
      window.removeEventListener('click', enableSoundOnGesture);
      window.removeEventListener('touchstart', enableSoundOnGesture);
      window.removeEventListener('pointerdown', enableSoundOnGesture);
      window.removeEventListener('keydown', enableSoundOnGesture);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden select-none transition-all duration-800 ease-in-out ${
        isFadingOut 
          ? 'opacity-0 scale-105 blur-sm pointer-events-none' 
          : 'opacity-100 scale-100'
      }`}
    >
      {/* High Quality Fullscreen Video Player */}
      <video
        ref={videoRef}
        src={introVideo}
        autoPlay
        preload="auto"
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 2.0;
        }}
        onPlay={(e) => {
          e.currentTarget.playbackRate = 2.0;
        }}
        onEnded={handleFinish}
        onError={handleFinish}
        className="absolute inset-0 w-full h-full object-cover bg-black"
      />

      {/* Skip / Cross Button at Bottom Corner */}
      <div className="absolute bottom-6 right-6 z-[100001]">
        <button
          onClick={handleFinish}
          className="flex items-center justify-center p-3.5 bg-black hover:bg-[#0066cc] text-[#ffffff] border-2 border-white shadow-[4px_4px_0px_0px_#2997ff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
          aria-label="Skip Intro"
          title="Skip Intro"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
