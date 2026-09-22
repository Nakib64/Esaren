'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';
import { setupTextReveal } from '@/components/utils/textReveal';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      autoResize: true,
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const updateLenis = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const handleRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener('refresh', handleRefresh);

    const splitInstances: SplitType[] = [];

    const initTimer = setTimeout(() => {
      setupTextReveal(splitInstances);
      ScrollTrigger.refresh();
      lenis.resize();
    }, 200);

    const secondaryTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      lenis.resize();
    }, 1000);

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
      lenis.resize();
    });

    resizeObserver.observe(document.body);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(secondaryTimer);
      resizeObserver.disconnect();
      ScrollTrigger.removeEventListener('refresh', handleRefresh);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      splitInstances.forEach((inst) => inst.revert());
    };
  }, []);

  return <>{children}</>;
}
