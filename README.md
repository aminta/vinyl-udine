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

Finché i DNS di `vinyludine.it` (Register.it) non puntano a GitHub Pages, il sito è in anteprima su
`https://aminta.github.io/vinyl-udine/`. Al passaggio: record DNS verso GitHub Pages, dominio personalizzato
nelle impostazioni Pages e variabili del repo `PAGES_BASE=/` e `SITE_URL=https://vinyludine.it`.
