import { defineConfig } from 'astro/config';

// In anteprima su GitHub Pages il sito vive in una sottocartella (PAGES_BASE=/vinyl-udine);
// col dominio vinyludine.it base e site tornano ai valori predefiniti.
export default defineConfig({
  site: process.env.SITE_URL || 'https://vinyludine.it',
  base: process.env.PAGES_BASE || '/',
  trailingSlash: 'ignore',
});
