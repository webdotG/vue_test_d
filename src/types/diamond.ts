// формы алмаза
export type DiamondShape = {
  name: string;
  slug: string;
};

// свойства (цвет, чистота и т. д.)
export type DiamondProperty = {
  name: string;
};

// цены
export type DiamondPrice = {
  usd: number;
  rub: number;
  discount: number;
};

// основной тип алмаза
export interface Diamond {
  id: string;
  code: string;
  ct: number; // караты
  isPromo: boolean;
  shape: DiamondShape;
  color: DiamondProperty;
  purity: DiamondProperty; // clarity
  price: DiamondPrice;
  cut: string | null;
  
  // Advanced
  polish: string | null;
  symmetry: string | null;
  fluorescence: string | null;
  table: number | null;
  depth: number | null;
  lwRatio: number | null;
  certificate: string | null;
  
  // Доп
  thumb?: string;
  count360?: number;
  artificial?: boolean;
  createdAt?: string;
}