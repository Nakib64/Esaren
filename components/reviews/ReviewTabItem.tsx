'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TestimonialItem } from '@/data/testimonialsData';

interface ReviewTabItemProps {
  item: TestimonialItem;
  idx: number;
  isActive: boolean;
  onSelect: (idx: number) => void;
}

export default function ReviewTabItem({
  item,
  idx,
  isActive,
  onSelect,
}: ReviewTabItemProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(idx)}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`text-left p-6 rounded-2xl border transition-all duration-400 cursor-pointer flex items-center justify-between w-full ${
        isActive
          ? 'bg-[#0c1a30] text-white border-[#0c1a30] shadow-lg shadow-slate-900/15 translate-x-1'
          : 'bg-white text-[#0c1a30] border-slate-200/80 hover:border-slate-400 hover:bg-slate-50 shadow-sm'
      }`}
    >
      <div className="space-y-1">
        <span
          className={`text-[10px] font-mono tracking-widest uppercase block ${
            isActive ? 'text-sky-300' : 'text-[#1e3a8a]'
          }`}
        >
          {item.organization}
        </span>
        <h4
          className={`text-base font-bold font-serif ${
            isActive ? 'text-white' : 'text-[#0c1a30]'
          }`}
        >
          {item.author}
        </h4>
        <p className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
          {item.role} ({item.location})
        </p>
      </div>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
        }`}
      >
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.button>
  );
}
