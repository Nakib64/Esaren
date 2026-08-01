'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Zap, Users, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: '01',
    title: 'Sovereign Project Management',
    tagline: 'Execution Excellence',
    desc: 'Transforming high-stakes government and institutional concepts into operationally resilient, multi-generational infrastructure ventures.',
    icon: ShieldCheck,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Cross-Border Capital Facilitation',
    tagline: 'Strategic Financing',
    desc: 'Connecting sovereign wealth, institutional capital, and private equity to high-yield international projects with rigorous governance.',
    icon: Compass,
    coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Digital & AI Ecosystem Transformation',
    tagline: 'Future Readiness',
    desc: 'Modernizing legacy enterprise architectures through AI-driven decision engines, cloud ecosystems, and secure digital infrastructure.',
    icon: Zap,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Global Human Capital Development',
    tagline: 'Talent & Leadership',
    desc: 'Nurturing executive leadership, workforce capability, and specialized talent networks across international business landscapes.',
    icon: Users,
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
];

/* ─────────────────────────────────────────────────────────
   DESKTOP: GSAP horizontal sticky scroll (current/new)
───────────────────────────────────────────────────────── */
function DesktopAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getSlideWidth = () => (pillars.length - 1) * window.innerWidth;

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
    <section ref={sectionRef} id="about" className="relative h-screen overflow-hidden bg-[#f4f1ea] text-[#0c1a30]">
      {/* Fixed header */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-10 pb-5 px-6 md:px-16 bg-gradient-to-b from-[#f4f1ea] via-[#f4f1ea]/95 to-transparent pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase shadow-sm">
              <span>About Esaren Global</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0c1a30] tracking-tight leading-tight">
              Bridging Visionary Strategy With International Execution
            </h2>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div>
              <span className="text-2xl font-bold font-mono text-[#0c1a30]">$12B+</span>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Facilitated Assets</p>
            </div>
            <div className="w-px h-10 bg-slate-300" />
            <div>
              <span className="text-2xl font-bold font-mono text-[#1e3a8a]">35+</span>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Global Markets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal slide track */}
      <div ref={trackRef} className="flex h-full will-change-transform" style={{ width: `${pillars.length * 100}vw` }}>
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="w-screen h-full flex items-center justify-center px-6 md:px-16 shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-5xl mt-36 md:mt-28"
              >
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center rounded-3xl bg-white border border-slate-200/80 shadow-2xl shadow-slate-900/8 overflow-hidden">
                  <div className="relative md:col-span-5 h-64 md:h-[420px] overflow-hidden bg-slate-100">
                    <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,transparent_70%)] pointer-events-none z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#0c1a30] uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">Pillar {item.id}</span>
                    </div>
                  </div>
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono tracking-widest text-[#1e3a8a] uppercase font-semibold">{item.tagline}</span>
                        <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0c1a30] group-hover:bg-[#0c1a30] group-hover:text-white transition-all duration-500 shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#0c1a30] tracking-tight leading-snug group-hover:text-[#1e3a8a] transition-colors duration-500">{item.title}</h3>
                      <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500 group-hover:text-[#0c1a30] transition-colors duration-500">Explore Pillar Strategy</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#0c1a30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   MOBILE: Original grid layout with Framer Motion animations
───────────────────────────────────────────────────────── */
function MobileAbout() {
  return (
    <section id="about" className="relative py-28 bg-[#f4f1ea] text-[#0c1a30] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Header — two-column on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase shadow-sm">
              <span>About Esaren Global</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a30] tracking-tight leading-tight">
              Bridging Visionary Strategy With International Execution
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              Esaren Global serves as a trusted catalyst for governments, corporations, and institutional investors. We turn complex strategic ambitions into resilient ventures that scale globally.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <span className="text-3xl font-bold font-mono text-[#0c1a30]">$12B+</span>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-0.5">Facilitated Assets</p>
              </div>
              <div className="w-px h-10 bg-slate-300" />
              <div>
                <span className="text-3xl font-bold font-mono text-[#1e3a8a]">35+</span>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-0.5">Global Markets</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-5 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 overflow-hidden hover:shadow-2xl hover:border-[#0c1a30]/30 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Cover Image — 2 of 5 cols */}
                <div className="col-span-2 relative overflow-hidden bg-slate-100 min-h-[260px]">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {/* Sweep shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,transparent_70%)] pointer-events-none z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#0c1a30] uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                      Pillar {item.id}
                    </span>
                  </div>
                </div>

                {/* Content — 3 of 5 cols */}
                <div className="col-span-3 p-7 lg:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest text-[#1e3a8a] uppercase font-semibold">
                        {item.tagline}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0c1a30] group-hover:bg-[#0c1a30] group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold font-serif text-[#0c1a30] leading-snug group-hover:text-[#1e3a8a] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 group-hover:text-[#0c1a30] transition-colors duration-500">
                      Explore Pillar Strategy
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0c1a30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile === null) return null;
  return isMobile ? <DesktopAbout /> : <MobileAbout />;
}
