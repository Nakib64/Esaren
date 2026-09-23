'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Zap, Users, ArrowUpRight } from 'lucide-react';
import { AboutPillar } from '@/data/aboutPillars';

const ICON_MAP = { ShieldCheck, Compass, Zap, Users };

interface DesktopPillarCardProps {
  item: AboutPillar;
  index: number;
  linkHref?: string;
  linkLabel?: string;
}

export default function DesktopPillarCard({
  item,
  index,
  linkHref = '/about',
  linkLabel = 'Explore Pillar Strategy',
}: DesktopPillarCardProps) {
  const Icon = ICON_MAP[item.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 sm:grid-cols-5 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 overflow-hidden hover:shadow-2xl hover:border-gold-border card-hover-gold-accent hover:-translate-y-1 transition-all duration-500"
    >
      {/* Cover Image — 2 of 5 cols on sm+ */}
      <div className="sm:col-span-2 relative overflow-hidden bg-slate-100 min-h-[220px] sm:min-h-[260px]">
        <img
          src={item.coverImage}
          alt={item.title}
          className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[10px] font-bold tracking-widest text-[#0c1a30] uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            Hub {item.id}
          </span>
        </div>
      </div>

      {/* Content — 3 of 5 cols on sm+ */}
      <div className="sm:col-span-3 p-6 sm:p-7 lg:p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-widest text-gold-dark uppercase font-semibold">
              {item.tagline}
            </span>
            <div className="w-10 h-10 rounded-xl icon-box-gold flex items-center justify-center group-hover:bg-navy-gradient group-hover:text-gold-light group-hover:border-gold-hover transition-all duration-500 shadow-sm">
              <Icon className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold font-serif text-[#0c1a30] leading-snug group-hover:text-gold-dark transition-colors duration-500">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            {item.desc}
          </p>
        </div>

        <Link
          href={linkHref}
          className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between group"
        >
          <span className="text-xs font-medium text-slate-500 group-hover:text-gold-dark transition-colors duration-500">
            {linkLabel}
          </span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
        </Link>
      </div>
    </motion.div>
  );
}
