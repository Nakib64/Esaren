export interface AboutPillar {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  iconName: 'ShieldCheck' | 'Compass' | 'Zap' | 'Users';
  coverImage: string;
  address?: string;
  whatsapp?: string;
  whatsappLink?: string;
  email?: string;
}

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    id: '01',
    title: 'London Group HQ',
    tagline: 'Group HQ • Mr. Suresh Sivarajah',
    desc: 'All corporate, financing, legal & compliance activities handled from here. Handled USD 290 Million in project value, with a further USD 330 Million under active consideration.',
    iconName: 'ShieldCheck',
    coverImage: '/images/about_london_hq.webp',
    email: 'contact@esaren.global',
  },
  {
    id: '02',
    title: 'Singapore Central HQ',
    tagline: 'Corporate HQ • Ms. Catherine Wong',
    desc: 'In-charge of global corporate positioning, central fund management, and international business development, looking after institutional clientele across 20+ countries diligently.',
    iconName: 'Compass',
    coverImage: '/images/about_singapore_hq.webp',
    address: '51 Goldhill Plaza, Singapore 308900',
    email: 'contact@esaren.global',
  },
  {
    id: '03',
    title: 'Izmir PMO Hub',
    tagline: 'Project Management Office • Mr. Emre Cekemoglu',
    desc: 'All engineering, procurement & construction (EPC) activities managed from here with globally dispersed team members. The PMO actively manages all ongoing civil infrastructure projects.',
    iconName: 'Zap',
    coverImage: '/images/about_izmir_hub.webp',
    email: 'contact@esaren.global',
  },
  {
    id: '04',
    title: 'Dhaka Operations Hub',
    tagline: 'Back-End Operations • Mr. Ruhsan Rahman',
    desc: 'Formulated specialized multidisciplinary teams delivering internal co-ordination, shared support services, and venture deployment across EGL’s international footprint.',
    iconName: 'Users',
    coverImage: '/images/about_dhaka_hub.webp',
    whatsapp: '+880 1714-072272',
    whatsappLink: 'https://wa.me/8801714072272',
    email: 'contact@esaren.global',
  },
];
