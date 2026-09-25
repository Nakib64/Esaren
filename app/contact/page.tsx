import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ContactPageView from '@/components/contact/ContactPageView';

export const metadata: Metadata = {
  title: 'Contact Global Advisory Hubs | Esaren Global',
  description:
    'Connect with Esaren Global Ltd headquarters at Paya Lebar Square, Singapore, or our operating hubs in London, Guangzhou, and Lagos.',
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <ContactPageView />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
