"use client";

import React from 'react';

import { ChevronLeft, X, Play, Pause } from 'lucide-react';

import { MUSIC_STYLES } from '@/data';

import { usePlayer } from '@/context/PlayerContext';

import GlobalPlayer from '@/components/GlobalPlayer';

import { useUI } from '@/context/UiContext'; // Import UI Context

import ArtistHero from '@/components/ArtistHero'; // <--- Import it

// --- StyleCard Component ---

const StyleCard = ({ data }: { data: any }) => {

  const { playTrack, currentTrack, isPlaying } = usePlayer();

  const isCurrent = currentTrack?.id === data.id;

  const isNowPlaying = isCurrent && isPlaying;



  return (

    <div

      onClick={() => playTrack(data, MUSIC_STYLES)} // PASS MUSIC_STYLES for Queue

      className={`group relative w-full h-full flex flex-col p-2 rounded-[20px] cursor-pointer transition-all duration-300 border ${isCurrent ? 'bg-zinc-900 border-transparent ' : 'bg-transparent border-transparent hover:bg-zinc-900/10'}`}

    >

      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 shadow-lg bg-zinc-800 shrink-0">

        <img src={data.image} alt={data.title} className={`w-full h-full object-cover transition-transform duration-500 ${isCurrent ? 'scale-105' : 'group-hover:scale-110'}`} />

        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-opacity duration-300 ${isCurrent || isNowPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>

          <div className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform ${isNowPlaying ? 'border-white' : ''}`}>

            {isNowPlaying ? <Pause fill="white" size={20} /> : <Play fill="white" className="ml-1" size={20} />}

          </div>

        </div>

      </div>

      <div className="text-center px-1 flex-grow flex flex-col justify-start">

        <h3 className={`text-sm mb-1.5 tracking-wide ${isCurrent ? 'text-white font-bold' : 'text-white'}`}>{data.title}</h3>

        <p className="text-zinc-500 text-[10px] font-medium leading-relaxed line-clamp-2">{data.desc}</p>

      </div>

    </div>

  );

};



export default function Home() {

  const { isMainOpen, closeMain, openMain } = useUI();



  // EMPTY STATE (If main panel is closed)

  if (!isMainOpen) {

    return (

      <div className="h-full w-full bg-[#0e0e0f] flex flex-col items-center justify-center text-zinc-500 animate-in fade-in duration-500">

        <p className="text-sm uppercase tracking-widest mb-4 font-bold opacity-50">Content Hidden</p>

        <button onClick={openMain} className="text-xs border border-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-900 hover:text-white transition-colors">

          Reopen Content

        </button>

      </div>

    );

  }



  // CONTENT STATE

  return (

    <div className="bg-[#0e0e0f] h-full text-white font-sans selection:bg-purple-500/30 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-500 fade-in">



      {/* CARD CONTAINER */}

      <div className="flex-1 min-w-0 mr-2 ml-3 rounded-[30px] bg-black overflow-hidden relative shadow-2xl mt-2 mb-2 border border-zinc-900/50">



        <div className="h-full overflow-y-auto scrollbar-hide pb-32 scroll-smooth">

          {/* Gradient */}

          <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0 bg-gradient-to-b from-purple-900/20 to-black/0" />



          {/* Nav */}

          <div className="flex justify-between items-center relative z-10 px-4 mt-1">

            <button className="p-4 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">

              <ChevronLeft size={28} />

            </button>

            <button onClick={closeMain} className="p-4 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">

              <X size={28} />

            </button>

          </div>



          {/* HERO */}

          <div className='px-4 md:px-10 lg:px-16 relative z-10'>

            <ArtistHero

              image="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80"

              name="Coldplay"

              description="EDM visionary known for hit remixes and artist management. 6 Core Styles and 30 Signature Sounds."

              tags={["House", "Dance Pop", "Pop", "EDM"]}

            />



            {/* FILTERS */}

            <div className="flex items-center mb-3 mt-3 border-t gap-2 border-zinc-800/50 " />

            <div className="mb-8 flex gap-2">

              <button className="bg-zinc-800 text-white px-8 py-2.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase hover:bg-zinc-700 transition-colors shadow-lg">Core Style</button>

              <button className="bg-transparent text-[#828282] border border-zinc-800 px-8 py-2.5 rounded-full text-[10px]  tracking-widest uppercase hover:text-white hover:border-zinc-600 transition-colors">Signature Sound</button>

            </div>



            {/* GRID - RESPONSIVE COLUMNS */}

            <div className="w-full pb-10">

              <div className="grid font-grotesk font-extralight text-3xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 mt-3">

                {MUSIC_STYLES.map((card) => <StyleCard key={card.id} data={card} />)}

              </div>

            </div>

          </div>

        </div>



        <GlobalPlayer />

      </div>

    </div>

  );

}