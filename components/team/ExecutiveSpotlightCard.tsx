'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Globe2 } from 'lucide-react';

export default function ExecutiveSpotlightCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-slate-900 border border-slate-200/80 hover:border-gold-border card-hover-gold-accent shadow-xl overflow-hidden flex flex-col justify-between min-h-[460px] lg:h-full"
    >
      {/* Real Executive Group Photo Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/team/executive_council_lobby.webp"
          alt="Esaren Global Executive Council"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/65 to-transparent" />
      </div>

      {/* Top Floating Badges */}
      <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-widest uppercase badge-gold px-3.5 py-1 rounded-full shadow-md">
          Executive Leadership Council
        </span>
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[11px]">
          <Globe2 className="w-3.5 h-3.5 text-gold-light" />
          <span>4 Global Hubs</span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 sm:p-8 space-y-4 text-white">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold-light font-bold">
            Cross-Border Synergy In Action
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Stewarding Governance, Sovereign EPC & Venture Capital
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed line-clamp-3">
            Our Chairperson, Managing Partners, and regional functional directors convening to direct infrastructure project management, fund advisory, and strategic international joint ventures.
          </p>
        </div>

        {/* Stats and Action Link */}
        <div className="pt-4 border-t border-white/15 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Users className="w-4 h-4 text-gold-light" />
            <span>12 Managing Directors</span>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gold-light hover:text-white transition-colors group/link"
          >
            <span>Explore Full Council & Field Gallery</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
