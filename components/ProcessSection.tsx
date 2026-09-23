'use client';

import { motion } from 'framer-motion';
import { CONSULTING_PROCESS } from '@/data/processData';
import ProcessTimelineItem from '@/components/process/ProcessTimelineItem';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-[#f4f1ea] text-[#0c1a30] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
            <span>Stakeholders' Procedure in Consulting Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#0c1a30]">
            From Vision To Sovereign Execution
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light">
            In connecting all necessary stakeholders from initialization to execution, EGL follows strict process adherence.
          </p>
        </motion.div>

        {/* Tree Timeline Container */}
        <div className="relative">
          {/* Continuous Vertical Trunk Line (Left side on Mobile, Center on Desktop) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-12 w-1 -translate-x-1/2 bg-gradient-to-b from-[var(--navy-brand)] via-[var(--gold-primary)] to-[var(--navy-brand)] rounded-full opacity-40 pointer-events-none" />

          <div className="space-y-10 md:space-y-16">
            {CONSULTING_PROCESS.map((item, index) => (
              <ProcessTimelineItem key={item.step} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
