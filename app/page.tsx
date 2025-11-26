import React from 'react';
import { ChevronLeft, X, Play } from 'lucide-react';
import DanPanel from "../components/DanPanel";
import Sidebar from "../components/Sidebar";

// --- Types ---
interface CardData {
  title: string;
  desc: string;
  image: string;
  active?: boolean;
}

// --- Data ---
const CARDS_DATA: CardData[] = [
  {
    title: "Dubstep",
    desc: "Wobbly, Punchy, Dark, Heavy, Aggressive",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjTC9hOiJE6mUFNIpf-nGb0EQj3QhD0VQbA&s",
    active: true
  },
  {
    title: "Big Room",
    desc: "Anthemic, Energetic, Festival, Uplifting, Explosive",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Piano House",
    desc: "Warm, Melodic, Soulful, Uplifting, Groovy",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Progressive House",
    desc: "Euphoric, Atmospheric, Melodic, Driving, Evolving",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Folktronica",
    desc: "Organic, Acoustic, Chill, Textured, Dreamy",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "EDM",
    desc: "Energetic, Upbeat, Bright, Festival, Dancefloor",
    image: "https://cdn.prod.website-files.com/65a4c51aed2b7cff7e3a0b98/662a541abe501b26de0b92f5_mobile.jpeg"
  }
];

// --- Sub-Component: StyleCard ---
const StyleCard = ({ data }: { data: CardData }) => {
  return (
    <div
      // CHANGE 1: w-full (fills the grid cell), h-full (matches tall neighbors)
      // CHANGE 2: flex flex-col (pushes content properly)
      className={` 
        group relative w-40 h-65 flex flex-col
        rounded-[20px] 
        cursor-pointer transition-all duration-300
        border border-transparent
        ${data.active ? 'bg-zinc-900' : 'bg-transparent hover:bg-zinc-900/10'} 
      `}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 shadow-lg bg-zinc-800 shrink-0">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Play Overlay - Only visible on Active OR Group Hover */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-opacity duration-300 ${data.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform">
            <Play fill="white" className="text-white ml-1" size={20} />
          </div>
        </div>
      </div>

      {/* Text Content - grows to fill space if needed */}
      <div className="text-center px-1 flex-grow flex flex-col justify-start">
        <h3 className="text-white  text-sm lg:text-[15px] mb-1.5 tracking-wide break-words">
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
    // 1. OUTER CONTAINER: Changed to bg-zinc-900. 
    // This color will show through the "gap" to create the grey strip effect.
    <div className=" bg-[#0e0e0f] h-screen text-white font-sans selection:bg-purple-500/30 overflow-hidden flex">

      {/* 2. LEFT SIDEBAR CONTAINER */}
      {/* Removed border-r. Added bg-black to keep sidebar dark. */}


      {/* 3. RIGHT COLUMN: "The Card" */}
      {/* - my-2 mr-2: Adds margin on top/bottom/right so the grey background shows.
          - rounded-3xl: Gives the big curved corners.
          - border border-zinc-700/50: The light grey border you wanted.
          - bg-black: The interior background.
          - overflow-hidden: Ensures content doesn't spill out of the rounded corners.
      */}
      <div className="flex-1 my-2 mr-2 ml-3 rounded-[30px] bg-black overflow-hidden relative shadow-2xl">

        {/* Scrollable Area INSIDE the rounded card */}
        <div className="h-full overflow-y-auto  scrollbar-hide">

          {/* Background Gradient (Now inside the card) */}
          <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0" />

          {/* Top Nav */}
          <div className="flex justify-between items-center  relative z-10">
            <button className="p-4 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">
              <ChevronLeft size={28} />
            </button>
            <button className="p-4 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">
              <X size={28} />
            </button>
          </div>

          {/* HERO SECTION */}
          <div className='px-4 md:px-10 lg:px-16  relative z-10'>

            <div className="bg-black  ">
              <div className="flex flex-colf md:flex-row items-center md:items-start gap-10  px-4">
                {/* Album Art */}
                <div
                  className="w-40 h-40 rounded-full overflow-hidden shrink-0 border-4 border-zinc-900 relative group"

                >
                  {/* 1. THE PURPLE GRADIENT OVERLAY */}


                  {/* 2. SECOND GLOW LAYER (For that 'neon' feel) */}

                  <img
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80"
                    className="w-full h-full object-cover grayscale-[20%] contrast-125"
                    alt="Coldplay"
                  />

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

                {/* Text Info style={{ boxShadow: '0 0 60px 20px rgba(147, 51, 234, 0.25)' }} */}
                <div className="text-center md:text-left "  >
                  <h1 className="font-grotesk text-5xl md:text-6xl font-black  mb-4 uppercase tracking-[0.05em]   text-white">
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
            <div className="flex items-center mb-4 mt-4 border-t gap-2 border-zinc-900" />
            <div>
              <button className="bg-zinc-800 w-60 text-white px-8 mr-2 py-2.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase hover:bg-zinc-700 transition-colors">
                Core Style
              </button>
              <button className="bg-transparent text-zinc-600 border border-zinc-800 px-8 py-2.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase hover:text-white hover:border-zinc-600 transition-colors">
                Signature Sound
              </button>
            </div>

            {/* CARD GRID */}

            <div className="w-full pl-4 ">
              <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">
                {CARDS_DATA.map((card, index) => (
                  <StyleCard key={index} data={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}