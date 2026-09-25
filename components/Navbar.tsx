'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, ArrowUpRight } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/components/navbar/navData';
import ServicesMegaMenu from '@/components/navbar/ServicesMegaMenu';
import MobileNavDrawer from '@/components/navbar/MobileNavDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'bg-[#f9f6f0]/85 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_4px_24px_rgba(12,26,48,0.04)] py-4'
          : 'bg-transparent py-6'
        }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo with Actual EGL Winged Shield Emblem */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="EGL Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex items-center">
            <span className="font-serif text-lg font-bold tracking-wider uppercase leading-none text-[#0c1a30]">
              ESAREN <span className="text-[#c5a059]">GLOBAL</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — Glassmorphism Pill */}
        <nav
          className="hidden lg:flex items-center gap-1.5 bg-white/70 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/80 shadow-[0_8px_32px_0_rgba(12,26,48,0.06),inset_0_1px_2px_0_rgba(255,255,255,0.95)] relative"
          onMouseLeave={() => setMegaOpen(false)}
        >
          {MAIN_NAV_LINKS.map((link) => {
            const isPMC = link.name === 'Project Management Consulting';
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (isPMC) setMegaOpen(true);
                  else setMegaOpen(false);
                }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    isPMC && megaOpen
                      ? 'btn-navy-gold shadow-[0_2px_10px_rgba(9,19,34,0.4)]'
                      : 'text-slate-700 hover:text-[#0c1a30] hover:bg-white/80 hover:shadow-[0_2px_8px_rgba(12,26,48,0.04),inset_0_1px_1px_white]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isPMC && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        megaOpen ? 'rotate-180 text-[#e8d5a3]' : 'text-slate-400'
                      }`}
                    />
                  )}
                </Link>
              </div>
            );
          })}

          {/* Centered Floating Glassmorphic Dropdown */}
          {megaOpen && <ServicesMegaMenu onClose={() => setMegaOpen(false)} />}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-navy-gold text-xs font-semibold uppercase tracking-wider"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden w-10 h-10 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 flex items-center justify-center text-[#0c1a30] shadow-[0_4px_12px_rgba(12,26,48,0.06),inset_0_1px_1px_white] hover:bg-white transition-all"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNavDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
