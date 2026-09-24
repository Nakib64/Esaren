'use client';

import { useState } from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import TeamCard from '@/components/ui/TeamCard';
import TeamGalleryCard from '@/components/team/TeamGalleryCard';
import { TEAM_MEMBERS } from '@/data/teamData';
import { TEAM_GALLERY } from '@/data/teamGalleryData';
import { Users, ShieldCheck, Award, Camera } from 'lucide-react';

const categories = ['All', 'Leadership', 'Management', 'Operations'] as const;
type CategoryType = (typeof categories)[number];
type ViewMode = 'directory' | 'gallery';

export default function TeamPageView() {
  const [viewMode, setViewMode] = useState<ViewMode>('directory');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredMembers =
    activeCategory === 'All'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeCategory);

  return (
    <div>
      <SubpageHero
        badge="Executive Council & Fraternity"
        title="Our Global Leadership & Field Operations"
        description="Meet the accomplished partners, country directors, and operational leads steering Esaren Global’s project management consulting and venture operations across 20+ countries."
        graphicSrc="/images/logo.png"
        primaryCtaText="Explore 12 Directors"
        primaryCtaLink="#team-roster"
        secondaryCtaText="Connect With Leadership"
        secondaryCtaLink="/contact"
        pillars={[
          { icon: Users, title: '12 Directors', subtitle: 'Global Council' },
          { icon: Camera, title: '7 Field Galleries', subtitle: 'Synergy In Action' },
          { icon: Award, title: '4 Core Hubs', subtitle: 'London, SG, Izmir, Dhaka' },
        ]}
      />

      <section id="team-roster" className="py-20 md:py-28 bg-[#f9f6f0] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          {/* Dual-Perspective Perspective Switcher (Directory vs Gallery) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="inline-flex p-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm w-fit">
              <button
                type="button"
                onClick={() => setViewMode('directory')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'directory' ? 'btn-navy-gold shadow-md' : 'text-slate-600 hover:text-[#0c1a30]'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Executive Directory ({TEAM_MEMBERS.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('gallery')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'gallery' ? 'btn-navy-gold shadow-md' : 'text-slate-600 hover:text-[#0c1a30]'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Fraternity in Action ({TEAM_GALLERY.length} Galleries)</span>
              </button>
            </div>

            {/* Filter Pills — Visible when in Directory Mode */}
            {viewMode === 'directory' && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 shrink-0 border ${
                      activeCategory === cat ? 'badge-filter-active' : 'badge-filter-inactive'
                    }`}
                  >
                    {cat} {cat === 'All' ? `(${TEAM_MEMBERS.length})` : ''}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Perspective 1: Directory Mode (Individual Cards) */}
          {viewMode === 'directory' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          )}

          {/* Perspective 2: Gallery Mode (Group Photos in Action) */}
          {viewMode === 'gallery' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {TEAM_GALLERY.map((item, index) => (
                <TeamGalleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
