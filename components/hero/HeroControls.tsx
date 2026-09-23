'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '@/data/heroData';

interface HeroControlsProps {
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function HeroControls({ current, onPrev, onNext, onSelect }: HeroControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-slate-300/40 pointer-events-auto">
      {/* Slide Indicators */}
      <div className="flex items-center gap-3">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === index ? 'w-10 bg-[var(--navy-brand)]' : 'w-2 bg-slate-300 hover:bg-[var(--gold-primary)]'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous Slide"
          className="w-12 h-12 rounded-full icon-btn-navy flex items-center justify-center transition-all shadow-md active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next Slide"
          className="w-12 h-12 rounded-full icon-btn-navy flex items-center justify-center transition-all shadow-md active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
