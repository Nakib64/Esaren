export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Target' | 'ShieldCheck' | 'Globe2' | 'Cpu' | 'Award';
  tag: string;
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Strategic Mandate & Vision Alignment',
    subtitle: 'Scoping Sovereign Ambitions',
    description:
      'Deep-dive alignment with government ministries, sovereign funds, and enterprise leadership to articulate clear economic objectives and global positioning.',
    iconName: 'Target',
    tag: 'Phase I',
  },
  {
    step: '02',
    title: 'Feasibility & Geopolitical Risk Modeling',
    subtitle: 'Global Compliance & Financial Rigor',
    description:
      'Conducting multi-jurisdictional legal audits, risk mapping, and multi-scenario capital modeling to ensure unbreachable deal resilience.',
    iconName: 'ShieldCheck',
    tag: 'Phase II',
  },
  {
    step: '03',
    title: 'Capital & Stakeholder Syndication',
    subtitle: 'Structuring Sovereign & Private Capital',
    description:
      'Syndicating institutional capital, negotiating P3 agreements, and forming cross-continental joint venture consortiums built for scale.',
    iconName: 'Globe2',
    tag: 'Phase III',
  },
  {
    step: '04',
    title: 'Agile Infrastructure Delivery',
    subtitle: 'AI Control Towers & Execution Teams',
    description:
      'Deploying enterprise AI decision engines, agile project management workflows, and specialized international execution teams on the ground.',
    iconName: 'Cpu',
    tag: 'Phase IV',
  },
  {
    step: '05',
    title: 'Operational Governance & Legacy Creation',
    subtitle: 'Multi-Generational Value Impact',
    description:
      'Establishing long-term operational governance, executive human capital transfer, and sustainable economic impact for generations.',
    iconName: 'Award',
    tag: 'Phase V',
  },
];
