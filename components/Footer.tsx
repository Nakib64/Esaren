'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
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
    <footer id="contact" className="bg-[#f9f6f0] text-[#0c1a30] border-t border-slate-200/80 pt-20 pb-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
        transition={{ duration: isMobile ? 0.35 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Call to Action Banner */}
        <div className="rounded-3xl p-10 md:p-16 mb-20 bg-gradient-to-r from-[#0c1a30] via-[#0c1a30] to-[#162848] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono tracking-[0.25em] text-blue-300 uppercase font-bold">
                Initiate Strategic Partnership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Ready to Transform Ambitious Ideas Into Venture Reality?
              </h2>
              <p className="text-slate-300 font-light text-base max-w-xl">
                Connect with our senior partners to discuss project management, cross-border investments, or institutional digital transformation.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="mailto:contact@esaren.com"
                className="group px-8 py-4 rounded-full bg-white text-[#0c1a30] font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-slate-100 transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 pb-12 border-b border-slate-200">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0c1a30] flex items-center justify-center text-white shadow-md">
                <Globe className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-[#0c1a30] uppercase">
                Esaren<span className="text-slate-500 font-light">Global</span>
              </span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Partnering with sovereign institutions, global enterprise leaders, and capital markets to build multi-generational economic ventures.
            </p>
            <div className="flex items-center gap-4 text-slate-500 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-[#0c1a30] hover:border-slate-400 transition-colors shadow-sm">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-[#0c1a30] hover:border-slate-400 transition-colors shadow-sm">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-[#0c1a30] hover:border-slate-400 transition-colors shadow-sm">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#0c1a30] uppercase font-bold">Capabilities</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-light">
              <li><a href="#services" className="hover:text-[#0c1a30] transition-colors">Project Megamanagement</a></li>
              <li><a href="#services" className="hover:text-[#0c1a30] transition-colors">Sovereign Investment</a></li>
              <li><a href="#services" className="hover:text-[#0c1a30] transition-colors">Digital Ecosystems</a></li>
              <li><a href="#services" className="hover:text-[#0c1a30] transition-colors">Human Capital Strategy</a></li>
              <li><a href="#services" className="hover:text-[#0c1a30] transition-colors">Cross-Border Compliance</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#0c1a30] uppercase font-bold">Company</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-light">
              <li><a href="#about" className="hover:text-[#0c1a30] transition-colors">About Our Vision</a></li>
              <li><a href="#team" className="hover:text-[#0c1a30] transition-colors">Executive Council</a></li>
              <li><a href="#partners" className="hover:text-[#0c1a30] transition-colors">Partner Ecosystem</a></li>
              <li><a href="#reviews" className="hover:text-[#0c1a30] transition-colors">Client Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#0c1a30] transition-colors">Global Advisory Offices</a></li>
            </ul>
          </div>

          {/* International Hubs */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#0c1a30] uppercase font-bold">Global Offices</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-light">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0c1a30]" /> London, United Kingdom</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" /> Dubai, UAE</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Singapore Hub</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> New York, USA</li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} Esaren Global. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0c1a30] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0c1a30] transition-colors">Terms of Governance</a>
            <a href="#" className="hover:text-[#0c1a30] transition-colors">Security Disclosures</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
