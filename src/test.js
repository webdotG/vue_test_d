// export const fetchDiamonds = async (filters = {}) => {
//   try {
//     // Формируем query string параметры
//     const params = new URLSearchParams();
    
//     // Добавляем параметры фильтрации
//     if (filters.color) {
//       filters.color.forEach(c => params.append('color[]', c));
//     }
//     if (filters.purity) {
//       filters.purity.forEach(p => params.append('purity[]', p));
//     }
//     if (filters.ct_min) params.append('ct_min', filters.ct_min);
//     if (filters.ct_max) params.append('ct_max', filters.ct_max);

//     const response = await fetch(`/api?${params.toString()}`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Origin': 'https://diamondclub.moscow',
//         'Referer': 'https://diamondclub.moscow/'
//       }
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data.diamonds || [];
//   } catch (error) {
//     console.error('Failed to fetch diamonds:', error);
//     return [];
//   }
// };