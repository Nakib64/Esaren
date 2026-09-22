export interface AboutPillar {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  iconName: 'ShieldCheck' | 'Compass' | 'Zap' | 'Users';
  coverImage: string;
}

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    id: '01',
    title: 'Sovereign Project Management',
    tagline: 'Execution Excellence',
    desc: 'Transforming high-stakes government and institutional concepts into operationally resilient, multi-generational infrastructure ventures.',
    iconName: 'ShieldCheck',
    coverImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Cross-Border Capital Facilitation',
    tagline: 'Strategic Financing',
    desc: 'Connecting sovereign wealth, institutional capital, and private equity to high-yield international projects with rigorous governance.',
    iconName: 'Compass',
    coverImage:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Digital & AI Ecosystem Transformation',
    tagline: 'Future Readiness',
    desc: 'Modernizing legacy enterprise architectures through AI-driven decision engines, cloud ecosystems, and secure digital infrastructure.',
    iconName: 'Zap',
    coverImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Global Human Capital Development',
    tagline: 'Talent & Leadership',
    desc: 'Nurturing executive leadership, workforce capability, and specialized talent networks across international business landscapes.',
    iconName: 'Users',
    coverImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
];
