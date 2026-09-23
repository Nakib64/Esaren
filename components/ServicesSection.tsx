'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CAPABILITY_SERVICES } from '@/data/capabilitiesData';
import CapabilityBentoCard from '@/components/services/CapabilityBentoCard';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-[#f9f6f0] text-[#0c1a30] overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 space-y-14">
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
            <span>Capabilities & Ventures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#0c1a30]">
            14 Key Expertise in Infrastructure Consulting
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Our specialized engineering, project management, and turnkey consulting capabilities powering national transport corridors, telecommunications, and industrial energy infrastructure.
          </p>
        </div>

        {/* Dynamic Asymmetric Bento Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {CAPABILITY_SERVICES.map((service, index) => (
            <CapabilityBentoCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA to Full EPC Page */}
        <div className="text-center pt-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-navy-gold font-bold text-xs uppercase tracking-widest group"
          >
            <span>Explore Full 3-Phase EPC Lifecycle & Technical Specs</span>
            <ArrowRight className="w-4 h-4 text-gold-light group-hover:text-gold-lighter group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
