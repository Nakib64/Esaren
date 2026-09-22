'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HERO_SLIDES } from '@/data/heroData';
import HeroControls from '@/components/hero/HeroControls';

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const slideBgRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7500);
    return () => clearInterval(timer);
  }, [current]);

  const activeSlide = HERO_SLIDES[current];
  const IconComponent = activeSlide.icon;

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#f9f6f0] text-[#0c1a30] select-none">
      {/* Background Image Overlay */}
      <div
        ref={slideBgRef}
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 filter brightness-95 contrast-105 opacity-95"
        style={{ backgroundImage: `url(${activeSlide.bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f6f0] via-[#f9f6f0]/85 to-[#f9f6f0]/20" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full pt-28 pb-16 flex flex-col justify-between h-full">
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase mb-6 shadow-md w-fit font-bold">
            <IconComponent className="w-3.5 h-3.5 text-[#1e3a8a]" />
            <span>{activeSlide.tag}</span>
          </div>

          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#1e3a8a] font-mono">
              {activeSlide.subtitle}
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#0c1a30] leading-[1.15]">
              {activeSlide.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl font-light leading-relaxed">
              {activeSlide.description}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href={activeSlide.primaryLink}
                className="group px-7 py-4 rounded-full bg-[#0c1a30] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#1e3a8a] transition-all shadow-lg hover:scale-105"
              >
                <span>{activeSlide.primaryText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="px-7 py-4 rounded-full bg-white/90 border border-slate-300 text-[#0c1a30] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:border-slate-400 transition-all shadow-sm"
              >
                <span>About Esaren Global</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Modular Slider Controls */}
        <HeroControls
          current={current}
          onPrev={prevSlide}
          onNext={nextSlide}
          onSelect={(idx) => setCurrent(idx)}
        />
      </div>
    </section>
  );
}
