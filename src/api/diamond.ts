import type { Diamond } from '../types/diamond';

export interface DiamondFilters {
  shape?: string;
  color?: string;
  clarity?: string;
  priceMin?: number;
  priceMax?: number;
  cut?: string;
  polish?: string;
  fluorescence?: string;
  certificate?: string;
  type?: 'natural' | 'lab';
}

export const fetchDiamonds = async (filters: DiamondFilters = {}): Promise<{
  data: Diamond[];
  status: number;
  total: number;
}> => {
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Загрузка фиксированных данных из JSON
  //  const response = await fetch('/vue_test_d/api/diamonds.json');
  const response = await fetch('/api/diamonds.json');
  const allDiamonds: Diamond[] = await response.json();
  
  // Фильтрация данных
  const filteredDiamonds = allDiamonds.filter(diamond => {
    if (filters.type === 'natural' && diamond.artificial) return false;
    if (filters.type === 'lab' && !diamond.artificial) return false;
    if (filters.shape && diamond.shape.slug !== filters.shape) return false;
    if (filters.color && diamond.color.name !== filters.color) return false;
    if (filters.clarity && diamond.purity.name !== filters.clarity) return false;
    if (filters.priceMin && diamond.price.usd < filters.priceMin) return false;
    if (filters.priceMax && diamond.price.usd > filters.priceMax) return false;
    if (filters.cut && diamond.cut !== filters.cut) return false;
    if (filters.polish && diamond.polish !== filters.polish) return false;
    if (filters.fluorescence && diamond.fluorescence !== filters.fluorescence) return false;
    if (filters.certificate && diamond.certificate !== filters.certificate) return false;
    return true;
  });
  
  return {
    data: filteredDiamonds,
    status: 200,
    total: filteredDiamonds.length,
  };
};