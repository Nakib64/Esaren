'use client';

import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

interface VentureCardProps {
  name: string;
  country: string;
  focus: string;
  description: string;
  monogram?: string;
  highlight?: string;
  category?: string;
  website?: string;
  index: number;
}

export default function VentureCard({
  name,
  country,
  focus,
  description,
  monogram,
  highlight,
  category,
  website,
  index,
}: VentureCardProps) {
  const initials = monogram || name.split(' ').map((n) => n[0]).slice(0, 2).join('');
  const webHref = website ? `https://${website.replace(/^https?:\/\//, '')}` : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 hover:border-gold-border card-hover-gold-accent transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Decorative ambient background mesh & watermark */}
      <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br from-blue-100/50 via-amber-50/40 to-transparent blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
      <span className="absolute right-6 bottom-5 font-serif font-black text-6xl text-slate-100/70 select-none pointer-events-none group-hover:text-slate-200/60 group-hover:scale-110 transition-all duration-700">
        {initials}
      </span>

      {/* Card Content Top Section */}
      <div className="space-y-6 relative z-10">
        {/* Top Header: Monogram stamp + Tags */}
        <div className="flex items-start justify-between gap-4">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-navy-gradient text-gold-light border border-gold group-hover:border-gold-hover flex items-center justify-center font-serif font-bold text-lg sm:text-xl tracking-wider shadow-md shadow-slate-900/20 group-hover:scale-105 transition-all duration-300">
            {initials}
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider badge-gold shadow-sm">
              {focus}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-gold-dark" />
              <span>{country}</span>
            </div>
          </div>
        </div>

        {/* Title and Highlight */}
        <div className="space-y-2 pt-2">
          {highlight && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/80 text-[10px] font-medium text-slate-700">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>{highlight}</span>
            </div>
          )}

          <h3 className="text-2xl sm:text-[1.65rem] font-serif font-bold text-[#0c1a30] leading-snug group-hover:text-gold-dark transition-colors">
            {name}
          </h3>

          <p className="text-slate-600 text-sm font-light leading-relaxed pt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Footer Interactive Row */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
        {webHref ? (
          <a
            href={webHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gold-dark hover:text-navy font-medium transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{website}</span>
          </a>
        ) : (
          <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{category || 'Strategic Venture'}</span>
          </span>
        )}

        <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-navy-gradient text-[#0c1a30] group-hover:text-gold-light border border-transparent group-hover:border-gold flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105 shrink-0">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}
