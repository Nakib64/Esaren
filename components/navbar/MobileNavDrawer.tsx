'use client';

import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/components/navbar/navData';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0c1a30] text-white flex flex-col justify-between shadow-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <img
                  src="/images/logo.png"
                  alt="EGL Logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-serif text-base font-bold tracking-wider uppercase text-white">
                  ESAREN <span className="text-[#c5a059]">GLOBAL</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 py-8 space-y-2 overflow-y-auto">
              {MAIN_NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium tracking-widest uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </Link>
              ))}
            </nav>

            {/* Bottom Contact CTA */}
            <div className="pt-6 border-t border-white/10">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-bold text-xs tracking-widest uppercase bg-white text-[#0c1a30] hover:bg-slate-100 transition-all shadow-md"
              >
                <span>Connect With Advisory</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
