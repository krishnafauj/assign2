"use client";
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current!, // The container causing the scroll
      content: contentRef.current!, // The content inside
      duration: 1.2, // Speed of the glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="h-full overflow-y-auto scrollbar-hide ">
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}