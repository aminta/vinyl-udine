// Dati della prossima edizione: per una nuova data si aggiorna questo file (i testi tradotti sono in src/i18n/).

export const site = {
  name: 'Vinyl Udine',
  url: 'https://vinyludine.it',
  facebook: 'https://www.facebook.com/vinyludine',
  messenger: 'https://m.me/vinyludine',
  phone: '+39 345 261 0331',
  phoneLabel: '345 261 0331',
  organizer: 'Factory di Alessandro Perissutti',
  // Il form contatti passa da FormSubmit (formsubmit.co): al primo invio arriva una mail di attivazione a contactEmail.
  contactEmail: 'info@rockfactoryshop.com',
  contactCc: 'davide.lorigliola@gmail.com',
  // Newsletter Klaviyo: chiave pubblica (Site ID) e lista "Newsletter Vinyl Udine List" (doppio opt-in).
  klaviyo: { publicKey: 'QNXe8W' as string | null, listId: 'SewNGZ' as string | null },
};

export const edition = {
  number: 15,
  start: '2026-11-08T09:30:00+01:00',
  end: '2026-11-08T19:00:00+01:00',
  price: 3,
  // Link all'evento Facebook dell'edizione, da inserire appena creato.
  facebookEvent: 'https://www.facebook.com/events/1144383988023250/' as string | null,
  // Patrocinio del Comune di Udine: true solo quando concesso per questa edizione.
  patrocinio: true,
  // Edizione successiva, mostrata dal conto alla rovescia a fiera finita.
  next: { it: 'primavera 2027', en: 'spring 2027', sl: 'spomladi 2027', de: 'im Frühjahr 2027' },
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
};
