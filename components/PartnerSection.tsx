'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, Shield, Landmark, Plane, HeartPulse, GraduationCap, Cpu } from 'lucide-react';

const partners = [
  { name: 'Whitespace', country: 'Canada', type: 'Technology JV', icon: Cpu },
  { name: 'Zenith Advisory', country: 'Singapore', type: 'Fund Management JV', icon: Landmark },
  { name: 'Fortius Engineering', country: 'Turkey', type: 'EPC Engineering JV', icon: Building2 },
  { name: 'Ural Air', country: 'Bangladesh', type: 'Private Aviation JV', icon: Plane },
  { name: 'Carnival Healthcare', country: 'UK & Kenya', type: 'Diagnostics & Pharma JV', icon: HeartPulse },
  { name: 'Altius Corporation', country: 'Bangladesh', type: 'Trading & Human Capital', icon: Globe },
  { name: 'Citius Training', country: 'Bangladesh', type: 'Vocational Upskilling', icon: GraduationCap },
  { name: 'ILF Engineers', country: 'Germany', type: 'SPM Refinery Partner', icon: Shield },
  { name: 'Rolls Royce Power', country: 'UK', type: '110MW Solar Partner', icon: Building2 },
  { name: 'Hutama Karya', country: 'Indonesia', type: 'Trans-Sumatra Toll Partner', icon: Landmark },
];

export default function PartnerSection() {
  return (
    <section id="partners" className="py-24 bg-[#f4f1ea] border-y border-slate-200/80 overflow-hidden relative text-[#0c1a30]">
      <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-[#f4f1ea] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-[#f4f1ea] to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 mb-12 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold mx-auto">
          <span>Core Activity 02 • Strategic Joint Ventures</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0c1a30] tracking-tight">
          Joint Ventures & Institutional Co-Development
        </h2>
      </div>

      <div className="flex overflow-hidden select-none py-4">
        <div className="animate-marquee flex items-center gap-6">
          {[...partners, ...partners].map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 w-72 rounded-3xl bg-white border border-slate-200/80 hover:border-gold-border card-hover-gold-accent overflow-hidden transition-all duration-300 hover:-translate-y-1 shrink-0 shadow-sm space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl icon-box-gold flex items-center justify-center group-hover:bg-navy-gradient group-hover:text-gold-light group-hover:border-gold-hover transition-all shadow-sm">
                  <Icon className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-serif text-[#0c1a30] leading-snug">
                    {partner.name}
                  </h3>
                  <span className="text-[11px] text-gold-dark uppercase tracking-wider font-semibold block">
                    {partner.type}
                  </span>
                  <span className="text-[10px] text-slate-400 block">{partner.country}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
