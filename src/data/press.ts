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
    outlet: 'FriuliOggi',
    title: 'A Udine torna la magia dei vinili: 35 espositori e migliaia di dischi da scoprire',
    url: 'https://www.friulioggi.it/udine/passione-vinile-udine-35-espositori-migliaia-dichi-bearzi-3-novembre-2026/',
    date: '2026-11-03',
    kind: 'online',
  },
  {
    outlet: 'Prima Friuli',
    title: 'Udine riaccende la passione per il vinile: al Bearzi una giornata tra collezionismo e rarità',
    url: 'https://primafriuli.it/udine-riaccende-la-passione-per-il-vinile-al-bearzi-una-giornata-tra-collezionismo-e-rarita',
    date: '2026-11-02',
    kind: 'online',
  },
  {
    outlet: 'Nordest24',
    title: "Vinyl Udine, l'8 novembre torna al Bearzi la fiera del disco",
    url: 'https://www.nordest24.it/vinyl-udine-8-novembre-fiera-disco-bearzi',
    date: '2026-11-02',
    kind: 'online',
  },
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
    outlet: 'AmeVe Blog',
    title: 'Vinyl Udine: 35 espositori e 80 tavoli per il ritorno del vinile',
    url: 'https://ameve.eu/vinyl-udine-35-espositori-e-80-tavoli-per-il-ritorno-del-vinile/',
    date: '2026-10-28',
    kind: 'online',
  },
  {
    outlet: 'UdineToday',
    title: 'Vinyl Udine – fiera del disco in vinile e CD',
    url: 'https://www.udinetoday.it/eventi/vinyl-udine-fiera-del-disco-in-vinile-e-cd-vinyl-udine-15504320.html',
    date: '2026-10-28',
    kind: 'agenda',
  },
];
