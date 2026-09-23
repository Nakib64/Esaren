export * from './capabilitiesTypes';
import { CapabilityService } from './capabilitiesTypes';
import { CAPABILITY_ITEMS_A } from './capabilitiesItemsA';
import { CAPABILITY_ITEMS_B } from './capabilitiesItemsB';

export const CAPABILITY_SERVICES: CapabilityService[] = [
  ...CAPABILITY_ITEMS_A,
  ...CAPABILITY_ITEMS_B,
];
