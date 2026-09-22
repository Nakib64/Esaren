'use client';

import SubpageHero from '@/components/ui/SubpageHero';
import {
  MISSION_STATEMENT,
  VISION_STATEMENT,
  GLOBAL_OFFICES,
  GROUP_NAME,
} from '@/data/brandData';
import { Target, Eye, Globe2, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export default function AboutPageView() {
  return (
    <div>
      <SubpageHero
        badge="About Esaren Global"
        title="Engineering Infrastructure & Sovereign Ventures"
        description={`Esaren Global Ltd (EGL) is a leading entity having a multi-faceted business portfolio. A concern of "${GROUP_NAME}", collaborating with clients to effectively address operational challenges and grow stronger.`}
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
      />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#f9f6f0] text-[#0c1a30] border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center border border-blue-100">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#0c1a30]">Our Mission</h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              {MISSION_STATEMENT}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0c1a30] flex items-center justify-center border border-slate-200">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#0c1a30]">Our Vision</h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              {VISION_STATEMENT}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Global Offices Responsibility Matrix */}
      <section className="py-20 md:py-28 bg-[#f4f1ea] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#1e3a8a] font-bold">
              Global Operating Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              Global Footprint & Responsibility Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1e3a8a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase">
                      {office.role}
                    </span>
                    <Globe2 className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0c1a30]">{office.city}</h3>
                    <p className="text-xs text-slate-500 font-mono mt-1 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
                      <span>{office.keyPersonnel}</span>
                    </p>
                  </div>
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600 font-light">
                    {office.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] shrink-0 mt-1.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(office.handledValue || office.clientReach) && (
                  <div className="pt-4 border-t border-slate-100 space-y-1 text-xs font-mono text-[#0c1a30]">
                    {office.handledValue && (
                      <p>
                        <span className="text-slate-400">Handled:</span> {office.handledValue}
                      </p>
                    )}
                    {office.underConsideration && (
                      <p>
                        <span className="text-slate-400">Pipeline:</span> {office.underConsideration}
                      </p>
                    )}
                    {office.clientReach && (
                      <p>
                        <span className="text-slate-400">Reach:</span> {office.clientReach}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
