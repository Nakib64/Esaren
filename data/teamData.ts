import { TeamMember, TEAM_LEADERSHIP } from '@/data/teamLeadership';
import { TEAM_OPERATIONS } from '@/data/teamOperations';

export type { TeamMember };
export const TEAM_MEMBERS: TeamMember[] = [...TEAM_LEADERSHIP, ...TEAM_OPERATIONS];
