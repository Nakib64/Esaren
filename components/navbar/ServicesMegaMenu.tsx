'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Layers, Flame, Radio, Sun } from 'lucide-react';
import { SERVICES_MEGA_ITEMS } from '@/components/navbar/navData';

const ICONS = [Layers, Flame, Radio, Sun];

interface ServicesMegaMenuProps {
  onClose: () => void;
}

export default function ServicesMegaMenu({ onClose }: ServicesMegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[860px] max-w-[94vw] z-50 pointer-events-auto"
    >
      {/* Invisible bridge so mouse hover is preserved when moving down */}
      <div className="absolute -top-3 left-0 right-0 h-3" />

      {/* Glassmorphic Neumorphic Container */}
      <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_24px_60px_-15px_rgba(12,26,48,0.18),0_0_0_1px_rgba(255,255,255,0.8),inset_0_1px_2px_rgba(255,255,255,1)] p-7 space-y-6">
        {/* Top Header Label */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 text-xs">
          <div className="flex items-center gap-2 text-[#0c1a30]">
            <div className="w-2 h-2 rounded-full bg-[#c59b27] animate-pulse" />
            <span className="font-bold tracking-widest uppercase">Core Activity 01 • Project Management Consulting</span>
          </div>
          <span className="text-[11px] text-[#8e6814] uppercase tracking-wider font-semibold">USD 1.4B+ Portfolio</span>
        </div>

        {/* 4 Glass Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {SERVICES_MEGA_ITEMS.map((svc, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <Link
                key={svc.label}
                href={svc.href}
                onClick={onClose}
                className="group relative rounded-2xl bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/90 hover:border-[#c59b27]/40 p-5 transition-all duration-300 shadow-[0_4px_16px_rgba(12,26,48,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-[0_12px_28px_-6px_rgba(197,155,39,0.15),inset_0_1px_2px_white] hover:-translate-y-0.5 flex items-start gap-4"
              >
                {/* Gilded Icon Box */}
                <div className="w-11 h-11 rounded-xl icon-box-gold flex items-center justify-center group-hover:bg-[#0c1a30] group-hover:text-[#dfba54] transition-all shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-wider uppercase text-[#8e6814] font-bold">
                      {svc.tag}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#8e6814] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-[#0c1a30] group-hover:text-[#8e6814] transition-colors leading-snug">
                    {svc.label}
                  </h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-2">
                    {svc.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Glass Footer Bar */}
        <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
          <p className="text-slate-500 text-[11px]">
            Comprehensive consulting across Transport, Power, Marine & Telecom
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="/projects"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 bg-white/80 hover:bg-white text-[11px] font-semibold tracking-wider uppercase text-[#0c1a30] transition-all"
            >
              <span>Megaprojects ($1.4B+)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8e6814]" />
            </Link>
            <Link
              href="/services"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-navy-gold text-[11px] font-semibold tracking-wider uppercase shadow-md group/btn"
            >
              <span>14 Capabilities & EPC</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#dfba54] transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
