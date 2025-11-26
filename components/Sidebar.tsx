"use client";
import React from 'react';
import { Home, Search, Library, PlusCircle, Grip } from 'lucide-react';
import { useUI } from '@/context/UiContext'; // Import Hook
import Image from 'next/image';

export default function Sidebar() {
    const { toggleDna, openMain } = useUI();

    return (
       <aside className={`
            /* FIX: Changed 'h-screen' to 'h-[100dvh]' */
            h-[100dvh] 
            w-[84px] bg-black flex flex-col items-center py-5 gap-6 border-r border-zinc-900 shrink-0 z-50
        `}>
            {/* Logo area */}
            <div className="mb-2 cursor-pointer group">
                <div className=" p-1.5 rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
                    <img
                        src='/logo.png'
                        alt="App Logo"
                        className="w-full h-full object-cover grayscale-[20%] contrast-125 transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* --- Navigation Icons --- */}
            <nav className="flex flex-col gap-6 w-full items-center">

                {/* Add Button -> OPENS MAIN RIGHT PANEL */}
                <button
                    onClick={openMain}
                    className="text-zinc-400 hover:text-white transition-colors duration-200"
                    title="Open Main Panel"
                >
                    <PlusCircle size={24} strokeWidth={1.5} />
                </button>

                {/* Standard Nav */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Home size={22} strokeWidth={1.5} />
                </button>
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Search size={22} strokeWidth={1.5} />
                </button>
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Library size={22} strokeWidth={1.5} />
                </button>

                {/* DNA Button -> TOGGLES LEFT PANEL */}
                <button
                    onClick={toggleDna}
                    className="w-[50px] h-[40px] bg-zinc-800/80 hover:bg-zinc-700 rounded-2xl flex items-center justify-center transition-all duration-200 group mx-auto mt-2"
                    title="Toggle DNA Panel"
                >
                    <span
                        className="text-white font-[800] text-[11px] tracking-wide uppercase"
                        style={{ fontFamily: '"Power Grotesk Variable", sans-serif' }}
                    >
                        DNA
                    </span>
                </button>
            </nav>

            {/* Profile */}
            <div className="mt-auto pb-5">
                <button className="rounded-full overflow-hidden border-2 border-transparent hover:border-zinc-600 transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="User Profile"
                        className="w-9 h-9 object-cover opacity-90 hover:opacity-100"
                    />
                </button>
            </div>
        </aside>
    );
}