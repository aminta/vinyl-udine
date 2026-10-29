// Rassegna stampa: uscite su giornali, siti, TV e radio. La più recente in alto.
// `date` = giorno di pubblicazione (o di primo ritrovamento online) in formato YYYY-MM-DD.
export type PressItem = {
  outlet: string;
  title: string;
  url: string;
  date: string;
  kind: 'quotidiano' | 'settimanale' | 'online' | 'agenda' | 'tv' | 'radio';
};

export const press: PressItem[] = [
  {
    outlet: 'Udine20',
    title: 'Vinyl Udine, domenica 8 novembre 2026 la fiera del disco torna al Bearzi',
    url: 'https://www.udine20.it/vinyl-udine-domenica-8-novembre-2026-la-fiera-del-disco-torna-al-bearzi/2026/10/29/',
    date: '2026-10-29',
    kind: 'online',
  },
  {
    outlet: 'EventiFVG',
    title: 'Vinyl Udine 2026 – Autumn Edition',
    url: 'https://www.eventifvg.it/evento/vinyl-udine-2026-autumn-edition/',
    date: '2026-10-29',
    kind: 'agenda',
  },
  {
    outlet: 'UdineToday',
    title: 'Vinyl Udine – fiera del disco in vinile e CD',
    url: 'https://www.udinetoday.it/eventi/vinyl-udine-fiera-del-disco-in-vinile-e-cd-vinyl-udine-15504320.html',
    date: '2026-10-28',
    kind: 'agenda',
  },
];
