export interface ProcessStep {
  step: string;
  phase: string;
  name: string;
  managedBy: string;
  summary: string;
  actions: string[];
  iconName: 'Target' | 'ShieldCheck' | 'Award';
}

export const CONSULTING_PROCESS: ProcessStep[] = [
  {
    step: '01',
    phase: 'Phase 01',
    name: 'Primary Initiation Phase',
    managedBy: 'Managed Internally by EGL',
    summary:
      'Comprehensive project feasibility determination, environmental scope assessment, PMO mobilization, and initial capital budgeting.',
    actions: [
      'Comprehensive project feasibility determination & environmental scope',
      'Creation and staffing of the dedicated Project Management Office (PMO)',
      'Budget setting and multi-scenario capital allocation modeling',
      'Mobilizing specialized engineering manpower and initial site surveys',
    ],
    iconName: 'Target',
  },
  {
    step: '02',
    phase: 'Phase 02',
    name: 'Evaluation & Stakeholder Alignment',
    managedBy: 'Managed Jointly with JV Partners & 3rd Parties',
    summary:
      'Active strategic Joint Venture partner integration, cross-continental equipment allocation, banking channels, and regulatory risk mitigation.',
    actions: [
      'Active involvement of strategic Joint Venture partners in defining execution',
      'Joint allocation of cross-continental resources and machinery',
      'Creation and structuring of international banking and escrow channels',
      'Multi-jurisdictional risk mitigation and regulatory adherence audits',
    ],
    iconName: 'ShieldCheck',
  },
  {
    step: '03',
    phase: 'Phase 03',
    name: 'Execution & EPC Delivery Phase',
    managedBy: 'Managed via SPV & Global Consortium',
    summary:
      'Assignment of qualified EPC contractor partner, Special Purpose Vehicle (SPV) funding funnel, synchronized critical paths, and turnkey handover.',
    actions: [
      'Formal assignment of the qualified EPC contractor partner',
      'Finalize and establish project funding funnel (Special Purpose Vehicle - SPV)',
      'Define unified execution roadmap with synchronized critical paths',
      'Final commissioning, quality sign-off, and turnkey handover to project owners',
    ],
    iconName: 'Award',
  },
];
