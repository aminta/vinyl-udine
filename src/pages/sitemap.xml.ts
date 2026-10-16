import type { APIRoute } from 'astro';
import { languages, localePath, type Lang } from '../i18n/ui';
import { withBase } from '../utils/url';

export const GET: APIRoute = ({ site }) => {
  const langs = Object.keys(languages) as Lang[];
  const urls = ['', 'privacy']
    .flatMap((p) => langs.map((l) => `<url><loc>${new URL(withBase(localePath(l, p)), site)}</loc></url>`))
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
