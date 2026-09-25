export interface CoreActivityItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  iconName: 'Building2' | 'TrendingUp';
  bgImage: string;
  highlights: string[];
  primaryLink: string;
  primaryLabel: string;
  secondaryLink: string;
  secondaryLabel: string;
}

export const CORE_ACTIVITIES: CoreActivityItem[] = [
  {
    id: '01',
    badge: 'Core Activity 01 • Infrastructure Consulting',
    title: 'Project Management Consulting (PMC)',
    subtitle: 'Construction & Communication Engineering • EPC Execution',
    desc: 'At EGL, our primary focus is project development in partnership with Engineering, Procurement & Construction (EPC) firms. We deliver end-to-end consulting for transport corridors, deep-sea SPM/LNG ports, high telecom towers, and utility solar grids.',
    iconName: 'Building2',
    bgImage: '/images/cap_road_bridge.webp',
    highlights: [
      '14 Key Infrastructure Consulting Capabilities',
      '3-Phase Stakeholder & PMO Lifecycle Cycle',
      'Full EPC Engineering, Procurement & Construction',
      'USD 1.4B+ In Completed Megaproject Deliveries',
    ],
    primaryLink: '#services',
    primaryLabel: 'Explore 14 Capabilities',
    secondaryLink: '/services',
    secondaryLabel: 'Full EPC Lifecycle',
  },
  {
    id: '02',
    badge: 'Core Activity 02 • Strategic Alliances',
    title: 'Venture Management & Strategic Partners',
    subtitle: 'Strategic Alliances • Singapore Fund Advisory • Cross-Border Growth',
    desc: 'At the second step, EGL syndicates strategic partnerships and venture management with a Singapore-based Fund Management presence. We provide financing facilities, technical partnership, and strategic partner co-development worldwide.',
    iconName: 'TrendingUp',
    bgImage: '/images/hero_slide_2.webp',
    highlights: [
      'Singapore-Based Fund Management & Financing Facilities',
      'Strategic Partner Alliances (Whitespace, Zenith, Fortius, Orient)',
      'Cross-Border Technology & Infrastructure Co-Development',
      'Institutional Wealth Structuring & SPV Fund Governance',
    ],
    primaryLink: '#ventures',
    primaryLabel: 'Explore Strategic Partners',
    secondaryLink: '/ventures',
    secondaryLabel: 'View All Partners & Ventures',
  },
];
