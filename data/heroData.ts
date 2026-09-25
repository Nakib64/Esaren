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
    tag: 'Core Activity 01 • Project Management Consulting',
    icon: Building2,
    bgImage: '/images/hero_slide_1.webp',
    primaryLink: '/services',
    primaryText: 'Explore Capabilities',
  },
  {
    id: 2,
    title: 'Venture Management & Strategic Partners',
    subtitle: 'Strategic Alliances, Fund Advisory & Global Co-Development',
    description:
      'Syndicating strategic corporate partners, private aviation, and cross-border alliances backed by Singapore-based fund management and institutional capital syndication.',
    tag: 'Core Activity 02 • Strategic Partners & Alliances',
    icon: TrendingUp,
    bgImage: '/images/hero_slide_2.webp',
    primaryLink: '/ventures',
    primaryText: 'Explore Strategic Partners',
  },
  {
    id: 3,
    title: 'USD 1.4 Billion+ In Completed Global Deliveries',
    subtitle: 'Operating Across 20+ Countries Worldwide',
    description:
      'From the Trans-Sumatra 614km expressway in Indonesia to utility solar in Sri Lanka and SPM refinery terminals, we deliver multi-million dollar assets on budget.',
    tag: 'Delivered Track Record • $1.4B+ Global Assets',
    icon: Award,
    bgImage: '/images/hero_slide_3.webp',
    primaryLink: '/projects',
    primaryText: 'View Landmark Projects',
  },
];
