# Vinyl Udine – sito vetrina

Sito one-page della fiera del disco **Vinyl Udine** (palestra Don Bosco, Istituto Bearzi, Udine). Astro, statico, pubblicato su GitHub Pages.

## Nuova edizione

Aggiornare solo `src/data/edition.ts` (date, numero edizione, link evento Facebook, patrocinio) e rigenerare `public/og-image.jpg`.

## Sviluppo

```bash
nvm use        # Node 24
npm install
npm run dev
```

## Dominio

Online su https://vinyludine.it (DNS su Register.it: 4 record A verso GitHub Pages 185.199.108–111.153,
`www` CNAME verso `aminta.github.io`; MX/PEC invariati). Dominio personalizzato impostato nelle impostazioni Pages,
variabili del repo `PAGES_BASE=/` e `SITE_URL=https://vinyludine.it`.
