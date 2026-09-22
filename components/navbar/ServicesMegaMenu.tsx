'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react';
import { SERVICES_MEGA_ITEMS } from '@/components/navbar/navData';

interface ServicesMegaMenuProps {
  onClose: () => void;
}

export default function ServicesMegaMenu({ onClose }: ServicesMegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 w-full bg-[#f9f6f0]/98 backdrop-blur-2xl border-b border-slate-200/80 shadow-2xl z-40"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_MEGA_ITEMS.map((svc) => (
            <Link
              key={svc.label}
              href={svc.href}
              onClick={onClose}
              className="group rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-lg hover:border-[#0c1a30]/30 hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#1e3a8a] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 font-semibold">
                  {svc.tag}
                </span>
                <h3 className="text-base font-bold font-serif text-[#0c1a30] group-hover:text-[#1e3a8a] transition-colors">
                  {svc.label}
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{svc.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-[#0c1a30] transition-colors">
                <span>View capability</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
          <p>Over USD 1.4 Billion in global infrastructure deliveries</p>
          <Link
            href="/services"
            onClick={onClose}
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-[#0c1a30] hover:text-[#1e3a8a] transition-colors"
          >
            <span>All 13 Capabilities & Full EPC</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
