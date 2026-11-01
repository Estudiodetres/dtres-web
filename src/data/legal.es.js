// Textos legales (ES). HTML simple por sección.
import { site } from './content.js';

const company = `<strong>${site.legalName}</strong>`;
const id = `${company}, con NIF ${site.taxId} y domicilio en ${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
const reg = ' Inscrita en el Registro Mercantil de Barcelona, tomo 46912, folio 216, hoja B-535114.';

export const updated = '1 de noviembre de 2026';

export const legal = {
  title: 'Aviso legal',
  desc: 'Datos del titular de detres.eu y condiciones de uso del sitio web.',
  sections: [
    ['Titular del sitio web', `<p>En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), te informamos de que el titular de este sitio web es ${id}.${reg}</p>
      <p>Contacto: <a href="mailto:${site.email}">${site.email}</a> · ${site.phoneDisplay}.</p>`],
    ['Actividad profesional', `<p>${site.legalName} es una sociedad profesional de arquitectura. Los arquitectos que firman los proyectos están colegiados en el Col·legi d'Arquitectes de Catalunya (COAC), con el título oficial de arquitecto expedido en España, y ejercen conforme al Código Deontológico y las normas profesionales del COAC, disponibles en <a href="https://www.arquitectes.cat" rel="noopener">arquitectes.cat</a>.</p>`],
    ['Condiciones de uso', `<p>El acceso a este sitio web es gratuito e implica la aceptación de este aviso legal. Te comprometes a hacer un uso adecuado de sus contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.</p>
      <p>La información publicada es de carácter general y orientativo. No constituye asesoramiento técnico, urbanístico ni jurídico para un caso concreto: cada edificio requiere un análisis específico.</p>`],
    ['Propiedad intelectual e industrial', `<p>Los textos, fotografías, planos, diseños, logotipos y demás contenidos de este sitio son propiedad de ${site.legalName} o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o transformación sin autorización expresa, salvo para uso personal y privado.</p>
      <p>Las fotografías de proyectos se publican con el consentimiento de sus propietarios.</p>`],
    ['Responsabilidad', `<p>Trabajamos para que la información sea exacta y esté actualizada, pero no garantizamos la ausencia de errores ni la disponibilidad continua del sitio. Los enlaces a sitios de terceros se ofrecen solo como referencia; no somos responsables de su contenido.</p>`],
    ['Legislación aplicable', `<p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona, salvo que la normativa de consumidores disponga otro fuero.</p>`],
  ],
};

export const privacy = {
  title: 'Política de privacidad',
  desc: 'Cómo tratamos los datos personales que nos envías a través de detres.eu.',
  sections: [
    ['Responsable del tratamiento', `<p>${id}. Correo de contacto para cuestiones de privacidad: <a href="mailto:${site.email}">${site.email}</a>.</p>`],
    ['Qué datos tratamos', `<p>Solo los que nos facilitas en el formulario de contacto: nombre, correo electrónico, teléfono (opcional), empresa o entidad (opcional), tu perfil y el mensaje que escribes. No pedimos datos especialmente protegidos; te rogamos que no los incluyas en el mensaje.</p>`],
    ['Para qué los usamos', `<p>Para responder a tu solicitud, agendar la llamada que pides y, si hay interés mutuo, preparar una propuesta de servicios. No enviamos comunicaciones comerciales sin tu consentimiento expreso ni elaboramos perfiles automatizados.</p>`],
    ['Base legal', `<p>El consentimiento que das al enviar el formulario y la aplicación, a petición tuya, de medidas precontractuales (art. 6.1.a y 6.1.b del Reglamento (UE) 2016/679, RGPD).</p>`],
    ['Cuánto tiempo los conservamos', `<p>Mientras gestionamos tu solicitud y, si no llegamos a colaborar, un máximo de 12 meses. Si se formaliza un encargo, durante la relación profesional y los plazos legales de responsabilidad que correspondan.</p>`],
    ['Quién más accede a ellos', `<p>No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio usamos estos proveedores, que actúan como encargados del tratamiento con contrato conforme al RGPD:</p>
      <ul><li><strong>Netlify, Inc.</strong> (alojamiento de la web y recepción del formulario).</li><li><strong>Notion Labs, Inc.</strong> (registro interno de las solicitudes).</li></ul>
      <p>Ambos pueden tratar datos en Estados Unidos. Estas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o, en su defecto, en las cláusulas contractuales tipo aprobadas por la Comisión Europea.</p>`],
    ['Tus derechos', `<p>Puedes pedir acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos, y retirar tu consentimiento en cualquier momento, escribiendo a <a href="mailto:${site.email}">${site.email}</a>. Si consideras que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" rel="noopener">aepd.es</a>).</p>`],
    ['Seguridad', `<p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos: conexión cifrada (HTTPS), acceso restringido al equipo que gestiona las solicitudes y proveedores con garantías de seguridad.</p>`],
  ],
};

export const cookies = {
  title: 'Política de cookies',
  desc: 'detres.eu no utiliza cookies de seguimiento, analítica ni publicidad.',
  sections: [
    ['Qué son las cookies', `<p>Son pequeños archivos que algunos sitios web guardan en tu navegador para recordar información sobre tu visita.</p>`],
    ['Cookies que usa esta web', `<p><strong>Ninguna.</strong> detres.eu no instala cookies propias ni de terceros: no usamos herramientas de analítica, publicidad ni redes sociales que rastreen tu navegación. Las tipografías se sirven desde nuestro propio servidor, sin conexiones a terceros.</p>
      <p>Por eso no te mostramos ningún aviso de cookies: no hay nada que aceptar ni rechazar.</p>`],
    ['Enlaces externos', `<p>Algunos enlaces llevan a sitios de terceros, como Google Maps o las reseñas de Google. Si los visitas, esos sitios pueden usar sus propias cookies según sus políticas.</p>`],
    ['Cambios', `<p>Si en el futuro incorporamos alguna herramienta que use cookies, actualizaremos esta política y te pediremos el consentimiento antes de instalarlas.</p>`],
  ],
};
