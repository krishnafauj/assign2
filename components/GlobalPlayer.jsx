// src/components/GlobalPlayer.jsx
"use client";
import React, { useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayer } from '@/context/PlayerContext';

export default function GlobalPlayer() {
  const { 
    currentTrack, 
    isPlaying, 
    togglePlay, 
    playNext, 
    playPrevious,
    seek, 
    duration, 
    seekTo 
  } = usePlayer();

  // 1. Keyboard Controls Hook
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent triggering if user is typing in an input field
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault(); // Stop page scrolling
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        // Forward 5 seconds
        seekTo(Math.min(seek + 5, duration));
      } else if (e.code === 'ArrowLeft') {
        // Rewind 5 seconds
        seekTo(Math.max(seek - 5, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, seek, duration, seekTo]);

  // Helper to format time (e.g., 125s -> 2:05)
  const formatTime = (seconds) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeekChange = (e) => {
    seekTo(Number(e.target.value));
  };

  if (!currentTrack) return null;

  return (
    // Main Container
    <div className="absolute bottom-0 w-full h-20 bg-black/90 backdrop-blur-md border-t border-zinc-800 flex flex-col justify-center z-50 min-w-[320px]">
      
      {/* 2. PROGRESS BAR (The "Scrolling" Music Player) */}
      {/* Placed at the very top of the player so it spans width */}
      <div className="w-full h-1 group cursor-pointer absolute top-0">
         {/* Background Line */}
         <div className="w-full h-full bg-zinc-800">
            {/* Filled Line */}
            <div 
              className="h-full bg-white group-hover:bg-green-500 transition-colors relative"
              style={{ width: `${(seek / duration) * 100}%` }}
            >
               {/* Scrubbing Knob (visible on hover) */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md"></div>
            </div>
         </div>
         
         {/* Invisible Range Input for functionality */}
         <input 
            type="range" 
            min="0" 
            max={duration || 0} 
            value={seek} 
            onChange={handleSeekChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
         />
      </div>

      <div className="flex items-center justify-between px-6 h-full">
        {/* Track Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0 justify-start">
          <img 
            src={currentTrack.image} 
            alt={currentTrack.title} 
            className="w-12 h-12 rounded-lg object-cover shadow-md shrink-0" 
          />
          <div className="overflow-hidden">
            <h4 className="text-white text-sm font-bold truncate pr-2">
              {currentTrack.title}
            </h4>
            <p className="text-zinc-500 text-xs truncate">Soundverse AI</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-1 shrink-0 px-2">
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={playPrevious}
              className="text-zinc-400 hover:text-white transition"
            >
              <SkipBack size={20} />
            </button>
            
            <button 
              onClick={togglePlay}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition active:scale-95 shadow-sm"
            >
              {isPlaying ? (
                <Pause size={20} fill="black" className="text-black" /> 
              ) : ( 
                <Play size={20} fill="black" className="text-black ml-1" /> 
              )}
            </button>
            
            <button 
              onClick={playNext}
              className="text-zinc-400 hover:text-white transition"
            >
              <SkipForward size={20} />
            </button>
          </div>
          {/* Time display below buttons (Optional but helpful) */}
          <div className="text-[10px] text-zinc-500 font-medium">
             {formatTime(seek)} / {formatTime(duration)}
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center justify-end gap-2 flex-1 min-w-0 hidden sm:flex">
          <Volume2 size={18} className="text-zinc-400 shrink-0" />
          <div className="w-24 h-1 bg-zinc-800 rounded-full cursor-pointer group">
              <div className="w-1/2 h-full bg-zinc-400 rounded-full group-hover:bg-white transition-colors"></div>
          </div>
        </div>
      </div>
    </div>
  );
}