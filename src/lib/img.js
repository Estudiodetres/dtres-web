// srcset en WebP (variantes -w640 / -w1200 y original), con el JPG como respaldo en src
import fs from 'node:fs';
import path from 'node:path';
const pub = path.resolve('public');
const has = (p) => fs.existsSync(path.join(pub, p));
export const srcset = (src) => {
  if (!src || !src.startsWith('/img/') || !src.endsWith('.jpg')) return undefined;
  const base = src.slice(0, -4);
  if (has(`${base}-w640.webp`)) return `${base}-w480.webp 480w, ${base}-w640.webp 640w, ${base}-w1200.webp 1200w, ${base}.webp 2000w`;
  return has(`${base}.webp`) ? `${base}.webp` : undefined;
};
// Dimensiones de un PNG/JPG en /public para fijar width/height (evita saltos de maquetación)
export const dims = (src) => {
  try {
    const b = fs.readFileSync(path.join(pub, src));
    if (b[0] === 0x89) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  } catch {}
  return {};
};
