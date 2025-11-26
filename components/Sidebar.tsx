import React from 'react';
import { Home, Search, Library, PlusCircle, Grip } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-[84px] bg-black flex flex-col items-center py-5 gap-6 border-rz-50">

            {/* Logo area */}
            <div className="mb-2 cursor-pointer group">
                <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-1.5 rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
                    <Grip className="text-white w-5 h-5" />
                </div>
            </div>

            {/* --- Navigation Icons --- */}
            <nav className="flex flex-col gap-6 w-full items-center">

                {/* Add Button */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <PlusCircle size={24} strokeWidth={1.5} />
                </button>

                {/* Home */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Home size={22} strokeWidth={1.5} />
                </button>

                {/* Search */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Search size={22} strokeWidth={1.5} />
                </button>

                {/* Library */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Library size={22} strokeWidth={1.5} />
                </button>

                {/* Custom DNA Button - Scaled down to fit 84px width comfortably */}
                <button className="w-[56px] h-[56px] bg-zinc-800/80 hover:bg-zinc-700 rounded-2xl flex items-center justify-center transition-all duration-200 group mx-auto mt-2">
                    <span
                        className="text-white font-[800] text-[11px] tracking-wide uppercase"
                        style={{ fontFamily: '"Power Grotesk Variable", sans-serif' }}
                    >
                        DNA
                    </span>
                </button>
            </nav>

            {/* --- Bottom Profile Picture --- */}
            <div className="mt-auto pb-5">
                <button className="rounded-full overflow-hidden border-2 border-transparent hover:border-zinc-600 transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="User Profile"
                        className="w-9 h-9 object-cover opacity-90 hover:opacity-100"
                    />
                </button>
            </div>

        </aside>
    );
}