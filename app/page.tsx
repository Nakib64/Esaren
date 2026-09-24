import type { Metadata } from 'next';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoreActivitiesSection from '@/components/CoreActivitiesSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import PortfolioVenturesSection from '@/components/PortfolioVenturesSection';
import TeamSection from '@/components/TeamSection';
import PartnerSection from '@/components/PartnerSection';
import ClientReviewSection from '@/components/ClientReviewSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Esaren Global | Project Management Consulting & Venture Management',
  description:
    'Esaren Global Ltd (EGL) is a concern of Esaren International Group, UK, operating across London, Singapore, Izmir, and Dhaka with over USD 1.4 Billion in global infrastructure deliveries.',
};

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CoreActivitiesSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <PortfolioVenturesSection />
        <TeamSection />
        <PartnerSection />
        <ClientReviewSection />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
