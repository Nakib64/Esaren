import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import VenturesPageView from '@/components/ventures/VenturesPageView';

export const metadata: Metadata = {
  title: 'Venture Management & Our Strategic Partners | Esaren Global',
  description:
    'Discover Esaren Global’s portfolio ventures and strategic institutional partners spanning tech integration, private aviation, fund management, and healthcare.',
};

export default function VenturesPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <VenturesPageView />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
