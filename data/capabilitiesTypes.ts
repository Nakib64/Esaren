export interface CapabilityService {
  id: number;
  title: string;
  paragraph: string;
  bgImage: string;
  iconName:
    | 'Layers'
    | 'ShieldCheck'
    | 'Cpu'
    | 'Landmark'
    | 'Zap'
    | 'Globe2'
    | 'Compass'
    | 'TrendingUp';
  gridSpan: string;
  category: string;
}

export const INFRASTRUCTURE_14_EXPERTISE = [
  'Road & Bridge Construction',
  'Vehicular underpass construction',
  'Existing Bridge Rehablitation',
  'Foot Over Bridges & Passenger Shed',
  'Guard Rail & Street Light Post',
  'Prefab Toll Plaza with Canopy',
  'RCC Tall Building Construction',
  'Gantry Road Sign & New Jersey Barrier',
  'Prefabricated Steel Building',
  'Telecommunication High Towers',
  'BTS Installation & Commissioning',
  'Earthing& Fire Fighting System Supply &Installation',
  'Transmission Line Towers (RC & ANC)',
  'Development Contractor',
] as const;
