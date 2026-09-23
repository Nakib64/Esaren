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
    organization: 'Phase 01',
    author: 'Initiation Phase',
    role: 'Project Definition',
    location: 'PMO Lifecycle Step 1',
    metric: 'Phase 01 of 04',
    photo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: 'Project Definition: Constraints & Problem Statements',
    quote: 'The Initiation Phase crystallizes the project scope, establishes foundational problem statements, delineates technical constraints, and establishes stakeholder mandates prior to capital mobilization.',
  },
  {
    id: '02',
    organization: 'Phase 02',
    author: 'Planning Phase',
    role: 'Estimation & Scheduling',
    location: 'PMO Lifecycle Step 2',
    metric: 'Phase 02 of 04',
    photo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    title: 'Detailed Planning: Estimation & Critical Scheduling',
    quote: 'Rigorous engineering planning encompassing financial estimation, milestone scheduling, resource allocation models, and multi-scenario risk analysis to ensure time-bound, budget-compliant execution.',
  },
  {
    id: '03',
    organization: 'Phase 03',
    author: 'Execution Phase',
    role: 'Team Acquisition & Management',
    location: 'PMO Lifecycle Step 3',
    metric: 'Phase 03 of 04',
    photo: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f156f?q=80&w=2070&auto=format&fit=crop',
    title: 'Project Team: Acquisition, Development & Management',
    quote: 'Mobilizing the dedicated Project Management Office (PMO) team, contractor acquisition, continuous on-site technical coordination, and high-velocity engineering development across all disciplines.',
  },
  {
    id: '04',
    organization: 'Phase 04',
    author: 'Project Closure',
    role: 'Monitoring, Review & Handover',
    location: 'PMO Lifecycle Step 4',
    metric: 'Phase 04 of 04',
    photo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    title: 'Monitoring, Controlling, Closure & Operational Review',
    quote: 'Comprehensive quality control sign-offs, milestone verification, commissioning oversight, final project closure, and post-delivery operational review for project owners and stakeholders.',
  },
];
