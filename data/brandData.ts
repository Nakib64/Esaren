export interface GlobalOffice {
  city: string;
  role: string;
  keyPersonnel: string;
  responsibilities: string[];
  handledValue?: string;
  underConsideration?: string;
  clientReach?: string;
}

export const BRAND_TAGLINE = 'Stronger bonds with unity & perfection';
export const GROUP_NAME = 'Esaren International Group, UK';
export const CORPORATE_HQ_ADDRESS = '60 Paya Lebar Road, #06-28, Paya Lebar Square, Singapore 409051';
export const OFFICIAL_WEBSITE = 'www.esaren.global';
export const WHATSAPP_CONTACT = '+880 1714-072272';
export const WHATSAPP_LINK = 'https://wa.me/8801714072272';

export const MISSION_STATEMENT = 'We aim to serve our clients strength to strength.';
export const VISION_STATEMENT =
  'Our vision is to become the best version of ourselves, build a fraternity of partners and customers with purpose and efficacy.';

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    city: 'Singapore',
    role: 'Corporate HQ',
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
    keyPersonnel: 'Operational Support Directorate',
    responsibilities: [
      'Internal coordination & shared support services',
      'Venture support & operational workforce deployment',
      'Global footprint operational continuity',
    ],
  },
];
