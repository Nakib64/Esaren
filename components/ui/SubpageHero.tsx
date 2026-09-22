'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface SubpageHeroProps {
  badge: string;
  title: string;
  description: string;
  bgImage?: string;
  parentPath?: string;
  parentName?: string;
  stats?: Array<{ label: string; value: string }>;
}

const DEFAULT_BG =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';

const DEFAULT_STATS = [
  { label: 'Operating Matrix', value: '4 Global Hubs' },
  { label: 'Track Record', value: '$1.4B+ Deployed' },
  { label: 'Governance', value: 'Sovereign & SPV' },
];

export default function SubpageHero({
  badge,
  title,
  description,
  bgImage = DEFAULT_BG,
  parentPath = '/',
  parentName = 'Home',
  stats = DEFAULT_STATS,
}: SubpageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#f9f6f0] text-[#0c1a30] border-b border-slate-200">
      {/* Background blueprint grid & lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1a300a_1px,transparent_1px),linear-gradient(to_bottom,#0c1a300a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="w-fit">
          <ol className="flex items-center gap-2 text-xs font-mono bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-sm text-slate-500">
            <li>
              <Link href={parentPath} className="hover:text-[#0c1a30] transition-colors flex items-center gap-1.5 font-medium">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{parentName}</span>
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </li>
            <li className="text-[#0c1a30] font-bold">{badge}</li>
          </ol>
        </nav>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[#1e3a8a] text-xs font-mono tracking-widest uppercase shadow-sm font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-ping" />
              <span>{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0c1a30] tracking-tight leading-[1.1]">
              {title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-xl">
              {stats.map((s) => (
                <div key={s.label} className="space-y-0.5">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">{s.label}</p>
                  <p className="text-base sm:text-lg font-serif font-bold text-[#0c1a30]">{s.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[16/11] group bg-[#0c1a30]">
              <img
                src={bgImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30]/85 via-[#0c1a30]/20 to-transparent" />

              {/* Corner Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ADVISORY MATRIX</span>
              </div>

              {/* Bottom Metadata Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span className="text-slate-300">01°17'N 103°50'E</span>
                <span className="text-blue-300 font-semibold uppercase tracking-wider">Singapore Corporate HQ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
