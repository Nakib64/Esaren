'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonialsData';
import ReviewFeaturedCard from '@/components/reviews/ReviewFeaturedCard';
import ReviewTabItem from '@/components/reviews/ReviewTabItem';

export default function DesktopReviewsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dir, setDir] = useState<'left' | 'right'>('left');
  const t = TESTIMONIALS[activeIndex];

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
        className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 space-y-12"
      >
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
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
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              100% Verified Institutional Record
            </p>
          </div>
        </div>

        {/* Main 12-col layout: featured card left + tabs right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <ReviewFeaturedCard testimonial={t} activeIndex={activeIndex} dir={dir} />

          {/* Tab selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {TESTIMONIALS.map((item, idx) => (
              <ReviewTabItem
                key={item.id}
                item={item}
                idx={idx}
                isActive={idx === activeIndex}
                onSelect={go}
              />
            ))}
          </div>
        </div>

        {/* Footer navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200/80">
          <span className="text-xs font-mono text-slate-500 tracking-widest">
            <span className="text-[#0c1a30] font-bold">0{activeIndex + 1}</span> / 0{TESTIMONIALS.length} ENDORSEMENTS
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0c1a30] hover:bg-[#0c1a30] hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go((activeIndex + 1) % TESTIMONIALS.length)}
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
