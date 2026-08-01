'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Globe2, Cpu, Award, ArrowDown } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Strategic Mandate & Vision Alignment',
    subtitle: 'Scoping Sovereign Ambitions',
    description:
      'Deep-dive alignment with government ministries, sovereign funds, and enterprise leadership to articulate clear economic objectives and global positioning.',
    icon: Target,
    tag: 'Phase I',
  },
  {
    step: '02',
    title: 'Feasibility & Geopolitical Risk Modeling',
    subtitle: 'Global Compliance & Financial Rigor',
    description:
      'Conducting multi-jurisdictional legal audits, risk mapping, and multi-scenario capital modeling to ensure unbreachable deal resilience.',
    icon: ShieldCheck,
    tag: 'Phase II',
  },
  {
    step: '03',
    title: 'Capital & Stakeholder Syndication',
    subtitle: 'Structuring Sovereign & Private Capital',
    description:
      'Syndicating institutional capital, negotiating P3 agreements, and forming cross-continental joint venture consortiums built for scale.',
    icon: Globe2,
    tag: 'Phase III',
  },
  {
    step: '04',
    title: 'Agile Infrastructure Delivery',
    subtitle: 'AI Control Towers & Execution Teams',
    description:
      'Deploying enterprise AI decision engines, agile project management workflows, and specialized international execution teams on the ground.',
    icon: Cpu,
    tag: 'Phase IV',
  },
  {
    step: '05',
    title: 'Operational Governance & Legacy Creation',
    subtitle: 'Multi-Generational Value Impact',
    description:
      'Establishing long-term operational governance, executive human capital transfer, and sustainable economic impact for generations.',
    icon: Award,
    tag: 'Phase V',
  },
];

export default function ProcessSection() {
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
    <section id="process" className="relative py-28 md:py-36 bg-[#f4f1ea] text-[#0c1a30] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
          transition={{ duration: isMobile ? 0.35 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase shadow-sm">
            <span>5-Step Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#0c1a30]">
            From Vision To Sovereign Execution
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light">
            A structured multi-phase strategic framework turning ambitious concepts into resilient global economic ventures.
          </p>
        </motion.div>

        {/* Tree Timeline Container */}
        <div className="relative">
          {/* Continuous Vertical Trunk Line (Left side on Mobile, Center on Desktop) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-12 w-1 -translate-x-1/2 bg-gradient-to-b from-[#0c1a30] via-[#1e3a8a] to-[#0c1a30] rounded-full opacity-30 pointer-events-none" />

          <div className="space-y-10 md:space-y-16">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Tree Node Center Icon Circle (Pinned on Vertical Trunk Line) */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0.05 : 0.1 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#0c1a30] text-white border-4 border-[#f4f1ea] flex items-center justify-center shadow-xl z-20"
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 stroke-[2]" />
                  </motion.div>

                  {/* Card Half */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isMobile ? 20 : isEven ? 50 : -50,
                      y: isMobile ? 15 : 0,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
                    transition={{
                      duration: isMobile ? 0.35 : 0.7,
                      delay: isMobile ? 0.05 : 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`w-full md:w-[45%] pl-16 sm:pl-20 md:pl-0 group`}
                  >
                    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 md:p-10 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-[#0c1a30]/40 transition-all duration-500 relative space-y-4">
                      {/* Top Row: Phase Tag & Number */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#1e3a8a] uppercase bg-[#f8fafc] px-3.5 py-1.5 rounded-full border border-slate-200">
                          {item.tag}
                        </span>
                        <span className="text-2xl font-mono font-bold text-[#0c1a30]/30 group-hover:text-[#0c1a30] transition-colors">
                          {item.step}
                        </span>
                      </div>

                      {/* Step Title & Subtitle */}
                      <div className="space-y-1">
                        <span className="text-xs font-mono text-[#1e3a8a] font-semibold block">
                          {item.subtitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c1a30] leading-snug group-hover:text-[#1e3a8a] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Subtle Corner Node Decorator */}
                      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-[#0c1a30] transition-colors">
                        <span>Verified Workflow</span>
                        <ArrowDown className="w-3.5 h-3.5 -rotate-90" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty Spacer Half for Desktop Alignment */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
