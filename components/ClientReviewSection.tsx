'use client';

import DesktopReviewsTabs from '@/components/reviews/DesktopReviewsTabs';
import MobileReviewsCarousel from '@/components/reviews/MobileReviewsCarousel';

export default function ClientReviewSection() {
  return (
    <div className="w-full">
      {/* Mobile Device View (Horizontal Scrolling Cards Stack) */}
      <div className="block md:hidden">
        <MobileReviewsCarousel />
      </div>

      {/* Desktop Device View (12-Col Featured Card Left + Tabs Right) */}
      <div className="hidden md:block">
        <DesktopReviewsTabs />
      </div>
    </div>
  );
}
