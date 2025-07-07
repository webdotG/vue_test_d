// Временная заглушка для API
export const fetchDiamonds = async (filters) => {
  console.log('Fetching diamonds with filters:', filters);
  
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock данные в зависимости от фильтров
  const mockDiamonds = generateMockDiamonds(filters);
  
  return {
    data: mockDiamonds,
    status: 200,
    total: mockDiamonds.length
  };
};

// Генератор тестовых данных
function generateMockDiamonds(filters) {
  const baseDiamonds = [
    {
      id: 1,
      title: 'Round Brilliant',
      carat: 1.2,
      color: 'D',
      clarity: 'IF',
      price: 15000,
      image: 'https://example.com/diamond1.jpg',
      shape: 'round'
    },
    {
      id: 2,
      title: 'Princess Cut',
      carat: 0.8,
      color: 'G',
      clarity: 'VS1',
      price: 8000,
      image: 'https://example.com/diamond2.jpg',
      shape: 'princess'
    },
    {
      id: 3,
      title: 'Emerald Cut',
      carat: 1.5,
      color: 'F',
      clarity: 'VVS2',
      price: 12000,
      image: 'https://example.com/diamond3.jpg',
      shape: 'emerald'
    }
  ];

  // Фильтрация по параметрам
  return baseDiamonds.filter(diamond => {
    if (filters.color && diamond.color !== filters.color) return false;
    if (filters.shape && diamond.shape !== filters.shape) return false;
    if (filters.priceMin && diamond.price < filters.priceMin) return false;
    if (filters.priceMax && diamond.price > filters.priceMax) return false;
    return true;
  });
}