// src/components/GlobalPlayer.jsx
"use client";
import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayer } from '@/context/PlayerContext';

export default function GlobalPlayer() {
  const { currentTrack, isPlaying, togglePlay } = usePlayer();

  if (!currentTrack) return null; // Don't show if nothing is playing

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md border-t border-zinc-800 flex items-center justify-between px-6 z-50">
      
      {/* Track Info */}
      <div className="flex items-center gap-4 w-1/3">
        <img 
          src={currentTrack.image} 
          alt={currentTrack.title} 
          className="w-12 h-12 rounded-lg object-cover shadow-md" 
        />
        <div>
          <h4 className="text-white text-sm font-bold">{currentTrack.title}</h4>
          <p className="text-zinc-500 text-xs">Soundverse AI</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-1 w-1/3">
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition"><SkipBack size={20} /></button>
          
          <button 
            onClick={togglePlay}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition active:scale-95"
          >
            {isPlaying ? <Pause size={20} fill="black" className="text-black" /> : <Play size={20} fill="black" className="text-black ml-1" />}
          </button>
          
          <button className="text-zinc-400 hover:text-white transition"><SkipForward size={20} /></button>
        </div>
      </div>

      {/* Volume / Extras */}
      <div className="flex items-center justify-end gap-2 w-1/3">
        <Volume2 size={18} className="text-zinc-400" />
        <div className="w-24 h-1 bg-zinc-800 rounded-full">
            <div className="w-1/2 h-full bg-zinc-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}