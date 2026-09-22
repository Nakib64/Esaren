'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_PILLARS, AboutPillar } from '@/data/aboutPillars';
import AboutPillarCard from '@/components/about/AboutPillarCard';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAboutCarousel() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pinEl = pinRef.current;
    const track = trackRef.current;
    if (!pinEl || !track) return;

    const mm = gsap.matchMedia();
    mm.add('(max-width: 767px)', () => {
      const getSlideWidth = () => (ABOUT_PILLARS.length - 1) * window.innerWidth;
      gsap.to(track, {
        x: () => -getSlideWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: () => `+=${getSlideWidth()}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative w-full">
      <div ref={pinRef} className="relative h-screen overflow-hidden bg-[#f4f1ea] text-[#0c1a30]">
        {/* Fixed header matching screenshot */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-10 pb-4 px-6 bg-gradient-to-b from-[#f4f1ea] via-[#f4f1ea]/95 to-transparent pointer-events-none">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-[11px] font-mono tracking-widest uppercase shadow-sm">
              <span>About Esaren Global</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a30] tracking-tight leading-snug">
              Bridging Visionary Strategy With International Execution
            </h2>
            <div className="flex items-center gap-6 pt-1">
              <div>
                <span className="text-xl font-bold font-mono text-[#0c1a30]">$12B+</span>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Facilitated Assets</p>
              </div>
              <div className="w-px h-7 bg-slate-300" />
              <div>
                <span className="text-xl font-bold font-mono text-[#1e3a8a]">35+</span>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Global Markets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal track driven by Lenis + GSAP */}
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${ABOUT_PILLARS.length * 100}vw` }}
        >
          {ABOUT_PILLARS.map((item: AboutPillar) => (
            <div
              key={item.id}
              className="w-screen h-full flex items-center justify-center px-6 shrink-0"
            >
              <AboutPillarCard item={item} className="w-full max-w-sm mt-28 shadow-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
