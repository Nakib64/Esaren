export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  metric: string;
  photo: string;
  title: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '01',
    author: 'H.E. Tariq Al-Hassan',
    role: 'Minister of Investment',
    organization: 'Sovereign Commerce Authority',
    location: 'United Arab Emirates',
    metric: '$2.4B Logistics Hub',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    title: 'Transformational Sovereign Logistics & Infrastructure',
    quote: 'Esaren Global transformed our national logistics blueprint into an operational hub. Their execution standard and sovereign deal governance have been exemplary across every phase.',
  },
  {
    id: '02',
    author: 'Sarah Jenkins',
    role: 'Chief Executive Officer',
    organization: 'Global Apex Infrastructure',
    location: 'London, United Kingdom',
    metric: '12 Target Markets',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    title: 'Flawless Cross-Border Capital & Equity Execution',
    quote: 'Esaren Global structured our multi-billion dollar private equity deployment across 12 international jurisdictions with unmatched legal precision and deal velocity.',
  },
  {
    id: '03',
    author: 'Jean-Luc Dupont',
    role: 'Managing Director',
    organization: 'Sovereign Growth & Innovation Fund',
    location: 'Zurich, Switzerland',
    metric: '18 Months Ahead',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    title: 'Enterprise Technical Project Consulting',
    quote: 'The project management consulting delivered by Esaren Global modernized our institutional asset portfolio in record time, yielding immediate operational efficiency.',
  },
  {
    id: '04',
    author: 'Dr. Aris Thorne',
    role: 'Director of Capital Allocation',
    organization: 'Euro-Asian Clean Energy Consortium',
    location: 'Frankfurt, Germany',
    metric: 'Multi-Gigawatt Grid',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    title: 'Clean Energy Grid Acceleration & Governance',
    quote: 'Their engineering framework accelerated our international renewable energy deployment ahead of schedule, setting a new benchmark for utility clean tech ventures.',
  },
];
