'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      autoResize: true,
    });

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Re-calculate Lenis scroll bounds on ScrollTrigger refresh
    const handleScrollTriggerRefresh = () => {
      lenis.resize();
    };

    ScrollTrigger.addEventListener('refresh', handleScrollTriggerRefresh);

    // Debounce helper
    const debounce = (func: (...args: any[]) => void, timeout = 300) => {
      let timer: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func(...args);
        }, timeout);
      };
    };

    const splitInstances: SplitType[] = [];

    // Text Reveal Animation function
    const setTextRevealAnimations = () => {
      splitInstances.forEach((inst) => inst.revert());
      splitInstances.length = 0;

      document.querySelectorAll('.text-reveal').forEach((text) => {
        text.querySelectorAll('.line-wrapper').forEach((wrapper) => {
          const parent = wrapper.parentElement;
          if (parent) {
            while (wrapper.firstChild) {
              parent.insertBefore(wrapper.firstChild, wrapper);
            }
            parent.removeChild(wrapper);
          }
        });
      });

      document.querySelectorAll('.text-reveal').forEach((textElement) => {
        const text = textElement as HTMLElement;
        const splitText = new SplitType(text, { types: 'lines' });
        splitInstances.push(splitText);

        if (splitText.lines && splitText.lines.length > 0) {
          splitText.lines.forEach((line) => {
            const lineWrapper = document.createElement('div');
            lineWrapper.classList.add('line-wrapper');
            line.insertAdjacentElement('beforebegin', lineWrapper);
            lineWrapper.appendChild(line);
          });

          gsap.set(splitText.lines, { y: '100%' });

          gsap.to(splitText.lines, {
            y: '0%',
            ease: 'power1.inOut',
            stagger: 0.15,
            scrollTrigger: {
              trigger: text,
              start: 'top bottom',
              toggleActions: 'play reset play reset',
            },
          });
        }
      });
    };

    // Initial setup & delayed refresh after layout & pinning settles
    const initTimer = setTimeout(() => {
      setTextRevealAnimations();
      ScrollTrigger.refresh();
      lenis.resize();
    }, 200);

    const secondaryTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      lenis.resize();
    }, 1000);

    // Resize Observer
    const resizeObserver = new ResizeObserver(
      debounce(() => {
        setTextRevealAnimations();
        ScrollTrigger.refresh();
        lenis.resize();
      }, 300)
    );

    resizeObserver.observe(document.body);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(secondaryTimer);
      resizeObserver.disconnect();
      ScrollTrigger.removeEventListener('refresh', handleScrollTriggerRefresh);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      splitInstances.forEach((inst) => inst.revert());
    };
  }, []);

  return <>{children}</>;
}
