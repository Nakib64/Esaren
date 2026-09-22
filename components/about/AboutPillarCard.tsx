'use client';

import Link from 'next/link';
import { ShieldCheck, Compass, Zap, Users, ArrowUpRight } from 'lucide-react';
import { AboutPillar } from '@/data/aboutPillars';

const ICON_MAP = { ShieldCheck, Compass, Zap, Users };

interface AboutPillarCardProps {
  item: AboutPillar;
  className?: string;
}

export default function AboutPillarCard({ item, className = '' }: AboutPillarCardProps) {
  const Icon = ICON_MAP[item.iconName];

  return (
    <div
      className={`rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#0c1a30]/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Top Cover Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 group">
        <img
          src={item.coverImage}
          alt={item.title}
          className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0c1a30] uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            Pillar {item.id}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-widest text-[#1e3a8a] uppercase font-semibold">
              {item.tagline}
            </span>
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0c1a30] shadow-sm">
              <Icon className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0c1a30] leading-snug">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            {item.desc}
          </p>
        </div>

        <Link
          href="/about"
          className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500 hover:text-[#0c1a30] transition-colors group"
        >
          <span>Explore Pillar Strategy</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
