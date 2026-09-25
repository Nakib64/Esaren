'use client';

import SubpageHero from '@/components/ui/SubpageHero';
import { MISSION_STATEMENT, VISION_STATEMENT, GROUP_NAME } from '@/data/brandData';
import { ABOUT_PILLARS } from '@/data/aboutPillars';
import DesktopPillarCard from '@/components/about/DesktopPillarCard';
import AboutGallerySection from '@/components/about/AboutGallerySection';
import { Target, Eye, Globe2, Building2, ShieldCheck } from 'lucide-react';

export default function AboutPageView() {
  return (
    <div>
      <SubpageHero
        badge="About Esaren Global"
        title="Engineering Infrastructure & Sovereign Ventures"
        description={`Esaren Global Ltd (EGL) is a leading entity having a multi-faceted business portfolio. A concern of "${GROUP_NAME}", collaborating with clients to effectively address operational challenges and grow stronger.`}
        graphicSrc="/images/hero_about_transparent.webp"
        primaryCtaText="Explore Global Matrix"
        primaryCtaLink="#matrix"
        secondaryCtaText="Contact Executive Hubs"
        secondaryCtaLink="/contact"
        pillars={[
          { icon: Building2, title: '4 Global Hubs', subtitle: 'Singapore, London, Guangzhou, Lagos' },
          { icon: Globe2, title: '20+ Countries', subtitle: 'Global Clientele' },
          { icon: ShieldCheck, title: '$620M Pipeline', subtitle: 'London Group HQ' },
        ]}
      />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#f9f6f0] text-[#0c1a30] border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-gold-border card-hover-gold-accent shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl icon-box-gold flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#0c1a30]">Our Mission</h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              {MISSION_STATEMENT}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-gold-border card-hover-gold-accent shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0c1a30] flex items-center justify-center border border-slate-200">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#0c1a30]">Our Vision</h2>
            <p className="text-slate-600 text-base font-light leading-relaxed">
              {VISION_STATEMENT}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Global Offices Responsibility Matrix */}
      <section id="matrix" className="py-20 md:py-28 bg-[#f4f1ea] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs tracking-widest uppercase text-gold-dark font-bold">
              Global Operating Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              Global Footprint & Responsibility Matrix
            </h2>
          </div>

          {/* 2x2 Bento Hub Cards matching homepage about section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ABOUT_PILLARS.map((item, index) => (
              <DesktopPillarCard
                key={item.id}
                item={item}
                index={index}
                linkHref="/contact"
                linkLabel="Connect With Hub"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <AboutGallerySection />
    </div>
  );
}
