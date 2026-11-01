// Rutas y textos de interfaz por idioma.
export const langs = ['es', 'ca', 'en'];
export const htmlLang = { es: 'es', ca: 'ca', en: 'en' };
export const ogLocale = { es: 'es_ES', ca: 'ca_ES', en: 'en_GB' };
export const code = { es: 'ES', ca: 'CA', en: 'EN' };

export const routes = {
  home: { es: '/', ca: '/ca/', en: '/en/' },
  projects: { es: '/proyectos/', ca: '/ca/projectes/', en: '/en/projects/' },
  blog: { es: '/blog/', ca: '/ca/blog/', en: '/en/blog/' },
  legal: { es: '/aviso-legal/', ca: '/ca/avis-legal/', en: '/en/legal-notice/' },
  privacy: { es: '/privacidad/', ca: '/ca/privacitat/', en: '/en/privacy/' },
  cookies: { es: '/cookies/', ca: '/ca/cookies/', en: '/en/cookies/' },
  thanks: { es: '/gracias/', ca: '/ca/gracies/', en: '/en/thank-you/' },
};
const phaseBase = { es: '/fases/', ca: '/ca/fases/', en: '/en/services/' };
export const phasePath = (lang, slug) => `${phaseBase[lang]}${slug}/`;
export const postPath = (lang, slug) => `${routes.blog[lang]}${slug}/`;

// Mapa de alternativas {es, ca, en} para una clave de ruta
export const alt = (key) => routes[key];

export const ui = {
  es: {
    nav: { method: 'Método', dd: 'Due diligence', projects: 'Proyectos', about: 'Nosotros', blog: 'Blog' },
    cta: 'Agendar llamada', ctaFree: 'Agendar llamada gratuita', seeProjects: 'Ver proyectos',
    footer: { tagline: 'Arquitectura, interiorismo, licencias y obra para edificios singulares en Catalunya.', studio: 'Estudio', contact: 'Contacto', legal: 'Legal', legalNotice: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies' },
    form: { name: 'Nombre', email: 'Email', phone: 'Teléfono', company: 'Empresa o entidad', profile: 'Eres', message: 'Cuéntanos qué edificio tienes y qué quieres conseguir', legal: 'Usaremos tus datos solo para responderte.', privacy: 'Política de privacidad', submit: 'Agendar llamada', hp: 'No rellenar',
      profiles: [['Fundación', 'Fundación'], ['Inversor', 'Inversor'], ['Family office', 'Family office'], ['Empresa', 'Empresa'], ['Particular', 'Particular']] },
    home: { for: 'Trabajamos para', projectsDone: 'Proyectos entregados', works: 'De obra gestionada', m2: 'Transformados en edificios singulares',
      methodEyebrow: 'Transformación integral · Método en 4 fases', methodTitle: 'Del primer análisis a la entrega de llaves.', methodNote: 'Puedes empezar por cualquier fase. Te acompañamos hasta el final.',
      youGet: 'Recibes', startHere: 'Empezar por aquí →', before: 'Antes', after: 'Después', situation: 'Situación', transformation: 'Transformación', result: 'Resultado',
      more: 'Más transformaciones', allProjects: 'Ver todos los proyectos →', wipEyebrow: 'En curso', wipTitle: 'Lo que estamos transformando ahora.',
      revEyebrow: 'Lo que dicen nuestros clientes', revTitle: 'Reseñas reales de Google', revAll: 'Ver todas en Google →', about: 'Nosotros',
      faqEyebrow: 'Preguntas frecuentes', faqTitle: 'Antes de transformar un edificio', blogTitle: 'Guías para propietarios', blogAll: 'Ir al blog →',
      ctaEyebrow: 'Llamada de consultoría gratuita · 30 min', ctaTitle: '¿Tienes un edificio que merece otra vida?', ctaText: 'Cuéntanos qué tienes y qué quieres conseguir. Te diremos qué es posible, cuánto puede costar y por dónde empezar.' },
    phase: { label: 'Fase', integral: 'Transformación integral', includes: 'Qué incluye', youGet: 'Recibes', note: 'Puedes empezar por aquí. Te acompañamos hasta el final.', others: 'Las otras fases', ctaPre: '¿Empezamos por' },
    projects: { eyebrow: 'Proyectos · Barcelona y Catalunya', title: 'Edificios que han cambiado de vida.', sub: 'Patrimonio catalogado, residencias, oficinas y equipamientos para fundaciones, inversores y empresas. De la due diligence a la entrega de llaves.',
      filters: { todos: 'Todos', patrimonio: 'Patrimonio catalogado', residencias: 'Residencias', oficinas: 'Oficinas', equipamientos: 'Equipamientos', curso: 'En curso' },
      heritage: 'Patrimonio catalogado', project: 'Proyecto', filterLabel: 'Filtrar proyectos', metaTitle: 'Proyectos · Transformación de edificios en Barcelona · DTRES',
      metaDesc: (n, m2) => `Edificios catalogados, residencias, oficinas y equipamientos transformados en Barcelona y Catalunya. ${n} proyectos, más de ${m2} m².` },
    blog: { eyebrow: 'Blog · Guías para propietarios', title: 'Lo que hay que saber antes de transformar un edificio.', sub: 'Normativa, licencias, costes y plazos en Barcelona y Catalunya, explicados por los arquitectos que lo tramitan cada semana.',
      by: 'Por', read: 'Leer →', back: '← Todas las guías', related: 'Fase relacionada', ctaTitle: '¿Quieres saber qué permite tu edificio?', metaTitle: 'Blog · Guías sobre edificios, licencias y obra en Barcelona · DTRES', empty: 'Pronto publicaremos las primeras guías.' },
    thanks: { eyebrow: 'Mensaje recibido', title: 'Gracias. Te llamamos en menos de 48 horas.', text: 'Si es urgente, escríbenos a info@detres.eu o llámanos al 931 255 444.', back: 'Volver al inicio' },
    updated: 'Última actualización',
  },
  ca: {
    nav: { method: 'Mètode', dd: 'Due diligence', projects: 'Projectes', about: 'Nosaltres', blog: 'Blog' },
    cta: 'Agendar trucada', ctaFree: 'Agendar trucada gratuïta', seeProjects: 'Veure projectes',
    footer: { tagline: 'Arquitectura, interiorisme, llicències i obra per a edificis singulars a Catalunya.', studio: 'Estudi', contact: 'Contacte', legal: 'Legal', legalNotice: 'Avís legal', privacy: 'Privacitat', cookies: 'Galetes' },
    form: { name: 'Nom', email: 'Correu electrònic', phone: 'Telèfon', company: 'Empresa o entitat', profile: 'Ets', message: "Explica'ns quin edifici tens i què vols aconseguir", legal: 'Farem servir les teves dades només per respondre’t.', privacy: 'Política de privacitat', submit: 'Agendar trucada', hp: 'No omplir',
      profiles: [['Fundación', 'Fundació'], ['Inversor', 'Inversor'], ['Family office', 'Family office'], ['Empresa', 'Empresa'], ['Particular', 'Particular']] },
    home: { for: 'Treballem per a', projectsDone: 'Projectes lliurats', works: "D'obra gestionada", m2: 'Transformats en edificis singulars',
      methodEyebrow: 'Transformació integral · Mètode en 4 fases', methodTitle: "De la primera anàlisi al lliurament de claus.", methodNote: 'Pots començar per qualsevol fase. T’acompanyem fins al final.',
      youGet: 'Reps', startHere: 'Començar per aquí →', before: 'Abans', after: 'Després', situation: 'Situació', transformation: 'Transformació', result: 'Resultat',
      more: 'Més transformacions', allProjects: 'Veure tots els projectes →', wipEyebrow: 'En curs', wipTitle: 'El que estem transformant ara.',
      revEyebrow: 'El que diuen els nostres clients', revTitle: 'Ressenyes reals de Google', revAll: 'Veure-les totes a Google →', about: 'Nosaltres',
      faqEyebrow: 'Preguntes freqüents', faqTitle: 'Abans de transformar un edifici', blogTitle: 'Guies per a propietaris', blogAll: 'Anar al blog →',
      ctaEyebrow: 'Trucada de consultoria gratuïta · 30 min', ctaTitle: 'Tens un edifici que mereix una altra vida?', ctaText: "Explica'ns què tens i què vols aconseguir. Et direm què és possible, quant pot costar i per on començar." },
    phase: { label: 'Fase', integral: 'Transformació integral', includes: 'Què inclou', youGet: 'Reps', note: 'Pots començar per aquí. T’acompanyem fins al final.', others: 'Les altres fases', ctaPre: 'Comencem per' },
    projects: { eyebrow: 'Projectes · Barcelona i Catalunya', title: 'Edificis que han canviat de vida.', sub: 'Patrimoni catalogat, residències, oficines i equipaments per a fundacions, inversors i empreses. De la due diligence al lliurament de claus.',
      filters: { todos: 'Tots', patrimonio: 'Patrimoni catalogat', residencias: 'Residències', oficinas: 'Oficines', equipamientos: 'Equipaments', curso: 'En curs' },
      heritage: 'Patrimoni catalogat', project: 'Projecte', filterLabel: 'Filtrar projectes', metaTitle: "Projectes · Transformació d'edificis a Barcelona · DTRES",
      metaDesc: (n, m2) => `Edificis catalogats, residències, oficines i equipaments transformats a Barcelona i Catalunya. ${n} projectes, més de ${m2} m².` },
    blog: { eyebrow: 'Blog · Guies per a propietaris', title: 'El que cal saber abans de transformar un edifici.', sub: 'Normativa, llicències, costos i terminis a Barcelona i Catalunya, explicats pels arquitectes que els tramiten cada setmana.',
      by: 'Per', read: 'Llegir →', back: '← Totes les guies', related: 'Fase relacionada', ctaTitle: 'Vols saber què permet el teu edifici?', metaTitle: "Blog · Guies sobre edificis, llicències i obra a Barcelona · DTRES", empty: 'Aviat publicarem les primeres guies en català.' },
    thanks: { eyebrow: 'Missatge rebut', title: 'Gràcies. Et trucarem en menys de 48 hores.', text: "Si és urgent, escriu-nos a info@detres.eu o truca'ns al 931 255 444.", back: "Tornar a l'inici" },
    updated: 'Darrera actualització',
  },
  en: {
    nav: { method: 'Method', dd: 'Due diligence', projects: 'Projects', about: 'About', blog: 'Blog' },
    cta: 'Book a call', ctaFree: 'Book a free call', seeProjects: 'See projects',
    footer: { tagline: 'Architecture, interior design, permits and construction for distinctive buildings in Catalonia.', studio: 'Studio', contact: 'Contact', legal: 'Legal', legalNotice: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies' },
    form: { name: 'Name', email: 'Email', phone: 'Phone', company: 'Company or organisation', profile: 'You are', message: 'Tell us about your building and what you want to achieve', legal: 'We will only use your details to reply to you.', privacy: 'Privacy policy', submit: 'Book a call', hp: 'Do not fill',
      profiles: [['Fundación', 'Foundation'], ['Inversor', 'Investor'], ['Family office', 'Family office'], ['Empresa', 'Company'], ['Particular', 'Private owner']] },
    home: { for: 'Who we work for', projectsDone: 'Projects delivered', works: 'Of construction managed', m2: 'Transformed in distinctive buildings',
      methodEyebrow: 'End-to-end transformation · 4-phase method', methodTitle: 'From first analysis to handover.', methodNote: 'You can start at any phase. We stay with you to the end.',
      youGet: 'You get', startHere: 'Start here →', before: 'Before', after: 'After', situation: 'Situation', transformation: 'Transformation', result: 'Result',
      more: 'More transformations', allProjects: 'See all projects →', wipEyebrow: 'In progress', wipTitle: 'What we are transforming now.',
      revEyebrow: 'What our clients say', revTitle: 'Real Google reviews', revAll: 'See all on Google →', about: 'About us',
      faqEyebrow: 'FAQ', faqTitle: 'Before transforming a building', blogTitle: 'Guides for owners', blogAll: 'Go to the blog →',
      ctaEyebrow: 'Free 30-minute consultation call', ctaTitle: 'Do you have a building that deserves a new life?', ctaText: 'Tell us what you have and what you want to achieve. We will tell you what is possible, what it may cost and where to start.' },
    phase: { label: 'Phase', integral: 'End-to-end transformation', includes: 'What it includes', youGet: 'You get', note: 'You can start here. We stay with you to the end.', others: 'The other phases', ctaPre: 'Shall we start with' },
    projects: { eyebrow: 'Projects · Barcelona and Catalonia', title: 'Buildings with a new life.', sub: 'Listed heritage buildings, residences, offices and facilities for foundations, investors and companies. From due diligence to handover.',
      filters: { todos: 'All', patrimonio: 'Listed heritage', residencias: 'Residences', oficinas: 'Offices', equipamientos: 'Facilities', curso: 'In progress' },
      heritage: 'Listed heritage', project: 'Project', filterLabel: 'Filter projects', metaTitle: 'Projects · Building transformation in Barcelona · DTRES',
      metaDesc: (n, m2) => `Listed buildings, residences, offices and facilities transformed in Barcelona and Catalonia. ${n} projects, over ${m2} m².` },
    blog: { eyebrow: 'Blog · Guides for owners', title: 'What to know before transforming a building.', sub: 'Planning rules, permits, costs and timelines in Barcelona and Catalonia, explained by the architects who handle them every week.',
      by: 'By', read: 'Read →', back: '← All guides', related: 'Related phase', ctaTitle: 'Want to know what your building allows?', metaTitle: 'Blog · Guides on buildings, permits and construction in Barcelona · DTRES', empty: 'Our first English guides are coming soon.' },
    thanks: { eyebrow: 'Message received', title: 'Thank you. We will call you within 48 hours.', text: 'If it is urgent, email info@detres.eu or call +34 931 255 444.', back: 'Back to home' },
    updated: 'Last updated',
  },
};

// Formato numérico 1.000 / 1,000
export const fmt = (n, lang = 'es') => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'en' ? ',' : '.');
