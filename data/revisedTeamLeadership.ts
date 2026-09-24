export interface TeamMember {
  name: string;
  role: string;
  category: 'Leadership' | 'Management' | 'Operations';
  location: string;
  image: string;
  bio: string;
  slide: number;
}

export const REVISED_LEADERSHIP: TeamMember[] = [
  {
    name: 'Naila Chowdhury',
    role: 'Chairperson',
    category: 'Leadership',
    location: 'San Diego, USA',
    image: '/images/team_members/naila_chowdhury.webp',
    bio: 'Global leader, entrepreneur and social activist based out of San Diego, USA. 35+ years in telecom, development, investment, and technology. Sits at board level with global entities.',
    slide: 5,
  },
  {
    name: 'Suresh Sivarajah',
    role: 'Vice Chairman',
    category: 'Leadership',
    location: 'London, UK',
    image: '/images/team_members/suresh_sivarajah.webp',
    bio: '35+ years in energy, trading, real estate and finance. Based in London, UK, founder & CEO of Esaren International Group. Graduate of prestigious Wellington College.',
    slide: 5,
  },
  {
    name: 'Ruhsan Rahman',
    role: 'Managing Partner',
    category: 'Leadership',
    location: 'Dhaka, Bangladesh',
    image: '/images/team_members/ruhsan_rahman.webp',
    bio: 'Business developer, strategist and investment expert with 30+ years of background in technology, energy, infrastructure development and cross-border investment.',
    slide: 5,
  },
  {
    name: 'Catherine Wong',
    role: 'Senior Partner',
    category: 'Leadership',
    location: 'Singapore',
    image: '/images/team_members/catherine_wong.webp',
    bio: 'Former investment banker and venture capitalist for 20+ years. Leads Singapore fund management team offering central fund management and SPV support for projects.',
    slide: 5,
  },
];
