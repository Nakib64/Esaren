import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ServicesPageView from '@/components/services/ServicesPageView';

export const metadata: Metadata = {
  title: 'Engineering & EPC Consulting Capabilities | Esaren Global',
  description:
    'Explore Esaren Global’s 13 specialized engineering disciplines and 3-phase EPC management across civil infrastructure, telecom, and industrial power.',
};

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <ServicesPageView />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
