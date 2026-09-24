'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import { CORPORATE_HQ_ADDRESS, OFFICIAL_WEBSITE, GROUP_NAME, WHATSAPP_CONTACT, WHATSAPP_LINK } from '@/data/brandData';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f9f6f0] text-[#0c1a30] border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16 relative z-10">
        {/* Call to Action Banner */}
        <div className="rounded-3xl p-8 md:p-14 bg-gradient-to-r from-[var(--navy-dark)] via-[var(--navy-brand)] to-[var(--navy-mid)] border border-gold text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs tracking-widest text-gold-light uppercase font-bold">
              Global Project Management & JV Syndication
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Ready to Partner With Esaren Global?
            </h2>
            <p className="text-slate-300 text-sm font-light">
              Connect with our senior partners across Singapore, London, Izmir, and Dhaka to discuss infrastructure execution and fund advisory.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#20ba5a] transition-all shadow-md w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct</span>
            </a>
            <Link href="/contact" className="px-8 py-4 rounded-full btn-gold-outline font-bold text-xs uppercase tracking-widest flex items-center gap-2 w-full sm:w-auto justify-center">
              <span>Contact Offices</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 text-sm">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="EGL Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif text-lg font-bold tracking-wider text-[#0c1a30] uppercase">
                Esaren<span className="text-slate-500 font-light">Global</span>
              </span>
            </div>
            <p className="text-slate-600 text-xs font-light leading-relaxed">
              A concern of {GROUP_NAME}. Specializing in Project Management Consulting (PMC) and Venture Management & JVs.
            </p>
            <p className="text-xs text-slate-500 flex items-start gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
              <span>{CORPORATE_HQ_ADDRESS}</span>
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors pt-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>WhatsApp: {WHATSAPP_CONTACT}</span>
            </a>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h3 className="text-xs tracking-widest text-[#0c1a30] uppercase font-bold">Capabilities</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-light">
              <li><Link href="/services" className="hover:text-[#0c1a30] transition-colors">EPC Engineering Lifecycle</Link></li>
              <li><Link href="/services" className="hover:text-[#0c1a30] transition-colors">Highways, Bridges & Underpasses</Link></li>
              <li><Link href="/services" className="hover:text-[#0c1a30] transition-colors">Single Point Mooring (SPM) LNG</Link></li>
              <li><Link href="/services" className="hover:text-[#0c1a30] transition-colors">High Telecom Towers & BTS</Link></li>
              <li><Link href="/services" className="hover:text-[#0c1a30] transition-colors">110 MW Utility Solar Plants</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-xs tracking-widest text-[#0c1a30] uppercase font-bold">Company & Portfolio</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-light">
              <li><Link href="/about" className="hover:text-[#0c1a30] transition-colors">About Esaren Global</Link></li>
              <li><Link href="/team" className="hover:text-[#0c1a30] transition-colors">Executive Council (16 Members)</Link></li>
              <li><Link href="/projects" className="hover:text-[#0c1a30] transition-colors">Completed Megaprojects ($1.4B+)</Link></li>
              <li><Link href="/ventures" className="hover:text-[#0c1a30] transition-colors">Portfolio Ventures & JVs</Link></li>
              <li><Link href="/contact" className="hover:text-[#0c1a30] transition-colors">Global Advisory Directory</Link></li>
            </ul>
          </div>

          {/* Operating Hubs */}
          <div className="space-y-3">
            <h3 className="text-xs tracking-widest text-[#0c1a30] uppercase font-bold">Operating Hubs</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-light">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" /> Singapore — Corporate HQ</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-brand)]" /> London — Group HQ</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-mid)]" /> Izmir — PMO & Technical EPC</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-light)]" /> Dhaka — Back-End Operations</li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500  gap-4">
          <p>© {new Date().getFullYear()} Esaren Global Ltd. {OFFICIAL_WEBSITE}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Corporate Profiler v.18</span>
            <span>London • Singapore • Izmir • Dhaka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
