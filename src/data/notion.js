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
export function formatStats(s) {
  const m2Floor = Math.floor(s.m2 / 1000) * 1000;
  const eur = Math.floor((s.m2 * s.pricePerM2) / 1e6);
  return {
    m2: `+${m2Floor.toLocaleString('es-ES')} m²`,
    obra: `+${eur} M€`,
  };
}
