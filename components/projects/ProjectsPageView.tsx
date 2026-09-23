'use client';

import { useState } from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import ProjectCard from '@/components/ui/ProjectCard';
import { COMPLETED_PROJECTS } from '@/data/projectsData';
import { DollarSign, Compass, Award } from 'lucide-react';

const categories = [
  'All Megaprojects',
  'Highways & Rail',
  'Energy & Industrial',
  'Aviation & Hospitality',
] as const;

type CategoryType = (typeof categories)[number];

export default function ProjectsPageView() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All Megaprojects');

  const filteredProjects =
    activeCategory === 'All Megaprojects'
      ? COMPLETED_PROJECTS
      : COMPLETED_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      <SubpageHero
        badge="Landmark Portfolio"
        title="Completed Megaprojects & Global Deliveries"
        description="A proven track record spanning over USD 1.4 Billion in critical infrastructure, expressways, deep-sea energy terminals, and utility-scale solar generation."
        graphicSrc="/images/hero_projects_transparent.webp"
        primaryCtaText="View All Megaprojects"
        primaryCtaLink="#projects"
        secondaryCtaText="Partner on Megaprojects"
        secondaryCtaLink="/contact"
        pillars={[
          { icon: DollarSign, title: '$1.4B+ Total', subtitle: 'Completed Assets' },
          { icon: Compass, title: '10 Megaprojects', subtitle: 'Global Deliveries' },
          { icon: Award, title: '100% On-Budget', subtitle: 'Execution Governance' },
        ]}
      />

      <section className="py-20 md:py-28 bg-[#f9f6f0] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0c1a30]">$1.4B+</span>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Delivered Asset Value</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-dark">10+</span>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Landmark Megaprojects</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0c1a30]">20+</span>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Global Client Reach</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-dark">100%</span>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">On-Budget Governance</p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                  activeCategory === cat ? 'badge-filter-active' : 'badge-filter-inactive'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
