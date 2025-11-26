import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import DnaPanel from "@/components/DnaPanel"; // Note: Fixed Typo DanPanel -> DnaPanel
import { PlayerProvider } from "@/context/PlayerContext"; // IMPORT THIS
import GlobalPlayer from "@/components/GlobalPlayer";     // IMPORT THIS

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
        {/* WRAP EVERYTHING IN PLAYER PROVIDER */}
        <PlayerProvider>
          
          <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />
            <DnaPanel />
            
            <main className="flex-1 h-full overflow-y-auto no-scrollbar rounded-tl-lg border-l border-neutral-800 pb-24">
              {children}
            </main>
          </div>

          {/* ADD THE PLAYER BAR HERE */}
          <GlobalPlayer />

        </PlayerProvider>
      </body>
    </html>
  );
}