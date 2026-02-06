import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // SEO uchun: source map off, chunklarni optimizatsiya
    sourcemap: false,
    rollupOptions: {
      output: {
        // SEO: chunklarni optimallashtirish - tezroq yuklash
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
