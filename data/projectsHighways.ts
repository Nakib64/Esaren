export interface ProjectItem {
  id: string;
  title: string;
  category: 'Highways & Rail' | 'Energy & Industrial' | 'Aviation & Hospitality';
  country: string;
  value: string;
  partners: string;
  description: string;
  image: string;
  year?: string;
}

export const HIGHWAY_PROJECTS: ProjectItem[] = [
  {
    id: 'trans-sumatra-indonesia',
    title: 'Trans-Sumatra Toll Road Project (614 km)',
    category: 'Highways & Rail',
    country: 'Indonesia',
    value: 'USD 160 Million',
    partners: 'PT Hutama Karya (Persero)',
    description:
      'Route feasibility study, right-of-way planning, and PMC consulting services along 614km of Indonesia’s major Trans-Sumatra arterial corridor.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop',
    year: '2022',
  },
  {
    id: 'dhaka-chittagong-highway',
    title: 'Dhaka-Demra-Chittagong 6-Lane Highway',
    category: 'Highways & Rail',
    country: 'Bangladesh',
    value: 'USD 122 Million',
    partners: 'JICA, World Bank, Ital-Thai JV',
    description:
      'Comprehensive project management consulting, traffic modeling, and major feasibility support for the prime 6-lane national trade artery.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'sharqiyah-expressway-oman',
    title: 'Sharqiyah Expressway (Sultan Turki bin Said Road)',
    category: 'Highways & Rail',
    country: 'Oman',
    value: 'USD 76 Million',
    partners: 'Ministry of Transport, Oman',
    description:
      'Instrumental PMC support and engineering oversight on the high-speed route linking Al Kamil and Al Wafi to Sur, including the Tahwa corridor.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
  },
  {
    id: 'dhaka-sylhet-bridges',
    title: 'Dhaka-Sylhet Highway Girder & Foot Bridges',
    category: 'Highways & Rail',
    country: 'Bangladesh',
    value: 'USD 60 Million',
    partners: 'Roads & Highways Department (RHD)',
    description:
      'Consulting and turnkey civil development of girder bridges, pedestrian overpasses, pre-fabricated toll booth plazas, and traffic flow facilities.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'kabd-sulaibiya-kuwait',
    title: 'Kabd-Sulaibiya Highway Upgradation (Route 604)',
    category: 'Highways & Rail',
    country: 'Kuwait',
    value: 'USD 32 Million',
    partners: 'Public Authority for Roads & Transportation',
    description:
      'Upgradation of existing arterial expressway, Industrial Link, and interchanges connecting to Sixth and 6.5 Ring Roads for West Abdullah Mubarak development.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=2070&auto=format&fit=crop',
  },
];
