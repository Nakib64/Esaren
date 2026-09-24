'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CoreActivityItem } from '@/data/coreActivitiesData';

const ICON_MAP = {
  Building2,
  TrendingUp,
};

interface CoreActivityCardProps {
  activity: CoreActivityItem;
  index: number;
}

export default function CoreActivityCard({ activity, index }: CoreActivityCardProps) {
  const Icon = ICON_MAP[activity.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-white border border-slate-200/80 hover:border-gold-border card-hover-gold-accent shadow-lg shadow-slate-900/5 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
    >
      {/* Visual Cover Top Banner */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
        <img
          src={activity.bgImage}
          alt={activity.title}
          className="w-full h-full object-cover filter brightness-75 contrast-110 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/50 to-transparent" />
        
        {/* Top Floating Badge */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
          <span className="text-[11px] font-bold tracking-widest uppercase badge-gold px-3.5 py-1 rounded-full shadow-md">
            {activity.badge}
          </span>
          <span className="text-2xl font-serif font-bold text-gold-light/90">
            {activity.id}
          </span>
        </div>

        {/* Floating Icon Box Over Image Bottom */}
        <div className="absolute bottom-5 left-6 flex items-center gap-3 z-10">
          <div className="w-12 h-12 rounded-2xl icon-box-gold flex items-center justify-center shadow-lg group-hover:bg-navy-gradient group-hover:text-gold-light group-hover:border-gold-hover transition-all duration-500">
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-white">
            <span className="text-[10px] uppercase tracking-widest text-gold-light font-bold block">
              Core Mandate {activity.id}
            </span>
            <span className="text-sm font-semibold tracking-wide block">
              Esaren Global Portfolio
            </span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <span className="text-xs tracking-widest uppercase font-bold text-gold-dark">
              {activity.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a30] leading-snug group-hover:text-gold-dark transition-colors duration-300">
              {activity.title}
            </h3>
          </div>

          <p className="text-sm text-slate-600 font-light leading-relaxed">
            {activity.desc}
          </p>

          {/* Highlights List */}
          <ul className="space-y-2.5 pt-3 border-t border-slate-100">
            {activity.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-xs text-slate-700 font-normal">
                <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
          <a
            href={activity.primaryLink}
            className="flex-1 min-w-[170px] px-5 py-3 rounded-full btn-navy-gold text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm text-center"
          >
            <span>{activity.primaryLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <Link
            href={activity.secondaryLink}
            className="px-5 py-3 rounded-full btn-gold-outline text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-center"
          >
            <span>{activity.secondaryLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
