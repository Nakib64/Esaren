import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import VenturesPageView from '@/components/ventures/VenturesPageView';

export const metadata: Metadata = {
  title: 'Venture Management & Strategic Joint Ventures | Esaren Global',
  description:
    'Discover Esaren Global’s portfolio ventures and strategic international joint ventures spanning 3D robotics, tech integration, private aviation, and healthcare.',
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
