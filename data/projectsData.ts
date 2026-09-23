import { ProjectItem, HIGHWAY_PROJECTS } from '@/data/projectsHighways';
import { ENERGY_PROJECTS } from '@/data/projectsEnergy';

export type { ProjectItem };
export const COMPLETED_PROJECTS: ProjectItem[] = [...ENERGY_PROJECTS, ...HIGHWAY_PROJECTS];
