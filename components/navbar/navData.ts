export interface NavLinkItem {
  name: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Project Management Consulting', href: '/services' },
  { name: 'Strategic Partners', href: '/ventures' },
  { name: 'Leadership', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES_MEGA_ITEMS = [
  {
    label: 'Road, Bridge & Highways',
    tag: 'Transport',
    desc: 'Arterial multi-lane expressways, girder bridges, and vehicular underpasses.',
    href: '/services',
  },
  {
    label: 'Single Point Mooring (SPM)',
    tag: 'LNG Energy',
    desc: 'Turnkey offshore SPM terminals and FSRU regasification infrastructure.',
    href: '/services',
  },
  {
    label: 'High Telecom Towers & BTS',
    tag: 'Telecom',
    desc: 'Telecommunication transmission masts, cell BTS, and grounding systems.',
    href: '/services',
  },
  {
    label: 'Solar & Clean Power Grids',
    tag: 'Renewables',
    desc: '110 MW utility-scale solar farms and high-voltage transmission lines.',
    href: '/services',
  },
];
