import type { APIRoute, GetStaticPaths } from 'astro';
import { site, edition } from '../data/edition';
import { ui, languages, localePath, type Lang } from '../i18n/ui';
import { withBase } from '../utils/url';

const day = edition.start.slice(0, 10);

export const getStaticPaths: GetStaticPaths = () =>
  (Object.keys(languages) as Lang[]).map((lang) => ({
    params: { file: `vinyl-udine-${day}${lang === 'it' ? '' : '-' + lang}` },
    props: { lang },
  }));

const utc = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const esc = (s: string) => s.replace(/[\\,;]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');

export const GET: APIRoute = ({ props, site: siteUrl }) => {
  const lang = props.lang as Lang;
  const t = ui[lang];
  const v = edition.venue;
  const url = new URL(withBase(localePath(lang)), siteUrl).href;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vinyl Udine//Fiera del disco//IT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:vinyl-udine-${day}@vinyludine.it`,
    `DTSTAMP:${utc(new Date().toISOString())}`,
    `DTSTART:${utc(edition.start)}`,
    `DTEND:${utc(edition.end)}`,
    `SUMMARY:${esc(t.ics.summary)}`,
    `DESCRIPTION:${esc(`${t.ics.description(edition.price)}\n${url}`)}`,
    `LOCATION:${esc(`${t.venueName} – ${v.host}, ${v.street}, ${v.postalCode} ${v.city}`)}`,
    `GEO:${v.lat};${v.lon}`,
    `URL:${url}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:${esc(t.ics.alarm)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return new Response(lines.join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
