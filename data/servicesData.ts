export interface ServiceCapability {
  title: string;
  category: 'Civil & Transport' | 'Telecom & Energy' | 'Industrial & Buildings';
  description: string;
}

export interface EpcPhase {
  phase: string;
  tagline: string;
  activities: string[];
}

export const EPC_PHASES: EpcPhase[] = [
  {
    phase: 'Engineering',
    tagline: 'Technical Scope & Design Basis',
    activities: [
      'Project Initiation, EIA & Master Planning',
      'Front-End Engineering Design (FEED) & Process Flow Diagrams',
      'Detail Design, P&IDs, 3D Modeling & Load Calculations',
    ],
  },
  {
    phase: 'Procurement',
    tagline: 'Strategic Sourcing & Quality Control',
    activities: [
      'Vendor Sourcing, RFQs, Technical Bid Evaluations',
      'Long-Lead Equipment Purchasing (Transformers, Compressors)',
      'Global Freight Logistics, Customs & Factory Acceptance Testing',
    ],
  },
  {
    phase: 'Construction',
    tagline: 'Physical Execution & Site Handover',
    activities: [
      'Site Clearing, Earthworks, Grading & Utilities',
      'Foundation Pouring, Concrete Substructures & Steel Erection',
      'Mechanical & Electrical Commissioning & Turnkey Handover',
    ],
  },
];

export const INFRASTRUCTURE_SPECIALTIES: ServiceCapability[] = [
  {
    title: 'Road & Bridge Construction',
    category: 'Civil & Transport',
    description: 'Arterial expressways, heavy long-span girder bridges, and structural highway crossings.',
  },
  {
    title: 'Vehicular Underpass Construction',
    category: 'Civil & Transport',
    description: 'Grade-separated traffic intersections, urban underpasses, and ring-road extensions.',
  },
  {
    title: 'Existing Bridge Rehabilitation',
    category: 'Civil & Transport',
    description: 'Structural retrofitting, substructure concrete rehabilitation, and load capacity expansion.',
  },
  {
    title: 'Foot Over Bridges & Passenger Shed',
    category: 'Civil & Transport',
    description: 'Pedestrian mobility bridges, transit passenger shelters, and commuter walkways.',
  },
  {
    title: 'Guard Rail & Street Light Post',
    category: 'Civil & Transport',
    description: 'Highway crash guard rails, galvanized lighting posts, and illumination networks.',
  },
  {
    title: 'Prefab Toll Plaza with Canopy',
    category: 'Civil & Transport',
    description: 'Automated electronic toll collection plazas, toll canopies, and administrative cabins.',
  },
  {
    title: 'RCC Tall Building Construction',
    category: 'Industrial & Buildings',
    description: 'Reinforced concrete multi-story commercial developments and municipal towers.',
  },
  {
    title: 'Gantry Road Sign & New Jersey Barrier',
    category: 'Civil & Transport',
    description: 'Highway safety infrastructure, concrete crash barriers, and digital gantry messaging.',
  },
  {
    title: 'Prefabricated Steel Building',
    category: 'Industrial & Buildings',
    description: 'Engineered steel warehouses, industrial fabrication sheds, and modular logistics spaces.',
  },
  {
    title: 'Telecommunication High Towers',
    category: 'Telecom & Energy',
    description: 'Self-supporting lattice towers, guyed masts, and heavy telecom transmission structures.',
  },
  {
    title: 'BTS Installation & Commissioning',
    category: 'Telecom & Energy',
    description: 'Base Transceiver Station hardware deployment, RF antenna alignment, and cell integration.',
  },
  {
    title: 'Earthing & Fire Fighting Systems',
    category: 'Telecom & Energy',
    description: 'Industrial surge earthing pits, lightning protection, and commercial fire suppression setup.',
  },
  {
    title: 'Transmission Line Towers (RC & ANC)',
    category: 'Telecom & Energy',
    description: 'High-voltage grid transmission towers, reinforced concrete pillars, and distribution networks.',
  },
  {
    title: 'Development Contractor',
    category: 'Industrial & Buildings',
    description: 'End-to-end turnkey general contracting, schedule optimization, and budget compliance.',
  },
];
