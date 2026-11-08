import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
  site: 'https://detres.eu',
  integrations: [sitemap({ filter: (page) => !/\/(gracias|gracies|thank-you)\/$/.test(page) })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
