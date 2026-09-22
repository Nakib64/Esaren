'use client';

import SubpageHero from '@/components/ui/SubpageHero';
import { CORPORATE_HQ_ADDRESS, OFFICIAL_WEBSITE, GLOBAL_OFFICES } from '@/data/brandData';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function ContactPageView() {
  return (
    <div>
      <SubpageHero
        badge="Global Inquiries"
        title="Connect With Our Global Advisory Hubs"
        description="Initiate discussions regarding project management consulting, infrastructure joint ventures, or fund management with our senior partners across Singapore, London, Izmir, and Dhaka."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20 md:py-28 bg-[#f9f6f0] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16">
          {/* Global Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all space-y-4"
              >
                <span className="text-xs font-mono font-bold text-[#1e3a8a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase">
                  {office.role}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#0c1a30]">{office.city}</h3>
                <p className="text-xs text-slate-500 font-mono">Lead: {office.keyPersonnel}</p>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1 font-light">
                  {office.city === 'Singapore' && <p>{CORPORATE_HQ_ADDRESS}</p>}
                  <p>Inquiries: contact@{OFFICIAL_WEBSITE.replace('www.', '')}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-r from-[#0c1a30] via-[#0c1a30] to-[#162848] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono tracking-widest text-blue-300 uppercase font-bold">
                Direct Partnership Channel
              </span>
              <h2 className="text-3xl font-serif font-bold">Ready to Discuss a Major Mandate?</h2>
              <p className="text-slate-300 text-sm font-light">
                Our executive council coordinates directly with sovereign funds, project owners, and EPC contractors.
              </p>
            </div>
            <a
              href="mailto:contact@esaren.global"
              className="px-8 py-4 rounded-full bg-white text-[#0c1a30] font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-slate-100 transition-all shadow-md shrink-0"
            >
              <span>Email Global Advisory</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
