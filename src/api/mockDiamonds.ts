// // src/api/mockDiamonds.ts
// import { Diamond, DiamondShape } from '../types/diamond';

// const SHAPES: DiamondShape[] = [
//   { name: 'Круглая (Кр-57)', slug: 'round' },
//   { name: 'Принцесса (Пр-55)', slug: 'princess' },
//   { name: 'Овал (Ов-65)', slug: 'oval' },
//   { name: 'Груша (Гр-58)', slug: 'pear' },
// ];

// const COLORS = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
// const CLARITIES = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'];
// const CUTS = ['Идеальная', 'Очень хорошая', 'Хорошая', null];
// const POLISHES = ['EX', 'VG', 'G', null];
// const FLUORESCENCES = ['None', 'Faint', 'Medium', 'Strong', null];
// const CERTIFICATES = ['GIA', 'IGI', 'HRD', null];

// const randomInRange = (min: number, max: number, decimals = 2): number => {
//   return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
// };

// export const generateMockDiamonds = (count = 200): Diamond[] => {
//   return Array.from({ length: count }, (_, i) => {
//     const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
//     const color = COLORS[Math.floor(Math.random() * COLORS.length)];
//     const clarity = CLARITIES[Math.floor(Math.random() * CLARITIES.length)];
//     const priceUsd = Math.floor(randomInRange(1000, 30000));
    
//     return {
//       id: `diamond-${i + 1}`,
//       code: `DK${String(i + 1).padStart(4, '0')}`,
//       ct: randomInRange(0.5, 3.0),
//       isPromo: Math.random() > 0.8,
//       shape,
//       color: { name: color },
//       purity: { name: clarity },
//       price: {
//         usd: priceUsd,
//         rub: Math.floor(priceUsd * 90),
//         discount: Math.random() > 0.9 ? 10 : 0,
//       },
//       cut: CUTS[Math.floor(Math.random() * CUTS.length)],
//       polish: POLISHES[Math.floor(Math.random() * POLISHES.length)],
//       symmetry: POLISHES[Math.floor(Math.random() * POLISHES.length)],
//       fluorescence: FLUORESCENCES[Math.floor(Math.random() * FLUORESCENCES.length)],
//       table: randomInRange(50, 70, 1),
//       depth: randomInRange(60, 80, 1),
//       lwRatio: shape.slug === 'round' ? null : randomInRange(1.0, 2.0),
//       certificate: CERTIFICATES[Math.floor(Math.random() * CERTIFICATES.length)],
//       thumb: `https://example.com/diamonds/diamond-${i + 1}.jpg`,
//       count360: Math.random() > 0.5 ? 1 : 0,
//       artificial: Math.random() > 0.9,
//       createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
//     };
//   });
// };

// // Генерируем данные один раз при импорте
// export const mockDiamonds = generateMockDiamonds();