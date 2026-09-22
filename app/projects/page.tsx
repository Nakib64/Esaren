import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProjectsPageView from '@/components/projects/ProjectsPageView';

export const metadata: Metadata = {
  title: 'Completed Infrastructure Megaprojects ($1.4B+) | Esaren Global',
  description:
    'Explore Esaren Global’s USD 1.4B+ track record in deep-sea LNG terminals, expressways, 110MW solar plants, and international aviation hubs.',
};

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <ProjectsPageView />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
