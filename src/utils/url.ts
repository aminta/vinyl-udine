// Prefissa i percorsi interni con il base path di Astro (serve per l'anteprima su GitHub Pages).
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
