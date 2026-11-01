// Devuelve el contenido de la web en el idioma pedido.
import * as es from './content.js';
import * as ca from './content.ca.js';
import * as en from './content.en.js';

const all = { es, ca, en };
export const getContent = (lang = 'es') => all[lang] || es;
