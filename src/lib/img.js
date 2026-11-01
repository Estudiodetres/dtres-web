// srcset para imágenes de /img (variantes -w640 y -w1200 generadas junto al original de 2000 px)
const big = new Set(['nacho.jpg', 'pablo.jpg', 'inigo.jpg']);
export const srcset = (src) => {
  const name = src.split('/').pop();
  if (!src.startsWith('/img/') || big.has(name)) return undefined;
  const base = src.replace(/\.jpg$/, '');
  return `${base}-w640.jpg 640w, ${base}-w1200.jpg 1200w, ${src} 2000w`;
};
