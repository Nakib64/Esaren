export interface TeamMember {
  name: string;
  role: string;
  category: 'Leadership' | 'Management' | 'Operations' | 'Associates';
  location?: string;
  image: string;
  bio: string;
}

export const TEAM_LEADERSHIP: TeamMember[] = [
  {
    name: 'Naila Chowdhury',
    role: 'Chairperson',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Guiding high-level institutional governance, international venture stewardship, and sustainable board strategy.',
  },
  {
    name: 'Suresh Sivarajah',
    role: 'Vice Chairman',
    category: 'Leadership',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Directing London Group HQ with over $290M in handled project capital and $330M under consideration.',
  },
  {
    name: 'Ruhsan Rahman',
    role: 'Senior Partner',
    category: 'Leadership',
    location: 'Dhaka',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Overseeing global back-end operations, resource mobilization, and multi-disciplinary operational teams.',
  },
  {
    name: 'Catherine Wong',
    role: 'Managing Partner',
    category: 'Leadership',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Head of Singapore Corporate HQ, stewarding global brand positioning and institutional clientele across 20+ countries.',
  },
  {
    name: 'Taofik Adeleke',
    role: 'Director, Project Management Consulting',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    bio: 'Leading consulting frameworks for large-scale construction, telecommunications, and civic engineering megaprojects.',
  },
  {
    name: 'Olga Ignatieva',
    role: 'Director, Venture Management & JV',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop',
    bio: 'Managing cross-border joint venture syndication, startup incubation, and international investment structures.',
  },
  {
    name: 'Faisal Sarker',
    role: 'Country Director, Bangladesh',
    category: 'Management',
    location: 'Bangladesh',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    bio: 'Driving ground-level operational compliance, contractor alignments, and infrastructure project delivery.',
  },
  {
    name: 'Kelvin Chan',
    role: 'Country Director, Singapore',
    category: 'Management',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Overseeing regional business development, asset facilitation, and investor coordination in Southeast Asia.',
  },
];
