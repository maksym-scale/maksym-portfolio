import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Вказуємо Astro, що сайт лежить у підпапці
  base: '/maksym-portfolio', 
  site: 'https://maksym-scale.github.io',
  integrations: [tailwind()],
});
