'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonialsData';

gsap.registerPlugin(ScrollTrigger);

export default function MobileReviewsCarousel() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pinEl = pinRef.current;
    const track = trackRef.current;
    if (!pinEl || !track) return;

    const mm = gsap.matchMedia();
    mm.add('(max-width: 767px)', () => {
      const getSlideWidth = () => (TESTIMONIALS.length - 1) * window.innerWidth;
      gsap.to(track, {
        x: () => -getSlideWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: () => `+=${getSlideWidth()}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative w-full">
      <div ref={pinRef} className="relative h-screen overflow-hidden bg-[#f4f1ea] text-[#0c1a30]">
        {/* Fixed header */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-10 pb-5 px-6 bg-gradient-to-b from-[#f4f1ea] via-[#f4f1ea]/95 to-transparent pointer-events-none">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold text-xs tracking-widest uppercase shadow-sm font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
              <span>Project Management Lifecycle</span>
            </div>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#0c1a30]">
              Project Management Consulting Cycle
            </h2>
          </div>
        </div>

        {/* Horizontal track driven by Lenis + GSAP */}
        <div ref={trackRef} className="flex h-full will-change-transform" style={{ width: `${TESTIMONIALS.length * 100}vw` }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="w-screen h-full flex items-center justify-center px-6 shrink-0">
              <div className="w-full max-w-sm mt-20 flex flex-col gap-3">
                {/* 1. White Quote Card */}
                <div className="rounded-3xl bg-white border border-slate-200/80 hover:border-gold-border card-hover-gold-accent p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-3 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] tracking-widest uppercase badge-gold px-3 py-1 rounded-full font-semibold">
                        {t.organization}
                      </span>
                      <span className="text-[10px] font-bold text-[#0c1a30] bg-[#f4f1ea] px-3 py-1 rounded-full">
                        {t.metric}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#0c1a30] leading-snug">{t.title}</h3>
                    <p className="text-xs text-[#475569] font-light leading-relaxed">{t.quote}</p>
                  </div>
                  <div className="flex gap-1 text-gold pt-3 mt-3 border-t border-slate-100 relative z-10">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* 2. Dark Navy Author Card */}
                <div className="rounded-3xl bg-navy-gradient border border-gold text-white p-5 shadow-xl space-y-2">
                  <img src={t.photo} alt={t.author} className="w-12 h-12 rounded-xl object-cover border-2 border-white/20 shadow" />
                  <div>
                    <h4 className="text-base font-bold font-serif">{t.author}</h4>
                    <p className="text-xs text-slate-300">{t.role}</p>
                    <p className="text-xs text-gold-light">{t.location}</p>
                  </div>
                </div>

                {/* 3. White Counter Card */}
                <div className="rounded-2xl bg-white border border-slate-200 px-5 py-3 flex items-center justify-between shadow-sm">
                  <span className="text-xs  text-slate-500">Lifecycle Phase</span>
                  <span className="text-lg  font-bold text-[#0c1a30]">
                    {t.id}<span className="text-slate-300 text-sm">/{String(TESTIMONIALS.length).padStart(2, '0')}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
