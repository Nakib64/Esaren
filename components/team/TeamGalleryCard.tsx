'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { TeamGalleryItem } from '@/data/teamGalleryData';

interface TeamGalleryCardProps {
  item: TeamGalleryItem;
  index: number;
}

export default function TeamGalleryCard({ item, index }: TeamGalleryCardProps) {
  const heightClass = item.heightClass || 'h-[500px] sm:h-[540px] lg:h-[560px]';
  const objectPosition = item.objectPosition || 'object-center';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative w-full ${heightClass} ${item.gridSpan} rounded-3xl overflow-hidden border border-slate-200/90 hover:border-gold-border card-hover-gold-accent shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-900`}
    >
      {/* Full Cover Photo */}
      <img
        src={item.image}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover ${objectPosition} ${
          objectPosition.includes('top') ? 'origin-top' : 'origin-center'
        } filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
        loading="lazy"
      />

      {/* Top Floating Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
        <span className="text-[10px] font-bold tracking-widest uppercase badge-gold px-3.5 py-1 rounded-full shadow-md">
          {item.badge}
        </span>
        <div className="bg-[#0c1a30]/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-medium text-white shadow-sm flex items-center gap-1.5 border border-white/20">
          <MapPin className="w-3 h-3 text-gold-light" />
          <span>{item.location}</span>
        </div>
      </div>

      {/* Desktop Resting State: Title on subtle dark gradient */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 flex-col justify-end bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/70 to-transparent pt-24 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase text-gold-light font-bold block mb-1">
          {item.badge}
        </span>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
          {item.title}
        </h3>
      </div>

      {/* Navy Blue Background with Golden Text: Hover on Desktop, Always Visible on Mobile */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-[#0c1a30]/95 backdrop-blur-md p-6 sm:p-8 border-t border-gold-border/40 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-0 opacity-100 md:translate-y-full md:opacity-0 group-hover:md:translate-y-0 group-hover:md:opacity-100">
        <div className="space-y-2.5">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-gold-light font-bold block mb-0.5">
              {item.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-tight">
              {item.title}
            </h3>
          </div>

          {/* Decorative Gold Accent Line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--gold-primary)] to-transparent" />

          {/* Description in Golden Text */}
          <p className="text-xs sm:text-sm font-light leading-relaxed text-gold-light">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
