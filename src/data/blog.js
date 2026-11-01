// Artículos del blog: Notion (si hay token) + Markdown local como base. Notion manda si coincide el slug.
import { getCollection } from 'astro:content';
import { getNotionPosts } from './notion.js';

const cache = {};
export async function getPosts(lang = 'es') {
  if (cache[lang]) return cache[lang];
  const local = (await getCollection('blog', (e) => e.id.startsWith(`${lang}/`))).map((e) => ({
    slug: e.slug.replace(`${lang}/`, ''), ...e.data, entry: e,
  }));
  const remote = await getNotionPosts(lang);
  const bySlug = new Map(local.map((p) => [p.slug, p]));
  for (const p of remote) bySlug.set(p.slug, p);
  cache[lang] = [...bySlug.values()].sort((a, b) => b.date - a.date);
  return cache[lang];
}
