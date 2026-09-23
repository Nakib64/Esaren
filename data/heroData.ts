import { Building2, TrendingUp, Award } from 'lucide-react';
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
    bgImage: '/images/hero_slide_1.webp',
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
    bgImage: '/images/hero_slide_2.webp',
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
    icon: Award,
    bgImage: '/images/hero_slide_3.webp',
    primaryLink: '/projects',
    primaryText: 'View Landmark Projects',
  },
];
