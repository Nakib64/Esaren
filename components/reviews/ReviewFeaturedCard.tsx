'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '@/data/testimonialsData';

interface ReviewFeaturedCardProps {
  testimonial: TestimonialItem;
  activeIndex: number;
  dir: 'left' | 'right';
}

export default function ReviewFeaturedCard({
  testimonial: t,
  activeIndex,
  dir,
}: ReviewFeaturedCardProps) {
  return (
    <div className="lg:col-span-7 relative min-h-[460px]">
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
              <img
                src={t.photo}
                alt={t.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 shadow-md"
              />
              <div>
                <h4 className="text-base font-bold font-serif text-[#0c1a30]">{t.author}</h4>
                <p className="text-xs font-mono text-slate-500">
                  {t.role} • <span className="text-[#1e3a8a]">{t.location}</span>
                </p>
              </div>
            </div>
            <div className="flex gap-1 text-[#1e3a8a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
