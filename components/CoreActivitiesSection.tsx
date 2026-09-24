'use client';

import { motion } from 'framer-motion';
import { CORE_ACTIVITIES } from '@/data/coreActivitiesData';
import CoreActivityCard from '@/components/activities/CoreActivityCard';

export default function CoreActivitiesSection() {
  return (
    <section id="activities" className="relative py-28 md:py-36 bg-[#f9f6f0] text-[#0c1a30] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
            <span>Our Areas of Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#0c1a30]">
            Two Core Pillars. One Sovereign Standard.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            As established in our corporate charter, Esaren Global Ltd focuses exclusively across two distinct business activities: <span className="font-semibold text-[#0c1a30]">1. Project Management Consulting</span> for sovereign infrastructure, and <span className="font-semibold text-[#0c1a30]">2. Venture Management</span> for high-growth startups, robotics, and global Joint Ventures.
          </p>
        </motion.div>

        {/* 2-Pillar Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {CORE_ACTIVITIES.map((activity, index) => (
            <CoreActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
