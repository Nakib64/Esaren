'use client';

import SubpageHero from '@/components/ui/SubpageHero';
import { WHATSAPP_CONTACT, WHATSAPP_LINK } from '@/data/brandData';
import { ABOUT_PILLARS } from '@/data/aboutPillars';
import ContactHubCard from '@/components/contact/ContactHubCard';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPageView() {
  return (
    <div>
      <SubpageHero
        badge="Global Inquiries"
        title="Connect With Our Global Advisory Hubs"
        description="Initiate discussions regarding project management consulting, strategic partnerships, or fund advisory with our senior partners across Singapore, London, Guangzhou, and Lagos."
        graphicSrc="/images/logo.png"
        primaryCtaText="WhatsApp Direct"
        primaryCtaLink={WHATSAPP_LINK}
        secondaryCtaText="Email Corporate Advisory"
        secondaryCtaLink="mailto:contact@esaren.global"
        pillars={[
          { icon: MessageCircle, title: 'WhatsApp Direct', subtitle: WHATSAPP_CONTACT },
          { icon: Mail, title: 'Email Advisory', subtitle: 'contact@esaren.global' },
          { icon: MapPin, title: 'Singapore HQ', subtitle: 'Paya Lebar Square' },
        ]}
      />

      <section className="py-20 md:py-28 bg-[#f9f6f0] text-[#0c1a30]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs tracking-widest uppercase text-gold-dark font-bold">
              Executive Offices & Hubs
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0c1a30]">
              Global Presence & Direct Channels
            </h2>
          </div>

          {/* 2x2 Split Bento Hub Cards matching homepage about section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ABOUT_PILLARS.map((item, index) => (
              <ContactHubCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
