'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Calendar, ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '@/data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-[#0c1a30]/30 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Visual Image Header */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30]/80 via-transparent to-transparent" />
        
        {/* Value Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#0c1a30] shadow-md border border-slate-200">
          {project.value}
        </div>

        {/* Country Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-mono text-white/95 bg-[#0c1a30]/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>{project.country}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-[#1e3a8a] uppercase font-bold block">
            {project.category}
          </span>
          <h3 className="text-xl font-serif font-bold text-[#0c1a30] leading-snug group-hover:text-[#1e3a8a] transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Partners & Meta Footer */}
        <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
          <div className="flex items-start gap-2">
            <Building2 className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
            <span className="font-light leading-snug">
              <strong className="font-semibold text-slate-700">Partners:</strong> {project.partners}
            </span>
          </div>
          {project.year && (
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Execution: {project.year}</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
