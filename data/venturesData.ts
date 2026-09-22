export interface PortfolioVenture {
  name: string;
  country: string;
  focus: string;
  description: string;
}

export interface JointVenture {
  name: string;
  country: string;
  focus: string;
  description: string;
  website?: string;
}

export const PORTFOLIO_VENTURES: PortfolioVenture[] = [
  {
    name: 'Camhirst Robotics',
    country: 'United Kingdom',
    focus: '3D Construction Robotics',
    description: 'Advanced 3D construction manufacturing providing autonomous robotic systems for accelerated building and infrastructure projects.',
  },
  {
    name: 'Nirvik Foundation',
    country: 'Bangladesh',
    focus: 'Social Welfare & Diaspora Support',
    description: 'Delivering education, healthcare, social awareness campaigns, and legal advocacy for the migrant diaspora facing displacement.',
  },
  {
    name: 'Kormi Platform',
    country: 'Bangladesh',
    focus: 'Workforce Verification & Placement',
    description: 'Digital ecosystem providing certified credentials, skill verification, and ethical overseas employment opportunities.',
  },
  {
    name: 'Luxempire',
    country: 'Dubai, UAE',
    focus: 'Luxury Space & VIP Networking',
    description: 'High-end branding, global VIP matchmaking, and curated concierge services in the luxury lifestyle and private aviation domain.',
  },
  {
    name: 'ETRNL Media',
    country: 'United States',
    focus: 'AI-Enabled Digital Media',
    description: 'Next-generation media production house delivering enterprise branding, synthetic media workflows, and global growth campaigns.',
  },
  {
    name: 'NYVIX',
    country: 'Australia',
    focus: 'Apparel & Lifestyle Brand',
    description: 'High-growth sustainable fashion and modern clothing label expanding rapidly across the Asia-Pacific retail landscape.',
  },
  {
    name: 'Violet',
    country: 'Singapore',
    focus: 'Regional Art & Culture',
    description: 'Cultural platform celebrating Southeast Asian contemporary art, curated musical performances, and digital heritage preservation.',
  },
];

export const JOINT_VENTURES: JointVenture[] = [
  {
    name: 'Whitespace',
    country: 'Canada',
    focus: 'Tech Integration & Software',
    description: 'Strategic JV delivering enterprise system integration, digital transformation, and specialized engineering software architectures.',
    website: 'www.whitespaceint.ca',
  },
  {
    name: 'Zenith Advisory',
    country: 'Singapore',
    focus: 'Fund Management & Corporate Services',
    description: 'Licensed corporate structuring, sovereign fund management, cross-border deal structuring, and institutional wealth governance.',
    website: 'www.zenith-ventureadvisory.com',
  },
  {
    name: 'Fortius Engineering Services',
    country: 'Turkey',
    focus: 'EPC & Turnkey Engineering',
    description: 'Engineering and full-scale EPC execution partner delivering specialized infrastructure and industrial builds in collaboration with EGL.',
  },
  {
    name: 'Carnival Healthcare',
    country: 'UK & Kenya',
    focus: 'Healthcare & Diagnostics',
    description: 'Cross-continental healthcare platform operating state-of-the-art diagnostic facilities and pharmaceutical networks with hospital partners.',
  },
  {
    name: 'Ural Air',
    country: 'Bangladesh',
    focus: 'Private Aviation & Transport',
    description: 'Pioneering private aviation carrier in Bangladesh scheduled to commence commercial operations from December 2026.',
  },
  {
    name: 'Altius Corporation',
    country: 'Bangladesh',
    focus: 'Trading & Human Capital',
    description: 'Facilitating international commodity trading, supply chain management, and executive human capital development programs.',
  },
  {
    name: 'Citius Training',
    country: 'Bangladesh',
    focus: 'Vocational Upskilling',
    description: 'Accredited vocational academy offering internationally recognized skill certifications for heavy industry and engineering sectors.',
  },
];
