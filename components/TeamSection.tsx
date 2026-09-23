'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TeamCard from '@/components/ui/TeamCard';
import { TEAM_MEMBERS } from '@/data/teamData';

export default function TeamSection() {
  const leadership = TEAM_MEMBERS.filter((m) => m.category === 'Leadership');

  return (
    <section id="team" className="py-24 md:py-32 bg-[#f9f6f0] text-[#0c1a30]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
              <span>Executive Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a30] tracking-tight">
              Our Global Executive Council
            </h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              Stewarding high-level governance, cross-border financing, and technical project management across London, Singapore, Izmir, and Dhaka.
            </p>
          </div>

          <Link
            href="/team"
            className="group px-6 py-3.5 rounded-full btn-navy-gold font-bold text-xs uppercase tracking-widest flex items-center gap-3 shrink-0 self-start lg:self-end"
          >
            <span>Meet All 16 Members & Directors</span>
            <ArrowRight className="w-4 h-4 text-gold-light group-hover:text-gold-lighter transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Primary Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
