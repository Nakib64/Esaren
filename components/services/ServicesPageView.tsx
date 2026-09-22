'use client';

import SubpageHero from '@/components/ui/SubpageHero';
import { EPC_PHASES, INFRASTRUCTURE_SPECIALTIES } from '@/data/servicesData';
import { CheckCircle2, Layers, Cpu, Wrench } from 'lucide-react';

export default function ServicesPageView() {
  return (
    <div>
      <SubpageHero
        badge="Engineering & PMC Capabilities"
        title="Comprehensive Infrastructure & EPC Consulting"
        description="End-to-end consulting, procurement, and turnkey engineering solutions across road networks, high-voltage transmission, LNG terminals, and telecommunications."
        bgImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
      />

      {/* EPC Phases Section */}
      <section className="py-20 bg-[#f9f6f0] text-[#0c1a30] border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#1e3a8a] font-bold">
              Full Lifecycle Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              The Three Core EPC Components
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EPC_PHASES.map((phase, idx) => (
              <div
                key={phase.phase}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-400 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1e3a8a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Phase 0{idx + 1}
                  </span>
                  <Layers className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#0c1a30]">{phase.phase}</h3>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">{phase.tagline}</p>
                </div>
                <ul className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600 font-light">
                  {phase.activities.map((act) => (
                    <li key={act} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 Infrastructure Specialties Grid */}
      <section className="py-20 md:py-28 bg-[#f4f1ea] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#1e3a8a] font-bold">
              Engineering Domain Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              14 Key Expertise in Infrastructure Consulting
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFRASTRUCTURE_SPECIALTIES.map((spec) => (
              <div
                key={spec.title}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-semibold">
                  {spec.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#0c1a30]">{spec.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
