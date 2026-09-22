import { Building2, TrendingUp, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  bgImage: string;
  primaryLink: string;
  primaryText: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: 'Project Management Consulting & Turnkey Engineering',
    subtitle: 'Civil, Bridge & Telecommunications Infrastructure',
    description:
      'Esaren Global Ltd delivers world-class PMC and EPC execution across high-capacity highway networks, bridge corridors, deep-sea SPM/LNG facilities, and power grids.',
    tag: 'Project Management Consulting',
    icon: Building2,
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    primaryLink: '/services',
    primaryText: 'Explore Capabilities',
  },
  {
    id: 2,
    title: 'Venture Management & Strategic Joint Ventures',
    subtitle: 'Incubation, Fund Advisory & Global Alliances',
    description:
      'Fostering breakthrough startups, 3D robotics, and cross-border joint ventures backed by Singapore-based fund management and institutional capital syndication.',
    tag: 'Venture Management',
    icon: TrendingUp,
    bgImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    primaryLink: '/ventures',
    primaryText: 'Explore Ventures',
  },
  {
    id: 3,
    title: 'USD 1.4 Billion+ In Completed Global Deliveries',
    subtitle: 'Operating Across 20+ Countries Worldwide',
    description:
      'From the Trans-Sumatra 614km expressway in Indonesia to utility solar in Sri Lanka and SPM refinery terminals, we deliver multi-million dollar assets on budget.',
    tag: 'Track Record & Megaprojects',
    icon: Cpu,
    bgImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop',
    primaryLink: '/projects',
    primaryText: 'View Landmark Projects',
  },
];
