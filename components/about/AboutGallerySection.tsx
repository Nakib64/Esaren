'use client';

import { Camera } from 'lucide-react';
import TeamGalleryCard from '@/components/team/TeamGalleryCard';
import { TEAM_GALLERY } from '@/data/teamGalleryData';

export default function AboutGallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#f9f6f0] text-[#0c1a30] border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
              <Camera className="w-3.5 h-3.5 text-gold-light" />
              <span>EGL In Action • Photo Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c1a30] tracking-tight">
              Executive Fraternity & Field Synergy
            </h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              Explore our multidisciplinary teams, strategic project management sessions, and executive summit engagements across our international footprint.
            </p>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8e6814] bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm self-start md:self-end">
            <span>{TEAM_GALLERY.length} Captured Engagements</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {TEAM_GALLERY.map((item, index) => (
            <TeamGalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
