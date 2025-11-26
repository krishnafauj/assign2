import React from 'react';
import { X, Plus } from 'lucide-react';

// --- Reusable Components ---
const ToggleContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-zinc-950/50 rounded-full gap-2 flex mb-3 min-h-9 shrink-0">
    {children}
  </div>
);

const ActiveToggleButton = ({ text }: { text: string }) => (
  <button className="bg-[#474d54] text-white rounded-full flex-1  text-[10px]  transition-all shadow-sm">
    {text}
  </button>
);

const InactiveToggleButton = ({ text }: { text: string }) => (
  <button className=" text-white bg-[#181a1c] rounded-full hover:text-white flex-1 py-2 text-[10px]  transition-all">
    {text}
  </button>
);

const SectionLabel = ({ text }: { text: string }) => (
  <span className="text-white text-[8px]  mb-2 uppercase tracking-widest text-center block">
    {text}
  </span>
);

const PillButton = ({ text, active = false }: { text: string; active?: boolean }) => (
  <button className={`${active ? 'bg-[#474d54] text-white' : 'bg-[#181a1c] text-white hover:bg-zinc-900 hover:text-white'} bg-[#181a1c] rounded-full px-3 py-1.5 text-[10px]  transition-all min-w-[50px]`}>
    {text}
  </button>
)

export default function DnaPanel() {
  return (
    // 1. APPLIED 'font-inter' class here (defined in style tag below)
    <div className="font-inter h-screen pt-6  pr-6 w-80 bg-black text-white flex flex-col shadow-2xl  z-10 overflow-hidden">

      {/* 1. HEADER */}
      <div className="pb-2 shrink-0 flex justify-between items-start">
        {/* Kept your Power Grotesk override for the title specifically */}
        <h1 style={{
          fontFamily: '"Power Grotesk Variable", sans-serif',
          fontWeight: 800,
          fontSize: '32px',
          lineHeight: '1',
          letterSpacing: '0.05em'
        }} className="uppercase text-white">
          DNA
        </h1>
        <button className="text-white hover:text-white transition-colors mt-1">
          <X size={17} strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2 mt-4 min-h-0 no-scrollbar flex flex-col">

        <ToggleContainer>
          <ActiveToggleButton text="Core Style" />
          <InactiveToggleButton text="Signature Sound" />
        </ToggleContainer>

        {/* Attach Model */}
        <div className="flex flex-col items-center mb-4 shrink-0">
          <SectionLabel text="Attach Model" />
          <button className="w-24 h-24 bg-[#181a1c] rounded-[18px] flex items-center justify-center transition-all group shadow-inner">
            <div className="bg-zinc-800/80 group-hover:bg-zinc-700 p-1.5  rounded-full transition-colors">
              <Plus className="text-white group-hover:text-white" size={16} strokeWidth={2} />
            </div>
          </button>
        </div>

        {/* Output Selection */}
        <div className="mb-8  mt-10 shrink-0">
          <SectionLabel text="Select the output" />
          <div className="flex gap-1.5 w-full justify-center">
            <PillButton text="Song" active />
            <PillButton text="Instrumental" />
            <PillButton text="Singing" />
          </div>
        </div>

        {/* Input Type Tabs */}
        <ToggleContainer>
          <InactiveToggleButton text="Describe Your Song" />
          <ActiveToggleButton text="Lyrics" />
        </ToggleContainer>

        {/* Text Input Area */}
        <div className="relative group flex-1 min-h-[60px] flex flex-col mb-2">
          <textarea
            className="w-full h-40 bg-[#1c1c1c] border border-zinc-800/50 rounded-[20px] p-4 text-white placeholder-zinc-600 resize-none focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:bg-zinc-900 transition-all text-[12px] leading-relaxed"
            placeholder="Enter your own lyrics"
            spellCheck={false}
          ></textarea>
          
         
          <div className="flex justify-between items-center mb-2 mt-2 shrink-0">
            <div className="flex gap-1.5">
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-2.5 py-1  text-[9px] transition-colors border border-zinc-700/50">Help me write</button>
              <button className="bg-transparent hover:bg-zinc-900 text-white hover:text-white rounded-full px-2.5 py-1  text-[9px] transition-colors border border-zinc-800">Clear</button>
            </div>
            <span className="text-white text-[9px]  tracking-wider">0/3000</span>
          </div>
        </div>

        {/* 3. HELP BUTTONS */}


      </div>

      {/* 4. FOOTER */}
      <div className="px-5 py-10   shrink-0 bg-black z-20">
        <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full py-3  text-[13px] tracking-wide shadow-lg shadow-indigo-900/20 transition-all active:scale-[0.98]">
          Create
        </button>
      </div>

      {/* 2. STYLE TAG: Imports Inter and defines the helper class */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}