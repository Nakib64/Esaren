import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ServicesPageView from '@/components/services/ServicesPageView';

export const metadata: Metadata = {
  title: 'Project Management Consulting & EPC Capabilities | Esaren Global',
  description:
    'Explore Esaren Global’s Project Management Consulting (PMC) and EPC engineering lifecycle across transport, telecom, power, and marine terminals.',
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
