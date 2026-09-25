'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import { CORPORATE_HQ_ADDRESS, OFFICIAL_WEBSITE, GROUP_NAME, WHATSAPP_CONTACT, WHATSAPP_LINK } from '@/data/brandData';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f9f6f0] text-[#0c1a30] border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16 relative z-10">
        <div className="rounded-3xl p-8 md:p-14 bg-gradient-to-r from-[var(--navy-dark)] via-[var(--navy-brand)] to-[var(--navy-mid)] border border-gold text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs tracking-widest text-gold-light uppercase font-bold">Global Project Management & JV Syndication</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">Ready to Partner With Esaren Global?</h2>
            <p className="text-slate-300 text-sm font-light">
              Connect with our senior partners across Singapore, London, Guangzhou, and Lagos to discuss infrastructure execution and fund advisory.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img src="/images/logo.png" alt="EGL Logo" className="h-8 w-auto object-contain" />
              <span className="font-serif text-lg font-bold tracking-wider uppercase text-[#0c1a30]">
                ESAREN <span className="text-[#c5a059]">GLOBAL</span>
              </span>
            </div>
            <p className="text-slate-600 text-xs font-light leading-relaxed">
              A concern of {GROUP_NAME}. Specializing in Project Management Consulting (PMC) and Strategic Partnerships.
            </p>
            <p className="text-xs text-slate-500 flex items-start gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
              <span>{CORPORATE_HQ_ADDRESS}</span>
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors pt-0.5">
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>WhatsApp: {WHATSAPP_CONTACT}</span>
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs tracking-widest text-[#0c1a30] uppercase font-bold">Company & Portfolio</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-light">
              <li><Link href="/about" className="hover:text-[#0c1a30] transition-colors">About Esaren Global</Link></li>
              <li><Link href="/team" className="hover:text-[#0c1a30] transition-colors">Leadership & Strategic Advisors</Link></li>
              <li><Link href="/services" className="hover:text-[#0c1a30] transition-colors">Project Management Consulting</Link></li>
              <li><Link href="/projects" className="hover:text-[#0c1a30] transition-colors">Completed Megaprojects ($1.4B+)</Link></li>
              <li><Link href="/ventures" className="hover:text-[#0c1a30] transition-colors">Our Strategic Partners</Link></li>
              <li><Link href="/contact" className="hover:text-[#0c1a30] transition-colors">Global Advisory Directory</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs tracking-widest text-[#0c1a30] uppercase font-bold">Operating Hubs</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-light">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" /> Singapore — Corporate HQ</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-brand)]" /> London — Group HQ</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-mid)]" /> Guangzhou — PMO & Technical EPC</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--navy-light)]" /> Lagos — Back-End Operations</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs tracking-widest text-[#0c1a30] uppercase font-bold">Social Media & Connect</h3>
            <p className="text-xs text-slate-500 font-light">Follow our global updates and sovereign project milestones:</p>
            <div className="flex flex-col gap-2 pt-1 text-xs text-slate-600 font-medium">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#1877F2] transition-colors">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FF0000] transition-colors">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Esaren Global Ltd. {OFFICIAL_WEBSITE}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Corporate Profiler v.18</span>
            <span>Singapore • London • Guangzhou • Lagos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
