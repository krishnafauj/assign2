// src/components/ArtistHero.tsx
"use client";
import React from 'react';

interface ArtistHeroProps {
  image: string;
  name: string;
  description: string;
  tags: string[];
}

const ArtistHero = ({ image, name, description, tags }: ArtistHeroProps) => {
  return (
    <div className="bg-transparent mt-4 w-full">
      <div className="
         flex flex-col md:flex-row 
         items-center md:items-start 
         gap-4 md:gap-6 px-4 
         max-w-6xl mx-auto
      ">
        
        {/* IMAGE: Kept slightly compact to save width for text */}
        <div className="
          relative group shrink-0
          w-28 h-28 
          md:w-40 md:h-40 
          lg:w-48 lg:h-48 
          rounded-full overflow-hidden 
          border-4 border-zinc-900 
          shadow-[0_0_40px_rgba(168,85,247,0.3)]
        ">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover grayscale-[20%] contrast-125 transition-transform duration-700 group-hover:scale-110" 
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="text-center md:text-left flex flex-col justify-center h-full mt-2 md:mt-4 flex-1 min-w-0">
          
          {/* TITLE ADJUSTMENT:
             1. Removed 'truncate' (So no "...")
             2. Reduced Sizes significantly:
                - Mobile: text-3xl
                - Tablet/Laptop (md/lg): text-5xl (Stops it from getting too wide)
                - Wide Screen (xl): text-6xl
             3. whitespace-nowrap: Forces it to stay on one line no matter what.
          */}
          <h1 className="
            font-grotesk font-black uppercase tracking-[0.05em] text-white drop-shadow-xl
            text-3xl 
            md:text-5xl 
            lg:text-5xl 
            xl:text-6xl
            mb-2 md:mb-3
            whitespace-nowrap
          ">
            {name}
          </h1>

          <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed mb-3 max-w-lg">
            {description}
          </p>

          <div className="text-zinc-600 text-[10px] md:text-xs font-bold uppercase tracking-widest flex flex-wrap gap-2 justify-center md:justify-start">
            {tags.map((tag, index) => (
              <span key={index}>
                {tag}
                {index < tags.length - 1 && <span className="text-zinc-800 mx-2">•</span>}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArtistHero;