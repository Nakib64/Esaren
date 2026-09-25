'use client';

import { motion } from 'framer-motion';
import type { TeamMember } from '@/data/teamData';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative h-[480px] sm:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200/90 hover:border-gold-border card-hover-gold-accent shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-900"
    >
      {/* Full Cover Photo */}
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        loading="lazy"
      />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="text-[10px] font-bold tracking-widest uppercase badge-gold px-3 py-1 rounded-full shadow-md">
          {member.category}
        </span>
      </div>

      {/* Desktop Resting State: Name & Role on subtle dark gradient */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 z-10 p-6 flex-col justify-end bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/70 to-transparent pt-24 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase text-gold-light font-bold block mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {member.role}
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-tight">
          {member.name}
        </h3>
      </div>

      {/* Navy Blue Background with Golden Bio: Hover on Desktop, Always Visible on Mobile */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-[#0c1a30]/95 backdrop-blur-md p-6 sm:p-7 border-t border-gold-border/40 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-0 opacity-100 md:translate-y-full md:opacity-0 group-hover:md:translate-y-0 group-hover:md:opacity-100">
        <div className="space-y-2.5">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-gold-light font-bold block mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
              {member.role}
            </span>
            <h3 className="text-xl font-serif font-bold text-white tracking-tight leading-tight">
              {member.name}
            </h3>
          </div>

          {/* Decorative Gold Accent Line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--gold-primary)] to-transparent" />

          {/* Bio in Golden Text */}
          <p className="text-xs sm:text-sm font-light leading-relaxed text-gold-light">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

