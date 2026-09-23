'use client';

import { useState } from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import TeamCard from '@/components/ui/TeamCard';
import { TEAM_MEMBERS } from '@/data/teamData';
import { Users, ShieldCheck, Award } from 'lucide-react';

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
        graphicSrc="/images/hero_team_transparent.webp"
        primaryCtaText="View 16 Council Members"
        primaryCtaLink="#team-members"
        secondaryCtaText="Connect With Leadership"
        secondaryCtaLink="/contact"
        pillars={[
          { icon: Users, title: '16 Directors', subtitle: 'Global Council' },
          { icon: ShieldCheck, title: '4-Tier Matrix', subtitle: 'Leadership & Ops' },
          { icon: Award, title: 'International', subtitle: 'London, SG, Izmir, Dhaka' },
        ]}
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
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                  activeCategory === cat ? 'badge-filter-active' : 'badge-filter-inactive'
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
