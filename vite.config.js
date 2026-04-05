// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Small-Lamborghini-Website-clone/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  }
});
