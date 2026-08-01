'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Cpu,
  Globe2,
  Zap,
  TrendingUp,
  Compass,
  Landmark,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Sovereign Megaproject Execution',
    paragraph:
      'End-to-end management of multi-billion dollar public sector infrastructure, transport hubs, and civic installations.',
    bgImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
    icon: Layers,
    gridSpan: 'md:col-span-8 h-[440px]',
    category: 'Megaprojects',
  },
  {
    id: 2,
    title: 'Cross-Border Capital & Equity',
    paragraph:
      'Structuring international joint ventures, private equity deployment, and sovereign fund syndication.',
    bgImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    icon: ShieldCheck,
    gridSpan: 'md:col-span-4 h-[440px]',
    category: 'Capital Advisory',
  },
  {
    id: 3,
    title: 'Enterprise AI & Cloud Ecosystems',
    paragraph:
      'Architecting sovereign data grids, AI decision engines, and secure cloud infrastructure for institutions.',
    bgImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    icon: Cpu,
    gridSpan: 'md:col-span-4 h-[380px]',
    category: 'Digital Intelligence',
  },
  {
    id: 4,
    title: 'Sovereign Asset & Risk Governance',
    paragraph:
      'Implementing international regulatory compliance, institutional risk mitigation, and asset protection.',
    bgImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    icon: Landmark,
    gridSpan: 'md:col-span-4 h-[380px]',
    category: 'Governance',
  },
  {
    id: 5,
    title: 'Renewable Energy Grid Infrastructure',
    paragraph:
      'Directing multi-gigawatt clean energy transition grids, green hydrogen projects, and storage corridors.',
    bgImage:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    icon: Zap,
    gridSpan: 'md:col-span-4 h-[380px]',
    category: 'Energy Transition',
  },
  {
    id: 6,
    title: 'Global Human Capital Acceleration',
    paragraph:
      'Developing executive leadership councils, specialized workforce talent networks, and cross-border teams.',
    bgImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    icon: Globe2,
    gridSpan: 'md:col-span-6 h-[420px]',
    category: 'Leadership & Talent',
  },
  {
    id: 7,
    title: 'International Supply Chain & Trade',
    paragraph:
      'Connecting maritime deepwater ports, aviation logistics hubs, and automated cross-continental trade routes.',
    bgImage:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
    icon: Compass,
    gridSpan: 'md:col-span-6 h-[420px]',
    category: 'Trade Mobility',
  },
  {
    id: 8,
    title: 'Public-Private Partnership (P3) Structuring',
    paragraph:
      'Bridging public sector mandates with private capital efficiency to deliver resilient economic ventures.',
    bgImage:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    icon: TrendingUp,
    gridSpan: 'md:col-span-12 h-[360px]',
    category: 'Strategic P3',
  },
];

export default function ServicesSection() {
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
    <section
      id="services"
      className="relative py-28 md:py-36 bg-[#f9f6f0] text-[#0c1a30] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
        transition={{ duration: isMobile ? 0.35 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase shadow-sm">
            <span>Capabilities & Ventures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#0c1a30] text-reveal">
            Comprehensive Growth Capabilities
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light text-reveal">
            Eight specialized strategic capabilities powering sovereign megaprojects, cross-border capital deployment, and digital innovation.
          </p>
        </div>

        {/* Dynamic Asymmetric Bento Grid (8 Cards with Fast Mobile Stagger Repeat) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: isMobile ? 15 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
                transition={{
                  duration: isMobile ? 0.3 : 0.6,
                  delay: isMobile ? 0.05 : (index % 4) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`service-bento-card service-block group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 flex flex-col justify-end p-8 sm:p-10 cursor-pointer shadow-lg shadow-slate-900/5 hover:border-[#0c1a30]/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${service.gridSpan}`}
              >
                {/* Cover Image with Smooth Zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="service-bg-img w-full h-full object-cover filter brightness-60 contrast-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/75 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="service-content relative z-20 space-y-3 text-white">
                  {/* Top Icon Badge */}
                  <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md group-hover:bg-[#0c1a30] group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {service.title}
                  </h3>

                  {/* Paragraph Description: Hidden by default, reveals smoothly ONLY on hover */}
                  <p className="service-desc text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-2xl">
                    {service.paragraph}
                  </p>

                  {/* Button: "Go to details" text reveals on left of arrow button ONLY on hover */}
                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 text-white hover:bg-[#0c1a30] hover:border-[#0c1a30] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group/btn shadow-md"
                    >
                      <span className="btn-text text-xs font-semibold uppercase tracking-wider">
                        Go to details
                      </span>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/30 group-hover/btn:bg-white group-hover/btn:text-[#0c1a30] transition-colors shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </a>

                    <span className="text-xs font-mono text-slate-300 font-bold">
                      0{service.id}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
