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
export const CORPORATE_HQ_ADDRESS = '51 Goldhill Plaza, Singapore 308900';
export const OFFICIAL_WEBSITE = 'www.esaren.global';

export const MISSION_STATEMENT = 'We aim to serve our clients strength to strength.';
export const VISION_STATEMENT =
  'Our vision is to become the best version of ourselves, build a fraternity of partners and customers with purpose and efficacy.';

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    city: 'London',
    role: 'Group HQ',
    keyPersonnel: 'Mr. Suresh Sivarajah',
    responsibilities: [
      'All corporate governance and compliance',
      'International financing and legal structuring',
      'Multi-jurisdictional risk and oversight',
    ],
    handledValue: 'USD 290 Million',
    underConsideration: 'USD 330 Million',
  },
  {
    city: 'Singapore',
    role: 'Corporate HQ',
    keyPersonnel: 'Ms. Catherine Wong',
    responsibilities: [
      'Central fund management & venture operations',
      'Global business development across 20+ countries',
      'Cross-border strategic capital partnerships',
    ],
    clientReach: '20+ Global Countries',
  },
  {
    city: 'Izmir',
    role: 'Project Management Office (PMO)',
    keyPersonnel: 'Mr. Emre Cekemoglu',
    responsibilities: [
      'Engineering, procurement & construction (EPC) execution',
      'On-site technical direction & quality control',
      'Management of all ongoing active civil projects',
    ],
  },
  {
    city: 'Dhaka',
    role: 'Back-End Operations Office',
    keyPersonnel: 'Mr. Ruhsan Rahman',
    responsibilities: [
      'Internal coordination & shared support services',
      'Venture support & operational workforce deployment',
      'Global footprint operational continuity',
    ],
  },
];
