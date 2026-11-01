# dtres-web

Web de DTRES (detres.eu). Astro estático + Notion como CMS + Netlify.

- `npm run dev` / `npm run build`
- Contenido base: `src/data/content.js`. Cifras de m² y obra se recalculan en build desde Notion › Web Consultoria › Casos de éxito.
- Formulario: `netlify/functions/contact.mjs` → Notion › Contactos web.
- Variables en Netlify: `NOTION_TOKEN`, `NOTION_DB_CASOS_EXITO`, `NOTION_DB_CONTACTOS` (ver netlify.toml).
- Fotos: `public/img/` (pendientes).
