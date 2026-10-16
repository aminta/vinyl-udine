// Tutti i dati della prossima edizione: per una nuova data si aggiorna solo questo file.

export const site = {
  name: 'Vinyl Udine',
  tagline: 'Fiera del disco',
  url: 'https://vinyludine.it',
  facebook: 'https://www.facebook.com/vinyludine',
  phone: '+39 345 261 0331',
  phoneLabel: '345 261 0331',
  organizer: 'Factory di Alessandro Perissutti',
};

export const edition = {
  number: 15,
  season: 'Autumn Edition',
  start: '2026-11-08T09:30:00+01:00',
  end: '2026-11-08T19:00:00+01:00',
  dateLabel: 'Domenica 8 novembre 2026',
  dateShort: '8 novembre 2026',
  hours: '9.30 – 19.00',
  price: 3,
  exhibitors: 'una trentina',
  countries: ['Italia', 'Austria', 'Slovenia', 'Croazia'],
  // Link all'evento Facebook dell'edizione, da inserire appena creato.
  facebookEvent: null as string | null,
  // Patrocinio del Comune di Udine: true solo quando concesso per questa edizione.
  patrocinio: false,
  venue: {
    name: 'Palestra Don Bosco',
    host: 'Istituto Salesiano G. Bearzi',
    street: 'Via Don Bosco 2',
    postalCode: '33100',
    city: 'Udine',
    region: 'FVG',
    lat: 46.07868,
    lon: 13.2496,
  },
  genres: [
    'Rock', 'Jazz', 'Funk', 'Soul', 'Punk', 'New wave', 'Dark',
    'Pop', 'Progressive', 'Elettronica',
  ],
  goods: ['Vinili', 'CD', 'DVD', 'Libri', 'Riviste', 'Merchandising musicale'],
};

export const nextSeason = 'primavera 2027';
