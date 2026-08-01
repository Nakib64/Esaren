'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: '01',
    author: 'H.E. Tariq Al-Hassan',
    role: 'Minister of Investment',
    organization: 'Sovereign Commerce Authority',
    location: 'United Arab Emirates',
    metric: '$2.4B Logistics Hub',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    title: 'Transformational Sovereign Logistics & Infrastructure',
    quote: 'Esaren Global transformed our national logistics blueprint into a $2.4B operational hub. Their execution standard and sovereign deal governance have been exemplary across every phase.',
  },
  {
    id: '02',
    author: 'Sarah Jenkins',
    role: 'Chief Executive Officer',
    organization: 'Global Apex Infrastructure',
    location: 'London, United Kingdom',
    metric: '12 Target Markets',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    title: 'Flawless Cross-Border Capital & Equity Execution',
    quote: 'Esaren Global structured our multi-billion dollar private equity deployment across 12 international jurisdictions with unmatched legal precision and deal velocity.',
  },
  {
    id: '03',
    author: 'Jean-Luc Dupont',
    role: 'Managing Director',
    organization: 'Sovereign Growth & Innovation Fund',
    location: 'Zurich, Switzerland',
    metric: '18 Months Ahead',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    title: 'Enterprise AI & Institutional Digital Transformation',
    quote: 'The AI decision integration delivered by Esaren Global modernized our entire institutional asset portfolio in record time, yielding immediate operational efficiency.',
  },
  {
    id: '04',
    author: 'Dr. Aris Thorne',
    role: 'Director of Capital Allocation',
    organization: 'Euro-Asian Clean Energy Consortium',
    location: 'Frankfurt, Germany',
    metric: 'Multi-Gigawatt Grid',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    title: 'Clean Energy Grid Acceleration & Governance',
    quote: 'Their human capital framework accelerated our international renewable energy deployment by 18 full months ahead of schedule, setting a new benchmark for clean tech ventures.',
  },
];

/* ─────────────────────────────────────────────────────────
   DESKTOP: GSAP horizontal sticky scroll
───────────────────────────────────────────────────────── */
function DesktopReviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getSlideWidth = () => (testimonials.length - 1) * window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getSlideWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getSlideWidth()}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="reviews" className="relative h-screen overflow-hidden bg-[#f4f1ea] text-[#0c1a30]">
      {/* Fixed header */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-10 pb-5 px-6 md:px-16 bg-gradient-to-b from-[#f4f1ea] via-[#f4f1ea]/95 to-transparent pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
              <span>Institutional Endorsements</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#0c1a30]">
              Endorsed By Sovereign & Corporate Leaders
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Scroll to explore</span>
            <ChevronRight className="w-4 h-4 text-[#1e3a8a]" />
          </div>
        </div>
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="flex h-full will-change-transform" style={{ width: `${testimonials.length * 100}vw` }}>
        {testimonials.map((t) => (
          <div key={t.id} className="w-screen h-full flex items-center justify-center px-6 md:px-16 shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl mt-32 md:mt-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                <div className="md:col-span-8 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-2xl shadow-slate-900/8 relative overflow-hidden">
                  <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-100 pointer-events-none" />
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-xs font-mono tracking-widest text-[#1e3a8a] uppercase bg-[#f8fafc] px-3.5 py-1.5 rounded-full border border-slate-200 font-semibold">{t.organization}</span>
                    <span className="text-xs font-mono font-bold text-[#0c1a30] bg-[#f4f1ea] px-3.5 py-1.5 rounded-full">Impact: {t.metric}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0c1a30] leading-snug mb-4">"{t.title}"</h3>
                  <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed mb-8">{t.quote}</p>
                  <div className="flex gap-1 text-[#1e3a8a]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="md:col-span-4 flex flex-col gap-4">
                  <div className="rounded-3xl bg-[#0c1a30] text-white p-7 shadow-xl space-y-4">
                    <img src={t.photo} alt={t.author} className="w-16 h-16 rounded-2xl object-cover border-2 border-white/20 shadow" />
                    <div>
                      <h4 className="text-lg font-bold font-serif">{t.author}</h4>
                      <p className="text-xs font-mono text-slate-300 mt-1">{t.role}</p>
                      <p className="text-xs font-mono text-[#60a5fa] mt-0.5">{t.location}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 flex items-center justify-between shadow-sm">
                    <span className="text-xs font-mono text-slate-500">Endorsement</span>
                    <span className="text-2xl font-mono font-bold text-[#0c1a30]">
                      {t.id}<span className="text-slate-300 text-base">/{String(testimonials.length).padStart(2, '0')}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   MOBILE: Original featured card + tabs layout with Framer Motion
───────────────────────────────────────────────────────── */
function MobileReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dir, setDir] = useState<'left' | 'right'>('left');
  const t = testimonials[activeIndex];

  const go = (idx: number) => {
    setDir(idx > activeIndex ? 'left' : 'right');
    setActiveIndex(idx);
  };

  return (
    <section id="reviews" className="py-28 md:py-36 bg-[#f4f1ea] text-[#0c1a30] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
              <span>Institutional Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#0c1a30]">
              Endorsed By Sovereign & Corporate Leaders
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right space-y-2">
            <div className="flex items-center lg:justify-end gap-1.5 text-[#1e3a8a]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">100% Verified Institutional Record</p>
          </div>
        </div>

        {/* Main 12-col layout: featured card left + tabs right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

          {/* Featured card */}
          <div className="lg:col-span-7 relative min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: dir === 'left' ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir === 'left' ? 30 : -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full rounded-3xl bg-white border border-slate-200/80 p-10 md:p-12 shadow-2xl shadow-slate-900/8 flex flex-col justify-between relative overflow-hidden"
              >
                <Quote className="absolute top-8 right-8 w-28 h-28 text-slate-100 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono tracking-widest text-[#1e3a8a] uppercase bg-[#f8fafc] px-4 py-1.5 rounded-full border border-slate-200 font-semibold">
                      {t.organization}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0c1a30] bg-[#f4f1ea] px-4 py-1.5 rounded-full">
                      Impact: {t.metric}
                    </span>
                  </div>
                  <div className="space-y-4 pt-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0c1a30] leading-snug">
                      "{t.title}"
                    </h3>
                    <p className="text-base md:text-lg text-[#475569] font-light leading-relaxed">
                      {t.quote}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <img src={t.photo} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 shadow-md" />
                    <div>
                      <h4 className="text-base font-bold font-serif text-[#0c1a30]">{t.author}</h4>
                      <p className="text-xs font-mono text-slate-500">{t.role} • <span className="text-[#1e3a8a]">{t.location}</span></p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-[#1e3a8a]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tab selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {testimonials.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => go(idx)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`text-left p-6 rounded-2xl border transition-all duration-400 cursor-pointer flex items-center justify-between ${
                  idx === activeIndex
                    ? 'bg-[#0c1a30] text-white border-[#0c1a30] shadow-lg shadow-slate-900/15 translate-x-1'
                    : 'bg-white text-[#0c1a30] border-slate-200/80 hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono tracking-widest uppercase block ${idx === activeIndex ? 'text-sky-300' : 'text-[#1e3a8a]'}`}>
                    {item.organization}
                  </span>
                  <h4 className={`text-base font-bold font-serif ${idx === activeIndex ? 'text-white' : 'text-[#0c1a30]'}`}>
                    {item.author}
                  </h4>
                  <p className={`text-xs ${idx === activeIndex ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.role} ({item.location})
                  </p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${idx === activeIndex ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200/80">
          <span className="text-xs font-mono text-slate-500 tracking-widest">
            <span className="text-[#0c1a30] font-bold">0{activeIndex + 1}</span> / 0{testimonials.length} ENDORSEMENTS
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => go((activeIndex - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0c1a30] hover:bg-[#0c1a30] hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go((activeIndex + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0c1a30] hover:bg-[#0c1a30] hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function ClientReviewSection() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile === null) return null;
  return isMobile ? <DesktopReviews /> : <MobileReviews />;
}
