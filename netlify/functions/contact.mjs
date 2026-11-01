// Recibe el formulario "Agendar llamada" y crea una fila en Notion › Contactos web.
const NOTION_VERSION = '2022-06-28';
const PERFILES = ['Fundación', 'Inversor', 'Family office', 'Empresa', 'Particular'];
const txt = (v) => [{ text: { content: String(v || '').slice(0, 1900) } }];

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  const data = Object.fromEntries(await req.formData());
  if (data.website) return Response.redirect(new URL('/gracias/', req.url), 303); // honeypot
  if (!data.nombre || !data.email) return new Response('Faltan nombre o email', { status: 400 });

  const properties = {
    Nombre: { title: txt(data.nombre) },
    Email: { email: data.email },
    'Empresa / entidad': { rich_text: txt(data.empresa) },
    Mensaje: { rich_text: txt(data.mensaje) },
    'Página de origen': { rich_text: txt(data.origen) },
    Idioma: { select: { name: ['ES', 'CA', 'EN'].includes(data.idioma) ? data.idioma : 'ES' } },
  };
  if (data.telefono) properties['Teléfono'] = { phone_number: data.telefono };
  if (PERFILES.includes(data.perfil)) properties.Perfil = { select: { name: data.perfil } };

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ parent: { database_id: process.env.NOTION_DB_CONTACTOS }, properties }),
  });

  if (!res.ok) {
    console.error('Notion error', res.status, await res.text());
    return new Response('No se pudo enviar. Escríbenos a info@detres.eu', { status: 502 });
  }
  return Response.redirect(new URL('/gracias/', req.url), 303);
};

export const config = { path: '/api/contacto' };
