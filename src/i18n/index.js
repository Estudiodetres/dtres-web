// Rutas y textos de interfaz por idioma.
export const langs = ['es', 'ca', 'en'];
export const htmlLang = { es: 'es', ca: 'ca', en: 'en' };
export const ogLocale = { es: 'es_ES', ca: 'ca_ES', en: 'en_GB' };
export const code = { es: 'ES', ca: 'CA', en: 'EN' };

export const routes = {
  home: { es: '/', ca: '/ca/', en: '/en/' },
  projects: { es: '/proyectos/', ca: '/ca/projectes/', en: '/en/projects/' },
  team: { es: '/equipo/', ca: '/ca/equip/', en: '/en/team/' },
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
    teamPage: { metaTitle: 'Equipo · DTRES Arquitectura e Interiorismo · Barcelona', metaDesc: 'Arquitectos, interioristas y técnicos en Barcelona. Conoce a las personas que lideran tu proyecto, de la due diligence a la entrega.', eyebrow: 'Equipo · Barcelona', title: 'Las personas que llevan tu proyecto.', sub: 'Un socio responde de tu proyecto de principio a fin. Detrás, un equipo de arquitectos, interioristas y técnicos que trabaja contigo en cada fase.', partners: 'Socios', staff: 'Equipo', collab: 'Colaboradores habituales', collabText: 'Profesionales con los que trabajamos en cada obra.', more: 'Conoce al equipo →' },
    nav: { method: 'Servicios', projects: 'Proyectos', about: 'Nosotros', blog: 'Blog' },
    cta: 'Agendar llamada', ctaFree: 'Agendar llamada gratuita', seeProjects: 'Ver proyectos',
    footer: { tagline: 'Arquitectura, interiorismo, licencias y obra para edificios singulares en Catalunya.', studio: 'Estudio', contact: 'Contacto', legal: 'Legal', legalNotice: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies' },
    form: { name: 'Nombre', email: 'Email', phone: 'Teléfono', company: 'Empresa o entidad', profile: 'Eres', message: 'Cuéntanos qué edificio tienes y qué quieres conseguir', legal: 'Usaremos tus datos solo para responderte.', privacy: 'Política de privacidad', submit: 'Agendar llamada', hp: 'No rellenar',
      profiles: [['Fundación', 'Fundación'], ['Inversor', 'Inversor'], ['Family office', 'Family office'], ['Empresa', 'Empresa'], ['Particular', 'Particular']] },
    home: { for: 'Trabajamos para', projectsDone: 'Proyectos entregados', works: 'De obra gestionada', m2: 'Transformados en edificios singulares',
      methodEyebrow: 'Transformación integral · Método en 4 fases', methodTitle: 'Del primer análisis a la entrega de llaves.', methodNote: 'Puedes empezar por cualquier fase. Te acompañamos hasta el final.',
      youGet: 'Recibes', startHere: 'Empezar por aquí →', before: 'Antes', after: 'Después', situation: 'Situación', transformation: 'Transformación', result: 'Resultado',
      more: 'Más transformaciones', allProjects: 'Ver todos los proyectos →', wipEyebrow: 'En curso', wipTitle: 'Lo que estamos transformando ahora.',
      revEyebrow: 'Reseñas reales de Google', revTitle: 'Lo que dicen nuestros clientes', stars: (n) => `${n} de 5 estrellas`, clientsTitle: 'Confían en nosotros', phaseLabel: 'Fase:', revAll: 'Ver todas en Google →', about: 'Nosotros',
      faqEyebrow: 'Preguntas frecuentes', faqTitle: 'Antes de transformar un edificio', blogTitle: 'Guías para inversores', blogAll: 'Ir al blog →',
      ctaEyebrow: 'Consultoría gratuita · 30 min con un socio', ctaTitle: '¿Tienes un edificio que podría rendir mucho más?', ctaText: 'Cuéntanos qué edificio tienes, o cuál quieres comprar, y qué quieres conseguir. Te diremos qué es posible, cuánto puede costar y por dónde empezar.' },
    phase: { label: 'Fase', integral: 'Transformación integral', includes: 'Qué incluye', youGet: 'Recibes', note: 'Puedes empezar por aquí. Te acompañamos hasta el final.', others: 'Las otras fases', ctaPre: '¿Empezamos por' },
    projects: { eyebrow: 'Proyectos · Barcelona y Catalunya', title: 'Edificios que han cambiado de vida.', sub: 'Patrimonio catalogado, residencias, oficinas y equipamientos para fundaciones, inversores y empresas. De la due diligence a la entrega de llaves.',
      filters: { todos: 'Todos', patrimonio: 'Patrimonio catalogado', cambio: 'Cambio de uso', residencias: 'Residencias', oficinas: 'Oficinas', equipamientos: 'Equipamientos', curso: 'En curso' },
      wp: { title: "¿Buscas oficina para tu empresa?", text: "Tenemos una web dedicada solo a oficinas: casos de éxito, método y equipo, con precio y plazo cerrados.", cta: "Ver DTRES Workplace", card: "Ver en Workplace" },
      heritage: 'Patrimonio catalogado', project: 'Proyecto', filterLabel: 'Filtrar proyectos', metaTitle: 'Proyectos · Transformación de edificios en Barcelona · DTRES',
      metaDesc: (n, m2) => `Edificios catalogados, residencias, oficinas y equipamientos transformados en Barcelona y Catalunya. ${n} proyectos, más de ${m2} m².` },
    blog: { eyebrow: 'Blog · Guías para inversores', title: 'Lo que hay que saber antes de transformar un edificio.', sub: 'Normativa, licencias, costes y plazos en Barcelona y Catalunya, explicados por los arquitectos que lo tramitan cada semana.',
      by: 'Por', read: 'Leer →', back: '← Todas las guías', related: 'Fase relacionada', ctaTitle: '¿Quieres saber qué permite tu edificio?', metaTitle: 'Blog · Guías de edificios, licencias y obra · DTRES', empty: 'Pronto publicaremos las primeras guías.' },
    thanks: { eyebrow: 'Mensaje recibido', title: 'Gracias. Ahora elige el día de tu llamada.', text: '30 minutos con un socio del estudio. Reserva el hueco que mejor te vaya y llegaremos con tu caso ya estudiado.', book: 'Elegir día y hora', step1: 'Paso 1 · Reserva tu llamada', step2: 'Paso 2 · ¿Ya has reservado y tienes prisa?', waText: 'Escríbeme directamente y lo vemos.', wa: 'Escribir por WhatsApp', back: 'Volver al inicio' },
    updated: 'Última actualización',
  },
  ca: {
    teamPage: { metaTitle: 'Equip · DTRES Arquitectura i Interiorisme · Barcelona', metaDesc: "Arquitectes, interioristes i tècnics a Barcelona. Coneix les persones que lideren el teu projecte, de la due diligence a l'entrega.", eyebrow: 'Equip · Barcelona', title: 'Les persones que porten el teu projecte.', sub: "Un soci respon del teu projecte de principi a fi. Al darrere, un equip d'arquitectes, interioristes i tècnics que treballa amb tu a cada fase.", partners: 'Socis', staff: 'Equip', collab: 'Col·laboradors habituals', collabText: 'Professionals amb qui treballem a cada obra.', more: "Coneix l'equip →" },
    nav: { method: 'Serveis', projects: 'Projectes', about: 'Nosaltres', blog: 'Blog' },
    cta: 'Reservar trucada', ctaFree: 'Reservar trucada gratuïta', seeProjects: 'Veure projectes',
    footer: { tagline: 'Arquitectura, interiorisme, llicències i obra per a edificis singulars a Catalunya.', studio: 'Estudi', contact: 'Contacte', legal: 'Legal', legalNotice: 'Avís legal', privacy: 'Privacitat', cookies: 'Galetes' },
    form: { name: 'Nom', email: 'Correu electrònic', phone: 'Telèfon', company: 'Empresa o entitat', profile: 'Ets', message: "Explica'ns quin edifici tens i què vols aconseguir", legal: 'Farem servir les teves dades només per respondre’t.', privacy: 'Política de privacitat', submit: 'Reservar trucada', hp: 'No omplir',
      profiles: [['Fundación', 'Fundació'], ['Inversor', 'Inversor'], ['Family office', 'Family office'], ['Empresa', 'Empresa'], ['Particular', 'Particular']] },
    home: { for: 'Treballem per a', projectsDone: 'Projectes lliurats', works: "D'obra gestionada", m2: 'Transformats en edificis singulars',
      methodEyebrow: 'Transformació integral · Mètode en 4 fases', methodTitle: "De la primera anàlisi al lliurament de claus.", methodNote: 'Pots començar per qualsevol fase. T’acompanyem fins al final.',
      youGet: 'Reps', startHere: 'Començar per aquí →', before: 'Abans', after: 'Després', situation: 'Situació', transformation: 'Transformació', result: 'Resultat',
      more: 'Més transformacions', allProjects: 'Veure tots els projectes →', wipEyebrow: 'En curs', wipTitle: 'El que estem transformant ara.',
      revEyebrow: 'Ressenyes reals de Google', revTitle: 'El que diuen els nostres clients', stars: (n) => `${n} de 5 estrelles`, clientsTitle: 'Confien en nosaltres', phaseLabel: 'Fase:', revAll: 'Veure-les totes a Google →', about: 'Nosaltres',
      faqEyebrow: 'Preguntes freqüents', faqTitle: 'Abans de transformar un edifici', blogTitle: 'Guies per a inversors', blogAll: 'Anar al blog →',
      ctaEyebrow: 'Consultoria gratuïta · 30 min amb un soci', ctaTitle: 'Tens un edifici que podria rendir molt més?', ctaText: "Explica'ns quin edifici tens, o quin vols comprar, i què vols aconseguir. Et direm què és possible, quant pot costar i per on començar." },
    phase: { label: 'Fase', integral: 'Transformació integral', includes: 'Què inclou', youGet: 'Reps', note: 'Pots començar per aquí. T’acompanyem fins al final.', others: 'Les altres fases', ctaPre: 'Comencem per' },
    projects: { eyebrow: 'Projectes · Barcelona i Catalunya', title: 'Edificis que han canviat de vida.', sub: 'Patrimoni catalogat, residències, oficines i equipaments per a fundacions, inversors i empreses. De la due diligence al lliurament de claus.',
      filters: { todos: 'Tots', patrimonio: 'Patrimoni catalogat', cambio: "Canvi d'ús", residencias: 'Residències', oficinas: 'Oficines', equipamientos: 'Equipaments', curso: 'En curs' },
      wp: { title: "Busques oficina per a la teva empresa?", text: "Tenim un web dedicat només a oficines: casos d'èxit, mètode i equip, amb preu i termini tancats.", cta: "Veure DTRES Workplace", card: "Veure a Workplace" },
      heritage: 'Patrimoni catalogat', project: 'Projecte', filterLabel: 'Filtrar projectes', metaTitle: "Projectes · Transformació d'edificis a Barcelona · DTRES",
      metaDesc: (n, m2) => `Edificis catalogats, residències, oficines i equipaments transformats a Barcelona i Catalunya. ${n} projectes, més de ${m2} m².` },
    blog: { eyebrow: 'Blog · Guies per a inversors', title: 'El que cal saber abans de transformar un edifici.', sub: 'Normativa, llicències, costos i terminis a Barcelona i Catalunya, explicats pels arquitectes que els tramiten cada setmana.',
      by: 'Per', read: 'Llegir →', back: '← Totes les guies', related: 'Fase relacionada', ctaTitle: 'Vols saber què permet el teu edifici?', metaTitle: "Blog · Guies d'edificis, llicències i obra · DTRES", empty: 'Aviat publicarem les primeres guies en català.' },
    thanks: { eyebrow: 'Missatge rebut', title: 'Gràcies. Ara tria el dia de la teva trucada.', text: "30 minuts amb un soci de l'estudi. Reserva el moment que et vagi millor i arribarem amb el teu cas ja estudiat.", book: 'Triar dia i hora', step1: 'Pas 1 · Reserva la teva trucada', step2: 'Pas 2 · Ja has reservat i tens pressa?', waText: "Escriu-me directament i ho mirem.", wa: 'Escriure per WhatsApp', back: "Tornar a l'inici" },
    updated: 'Darrera actualització',
  },
  en: {
    teamPage: { metaTitle: 'Team · DTRES Architecture and Interior Design · Barcelona', metaDesc: 'Architects, interior designers and technical experts in Barcelona. Meet the people who lead your project, from due diligence to handover.', eyebrow: 'Team · Barcelona', title: 'The people who run your project.', sub: 'A partner is accountable for your project from start to finish. Behind them, a team of architects, interior designers and technical experts works with you at every phase.', partners: 'Partners', staff: 'Team', collab: 'Regular collaborators', collabText: 'Professionals we work with on every project.', more: 'Meet the team →' },
    nav: { method: 'Services', projects: 'Projects', about: 'About', blog: 'Blog' },
    cta: 'Book a call', ctaFree: 'Book a free call', seeProjects: 'See projects',
    footer: { tagline: 'Architecture, interior design, permits and construction for distinctive buildings in Catalonia.', studio: 'Studio', contact: 'Contact', legal: 'Legal', legalNotice: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies' },
    form: { name: 'Name', email: 'Email', phone: 'Phone', company: 'Company or organisation', profile: 'You are', message: 'Tell us about your building and what you want to achieve', legal: 'We will only use your details to reply to you.', privacy: 'Privacy policy', submit: 'Book a call', hp: 'Do not fill',
      profiles: [['Fundación', 'Foundation'], ['Inversor', 'Investor'], ['Family office', 'Family office'], ['Empresa', 'Company'], ['Particular', 'Private owner']] },
    home: { for: 'We work for', projectsDone: 'Projects delivered', works: 'Of construction managed', m2: 'Transformed in distinctive buildings',
      methodEyebrow: 'End-to-end transformation · 4-phase method', methodTitle: 'From first analysis to handover.', methodNote: 'You can start at any phase. We stay with you to the end.',
      youGet: 'You get', startHere: 'Start here →', before: 'Before', after: 'After', situation: 'Situation', transformation: 'Transformation', result: 'Result',
      more: 'More transformations', allProjects: 'See all projects →', wipEyebrow: 'In progress', wipTitle: 'What we are transforming now.',
      revEyebrow: 'Real Google reviews', revTitle: 'What our clients say', stars: (n) => `${n} out of 5 stars`, clientsTitle: 'Trusted by', phaseLabel: 'Phase:', revAll: 'See all on Google →', about: 'About us',
      faqEyebrow: 'FAQ', faqTitle: 'Before transforming a building', blogTitle: 'Guides for investors', blogAll: 'Go to the blog →',
      ctaEyebrow: 'Free consultation · 30 min with a partner', ctaTitle: 'Do you have a building that could perform far better?', ctaText: 'Tell us which building you own, or want to buy, and what you want to achieve. We will tell you what is possible, what it may cost and where to start.' },
    phase: { label: 'Phase', integral: 'End-to-end transformation', includes: 'What it includes', youGet: 'You get', note: 'You can start here. We stay with you to the end.', others: 'The other phases', ctaPre: 'Shall we start with' },
    projects: { eyebrow: 'Projects · Barcelona and Catalonia', title: 'Buildings with a new life.', sub: 'Listed heritage buildings, residences, offices and facilities for foundations, investors and companies. From due diligence to handover.',
      filters: { todos: 'All', patrimonio: 'Listed heritage', cambio: 'Change of use', residencias: 'Residences', oficinas: 'Offices', equipamientos: 'Facilities', curso: 'In progress' },
      wp: { title: "Looking for an office for your company?", text: "We have a website just for offices: case studies, method and team, at a fixed price and timeline.", cta: "See DTRES Workplace", card: "See on Workplace" },
      heritage: 'Listed heritage', project: 'Project', filterLabel: 'Filter projects', metaTitle: 'Projects · Building transformation in Barcelona · DTRES',
      metaDesc: (n, m2) => `Listed buildings, residences, offices and facilities transformed in Barcelona and Catalonia. ${n} projects, over ${m2} m².` },
    blog: { eyebrow: 'Blog · Guides for investors', title: 'What to know before transforming a building.', sub: 'Planning rules, permits, costs and timelines in Barcelona and Catalonia, explained by the architects who handle them every week.',
      by: 'By', read: 'Read →', back: '← All guides', related: 'Related phase', ctaTitle: 'Want to know what your building allows?', metaTitle: 'Blog · Guides on buildings, permits and works · DTRES', empty: 'Our first English guides are coming soon.' },
    thanks: { eyebrow: 'Message received', title: 'Thank you. Now pick a day for your call.', text: '30 minutes with a partner of the studio. Book the slot that suits you and we will come with your case already reviewed.', book: 'Choose day and time', step1: 'Step 1 · Book your call', step2: 'Step 2 · Already booked and in a hurry?', waText: 'Message me directly and we will look at it.', wa: 'Message on WhatsApp', back: 'Back to home' },
    updated: 'Last updated',
  },
};

// Formato numérico 1.000 / 1,000
export const fmt = (n, lang = 'es') => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'en' ? ',' : '.');

export const wpLabels = { es: { nav: 'Oficinas', footer: 'Oficinas para empresas' }, ca: { nav: 'Oficines', footer: 'Oficines per a empreses' }, en: { nav: 'Offices', footer: 'Offices for companies' } };

export const projectDetail = {
  es: { gallery: 'Galería del proceso', before: 'Antes', after: 'Después', back: 'Proyectos', ba: 'Antes / Después', cta: '¿Quieres un resultado así?' },
  ca: { gallery: 'Galeria del procés', before: 'Abans', after: 'Després', back: 'Projectes', ba: 'Abans / Després', cta: 'Vols un resultat així?' },
  en: { gallery: 'Project gallery', before: 'Before', after: 'After', back: 'Projects', ba: 'Before / After', cta: 'Want a result like this?' },
};
