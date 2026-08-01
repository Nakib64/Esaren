'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alexander Vance',
    role: 'Managing Director & Chairman',
    category: 'Sovereign Strategy',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    bio: '20+ years directing sovereign wealth partnerships and multi-billion dollar international infrastructure megaprojects.',
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Partner, Capital Allocation',
    category: 'Cross-Border Capital',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Former World Bank lead advisor specializing in emerging market private equity and institutional portfolios.',
  },
  {
    name: 'David K. Chen',
    role: 'Head of Infrastructure Delivery',
    category: 'Megaprojects',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Directed over $5B in transportation, clean energy grids, and smart city master planning.',
  },
  {
    name: 'Sophia Al-Mansoor',
    role: 'Chief Digital Officer',
    category: 'Digital Transformation',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Pioneered AI decision frameworks, sovereign cloud ecosystems, and enterprise data intelligence.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Director of Human Capital',
    category: 'Global Leadership',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Building high-performance executive networks and international workforce development programs across 35 countries.',
  },
  {
    name: 'Victoria Saint-Germain',
    role: 'Head of Cross-Border Governance',
    category: 'Regulatory Affairs',
    photo:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop',
    bio: 'Specialist in international trade law, sovereign compliance, and strategic deal structuring.',
  },
];

export default function TeamSection() {
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
      id="team"
      className="py-28 md:py-36 bg-[#f9f6f0] text-[#0c1a30] relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
        transition={{ duration: isMobile ? 0.35 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0c1a30] text-xs font-mono tracking-widest uppercase shadow-sm">
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#0c1a30] text-reveal">
            Our Global Executive Council
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light text-reveal">
            Accomplished partners and industry directors shaping multi-billion dollar international ventures.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isMobile ? 15 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isMobile ? 0.05 : 0.15 }}
              transition={{
                duration: isMobile ? 0.3 : 0.6,
                delay: isMobile ? 0.05 : (index % 3) * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="team-card group relative rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-[#0c1a30]/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#0c1a30] uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm font-semibold">
                    {member.category}
                  </span>
                </div>

                {/* Member Title on Image Overlay */}
                <div className="absolute bottom-4 left-6 right-6 z-10 text-[#0c1a30]">
                  <h3 className="text-2xl font-serif font-[#0c1a30] group-hover:text-[#1e3a8a] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#1e3a8a] tracking-wider font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Card Body & Bio */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {member.bio}
                </p>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Council Member 0{index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="#contact"
                      className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0c1a30] hover:text-white transition-colors"
                      aria-label={`Contact ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#contact"
                      className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0c1a30] hover:text-white transition-colors"
                      aria-label={`View ${member.name} profile`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
