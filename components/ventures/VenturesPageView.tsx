'use client';

import SubpageHero from '@/components/ui/SubpageHero';
import VentureCard from '@/components/ui/VentureCard';
import VenturesRolesSection from '@/components/ventures/VenturesRolesSection';
import { PORTFOLIO_VENTURES, JOINT_VENTURES } from '@/data/venturesData';

export default function VenturesPageView() {
  return (
    <div>
      <SubpageHero
        badge="Venture Management & Strategic Partnerships"
        title="Venture Management & Strategic Partnerships"
        description="Fostering breakthrough startups and cross-border joint ventures backed by Singapore-based fund management, specialized technical expertise, and institutional governance."
        graphicSrc="/images/hero_ventures_transparent.webp"
        primaryCtaText="Explore Major Ventures"
        primaryCtaLink="#ventures"
        secondaryCtaText="Strategic Partnerships"
        secondaryCtaLink="#partnerships"
      />

      {/* Page 18: Roles for Joint Ventures & Venture Management */}
      <VenturesRolesSection />

      {/* Major Portfolio Ventures (Companies) — Right under explanation */}
      <section id="ventures" className="py-20 md:py-28 bg-[#f4f1ea] text-[#0c1a30] border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs tracking-widest uppercase text-gold-dark font-bold">
              Incubated Innovation
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              Major Portfolio Ventures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_VENTURES.map((venture, index) => (
              <VentureCard
                key={venture.name}
                name={venture.name}
                country={venture.country}
                focus={venture.focus}
                description={venture.description}
                monogram={venture.monogram}
                highlight={venture.highlight}
                category={venture.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section with required explanation */}
      <section id="partnerships" className="py-20 bg-[#f9f6f0] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs tracking-widest uppercase text-gold-dark font-bold">
              Institutional Collaborations
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              Our Strategic Partners
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              As a Strategic partner, EGL refers to entities where the company holds little or no share or ownership. These entities partner with EGL for business development, marketing, global expansion and financing purposes mostly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOINT_VENTURES.map((jv, index) => (
              <VentureCard
                key={jv.name}
                name={jv.name}
                country={jv.country}
                focus={jv.focus}
                description={jv.description}
                monogram={jv.monogram}
                highlight={jv.highlight}
                category={jv.category}
                website={jv.website}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
