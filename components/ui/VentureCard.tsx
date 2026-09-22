'use client';

import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, MapPin } from 'lucide-react';

interface VentureCardProps {
  name: string;
  country: string;
  focus: string;
  description: string;
  website?: string;
  index: number;
}

export default function VentureCard({
  name,
  country,
  focus,
  description,
  website,
  index,
}: VentureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#0c1a30]/30 transition-all duration-400 flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        {/* Header Tag & Location */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#1e3a8a] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100 font-semibold">
            {focus}
          </span>
          <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
            <MapPin className="w-3 h-3 text-[#1e3a8a]" />
            <span>{country}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-[#0c1a30] leading-snug group-hover:text-[#1e3a8a] transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm font-light leading-relaxed">
          {description}
        </p>
      </div>

      {/* Website Link Footer if available */}
      {website && (
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5 hover:text-[#0c1a30] transition-colors">
            <Globe className="w-3.5 h-3.5 text-[#1e3a8a]" />
            <span>{website}</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </motion.article>
  );
}
