'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Building2, TrendingUp, Cpu } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Transforming Ambitious Ideas Into Global Ventures',
    subtitle: 'Government & Enterprise Infrastructure',
    description:
      'Esaren Global collaborates with sovereign funds, international corporations, and visionaries to execute multi-billion dollar project management and strategic investments.',
    tag: 'Sovereign Partnerships',
    icon: Building2,
    bgImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Facilitating Capital & Cross-Border Deals',
    subtitle: 'Investment & Strategic Strategy',
    description:
      'Bridging financial ecosystems across North America, Europe, Asia, and emerging markets to unlock unprecedented growth and sustainable economic capital.',
    tag: 'Global Capital',
    icon: TrendingUp,
    bgImage:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Pioneering Digital & Human Capital Transformation',
    subtitle: 'AI, Technology & Organizational Growth',
    description:
      'Empowering public and private institutions with cutting-edge digital architecture, AI integration, and world-class leadership capability.',
    tag: 'Digital Evolution',
    icon: Cpu,
    bgImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const slideTextRef = useRef<HTMLDivElement>(null);
  const slideBgRef = useRef<HTMLDivElement>(null);

  // Mobile viewport detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Drag / Swipe State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const nextSlide = () => {
    animateSlideChange((current + 1) % slides.length);
  };

  const prevSlide = () => {
    animateSlideChange((current - 1 + slides.length) % slides.length);
  };

  const animateSlideChange = (newIndex: number) => {
    if (!slideTextRef.current || !slideBgRef.current) {
      setCurrent(newIndex);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(newIndex);
        setDragOffset(0);
        gsap.fromTo(
          slideTextRef.current?.children || [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
        gsap.fromTo(
          slideBgRef.current,
          { scale: 1.1, opacity: 0.8 },
          { scale: 1, opacity: 0.95, duration: 1.2, ease: 'power2.out' }
        );
      },
    });

    tl.to(slideTextRef.current?.children || [], {
      y: -20,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.in',
    });
  };

  // Drag Gesture Event Handlers
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60; // minimum drag pixels to trigger slide swap

    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    } else {
      setDragOffset(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 7000);
    return () => clearInterval(timer);
  }, [current, isDragging]);

  const activeSlide = slides[current];
  const IconComponent = activeSlide.icon;

  return (
    <section
      className={`relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#f9f6f0] text-[#0c1a30] select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseMove={(e) => handlePointerMove(e.clientX)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
      onTouchEnd={handlePointerUp}
    >
      {/* Background Image */}
      <div
        ref={slideBgRef}
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter brightness-95 contrast-105 opacity-95 scale-105"
        style={{
          backgroundImage: `url(${activeSlide.bgImage})`,
          transform: `translateX(${dragOffset * 0.15}px) scale(${isDragging ? 1.03 : 1})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f6f0] via-[#f9f6f0]/75 to-[#f9f6f0]/10" />
      </div>

      {/* Titanium Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Content Overlay with Fast Mobile Framer Motion Entrance */}
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
        transition={{ duration: isMobile ? 0.35 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full pt-24 pb-16 flex flex-col justify-between h-full pointer-events-none"
      >
        <div className="flex-1 flex flex-col justify-center max-w-4xl pointer-events-auto">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase mb-6 shadow-md w-fit font-bold">
            <IconComponent className="w-3.5 h-3.5 text-[#1e3a8a]" />
            <span>{activeSlide.tag}</span>
          </div>

          <div ref={slideTextRef} className="space-y-6">
            <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-[#1e3a8a] font-mono">
              {activeSlide.subtitle}
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#0c1a30] leading-[1.1] text-reveal">
              {activeSlide.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl font-light leading-relaxed text-reveal">
              {activeSlide.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#services"
                className="group px-8 py-4 rounded-full bg-[#0c1a30] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#162848] transition-all duration-300 shadow-xl shadow-slate-900/15 hover:scale-105"
              >
                <span>Explore Ventures</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="px-8 py-4 rounded-full bg-white text-[#0c1a30] font-semibold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all duration-300 border border-slate-200 flex items-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#1e3a8a]" />
                <span>Our Impact</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slide Controller & Indicators */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-slate-300/80 pointer-events-auto">
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => animateSlideChange(idx)}
                className="group flex flex-col gap-1 text-left focus:outline-none"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === current ? 'w-16 bg-[#0c1a30] shadow-md' : 'w-6 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
                <span
                  className={`text-[10px] font-mono tracking-widest ${
                    idx === current ? 'text-[#0c1a30] font-bold' : 'text-slate-500'
                  }`}
                >
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-600 tracking-widest">
              <span className="text-[#0c1a30] font-bold">0{current + 1}</span> / 0{slides.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0c1a30] hover:bg-[#0c1a30] hover:text-white transition-all duration-300 shadow-sm group cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0c1a30] hover:bg-[#0c1a30] hover:text-white transition-all duration-300 shadow-sm group cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
