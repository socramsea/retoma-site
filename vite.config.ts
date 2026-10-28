import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE: caminho onde o site é publicado. GitHub Pages do repositório: /retoma-site/ ; domínio próprio: /
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
});
