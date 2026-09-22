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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled
          ? 'bg-[#f9f6f0]/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#0c1a30] text-white flex items-center justify-center font-serif font-bold text-sm shadow-md transition-transform group-hover:scale-105">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-[#0c1a30] uppercase">
              Esaren<span className="text-slate-400 font-light">Global</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 shadow-sm">
          {MAIN_NAV_LINKS.map((link) => {
            const isCapabilities = link.name === 'Capabilities';
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => isCapabilities && setMegaOpen(true)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-slate-700 hover:text-[#0c1a30] hover:bg-slate-100/80 transition-all flex items-center gap-1"
                >
                  <span>{link.name}</span>
                  {isCapabilities && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c1a30] text-white text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#1e3a8a] transition-all shadow-md hover:scale-105"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0c1a30] shadow-sm hover:bg-slate-50 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Services Dropdown Mega Menu */}
      {megaOpen && <ServicesMegaMenu onClose={() => setMegaOpen(false)} />}

      {/* Mobile Drawer */}
      <MobileNavDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
