import { defineConfig } from 'astro:config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Твоя адреса на GitHub Pages
  site: 'https://maksym-scale.github.io',
  // Назва твого репозиторію
  base: '/maksym-portfolio',
  integrations: [tailwind()],
});
