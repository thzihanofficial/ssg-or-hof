import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Radio } from 'lucide-react';

interface AudioStoryPlayerProps {
  audioSrc?: string;
  missionName: string;
}

export const AudioStoryPlayer: React.FC<AudioStoryPlayerProps> = ({
  audioSrc,
  missionName
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Encode the audio path to properly handle spaces (e.g., "/audios /moon/...")
  const resolvedSrc = audioSrc ? encodeURI(audioSrc) : '';

  // Reset states when audio source changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setIsLoaded(false);
    setHasError(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
    }
  }, [resolvedSrc]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
      setIsLoaded(true);
      setHasError(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsPlaying(false);
  };

  // Main "> LISTEN TO MY STORY <" action
  const handlePlayToggle = useCallback(() => {
    if (!audioRef.current || !resolvedSrc) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasError(false);
        })
        .catch((err) => {
          console.warn('Audio play request failed or interrupted:', err);
        });
    }
  }, [isPlaying, resolvedSrc]);



  // Reset action (rewind to 0 and start playing)
  const handleReset = useCallback(() => {
    if (audioRef.current && resolvedSrc) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasError(false);
        })
        .catch((err) => {
          console.warn('Audio replay failed:', err);
        });
    }
  }, [resolvedSrc]);

  // Mute toggle
  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Seek bar click
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percent * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-[#121318] border-3 border-white p-5 sm:p-6 shadow-[8px_8px_0px_0px_#2997ff] font-mono-retro relative overflow-hidden">
      {/* Hidden HTML5 Audio Element */}
      {resolvedSrc && (
        <audio
          ref={audioRef}
          src={resolvedSrc}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onError={handleError}
        />
      )}

      {/* Top Header Row with Status Indicator */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-white/20 text-[11px] sm:text-[12px] font-black uppercase tracking-wider">
        <div className="flex items-center space-x-2 text-white">
          <Radio className={`w-4 h-4 ${isPlaying ? 'text-[#2997ff] animate-pulse' : 'text-[#86868b]'}`} />
          <span className="truncate">&gt; AUDIO LOG // TRANSMISSION</span>
        </div>
        <div className="flex items-center space-x-2 shrink-0">
          <span
            className={`w-2.5 h-2.5 rounded-none ${
              isPlaying
                ? 'bg-emerald-400 animate-pulse'
                : hasError
                ? 'bg-red-500'
                : currentTime > 0
                ? 'bg-amber-400'
                : 'bg-[#2997ff]'
            }`}
          />
          <span
            className={`text-[10px] sm:text-[11px] font-black tracking-widest ${
              isPlaying
                ? 'text-emerald-400'
                : hasError
                ? 'text-red-400'
                : currentTime > 0
                ? 'text-amber-400'
                : 'text-[#2997ff]'
            }`}
          >
            {hasError
              ? 'SIGNAL LOST'
              : isPlaying
              ? 'TRANSMITTING'
              : currentTime > 0
              ? 'PAUSED'
              : 'READY'}
          </span>
        </div>
      </div>

      {/* PRIMARY BUTTON: > LISTEN TO MY STORY < */}
      <button
        onClick={handlePlayToggle}
        disabled={!resolvedSrc || hasError}
        className={`w-full group relative flex items-center justify-between px-5 sm:px-6 py-4 rounded-none font-mono-retro font-black text-[15px] sm:text-[17px] tracking-wider uppercase transition-all border-3 ${
          isPlaying
            ? 'bg-[#0071e3] border-white text-white shadow-[4px_4px_0px_0px_#ffffff]'
            : 'bg-[#0066cc] hover:bg-[#0071e3] border-white text-white shadow-[6px_6px_0px_0px_#2997ff] hover:-translate-x-0.5 hover:-translate-y-0.5'
        } active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <div className="flex items-center space-x-3.5">
          <div className="w-8 h-8 bg-black border-2 border-white flex items-center justify-center text-white shrink-0 shadow-[2px_2px_0px_0px_#ffffff]">
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white translate-x-0.5" />
            )}
          </div>
          <span className="font-mono-retro font-black tracking-wider text-left">
            &gt; LISTEN TO MY STORY &lt;
          </span>
        </div>

        {/* Animated Soundwave Visualizer when playing */}
        <div className="flex items-end space-x-1 h-6 pl-2 shrink-0">
          <span
            className={`w-1 bg-white transition-all ${
              isPlaying ? 'animate-[bounce_0.6s_ease-in-out_infinite] h-6' : 'h-2 opacity-50'
            }`}
          />
          <span
            className={`w-1 bg-white transition-all ${
              isPlaying ? 'animate-[bounce_0.8s_ease-in-out_infinite_0.15s] h-5' : 'h-3 opacity-50'
            }`}
          />
          <span
            className={`w-1 bg-white transition-all ${
              isPlaying ? 'animate-[bounce_0.5s_ease-in-out_infinite_0.3s] h-6' : 'h-1.5 opacity-50'
            }`}
          />
          <span
            className={`w-1 bg-white transition-all ${
              isPlaying ? 'animate-[bounce_0.7s_ease-in-out_infinite_0.45s] h-4' : 'h-2.5 opacity-50'
            }`}
          />
        </div>
      </button>

      {/* Scrubbing Progress Bar */}
      <div className="mt-4 pt-2">
        <div
          ref={progressBarRef}
          onClick={handleSeek}
          className="relative w-full h-3 bg-black border-2 border-white/60 cursor-pointer overflow-hidden group"
          title="Click to seek"
        >
          <div
            className="h-full bg-[#2997ff] transition-all duration-100 ease-linear"
            style={{ width: `${progressPercent}%` }}
          />
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_8px_#ffffff]"
            style={{ left: `${progressPercent}%` }}
          />
        </div>

        {/* Time Counter and Volume Toggle */}
        <div className="flex items-center justify-between text-[11px] sm:text-[12px] font-bold text-[#a1a1a6] mt-2 font-mono-retro">
          <span className="text-white font-black">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <button
            onClick={handleMuteToggle}
            className="flex items-center space-x-1.5 text-[#a1a1a6] hover:text-white transition-colors cursor-pointer px-2 py-0.5 border border-white/30 bg-black"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-red-400" />
                <span className="text-[10px] text-red-400 font-bold uppercase">MUTED</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#2997ff]" />
                <span className="text-[10px] uppercase font-bold text-white">VOL</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* CONTROL ACTIONS: RESET */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t-2 border-white/20">
        <div className="text-[11px] text-[#86868b] font-mono-retro uppercase tracking-wider flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-[#2997ff]" />
          <span>AUDIO NARRATIVE CONTROL</span>
        </div>

        {/* RESET BUTTON */}
        <button
          onClick={handleReset}
          disabled={!resolvedSrc || hasError}
          className="flex items-center justify-center space-x-2 py-2 px-4 bg-black hover:bg-white/10 text-white font-mono-retro font-bold text-[12px] sm:text-[13px] uppercase border-2 border-white shadow-[3px_3px_0px_0px_#2997ff] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          title="Reset to 00:00 and replay"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#2997ff]" />
          <span>RESET</span>
        </button>
      </div>
    </div>
  );
};
