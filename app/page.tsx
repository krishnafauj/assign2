"use client";

import React from 'react';
import { ChevronLeft, X, Play, Pause } from 'lucide-react';
import { MUSIC_STYLES } from '@/data'; // Ensure this path matches where you put data.js
import { usePlayer } from '@/context/PlayerContext'; // Ensure this path matches

// --- Sub-Component: StyleCard ---
// Now integrated with the Audio Player Logic
const StyleCard = ({ data }: { data: any }) => {
  const { playTrack, currentTrack, isPlaying } = usePlayer();

  // Logic: Is this specific card currently the one loaded?
  const isCurrent = currentTrack?.id === data.id;
  // Logic: Is it actually playing audio right now?
  const isNowPlaying = isCurrent && isPlaying;

  return (
    <div
      onClick={() => playTrack(data)}
      className={` 
        group relative w-full h-64 flex flex-col
        rounded-[20px] 
        cursor-pointer transition-all duration-300
        border 
        ${isCurrent 
            ? 'bg-zinc-900 border-purple-500/30' // Active State
            : 'bg-transparent border-transparent hover:bg-zinc-900/10' // Inactive State
        } 
      `}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 shadow-lg bg-zinc-800 shrink-0">
        <img
          src={data.image}
          alt={data.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isCurrent ? 'scale-105' : 'group-hover:scale-110'}`}
        />

        {/* Play Overlay - Visible on Hover OR if Active */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-opacity duration-300 
          ${isCurrent || isNowPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          
          <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform ${isNowPlaying ? 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : ''}`}>
            {isNowPlaying ? (
                <Pause fill="white" className="text-white" size={20} />
            ) : (
                <Play fill="white" className="text-white ml-1" size={20} />
            )}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center px-1 flex-grow flex flex-col justify-start">
        <h3 className={`text-sm lg:text-[15px] mb-1.5 tracking-wide break-words ${isCurrent ? 'text-purple-400 font-bold' : 'text-white'}`}>
          {data.title}
        </h3>
        <p className="text-zinc-500 text-[10px] lg:text-[11px] font-medium leading-relaxed line-clamp-2">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function Home() {
  return (
    // Kept your wrapper logic to maintain the "Grey Gap" aesthetic
    <div className="bg-[#0e0e0f] h-full text-white font-sans selection:bg-purple-500/30 overflow-hidden flex flex-col">

      {/* THE MAIN CARD AREA */}
      {/* matches your: flex-1 my-2 mr-2 ml-3 rounded-[30px] bg-black... */}
      <div className="flex-1 my-2 mr-2 ml-3 rounded-[30px] bg-black overflow-hidden relative shadow-2xl">

        {/* Scrollable Area INSIDE the rounded card */}
        {/* Added pb-32 to ensure content isn't hidden behind the Global Player bar */}
        <div className="h-full overflow-y-auto scrollbar-hide pb-32">

          {/* Background Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0 bg-gradient-to-b from-purple-900/20 to-black/0" />

          {/* Top Nav (Close/Back) */}
          <div className="flex justify-between items-center relative z-10 px-4 pt-4">
            <button className="p-4 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">
              <ChevronLeft size={28} />
            </button>
            <button className="p-4 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">
              <X size={28} />
            </button>
          </div>

          {/* HERO SECTION */}
          <div className='px-4 md:px-10 lg:px-16 relative z-10'>

            <div className="bg-transparent mt-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10 px-4">
                
                {/* Album Art (Coldplay Large) */}
                <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 border-4 border-zinc-900 relative group shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                  <img
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80"
                    className="w-full h-full object-cover grayscale-[20%] contrast-125"
                    alt="Coldplay"
                  />
                  {/* Audio visualizer bars (Cosmetic) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-0.5 items-end h-8 z-20">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white/80 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Text Info */}
                <div className="text-center md:text-left">
                  <h1 className="font-grotesk text-5xl md:text-6xl font-black mb-4 uppercase tracking-[0.05em] text-white drop-shadow-xl">
                    Coldplay
                  </h1>
                  <p className="text-zinc-400 font-medium text-[12px] leading-relaxed mb-3">
                    EDM visionary known for hit remixes and artist management. 6 Core Styles and 30 Signature Sounds.
                  </p>
                  <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
                    House • Dance Pop • Pop • EDM
                  </div>
                </div>
              </div>
            </div>

            {/* TAB FILTERS */}
            <div className="flex items-center mb-6 mt-10 border-t gap-2 border-zinc-800/50 pt-6" />
            <div className="mb-8">
              <button className="bg-zinc-800 w-auto min-w-[140px] text-white px-8 mr-2 py-2.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase hover:bg-zinc-700 transition-colors shadow-lg">
                Core Style
              </button>
              <button className="bg-transparent text-zinc-600 border border-zinc-800 px-8 py-2.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase hover:text-white hover:border-zinc-600 transition-colors">
                Signature Sound
              </button>
            </div>

            {/* CARD GRID (Dynamic Data) */}
            <div className="w-full pb-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 mt-3">
                {MUSIC_STYLES.map((card) => (
                  <StyleCard key={card.id} data={card} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}