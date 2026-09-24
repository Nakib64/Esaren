export interface TeamGalleryItem {
  id: string;
  title: string;
  location: string;
  badge: string;
  image: string;
  description: string;
  gridSpan: string;
  heightClass?: string;
  objectPosition?: string;
}

export const TEAM_GALLERY: TeamGalleryItem[] = [
  {
    id: 'council-lobby',
    title: 'Executive Council Strategy Summit',
    location: 'Corporate Headquarters',
    badge: 'Governance & Strategy',
    image: '/images/team/executive_council_lobby.webp',
    description: 'Chairperson Naila Chowdhury, Senior Partner Ruhsan Rahman, and senior partners convening to direct sovereign financing and global expansion.',
    gridSpan: 'lg:col-span-7',
    heightClass: 'h-[500px] sm:h-[540px] lg:h-[560px]',
    objectPosition: 'object-center',
  },
  {
    id: 'strategy-action',
    title: 'Strategic Planning & PMC Technical Direction',
    location: 'PMO Strategy Desk',
    badge: 'Infrastructure Architecture',
    image: '/images/team/our_strategy_team_in_action.webp',
    description: 'Our strategy and technical leads reviewing upcoming civil engineering, highway corridors, and EPC execution roadmaps.',
    gridSpan: 'lg:col-span-5',
    heightClass: 'h-[500px] sm:h-[540px] lg:h-[560px]',
    objectPosition: 'object-center',
  },
  {
    id: 'lagos-team',
    title: 'Leadership with West Africa Regional Desk',
    location: 'Lagos, Nigeria',
    badge: 'Regional Infrastructure Hub',
    image: '/images/team/our_managing_partner_lagos_team.webp',
    description: 'Executive leadership on-ground with the Lagos back-office team coordinating sovereign infrastructure projects across the African region.',
    gridSpan: 'lg:col-span-5',
    heightClass: 'h-[560px] sm:h-[620px] lg:h-[640px]',
    objectPosition: 'object-top',
  },
  {
    id: 'venture-management',
    title: 'Venture Management & Incubation Working Group',
    location: 'Singapore & International Desks',
    badge: 'Venture Development & JVs',
    image: '/images/team/our_venture_management_team_in_action.webp',
    description: 'Coordinating startup incubation, 3D construction robotics (Camhirst), private aviation (Ural Air), and cross-border fund syndication.',
    gridSpan: 'lg:col-span-7',
    heightClass: 'h-[560px] sm:h-[620px] lg:h-[640px]',
    objectPosition: 'object-center',
  },
  {
    id: 'operations-rooftop',
    title: 'Multidisciplinary Operations & Support Unit',
    location: 'Dhaka Operations Hub',
    badge: 'Back-End Operations',
    image: '/images/team/operations_team_rooftop.webp',
    description: 'Formulated specialized multidisciplinary teams delivering internal coordination, shared support services, and venture deployment.',
    gridSpan: 'lg:col-span-6',
    heightClass: 'h-[500px] sm:h-[540px] lg:h-[560px]',
    objectPosition: 'object-center',
  },
  {
    id: 'workshop-circle',
    title: 'All-Hands Strategy & Alignment Circle',
    location: 'Regional Operations Center',
    badge: 'Operational Continuity',
    image: '/images/team/team_workshop_circle.webp',
    description: 'Structured alignment sessions connecting multidisciplinary leads across London, Singapore, Izmir, and Dhaka.',
    gridSpan: 'lg:col-span-6',
    heightClass: 'h-[500px] sm:h-[540px] lg:h-[560px]',
    objectPosition: 'object-center',
  },
  {
    id: 'partners-summit',
    title: 'Executive Partners International Alliance Summit',
    location: 'Global Leadership Summit',
    badge: 'Strategic Alliances',
    image: '/images/team/leadership_partners_dinner.webp',
    description: 'Senior partners deliberating multi-jurisdictional joint venture partnerships, risk governance, and fund management frameworks.',
    gridSpan: 'lg:col-span-12',
    heightClass: 'h-[580px] sm:h-[660px] lg:h-[720px]',
    objectPosition: 'object-top',
  },
];
