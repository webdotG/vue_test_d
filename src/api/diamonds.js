// Генератор случайных алмазов
const generateMockDiamond = (id) => {
  const shapes = ['round', 'princess', 'emerald', 'oval', 'cushion', 'pear', 'marquise', 'asscher'];
  const colors = ['D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const clarities = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'];
  const cuts = ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'];
  
  return {
    id,
    title: `${shapes[Math.floor(Math.random() * shapes.length)].toUpperCase()} Diamond`,
    carat: parseFloat((Math.random() * 3 + 0.3).toFixed(2)), // 0.3 - 3.3 карата
    color: colors[Math.floor(Math.random() * colors.length)],
    clarity: clarities[Math.floor(Math.random() * clarities.length)],
    cut: cuts[Math.floor(Math.random() * cuts.length)],
    price: Math.floor(Math.random() * 30000 + 1000), // $1000 - $31000
    image: `https://picsum.photos/300/300?random=${id}`,
    shape: shapes[Math.floor(Math.random() * shapes.length)]
  };
};

// Генерация 50 случайных алмазов (кешируем)
const mockDiamonds = Array.from({ length: 50 }, (_, i) => generateMockDiamond(i + 1));

// Основная функция API
export const fetchDiamonds = async (filters = {}) => {
  console.log('[API] Fetching diamonds with filters:', filters);
  
  // Имитация задержки сети (500-1500ms)
  await new Promise(resolve => 
    setTimeout(resolve, 500 + Math.floor(Math.random() * 1000))
  );
  
  // Фильтрация данных
  const filtered = mockDiamonds.filter(diamond => {
    // Фильтр по типу алмаза (натуральный/искусственный)
    if (filters.type === 'lab') {
      // Для lab-grown алмазов делаем скидку 30%
      diamond.price = Math.floor(diamond.price * 0.7);
    }
    
    // Применяем все активные фильтры
    return Object.entries(filters).every(([key, value]) => {
      if (!value || value === '') return true;
      
      switch (key) {
        case 'shape':
          return diamond.shape === value;
        case 'color':
          return diamond.color === value;
        case 'clarity':
          return diamond.clarity === value;
        case 'cut':
          return diamond.cut === value;
        case 'caratMin':
          return diamond.carat >= value;
        case 'caratMax':
          return diamond.carat <= value;
        case 'priceMin':
          return diamond.price >= value;
        case 'priceMax':
          return diamond.price <= value;
        default:
          return true;
      }
    });
  });
  
  // Имитация пагинации
  const limit = filters.limit || 10;
  const page = filters.page || 1;
  const paginated = filtered.slice((page - 1) * limit, page * limit);
  
  return {
    data: paginated,
    status: 200,
    total: filtered.length,
    page,
    limit,
    hasMore: page * limit < filtered.length
  };
};

// Дополнительные методы API
export const getDiamondDetails = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  const diamond = mockDiamonds.find(d => d.id === id) || null;
  return { data: diamond, status: diamond ? 200 : 404 };
};