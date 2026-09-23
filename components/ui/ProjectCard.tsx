'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '@/data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-gold-border card-hover-gold-accent transition-all duration-500 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl hover:shadow-slate-900/8 flex flex-col justify-between overflow-hidden p-8 sm:p-9"
    >
      {/* Decorative architectural background watermark number */}
      <div className="absolute top-6 right-7 text-6xl sm:text-7xl font-bold text-slate-100 select-none pointer-events-none group-hover:text-slate-200/70 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="space-y-6 relative z-10">
        {/* Top Meta: Category & Region without badge pills */}
        <div className="flex items-center justify-between text-xs tracking-wider pr-12">
          <div className="flex items-center gap-2 text-gold-dark font-semibold uppercase">
            <span>{project.category}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal">{project.country}</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
        </div>

        {/* Project Valuation: Prominent Typographic Display */}
        <div className="pt-2 pb-4 border-b border-slate-100">
          <span className="text-[11px] tracking-widest text-slate-400 uppercase block mb-1">
            Capital Valuation
          </span>
          <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0c1a30] tracking-tight group-hover:text-gold-dark transition-colors">
            {project.value}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a30] leading-snug group-hover:text-gold-dark transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Structured Institutional Spec Sheet */}
      <div className="pt-6 mt-6 border-t border-slate-100 relative z-10 space-y-3">
        <div>
          <span className="text-[10px]  tracking-wider text-slate-400 uppercase block mb-0.5">
            Institutional Partner
          </span>
          <span className="text-xs font-medium text-slate-800 line-clamp-1">
            {project.partners}
          </span>
        </div>
        {project.year && (
          <div className="flex items-center justify-between text-[11px]  text-slate-500 pt-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px]">Execution Timeline</span>
            <span className="text-slate-700 font-semibold">{project.year}</span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
