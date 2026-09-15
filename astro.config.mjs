// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fredewiik.github.io',
  base: '/sprauer-website-astro',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false // Desactive le prefixe /fr/ sur la langue par défaut
    }
  }
});