'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import { COMPLETED_PROJECTS } from '@/data/projectsData';

export default function ProjectsSection() {
  const featuredProjects = COMPLETED_PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#f9f6f0] text-[#0c1a30]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
              <span>Landmark Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a30] tracking-tight">
              USD 1.4 Billion+ in Completed Projects
            </h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              Managing high-stakes sovereign infrastructure, offshore LNG facilities, multi-lane highways, and utility-scale renewable energy installations across international borders.
            </p>
          </div>

          <Link
            href="/projects"
            className="group px-6 py-3.5 rounded-full btn-navy-gold font-bold text-xs uppercase tracking-widest flex items-center gap-3 shrink-0 self-start lg:self-end"
          >
            <span>Explore All 10 Megaprojects</span>
            <ArrowRight className="w-4 h-4 text-gold-light group-hover:text-gold-lighter transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
