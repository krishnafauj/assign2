"use client";
import React, { useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayer } from '@/context/PlayerContext';

export default function GlobalPlayer() {
  const { currentTrack, isPlaying, togglePlay, playNext, playPrevious, seek, duration, seekTo } = usePlayer();

  // 1. Keyboard Controls Hook
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent triggering if user is typing in an input field
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault(); 
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        seekTo(Math.min(seek + 5, duration));
      } else if (e.code === 'ArrowLeft') {
        seekTo(Math.max(seek - 5, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, seek, duration, seekTo]);

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(Number(e.target.value));
  };

  // If no track is loaded, don't render anything
  if (!currentTrack) return null;

  return (
    <>
      {/* Main Container with Custom Animation Class */}
     <div className={`
         /* FIX: Use 'absolute' (not fixed). 
            This keeps it inside the page.tsx container width. 
         */
         absolute bottom-0 left-0 w-full
         
         h-20 bg-black/90 backdrop-blur-md border-t border-zinc-800 z-50 min-w-[320px]
         slide-up-anim
      `}>
        
        {/* 2. PROGRESS BAR */}
        <div className="w-full h-1 group cursor-pointer absolute top-0 z-10">
          <div className="w-full h-full bg-zinc-800">
            <div className="h-full bg-white group-hover:bg-green-500 transition-colors relative" style={{ width: `${(seek / duration) * 100}%` }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md"></div>
            </div>
          </div>
          <input type="range" min="0" max={duration || 0} value={seek} onChange={handleSeekChange} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
        </div>

        <div className="relative w-full h-full flex items-center px-4 md:px-6">

          {/* 1. LEFT: Track Info */}
          <div className="flex items-center gap-3 w-1/3 md:w-1/4 min-w-0">
            <img src={currentTrack.image} alt={currentTrack.title} className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover shadow-md shrink-0" />
            <div className="overflow-hidden">
              <h4 className="text-white text-xs md:text-sm font-bold truncate">{currentTrack.title}</h4>
              <p className="text-zinc-500 text-[10px] md:text-xs truncate">Soundverse AI</p>
            </div>
          </div>

          {/* 2. CENTER: Controls */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="flex items-center gap-4 md:gap-6">
              <button onClick={playPrevious} className="text-zinc-400 hover:text-white transition p-1"><SkipBack size={20} /></button>

              <button onClick={togglePlay} className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition active:scale-95 shadow-sm">
                {isPlaying ? <Pause size={18} fill="black" className="text-black" /> : <Play size={18} fill="black" className="text-black ml-0.5" />}
              </button>

              <button onClick={playNext} className="text-zinc-400 hover:text-white transition p-1"><SkipForward size={20} /></button>
            </div>
            <div className="text-[9px] md:text-[10px] text-zinc-500 font-medium">
              {(seek / 60).toFixed(0)}:{Math.floor(seek % 60).toString().padStart(2, '0')} / {(duration / 60).toFixed(0)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
            </div>
          </div>

          {/* 3. RIGHT: Volume */}
          <div className="hidden md:flex w-1/4 items-center justify-end gap-2 ml-auto">
            <Volume2 size={18} className="text-zinc-400 shrink-0" />
            <div className="w-24 h-1 bg-zinc-800 rounded-full cursor-pointer group">
              <div className="w-1/2 h-full bg-zinc-400 rounded-full group-hover:bg-white transition-colors"></div>
            </div>
          </div>

          {/* 3b. RIGHT SPACER for Mobile */}
          <div className="md:hidden w-1/3 pointer-events-none"></div>

        </div>
      </div>

      {/* --- CSS ANIMATION --- */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .slide-up-anim {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}