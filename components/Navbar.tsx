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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-foreground backdrop-blur-xl border-b  shadow-[0_8px_30px_rgba(4,2,115,0.35)] py-3.5'
          : 'bg-foreground py-4.5 border-b /50'
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo with Actual EGL Emblem */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="EGL Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex items-center">
            <span className="font-serif text-lg font-bold tracking-wider uppercase leading-none text-white">
              ESAREN <span className="text-[#D2BF37]">GLOBAL</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — Deep Blue & Light Grey Pill */}
        <nav
          className="hidden xl:flex items-center gap-1 backdrop-blur-xl px-3 py-1.5 rounded-full   relative"
          onMouseLeave={() => setMegaOpen(false)}
        >
          {MAIN_NAV_LINKS.map((link) => {
            const isPMC = link.name === 'Project Management Consulting';
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setMegaOpen(isPMC)}
              >
                <Link
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    isPMC && megaOpen
                      ? 'bg-white/15 text-[#D2BF37] shadow-sm'
                      : 'text-slate-200 hover:text-[#D2BF37] hover:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  {isPMC && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        megaOpen ? 'rotate-180 text-[#D2BF37]' : 'text-slate-300'
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
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-primary hover:bg-gold-light text-foreground text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="xl:hidden w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-sm"
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
