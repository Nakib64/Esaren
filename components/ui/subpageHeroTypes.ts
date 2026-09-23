import { LucideIcon } from 'lucide-react';

export interface SubpageHeroPillar {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export interface SubpageHeroProps {
  badge: string;
  title: string;
  description: string;
  parentPath?: string;
  parentName?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  pillars?: SubpageHeroPillar[];
  graphicSrc?: string;
  bgImage?: string;
}
