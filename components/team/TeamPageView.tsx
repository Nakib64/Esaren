'use client';

import { useState } from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import TeamCard from '@/components/ui/TeamCard';
import { TEAM_MEMBERS } from '@/data/teamData';
import { Users, Award, ShieldCheck } from 'lucide-react';

const categories = ['All', 'Leadership', 'Strategic Advisory Board', 'Management', 'Operations'] as const;
type CategoryType = (typeof categories)[number];

export default function TeamPageView() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredMembers =
    activeCategory === 'All'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeCategory);

  return (
    <div>
      <SubpageHero
        badge="Executive Council & Advisory Board"
        title="Global Leadership & Strategic Advisory Board"
        description="Meet the accomplished partners, strategic advisors, country directors, and operational leads steering Esaren Global’s project management consulting and venture operations across 20+ countries."
        graphicSrc="/images/logo.png"
        primaryCtaText="Explore 20 Leaders & Advisors"
        primaryCtaLink="#team-roster"
        secondaryCtaText="Connect With Advisory"
        secondaryCtaLink="/contact"
        pillars={[
          { icon: Users, title: 'Leadership', subtitle: 'Executive Council' },
          { icon: ShieldCheck, title: 'Strategic Advisory Board', subtitle: '8 Board Specialists' },
          { icon: Award, title: '4 Core Hubs', subtitle: 'Singapore, London, Guangzhou, Lagos' },
        ]}
      />

      <section id="team-roster" className="py-20 md:py-28 bg-[#f9f6f0] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          {/* Header & Filter Pills */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8e6814]">
                Global Governance & Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a30]">
                {activeCategory === 'All'
                  ? 'Leadership & Strategic Advisory Board'
                  : activeCategory}
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? TEAM_MEMBERS.length
                    : TEAM_MEMBERS.filter((m) => m.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                      activeCategory === cat ? 'badge-filter-active shadow-sm' : 'badge-filter-inactive'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
