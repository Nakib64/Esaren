'use client';

import { Handshake, Rocket, CheckCircle2 } from 'lucide-react';

const JV_ROLES = [
  'Facilitator in feasibility studies, strategic planning, project financing, and operations management in collaboration with partners.',
  'Stakeholder partner offering curated multi-jurisdictional legal, international financing, and turnkey engineering services.',
  'Knowledge-based technical expertise for specialized partnerships and Public-Private-Partnerships (PPP) with sovereign government entities.',
];

const VM_ROLES = [
  'Venture management partner supporting start-up and SME entities in strategic planning, business development, fund management, and execution.',
  'Technical subject-matter partner providing management frameworks so founders can focus on operations, product delivery, and scale.',
  'Direct cross-border fund management and institutional capital facilitation via our central setup in Singapore.',
];

export default function VenturesRolesSection() {
  return (
    <section className="py-20 bg-[#f9f6f0] text-[#0c1a30] border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs tracking-widest uppercase text-gold-dark font-bold">
            Governance & Partnership Scope
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
            Roles in Venture Management & Joint Ventures
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            EGL delivers dual operational roles across cross-border joint venture syndication and early-stage venture acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Roles for Joint Ventures */}
          <div className="rounded-3xl bg-white border border-slate-200 hover:border-gold-border card-hover-gold-accent p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-400 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest badge-gold px-3 py-1 rounded-full">
                Strategic Alliance
              </span>
              <div className="w-12 h-12 rounded-2xl icon-box-gold flex items-center justify-center">
                <Handshake className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#0c1a30]">Roles for Joint Ventures</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                Consortium Syndication & PPP Governance
              </p>
            </div>
            <ul className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600 font-light">
              {JV_ROLES.map((role) => (
                <li key={role} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-1" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Roles for Venture Management */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-400 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs  font-bold uppercase tracking-widest text-[#0c1a30] bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Incubation & Growth
              </span>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0c1a30] flex items-center justify-center border border-slate-200">
                <Rocket className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#0c1a30]">Roles for Venture Management</h3>
              <p className="text-xs  text-slate-500 uppercase tracking-wider mt-1">
                Fund Management & Technical Growth
              </p>
            </div>
            <ul className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600 font-light">
              {VM_ROLES.map((role) => (
                <li key={role} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0c1a30] shrink-0 mt-1" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
