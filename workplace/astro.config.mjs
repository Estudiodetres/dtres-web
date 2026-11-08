import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
  site: 'https://workplace.detres.eu',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (p) => !/\/gracias\/$/.test(p) })],
});
