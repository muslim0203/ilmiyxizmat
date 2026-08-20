import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // SEO uchun: source map off, chunklarni optimizatsiya
    sourcemap: false,
    rollupOptions: {
      output: {
        // manualChunks faqat brauzer build i uchun - SSR build ida react tashqi
        // modul bo'lgani uchun uni chunk ga qo'shib bo'lmaydi.
        ...(isSsrBuild ? {} : {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        }),
      },
    },
  },
}))
