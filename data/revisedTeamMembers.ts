import { TeamMember, REVISED_LEADERSHIP } from '@/data/revisedTeamLeadership';
import { STRATEGIC_ADVISORS } from '@/data/strategicAdvisorsData';
import { REVISED_OPERATIONS } from '@/data/revisedTeamOperations';

export type { TeamMember };
export const REVISED_TEAM_MEMBERS: TeamMember[] = [
  ...REVISED_LEADERSHIP,
  ...STRATEGIC_ADVISORS,
  ...REVISED_OPERATIONS,
];
