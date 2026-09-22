'use client';

import Link from 'next/link';
import { Globe, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { CORPORATE_HQ_ADDRESS, OFFICIAL_WEBSITE, GROUP_NAME } from '@/data/brandData';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f9f6f0] text-[#0c1a30] border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16 relative z-10">
        {/* Call to Action Banner */}
        <div className="rounded-3xl p-8 md:p-14 bg-gradient-to-r from-[#0c1a30] via-[#0c1a30] to-[#162848] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono tracking-widest text-blue-300 uppercase font-bold">
              Global Project Management & JV Syndication
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Ready to Partner With Esaren Global?
            </h2>
            <p className="text-slate-300 text-sm font-light">
              Connect with our senior partners across Singapore, London, Izmir, and Dhaka to discuss infrastructure execution and fund advisory.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-[#0c1a30] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-100 transition-all shadow-md shrink-0"
          >
            <span>Contact Global Offices</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 text-sm">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0c1a30] flex items-center justify-center text-white font-serif font-bold text-base">
                E
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-[#0c1a30] uppercase">
                Esaren<span className="text-slate-500 font-light">Global</span>
              </span>
            </div>
            <p className="text-slate-600 text-xs font-light leading-relaxed">
              A concern of {GROUP_NAME}. Specializing in Project Management Consulting (PMC) and Venture Management & Joint Ventures.
            </p>
            <p className="text-xs font-mono text-slate-500 flex items-start gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
              <span>{CORPORATE_HQ_ADDRESS}</span>
            </p>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-[#0c1a30] uppercase font-bold">Capabilities</h3>
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
            <h3 className="text-xs font-mono tracking-widest text-[#0c1a30] uppercase font-bold">Company & Portfolio</h3>
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
            <h3 className="text-xs font-mono tracking-widest text-[#0c1a30] uppercase font-bold">Operating Hubs</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-light">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" /> Singapore — Corporate HQ</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0c1a30]" /> London — Group HQ</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Izmir — PMO & Technical EPC</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Dhaka — Back-End Operations</li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
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
