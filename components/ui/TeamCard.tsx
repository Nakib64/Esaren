'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
      className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-2xl hover:border-gold-border card-hover-gold-accent transition-all duration-500 flex flex-col justify-between"
    >
      {/* Photo & Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30]/85 via-transparent to-transparent" />

        {member.location && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#0c1a30] shadow-sm flex items-center gap-1 border border-slate-200">
            <MapPin className="w-3 h-3 text-gold-dark" />
            <span>{member.location}</span>
          </div>
        )}

        <div className="absolute bottom-4 left-6 right-6 text-white">
          <span className="text-[10px] tracking-widest uppercase text-gold-light font-semibold block mb-0.5">
            {member.category}
          </span>
          <h3 className="text-xl font-serif font-bold tracking-tight text-white leading-tight">
            {member.name}
          </h3>
          <p className="text-xs text-slate-200 font-light mt-0.5">{member.role}</p>
        </div>
      </div>

      {/* Bio Description Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
          {member.bio}
        </p>
      </div>
    </motion.article>
  );
}
