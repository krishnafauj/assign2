// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import DnaPanel from "@/components/DnaPanel";
import { PlayerProvider } from "@/context/PlayerContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soundverse DNA",
  description: "Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-black`}>
        <PlayerProvider>
          <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />
            <DnaPanel />
            
            {/* The GlobalPlayer is REMOVED from here */}
            <main className="flex-1 h-full overflow-y-auto no-scrollbar rounded-tl-lg border-l border-neutral-800 pb-0">
              {children}
            </main>
          </div>
        </PlayerProvider>
      </body>
    </html>
  );
}