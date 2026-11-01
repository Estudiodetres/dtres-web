// Lectura de Notion en build. Si no hay token, se usa el contenido base de content.js.
import { Client } from '@notionhq/client';
import { stats as baseStats } from './content.js';

const token = import.meta.env.NOTION_TOKEN;
const notion = token ? new Client({ auth: token }) : null;

async function queryAll(database_id, filter) {
  const rows = [];
  let cursor;
  do {
    const res = await notion.databases.query({ database_id, filter, start_cursor: cursor });
    rows.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return rows;
}

// Suma de m² de "Casos de éxito" marcados "Contar en web"
export async function getStats() {
  const db = import.meta.env.NOTION_DB_CASOS_EXITO;
  if (!notion || !db) return baseStats;
  try {
    const rows = await queryAll(db, { property: 'Contar en web', checkbox: { equals: true } });
    const m2 = rows.reduce((s, r) => s + (r.properties['m²']?.number || 0), 0);
    return { ...baseStats, m2: m2 || baseStats.m2 };
  } catch (e) {
    console.warn('[notion] getStats fallback:', e.message);
    return baseStats;
  }
}

// Cifras redondeadas a la baja para la web
export function formatStats(s, lang = 'es') {
  const sep = lang === 'en' ? ',' : '.';
  const m2Floor = Math.floor(s.m2 / 1000) * 1000;
  const eur = Math.floor((s.m2 * s.pricePerM2) / 1e6);
  return {
    m2: lang === 'en' ? `${String(m2Floor).replace(/\B(?=(\d{3})+(?!\d))/g, sep)}+ m²` : `+${String(m2Floor).replace(/\B(?=(\d{3})+(?!\d))/g, sep)} m²`,
    obra: lang === 'en' ? `€${eur}M+` : `+${eur} M€`,
  };
}

// ---------- Blog ----------
const plain = (rt = []) => rt.map((t) => t.plain_text).join('');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (rt = []) =>
  rt.map((t) => {
    let s = esc(t.plain_text);
    if (t.annotations?.bold) s = `<strong>${s}</strong>`;
    if (t.annotations?.italic) s = `<em>${s}</em>`;
    if (t.annotations?.code) s = `<code>${s}</code>`;
    if (t.href) s = `<a href="${esc(t.href)}">${s}</a>`;
    return s;
  }).join('');

async function blocksToHtml(id) {
  const out = [];
  let cursor; let list = null;
  const close = () => { if (list) { out.push(`</${list}>`); list = null; } };
  do {
    const res = await notion.blocks.children.list({ block_id: id, start_cursor: cursor });
    for (const b of res.results) {
      const v = b[b.type];
      const li = b.type === 'bulleted_list_item' ? 'ul' : b.type === 'numbered_list_item' ? 'ol' : null;
      if (li) { if (list !== li) { close(); out.push(`<${li}>`); list = li; } out.push(`<li>${rich(v.rich_text)}</li>`); continue; }
      close();
      if (b.type === 'paragraph' && v.rich_text.length) out.push(`<p>${rich(v.rich_text)}</p>`);
      else if (b.type === 'heading_1' || b.type === 'heading_2') out.push(`<h2>${rich(v.rich_text)}</h2>`);
      else if (b.type === 'heading_3') out.push(`<h3>${rich(v.rich_text)}</h3>`);
      else if (b.type === 'quote' || b.type === 'callout') out.push(`<blockquote>${rich(v.rich_text)}</blockquote>`);
      else if (b.type === 'divider') out.push('<hr />');
      else if (b.type === 'image') {
        const src = v.type === 'external' ? v.external.url : v.file.url;
        out.push(`<figure><img src="${esc(src)}" alt="${esc(plain(v.caption))}" loading="lazy" />${v.caption?.length ? `<figcaption>${rich(v.caption)}</figcaption>` : ''}</figure>`);
      }
    }
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  close();
  return out.join('\n');
}

// Artículos publicados en Notion › Blog para un idioma. [] si no hay token.
export async function getNotionPosts(lang = 'es') {
  const db = import.meta.env.NOTION_DB_BLOG;
  if (!notion || !db) return [];
  try {
    const rows = await queryAll(db, {
      and: [
        { property: 'Estado', status: { equals: 'Publicado' } },
        { property: 'Idioma', select: { equals: lang.toUpperCase() } },
      ],
    });
    const posts = [];
    for (const r of rows) {
      const p = r.properties;
      const slug = plain(p.Slug?.rich_text);
      if (!slug) continue;
      posts.push({
        slug,
        title: plain(p['Título']?.title),
        description: plain(p['Meta descripción']?.rich_text),
        keyword: plain(p['Keyword principal']?.rich_text),
        phase: p['Fase relacionada']?.select?.name,
        author: p.Autor?.select?.name || 'DTRES',
        date: new Date(p['Fecha publicación']?.date?.start || r.created_time),
        html: await blocksToHtml(r.id),
      });
    }
    return posts;
  } catch (e) {
    console.warn('[notion] getNotionPosts fallback:', e.message);
    return [];
  }
}
