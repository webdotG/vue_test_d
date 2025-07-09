import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/vue_test_d/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
//   server: {
//     proxy: {
//   '/api': {
//     target: 'https://crm.mosgemlab.ru',
//     changeOrigin: true,
//     onProxyReq: (proxyReq) => {
//       console.log('Proxy Request:', proxyReq.path, proxyReq.getHeaders());
//     },
//     onProxyRes: (proxyRes) => {
//       console.log('Proxy Response:', proxyRes.statusCode);
//     }
//   }
// }
// }
})
