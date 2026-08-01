'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building, Shield, Landmark, Globe, Compass, Cpu, Zap, Award } from 'lucide-react';

const partners = [
  { name: 'Sovereign Wealth Authority', icon: Landmark, type: 'Government Fund' },
  { name: 'Global Infrastructure Corp', icon: Building, type: 'Megaprojects' },
  { name: 'Apex Capital Markets', icon: Shield, type: 'Investment Bank' },
  { name: 'Enterprise Digital Hub', icon: Cpu, type: 'Tech Ecosystem' },
  { name: 'Transatlantic Ventures', icon: Globe, type: 'Private Equity' },
  { name: 'Pacific Trade Consortium', icon: Compass, type: 'Trade Development' },
  { name: 'NextGen Energy Alliance', icon: Zap, type: 'Clean Tech' },
  { name: 'Ministry of Digital Trade', icon: Award, type: 'Public Institution' },
];

export default function PartnerSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="partners" className="py-24 bg-[#f4f1ea] border-y border-slate-200/80 overflow-hidden relative text-[#0c1a30]">
      {/* Edge Blur Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-[#f4f1ea] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-[#f4f1ea] to-transparent z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
        transition={{ duration: isMobile ? 0.35 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto px-6 mb-12 text-center space-y-3"
      >
        <span className="text-xs font-mono tracking-[0.3em] text-[#1e3a8a] uppercase font-bold">
          Global Strategic Partners
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a30] tracking-tight">
          Trusted By Sovereign & Institutional Leaders
        </h2>
      </motion.div>

      {/* Infinite Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
        transition={{ duration: isMobile ? 0.35 : 0.7, delay: isMobile ? 0.05 : 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex overflow-hidden select-none py-4"
      >
        <div className="animate-marquee flex items-center gap-8">
          {/* Double array loop for seamless infinite marquee scroll */}
          {[...partners, ...partners].map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 w-72 sm:w-80 rounded-3xl bg-white border border-slate-200/80 hover:border-[#0c1a30]/40 hover:bg-slate-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 shrink-0 shadow-lg shadow-slate-900/5 cursor-pointer space-y-5"
              >
                {/* Brand Logo on Top */}
                <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0c1a30] group-hover:bg-[#0c1a30] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon className="w-8 h-8 stroke-[1.75]" />
                </div>

                {/* Vertical Column Text Info */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#0c1a30] group-hover:text-[#1e3a8a] transition-colors duration-300 leading-snug">
                    {partner.name}
                  </h3>
                  <span className="text-xs font-mono text-[#1e3a8a] uppercase tracking-widest font-semibold block">
                    {partner.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
