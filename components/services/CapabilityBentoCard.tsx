'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Cpu,
  Globe2,
  Zap,
  TrendingUp,
  Compass,
  Landmark,
} from 'lucide-react';
import { CapabilityService } from '@/data/capabilitiesData';

const ICON_MAP = {
  Layers,
  ShieldCheck,
  Cpu,
  Landmark,
  Zap,
  Globe2,
  Compass,
  TrendingUp,
};

interface CapabilityBentoCardProps {
  service: CapabilityService;
  index: number;
}

export default function CapabilityBentoCard({ service, index }: CapabilityBentoCardProps) {
  const Icon = ICON_MAP[service.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      id={`capability-${service.id}`}
      className={`service-bento-card service-block group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 flex flex-col justify-end p-8 sm:p-10 cursor-pointer shadow-lg shadow-slate-900/5 hover:border-[#0c1a30]/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${service.gridSpan}`}
    >
      {/* Cover Image with Smooth Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={service.bgImage}
          alt={service.title}
          className="service-bg-img w-full h-full object-cover filter brightness-60 contrast-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/75 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="service-content relative z-20 space-y-3 text-white">
        {/* Top Icon Badge */}
        <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md group-hover:bg-[#0c1a30] group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <Icon className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {service.title}
        </h3>

        {/* Paragraph Description: Hidden by default, reveals smoothly ONLY on hover */}
        <p className="service-desc text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-2xl">
          {service.paragraph}
        </p>

        {/* Button: "Go to details" text reveals on left of arrow button ONLY on hover */}
        <div className="pt-2 flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 text-white hover:bg-[#0c1a30] hover:border-[#0c1a30] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group/btn shadow-md"
          >
            <span className="btn-text text-xs font-semibold uppercase tracking-wider">
              Go to details
            </span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/30 group-hover/btn:bg-white group-hover/btn:text-[#0c1a30] transition-colors shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <span className="text-xs  text-slate-300 font-bold">
            {String(service.id).padStart(2, '0')}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
