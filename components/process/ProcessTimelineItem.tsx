'use client';

import { motion } from 'framer-motion';
import { Target, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProcessStep } from '@/data/processData';

const ICON_MAP = {
  Target,
  ShieldCheck,
  Award,
};

interface ProcessTimelineItemProps {
  item: ProcessStep;
  index: number;
}

export default function ProcessTimelineItem({ item, index }: ProcessTimelineItemProps) {
  const Icon = ICON_MAP[item.iconName];
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 ${isEven ? 'md:flex-row-reverse' : ''
        }`}
    >
      {/* Tree Node Center Icon Circle (Pinned on Vertical Trunk Line) */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-navy-gradient text-gold-light border-4 border-[#f4f1ea] flex items-center justify-center shadow-xl z-20"
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6 stroke-[2]" />
      </motion.div>

      {/* Card Half */}
      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? 40 : -40,
          y: 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full md:w-[45%] pl-16 sm:pl-20 md:pl-0 group"
      >
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 md:p-10 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-gold-border card-hover-gold-accent transition-all duration-500 relative space-y-4">
          {/* Top Row: Phase Tag & Number */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest uppercase badge-gold px-3.5 py-1.5 rounded-full">
              {item.phase}
            </span>
            <span className="text-2xl font-bold text-[#0c1a30]/30 group-hover:text-navy transition-colors">
              {item.step}
            </span>
          </div>

          {/* Step Title & Subtitle */}
          <div className="space-y-1">
            <span className="text-xs text-gold-dark font-semibold block">
              {item.managedBy}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a30] leading-snug group-hover:text-gold-dark transition-colors">
              {item.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            {item.summary}
          </p>

          {/* Key Actions Checklist from Corporate PDF */}
          <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600 font-light">
            {item.actions.slice(0, 3).map((action) => (
              <li key={action} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                <span>{action}</span>
              </li>
            ))}
          </ul>

          {/* Bottom Link matching screenshot */}
          <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-gold-dark transition-colors">
            <span>Verified Workflow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>

      {/* Empty Spacer Half for Desktop Alignment */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}
