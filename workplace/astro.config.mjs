import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://workplace.detres.eu',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (p) => !/\/gracias\/$/.test(p) })],
});
