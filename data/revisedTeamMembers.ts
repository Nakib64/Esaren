import { TeamMember, REVISED_LEADERSHIP } from '@/data/revisedTeamLeadership';
import { REVISED_OPERATIONS } from '@/data/revisedTeamOperations';

export type { TeamMember };
export const REVISED_TEAM_MEMBERS: TeamMember[] = [
  ...REVISED_LEADERSHIP,
  ...REVISED_OPERATIONS,
];
