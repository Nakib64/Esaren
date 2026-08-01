'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ArrowUpRight, Globe, ShieldCheck, Compass, Zap, Users,
  ChevronDown, ArrowRight, CheckCircle2,
} from 'lucide-react';

/* ─── Mega-menu data ─────────────────────────────────── */
const services = [
  {
    icon: ShieldCheck,
    label: 'Sovereign Project Management',
    tag: 'Execution',
    desc: 'End-to-end project governance for large-scale government and institutional infrastructure ventures.',
    href: '#services',
  },
  {
    icon: Compass,
    label: 'Cross-Border Capital Facilitation',
    tag: 'Financing',
    desc: 'Connecting sovereign wealth and private equity to high-yield international projects.',
    href: '#services',
  },
  {
    icon: Zap,
    label: 'Digital & AI Transformation',
    tag: 'Technology',
    desc: 'Modernising enterprise stacks with AI-driven decision engines and cloud ecosystems.',
    href: '#services',
  },
  {
    icon: Users,
    label: 'Global Human Capital Development',
    tag: 'Talent',
    desc: 'Nurturing executive leadership and talent networks across international markets.',
    href: '#services',
  },
];

const processSteps = [
  { num: '01', label: 'Vision Alignment', desc: 'We start by deeply understanding your strategic ambition, risk tolerance, and target outcomes.' },
  { num: '02', label: 'Opportunity Mapping', desc: 'Cross-border market intelligence to identify the highest-leverage entry points for your venture.' },
  { num: '03', label: 'Deal Structuring', desc: 'Sovereign-grade legal, financial, and governance frameworks tailored to your deal parameters.' },
  { num: '04', label: 'Execution & Deployment', desc: 'Hands-on project management ensuring milestones, capital flows, and stakeholders stay aligned.' },
  { num: '05', label: 'Performance & Scale', desc: 'Ongoing reporting, optimisation and scale pathways to maximise your long-term institutional ROI.' },
];



/* ─── Mega-menu: Services ────────────────────────────── */
function ServicesMega({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 w-full bg-[#f9f6f0]/98 backdrop-blur-2xl border-b border-slate-200/80 shadow-2xl shadow-slate-900/10 z-40"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <a
                key={i}
                href={svc.href}
                onClick={onClose}
                className="group relative rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-lg hover:border-[#0c1a30]/30 hover:-translate-y-1 transition-all duration-400 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0c1a30] group-hover:bg-[#0c1a30] group-hover:text-white transition-all duration-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#1e3a8a] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 font-semibold">
                    {svc.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold font-serif text-[#0c1a30] mb-1.5 group-hover:text-[#1e3a8a] transition-colors duration-300">
                    {svc.label}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{svc.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-[#0c1a30] transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
          <p className="text-xs font-mono text-slate-500">
            <span className="text-[#0c1a30] font-semibold">$12B+</span> assets facilitated across <span className="text-[#0c1a30] font-semibold">35+</span> global markets
          </p>
          <a
            href="#services"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0c1a30] hover:text-[#1e3a8a] transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mega-menu: How We Work ─────────────────────────── */
function ProcessMega({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 w-full bg-[#f9f6f0]/98 backdrop-blur-2xl border-b border-slate-200/80 shadow-2xl shadow-slate-900/10 z-40"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div key={i} className="relative flex flex-col gap-3">
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+20px)] right-0 h-px bg-gradient-to-r from-slate-300 to-transparent pointer-events-none" />
              )}
              <div className="flex flex-col gap-3 rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-md hover:border-[#0c1a30]/30 hover:-translate-y-1 transition-all duration-400 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0c1a30] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-sm">
                    {step.num}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-serif text-[#0c1a30] mb-1.5">{step.label}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
          <p className="text-xs font-mono text-slate-500">
            From vision to execution — our <span className="text-[#0c1a30] font-semibold">5-step sovereign process</span>
          </p>
          <a
            href="#process"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0c1a30] hover:text-[#1e3a8a] transition-colors"
          >
            See Full Process <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Navbar ────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'services' | 'process' | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Delay-based close — gives time to move mouse to panel
  const openMenu = (menu: 'services' | 'process') => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const closeMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(null);
  };

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Partners', href: '#partners' },
    { name: 'Leadership', href: '#team' },
    { name: 'Client Reviews', href: '#reviews' },
  ];

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#f9f6f0]/90 backdrop-blur-xl border-b border-slate-200/80 py-4 shadow-md shadow-slate-900/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative">

        {/* Brand Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0c1a30] flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform duration-300">
            <Globe className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wider text-[#0c1a30] uppercase">
              Esaren<span className="text-slate-500 font-light">Global</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase -mt-1 font-mono">
              International Ventures
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-8 glass-panel px-8 py-2.5 rounded-full border border-slate-200/80 shadow-sm"
          onMouseLeave={scheduleClose}
          onMouseEnter={cancelClose}
        >
          {/* Services — mega trigger */}
          <button
            onMouseEnter={() => openMenu('services')}
            className={`flex items-center gap-1 text-xs uppercase tracking-widest transition-colors font-medium relative group cursor-pointer ${
              activeMenu === 'services' ? 'text-[#0c1a30]' : 'text-slate-700 hover:text-[#0c1a30]'
            }`}
          >
            Our Services
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0c1a30] transition-all duration-300 ${activeMenu === 'services' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          {/* How We Work — mega trigger */}
          <button
            onMouseEnter={() => openMenu('process')}
            className={`flex items-center gap-1 text-xs uppercase tracking-widest transition-colors font-medium relative group cursor-pointer ${
              activeMenu === 'process' ? 'text-[#0c1a30]' : 'text-slate-700 hover:text-[#0c1a30]'
            }`}
          >
            How We Work
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'process' ? 'rotate-180' : ''}`} />
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0c1a30] transition-all duration-300 ${activeMenu === 'process' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          {/* Regular links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={scheduleClose}
              className="text-xs uppercase tracking-widest text-slate-700 hover:text-[#0c1a30] transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0c1a30] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="relative group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c1a30] text-white font-semibold text-xs tracking-widest uppercase hover:bg-[#162848] transition-all duration-300 shadow-md shadow-slate-900/10 hover:-translate-y-0.5"
          >
            <span>Facilitate Venture</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#0c1a30] hover:text-blue-900 p-2 rounded-xl glass-panel"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mega Menu Panels (full width, attached below header) ── */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <AnimatePresence>
          {activeMenu === 'services' && (
            <ServicesMega key="services" onClose={closeMenu} />
          )}
          {activeMenu === 'process' && (
            <ProcessMega key="process" onClose={closeMenu} />
          )}
        </AnimatePresence>
      </div>

    </header>

    {/* ── Mobile Sidebar — rendered via portal at document.body to escape header stacking context ── */}
    {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ position: 'fixed', inset: 0, background: 'rgba(12,26,48,0.35)', backdropFilter: 'blur(4px)', zIndex: 9998 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar panel — glassy dark navy */}
            <motion.aside
              key="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '85vw', maxWidth: '360px', zIndex: 9999,
                display: 'flex', flexDirection: 'column', overflowY: 'auto',
                background: 'rgba(10, 20, 40, 0.82)',
                backdropFilter: 'blur(28px) saturate(1.6)',
                WebkitBackdropFilter: 'blur(28px) saturate(1.6)',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
              }}
              className="shadow-2xl"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 py-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold tracking-wider text-white uppercase">
                    Esaren<span className="text-white/40 font-light">Global</span>
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase font-mono">International Ventures</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                {/* Our Services — expandable */}
                <MobileAccordion
                  label="Our Services"
                  onClose={() => setMobileMenuOpen(false)}
                  items={services.map(s => ({ label: s.label, href: s.href }))}
                />

                {/* How We Work — expandable */}
                <MobileAccordion
                  label="How We Work"
                  onClose={() => setMobileMenuOpen(false)}
                  items={processSteps.map(s => ({ label: s.label, href: '#process' }))}
                />

                {/* Divider */}
                <div className="my-3 mx-4" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

                {/* Simple links */}
                {[
                  { name: 'About Us', href: '#about' },
                  { name: 'Partners', href: '#partners' },
                  { name: 'Leadership', href: '#team' },
                  { name: 'Client Reviews', href: '#reviews' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium tracking-widest uppercase transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)', e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.background = '', e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* CTA pinned at bottom */}
              <div className="px-5 py-5 shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase transition-all"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', color: 'white' }}
                >
                  <span>Facilitate Venture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}

/* ── Mobile Accordion row ──────────────────────────────── */
function MobileAccordion({
  label,
  items,
  onClose,
}: {
  label: string;
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden">
      {/* Row header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium tracking-widest uppercase transition-all duration-200 cursor-pointer"
        style={{
          color: open ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.65)',
          background: open ? 'rgba(255,255,255,0.07)' : 'transparent',
        }}
      >
        <span>{label}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-light leading-none transition-colors duration-200"
          style={{
            background: open ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'white',
          }}
        >
          +
        </motion.div>
      </button>

      {/* Expandable sub-items — titles only */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mx-3 mb-2 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-2.5 group transition-all duration-150"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)', e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.background = '', e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  <span className="text-xs font-medium leading-snug">{item.label}</span>
                  <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

