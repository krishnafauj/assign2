import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Sidebar from "@/components/Sidebar";

import DnaPanel from "@/components/DnaPanel";

import { PlayerProvider } from "@/context/PlayerContext";

import { UIProvider } from "@/context/UiContext"; // Import Context



const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {

  title: "Soundverse DNA",

  description: "Assignment",

};



// src/app/layout.tsx



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en">

      <body className={`${inter.className} text-white bg-black`}>

        <PlayerProvider>

          <UIProvider>

           

            {/* 1. h-[100dvh]: Force app to fit visible screen (fixes mobile URL bar issue).

               2. overflow-hidden: Prevent the whole page from scrolling.

            */}

            <div className="flex h-[100dvh] w-full overflow-hidden relative">

             

              <Sidebar />

              <DnaPanel />

             

              {/* Main Content Area */}

              <main className="flex-1 h-full overflow-hidden rounded-tl-lg border-l border-neutral-800 pb-0 relative">

                {children}

              </main>



            </div>

          </UIProvider>

        </PlayerProvider>

      </body>

    </html>

  );

}