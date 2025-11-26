import React from 'react';
import { ChevronLeft, X, Play } from 'lucide-react';
import DanPanel from "../components/DanPanel"; // 1. Re-imported DanPanel

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
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8fc4?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1571266028243-371695063176?auto=format&fit=crop&w=400&q=80"
  }
];

// --- Sub-Component: StyleCard ---
const StyleCard = ({ data }: { data: CardData }) => {
  return (
    <div className={`group cursor-pointer rounded-2xl p-3 transition-all duration-300 hover:bg-zinc-900/40 ${data.active ? 'bg-zinc-900' : 'bg-transparent'}`}>
      
      {/* Image Container */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-lg bg-zinc-800">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Hover Overlay with Play Button */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-all duration-300 ${data.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
           <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform">
              <Play fill="white" className="text-white ml-1" size={24} />
           </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center px-1">
        <h3 className="text-white font-bold text-[15px] mb-1.5 tracking-wide">{data.title}</h3>
        <p className="text-zinc-500 text-[11px] font-medium leading-relaxed line-clamp-2">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      
      {/* Background Gradient Blob (Atmosphere) */}
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-900/20 via-black/50 to-black pointer-events-none z-0" />

      {/* 2. Main Flex Layout */}
      <div className="flex relative z-10">
        
        {/* LEFT COLUMN: DanPanel */}
        {/* 'sticky top-0 h-screen' ensures it stays in view while you scroll the right side */}
        <div className="w-[440px] shrink-0 border-r border-zinc-900/50 p-6 sticky top-0 h-screen overflow-y-auto scrollbar-hide">
            <DanPanel />
        </div>

        {/* RIGHT COLUMN: Artist Content */}
        <div className="flex-1 px-8 pt-6 pb-20">
          
            {/* Top Nav (Back & Close) */}
            <div className="flex justify-between items-center mb-12">
              <button className="p-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">
                <ChevronLeft size={28} />
              </button>
              <button className="p-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">
                <X size={28} />
              </button>
            </div>

            {/* HERO SECTION */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16 px-4">
              {/* Circular Album Art */}
              <div className="w-[180px] h-[180px] rounded-full overflow-hidden shrink-0 border-4 border-zinc-900 shadow-2xl shadow-indigo-900/20 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80" 
                    className="w-full h-full object-cover" 
                    alt="Coldplay"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-0.5 items-end h-8 z-20">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-1 bg-white/80 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
              </div>

              {/* Text Info */}
              <div className="text-center md:text-left pt-2">
                  <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 uppercase text-white">
                    Coldplay
                  </h1>
                  <p className="text-zinc-400 text-sm md:text-base max-w-xl font-medium leading-relaxed mb-3">
                    EDM visionary known for hit remixes and artist management. 6 Core Styles and 30 Signature Sounds.
                  </p>
                  <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
                    House • Dance Pop • Pop • EDM
                  </div>
              </div>
            </div>

            {/* TAB FILTERS */}
            <div className="flex items-center gap-4 mb-10 border-b border-zinc-900 pb-1 mx-4">
              <button className="bg-zinc-800 text-white px-8 py-2.5 rounded-full text-[11px] font-extrabold tracking-widest uppercase hover:bg-zinc-700 transition-colors">
                Core Style
              </button>
              <button className="bg-transparent text-zinc-600 border border-zinc-800 px-8 py-2.5 rounded-full text-[11px] font-extrabold tracking-widest uppercase hover:text-white hover:border-zinc-600 transition-colors">
                Signature Sound
              </button>
            </div>

            {/* CARD GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {CARDS_DATA.map((card, index) => (
                  <StyleCard key={index} data={card} />
              ))}
            </div>

        </div>
      </div>
    </div>
  );
}