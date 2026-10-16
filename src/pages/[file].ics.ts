import type { APIRoute, GetStaticPaths } from 'astro';
import { site, edition } from '../data/edition';

export const getStaticPaths: GetStaticPaths = () => [
  { params: { file: `vinyl-udine-${edition.start.slice(0, 10)}` } },
];

const utc = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const esc = (s: string) => s.replace(/[\\,;]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');

export const GET: APIRoute = () => {
  const v = edition.venue;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vinyl Udine//Fiera del disco//IT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:vinyl-udine-${edition.start.slice(0, 10)}@vinyludine.it`,
    `DTSTAMP:${utc(new Date().toISOString())}`,
    `DTSTART:${utc(edition.start)}`,
    `DTEND:${utc(edition.end)}`,
    `SUMMARY:${esc(`${site.name} – Fiera del disco`)}`,
    `DESCRIPTION:${esc(`Mostra mercato del vinile e CD nuovo, usato e da collezione. Ingresso ${edition.price} €. Porta i tuoi dischi per scambiarli con gli espositori.\n${site.url}`)}`,
    `LOCATION:${esc(`${v.name} – ${v.host}, ${v.street}, ${v.postalCode} ${v.city}`)}`,
    `GEO:${v.lat};${v.lon}`,
    `URL:${site.url}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:${esc('Domani c\'è Vinyl Udine!')}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return new Response(lines.join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
