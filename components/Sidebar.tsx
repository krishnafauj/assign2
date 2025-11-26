import React from 'react';
import { Home, Search, Library, PlusCircle, Grip } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-[84px] bg-black flex flex-col items-center py-6 gap-8 border-r border-zinc-900 z-50">

          
            <div className="mb-2 cursor-pointer group">
                <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-2 rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
                    <Grip className="text-white w-6 h-6" />
                </div>
            </div>

            {/* --- Navigation Icons --- */}
            <nav className="flex flex-col gap-8 w-full items-center">

                {/* Add Button */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <PlusCircle size={28} strokeWidth={1.5} />
                </button>

                {/* Home */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Home size={26} strokeWidth={1.5} />
                </button>

                {/* Search */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Search size={26} strokeWidth={1.5} />
                </button>

                {/* Library */}
                <button className="text-zinc-400 hover:text-white transition-colors duration-200">
                    <Library size={26} strokeWidth={1.5} />
                </button>

                {/* Custom DNA Button */}
                {/* Custom DNA Button */}
                <button className="w-[78px] h-[77px] bg-zinc-800/80 hover:bg-zinc-700 rounded-3xl flex items-center justify-center transition-all duration-200 group mx-auto mt-4">
                    <span
                        className="text-white font-[800] text-[13px] tracking-[0%] uppercase"
                        style={{ fontFamily: '"Power Grotesk Variable", sans-serif' }}
                    >
                        DNA
                    </span>
                </button>
            </nav>

            {/* --- Bottom Profile Picture --- */}
            {/* mt-auto pushes this element to the very bottom */}
            <div className="mt-auto pb-4">
                <button className="rounded-full overflow-hidden border-2 border-transparent hover:border-zinc-600 transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="User Profile"
                        className="w-10 h-10 object-cover opacity-90 hover:opacity-100"
                    />
                </button>
            </div>

        </aside>
    );
}