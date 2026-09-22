'use client';

import { useState } from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import TeamCard from '@/components/ui/TeamCard';
import { TEAM_MEMBERS } from '@/data/teamData';

const categories = ['All', 'Leadership', 'Management', 'Operations', 'Associates'] as const;
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
        badge="Executive Council"
        title="Our Global Leadership & Management Team"
        description="Meet the accomplished partners, functional directors, and engineering leads steering Esaren Global’s project management consulting and venture operations across 20+ countries."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="py-20 md:py-28 bg-[#f9f6f0] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                  activeCategory === cat
                    ? 'bg-[#0c1a30] text-white border-[#0c1a30] shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                }`}
              >
                {cat} {cat === 'All' ? `(${TEAM_MEMBERS.length})` : ''}
              </button>
            ))}
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
