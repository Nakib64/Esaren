import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AboutPageView from '@/components/about/AboutPageView';

export const metadata: Metadata = {
  title: 'About Us & Global Footprint Matrix | Esaren Global',
  description:
    'Learn about Esaren Global Ltd, our mission, vision, and the four global operating hubs across London, Singapore, Izmir, and Dhaka.',
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <AboutPageView />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
