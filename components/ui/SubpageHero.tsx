'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Share2, ShieldCheck } from 'lucide-react';
import type { SubpageHeroProps, SubpageHeroPillar } from './subpageHeroTypes';

const DEFAULT_PILLARS: SubpageHeroPillar[] = [
  { icon: Globe, title: 'Singapore-based', subtitle: 'Fund Management' },
  { icon: Share2, title: 'Cross-border', subtitle: 'Joint Ventures' },
  { icon: ShieldCheck, title: 'Strategic', subtitle: 'Partnerships' },
];

export default function SubpageHero({
  badge,
  title,
  description,
  parentPath = '/',
  parentName = 'HOME',
  primaryCtaText = 'Explore our ventures',
  primaryCtaLink = '#ventures',
  secondaryCtaText = 'Partner with EGL',
  secondaryCtaLink = '/contact',
  pillars = DEFAULT_PILLARS,
  graphicSrc = '/images/hero_ventures_transparent.webp',
}: SubpageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#f9f6f0] text-[#0c1a30] overflow-hidden border-b border-slate-200/80">
      {/* Decorative architectural curve lines */}
      <svg className="absolute bottom-0 left-0 w-80 h-36 pointer-events-none opacity-40 text-slate-300" viewBox="0 0 320 144" fill="none">
        <path d="M-40 130 C 80 120, 160 80, 320 20" stroke="currentColor" strokeWidth="1" />
        <path d="M-40 144 C 100 134, 200 94, 340 34" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 space-y-8">
        {/* Breadcrumb Navigation matching screenshot */}
        <nav aria-label="Breadcrumb" className="text-xs  tracking-widest text-slate-400 uppercase">
          <Link href={parentPath} className="hover:text-[#0c1a30] transition-colors">{parentName}</Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-600 font-semibold">{badge}</span>
        </nav>

        {/* 2-Column Split: Editorial Left + 3D EGL Globe Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full badge-gold text-xs font-bold tracking-wider uppercase">
              {badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0c1a30] tracking-tight leading-[1.12]">
              {title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                href={primaryCtaLink}
                className="px-7 py-3.5 rounded-full btn-navy-gold font-medium text-xs tracking-wider flex items-center gap-3 shadow-md group"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#dfba54] transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={secondaryCtaLink}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0c1a30] hover:text-[#8e6814] transition-colors group"
              >
                <span>{secondaryCtaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8e6814] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 3-Pillar Feature Strip */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200/80 max-w-xl">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className={`space-y-1 ${idx > 0 ? 'border-l border-slate-200/80 pl-6' : ''}`}>
                    <Icon className="w-5 h-5 text-[#0c1a30] stroke-[1.75]" />
                    <p className="text-sm font-serif font-bold text-[#0c1a30] pt-1 leading-snug">{p.title}</p>
                    <p className="text-xs text-slate-500 font-light">{p.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: 3D Luminous EGL Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[620px] aspect-[574/505]">
              <img
                src={graphicSrc}
                alt={title}
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
