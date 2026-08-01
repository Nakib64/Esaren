import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PartnerSection from '@/components/PartnerSection';
import TeamSection from '@/components/TeamSection';
import ClientReviewSection from '@/components/ClientReviewSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#f9f6f0] text-[#0c1a30]">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PartnerSection />
        <TeamSection />
        <ClientReviewSection />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScroll>
  );
}
