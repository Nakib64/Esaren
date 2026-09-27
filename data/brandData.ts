export interface GlobalOffice {
  city: string;
  role: string;
  address?: string;
  keyPersonnel: string;
  responsibilities: string[];
  handledValue?: string;
  underConsideration?: string;
  clientReach?: string;
}

export const BRAND_TAGLINE = 'Stronger bonds with unity & perfection';
export const GROUP_NAME = 'Esaren International Group, UK';
export const CORPORATE_HQ_ADDRESS = '60 Paya Lebar Road, #06-28, Paya Lebar Square, Singapore 409051';
export const LONDON_ADDRESS = '29 Dukes Wood, Crowthorne, RG45 6NF, United Kingdom';
export const LAGOS_ADDRESS = 'Mulliner Tower, 7th floor, 39 Alfred Rewane Rd, Ikoyi, Lagos 106104, Lagos, Nigeria';
export const GUANGZHOU_ADDRESS =
  'Pearl River Tower, 15 Zhujiang W Rd, Tianhe District, Guangzhou, Guangdong Province, China, 510623';
export const OFFICIAL_WEBSITE = 'www.esaren.global';
export const WHATSAPP_CONTACT = '+880 1714-072272';
export const WHATSAPP_LINK = 'https://wa.me/8801714072272';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61571466507067';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/esaren-global-ltd/home/';

export const MISSION_STATEMENT = 'We aim to serve our clients strength to strength.';
export const VISION_STATEMENT =
  'Our vision is to become the best version of ourselves, build a fraternity of partners and customers with purpose and efficacy.';

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    city: 'Singapore',
    role: 'Corporate HQ',
    address: CORPORATE_HQ_ADDRESS,
    keyPersonnel: 'Corporate Fund Directorate',
    responsibilities: [
      'Central fund management & venture operations',
      'Global business development across 20+ countries',
      'Cross-border strategic capital partnerships',
    ],
    clientReach: '20+ Global Countries',
  },
  {
    city: 'London',
    role: 'Group HQ',
    address: LONDON_ADDRESS,
    keyPersonnel: 'Group Governance Directorate',
    responsibilities: [
      'All corporate governance and compliance',
      'International financing and legal structuring',
      'Multi-jurisdictional risk and oversight',
    ],
    handledValue: 'USD 290 Million',
    underConsideration: 'USD 330 Million',
  },
  {
    city: 'Guangzhou',
    role: 'PMO & Technical EPC',
    address: GUANGZHOU_ADDRESS,
    keyPersonnel: 'Technical EPC Directorate',
    responsibilities: [
      'Engineering, procurement & construction (EPC) execution',
      'On-site technical direction & quality control',
      'Management of all ongoing active civil projects',
    ],
  },
  {
    city: 'Lagos',
    role: 'Back-End Operations',
    address: LAGOS_ADDRESS,
    keyPersonnel: 'Operational Support Directorate',
    responsibilities: [
      'Internal coordination & shared support services',
      'Venture support & operational workforce deployment',
      'Global footprint operational continuity',
    ],
  },
];
