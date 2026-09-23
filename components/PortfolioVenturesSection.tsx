'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import VentureCard from '@/components/ui/VentureCard';
import { PORTFOLIO_VENTURES, JOINT_VENTURES } from '@/data/venturesData';

export default function PortfolioVenturesSection() {
  const featured = [
    PORTFOLIO_VENTURES[0], // Camhirst Robotics (UK) - 3D Construction Robotics
    JOINT_VENTURES[2],     // Fortius Engineering Services (Turkey) - EPC & Turnkey Engineering
    JOINT_VENTURES[1],     // Zenith Advisory (Singapore) - Fund Management & Structuring
  ];

  return (
    <section id="ventures" className="py-24 md:py-32 bg-[#f4f1ea] text-[#0c1a30] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
              <span>Venture Development & JVs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a30] tracking-tight">
              Startups, Robotics & Strategic Alliances
            </h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              Branching into startup incubation and venture development with Singapore-based Fund Management, 3D construction robotics, private aviation, and cross-border partnerships.
            </p>
          </div>

          <Link
            href="/ventures"
            className="group px-6 py-3.5 rounded-full btn-navy-gold font-bold text-xs uppercase tracking-widest flex items-center gap-3 shrink-0 self-start lg:self-end"
          >
            <span>View Full Portfolio & JVs</span>
            <ArrowRight className="w-4 h-4 text-gold-light group-hover:text-gold-lighter transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((v, idx) => (
            <VentureCard
              key={v.name}
              name={v.name}
              country={v.country}
              focus={v.focus}
              description={v.description}
              monogram={v.monogram}
              highlight={v.highlight}
              category={v.category}
              website={'website' in v ? (v as { website?: string }).website : undefined}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
