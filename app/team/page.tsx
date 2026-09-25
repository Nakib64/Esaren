import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import TeamPageView from '@/components/team/TeamPageView';

export const metadata: Metadata = {
  title: 'Executive Leadership & Strategic Advisory Board | Esaren Global',
  description:
    'Explore the global executive council, strategic advisory board, and operational directors of Esaren Global Ltd across Singapore, London, Guangzhou, and Lagos.',
};

export default function TeamPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <TeamPageView />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
