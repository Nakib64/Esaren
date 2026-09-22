'use client';

import { motion } from 'framer-motion';
import { ABOUT_PILLARS } from '@/data/aboutPillars';
import DesktopPillarCard from '@/components/about/DesktopPillarCard';
import MobileAboutCarousel from '@/components/about/MobileAboutCarousel';

export default function AboutSection() {
  return (
    <div className="w-full">
      {/* Mobile Device View (Lenis + GSAP Horizontal Sticky Scroll) */}
      <div className="block md:hidden">
        <MobileAboutCarousel />
      </div>

      {/* Desktop Device View (2x2 Split Card Grid matching screenshot) */}
      <div className="hidden md:block">
        <section id="about" className="relative py-28 bg-[#f4f1ea] text-[#0c1a30] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 space-y-16"
          >
            {/* Header — two-column on desktop matching screenshot */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
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
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-0.5">
                      Facilitated Assets
                    </p>
                  </div>
                  <div className="w-px h-10 bg-slate-300" />
                  <div>
                    <span className="text-3xl font-bold font-mono text-[#1e3a8a]">35+</span>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-0.5">
                      Global Markets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2×2 card grid matching screenshot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {ABOUT_PILLARS.map((item, index) => (
                <DesktopPillarCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
