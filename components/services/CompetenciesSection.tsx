'use client';

import { Award, Globe, Sliders, CheckCircle2 } from 'lucide-react';

const OPERATING_COUNTRIES = [
  'Bangladesh',
  'Turkey',
  'Vietnam',
  'Indonesia',
  'Sri Lanka',
];

const COMPETENCY_PILLARS = [
  {
    title: 'Consulting in Construction & Telecom',
    desc: 'EGL focuses on the consulting aspects of Construction & Communication Engineering (Roads & Highways, Bridges, Steel Structures, Telecom) as an established international market leader.',
    icon: Globe,
  },
  {
    title: 'Uncompromising Quality & Budget Adherence',
    desc: 'Rendering integrated, future-ready infrastructure solutions delivering uncompromising quality, flexibility, and time-bound budget adherence that major sovereign partners rely upon.',
    icon: Award,
  },
  {
    title: 'Signature Menu-Driven Service Model',
    desc: 'From basic network infrastructure to complex multi-jurisdictional construction and network integration, our menu-driven service model affords clients maximum operational flexibility.',
    icon: Sliders,
  },
];

export default function CompetenciesSection() {
  return (
    <section className="py-20 bg-[#f4f1ea] text-[#0c1a30] border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs tracking-widest uppercase text-gold-dark font-bold">
              Engineering Domain Leadership
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              Our Key Competencies for Project Management
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Demonstrated consulting excellence across major construction & telecommunications sectors in key regional hubs.
            </p>
          </div>

          {/* Operating Countries Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 uppercase tracking-wider mr-1">Key Markets:</span>
            {OPERATING_COUNTRIES.map((country) => (
              <span
                key={country}
                className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-[#0c1a30] shadow-sm"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPETENCY_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl bg-white border border-slate-200 hover:border-gold-border card-hover-gold-accent p-8 shadow-sm hover:shadow-xl transition-all duration-400 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl icon-box-gold flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0c1a30]">{p.title}</h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-gold-dark">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified PMC Competency</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
