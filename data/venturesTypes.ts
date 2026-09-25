export interface BaseVenture {
  name: string;
  country: string;
  focus: string;
  description: string;
  monogram?: string;
  highlight?: string;
}

export interface PortfolioVenture extends BaseVenture {
  category?: 'Portfolio Venture';
}

export interface JointVenture extends BaseVenture {
  category?: 'Strategic Partner' | 'Strategic Joint Venture';
  website?: string;
}
