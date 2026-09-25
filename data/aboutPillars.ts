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
    title: 'Singapore Corporate HQ',
    tagline: 'Corporate HQ • Central Fund Advisory',
    desc: 'In-charge of global corporate positioning, central fund management, and international business development, looking after institutional clientele across 20+ countries diligently.',
    iconName: 'Compass',
    coverImage: '/images/about_singapore_hq.webp',
    address: '60 Paya Lebar Road, #06-28, Paya Lebar Square, Singapore 409051',
    email: 'contact@esaren.global',
  },
  {
    id: '02',
    title: 'London Group HQ',
    tagline: 'Group HQ • Esaren International Group',
    desc: 'All corporate, financing, legal & compliance activities handled from here. Handled USD 290 Million in project value, with a further USD 330 Million under active consideration.',
    iconName: 'ShieldCheck',
    coverImage: '/images/about_london_hq.webp',
    email: 'contact@esaren.global',
  },
  {
    id: '03',
    title: 'Guangzhou PMO Hub',
    tagline: 'PMO & Technical EPC Directorate',
    desc: 'All engineering, procurement & construction (EPC) activities managed from here with globally dispersed team members. The PMO actively manages all ongoing civil infrastructure projects.',
    iconName: 'Zap',
    coverImage: '/images/about_guangzhou_hub.webp',
    email: 'contact@esaren.global',
  },
  {
    id: '04',
    title: 'Lagos Operations Hub',
    tagline: 'Back-End Operations Directorate',
    desc: 'Formulated specialized multidisciplinary teams delivering internal coordination, shared support services, and venture deployment across EGL’s international footprint.',
    iconName: 'Users',
    coverImage: '/images/about_lagos_hub.webp',
    whatsapp: '+880 1714-072272',
    whatsappLink: 'https://wa.me/8801714072272',
    email: 'contact@esaren.global',
  },
];
