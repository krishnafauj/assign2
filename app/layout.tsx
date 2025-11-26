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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-black`}>
        <PlayerProvider>
          <UIProvider>
            {/* Flex container for the 3-column layout */}
            <div className="flex h-screen w-full overflow-hidden relative">
              
              {/* 1. Sidebar (Always visible or responsive hidden if needed) */}
              <Sidebar />

              {/* 2. DNA Panel (Collapsible) */}
              <DnaPanel />
              
              {/* 3. Main Content Area */}
              <main className="flex-1 h-full overflow-y-auto no-scrollbar rounded-tl-lg border-l border-neutral-800 pb-0 relative">
                {children}
              </main>

            </div>
          </UIProvider>
        </PlayerProvider>
      </body>
    </html>
  );
}