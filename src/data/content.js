// Contenido base de la web (ES). Lo que vive en Notion se sobrescribe en build (ver notion.js).
export const site = {
  name: 'DTRES',
  legalName: 'ESDETRES Arquitectura e Interiorismo SLP',
  taxId: 'B67432088',
  registry: { tomo: '46912', folio: '216', hoja: 'B-535114' }, // Registro Mercantil de Barcelona
  url: 'https://detres.eu',
  email: 'info@detres.eu',
  phone: '+34 931 255 444',
  phoneDisplay: '931 255 444',
  address: { street: "Carrer d'Osi 23, baixos 2a", postalCode: '08034', city: 'Barcelona', region: 'Catalunya', country: 'ES' },
  placeId: 'ChIJv3MWA6yXpBIRj6tO7BPYQxA',
  areaServed: ['Barcelona', 'Catalunya'],
};

export const meta = {
  homeTitle: 'Transformación de edificios en Barcelona · DTRES Arquitectura',
  homeDesc: 'Due diligence, cambio de uso, edificios catalogados, licencias, interiorismo y obra en Barcelona y Catalunya. De la primera visita a la entrega de llaves.',
};

export const hero = {
  eyebrow: 'Arquitectura e interiorismo · Barcelona y Catalunya · Desde 2017',
  title: 'Arquitectura y diseño que elevan el valor de tu inversión.',
  subtitle:
    'Transformamos edificios para darles un nuevo uso, con interiorismo de carácter, licencias ágiles y una obra sin sorpresas. De la due diligence a la entrega de llaves.',
  image: { src: '/img/hero-papiol.jpg', alt: 'Showroom y oficinas de Papiol en Barcelona, con doble altura y escalera' },
};

export const audiences = {
  title: 'Quienes quieren transformar un edificio obsoleto en un activo único y rentable.',
  items: [
    { title: 'Fondos e inversores Real Estate', text: 'Due diligence antes de la compra, cambio de uso y una obra con plazo y coste cerrados para cumplir el plan de negocio.' },
    { title: 'Family offices y patrimonio familiar', text: 'Edificios propios o heredados que no rinden lo que podrían. Los convertimos en viviendas, hospitality u oficinas.' },
    { title: 'Fundaciones e instituciones', text: 'Residencias, colegios mayores y sedes que deben seguir cumpliendo su misión, con rigor patrimonial.' },
    { title: 'Empresas y sedes corporativas', text: 'Oficinas y headquarters que representan a la compañía y acompañan su crecimiento.' },
    { title: 'Agencias y gestores inmobiliarios', text: 'Viabilidad y due diligence técnica para asesorar mejor a sus clientes antes de comprar o vender.' },
  ],
};

// m2 y precio se recalculan desde Notion (Casos de éxito + Ajustes web)
export const stats = {
  yearsLabel: '+15 años',
  yearsText: 'De experiencia en arquitectura, interiorismo y obra',
  projects: '+100',
  m2: 20642,
  pricePerM2: 1200,
};

export const usp = {
  eyebrow: 'Normativa y patrimonio en Catalunya',
  title: 'Licencias más rápidas. Edificios más rentables.',
  text: 'Conocemos a fondo la normativa urbanística y patrimonial de Catalunya, los criterios de cada ayuntamiento y sus márgenes de interpretación. Eso nos permite maximizar, siempre dentro de la legalidad, el aprovechamiento y la rentabilidad de cada edificio, y que las licencias avancen sin bloqueos.',
  image: { src: '/img/iese-l-detalle.jpg', alt: 'Detalle restaurado del IESE Edificio L, edificio catalogado de 1910' },
  proofs: [
    { tag: 'Patrimonio catalogado · IESE Business School', title: 'Campus universitario · 1.022 m²', text: 'Reforma integral e interiorismo que transmite los valores de la institución, con el campus en funcionamiento.' },
    { tag: 'Patrimonio catalogado · Fundació Familiar Catalana', title: 'Oficinas · 1.225 m²', text: 'Sede de las oficinas de la UIC. Plan especial integral, licencias, obra e interiorismo. Más licencias para 5.163 m² de obra nueva en la parcela.' },
    { tag: 'Patrimonio catalogado · Associació Col·laborativa Montroig', title: 'Residencia senior · 1.000 m²', text: 'Transformación integral e interiorismo de ático y sobreático, con la residencia en funcionamiento.' },
    { tag: 'Cambio de uso · Fundació Privada Montseny', title: 'Viviendas de alquiler · 577 m²', text: 'De coliving en desuso a 5 viviendas: segregación, proyecto, licencias y obra.' },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'viabilidad', n: '01', title: 'Viabilidad', sub: "Due diligence técnica", alt: ['Viabilidad'],
    what: 'Due diligence técnica, urbanística y patrimonial: usos posibles, edificabilidad y riesgos.',
    get: "Identificamos los riesgos técnicos, evaluamos el coste de la inversión, revisamos el cumplimiento normativo y legal y fijamos los plazos de todo el proceso.",
    seoTitle: 'Due diligence técnica de edificios en Barcelona',
    intro: 'Antes de comprar o transformar un edificio necesitas saber qué permite el planeamiento, qué protege Patrimonio, en qué estado está y cuánto costará. Lo analizamos y te damos una conclusión clara: comprar, negociar o no comprar.',
    includes: ['Situación urbanística: usos admitidos, edificabilidad y densidad de viviendas', 'Protección patrimonial y necesidad de informe de Patrimonio', 'Estado de estructura, instalaciones, fachada y cubierta', 'Habitabilidad, accesibilidad e incendios según el uso futuro', 'Presupuesto estimado, plazo de licencias y obra, y rentabilidad'],
  },
  {
    id: 'proyecto-y-licencias', slug: 'proyecto-y-licencias', n: '02', title: 'Proyecto', sub: "Arquitectura y permiso de obra, ingeniería y licencia de actividad, interiorismo y mobiliario", alt: ['Proyecto y licencias'],
    what: 'Arquitectura e interiorismo, proyecto básico y ejecutivo con instalaciones, permiso de obra, cambio de uso y licencia de actividad.',
    get: "Un proyecto diseñado y construido en 3D para vivirlo antes de construirlo, definido al detalle en BIM y con el permiso de obra concedido.",
    seoTitle: 'Proyecto, interiorismo y licencias en Barcelona',
    intro: 'Diseñamos el edificio y su interiorismo, y tramitamos todo lo necesario para que la obra empiece cuanto antes: permisos de obra, cambio de uso, licencia de actividad y consultas con Patrimonio.',
    includes: ['Arquitectura e interiorismo', 'Proyecto básico y ejecutivo con instalaciones', 'Consulta previa e informe de Patrimonio', 'Permiso de obra, cambio de uso y licencia de actividad', 'Licitación y presupuesto cerrado con constructora'],
  },
  {
    id: 'obra', slug: 'obra', n: '03', title: 'Obra', sub: "Project management y dirección de obra con arquitecto, aparejador, ingeniero e interiorista", alt: ['Obra'],
    what: 'Dirección de obra y project management.',
    get: "Plazos, costes y calidad constructiva bajo control, con un informe semanal y un solo interlocutor.",
    seoTitle: 'Dirección de obra y project management en Barcelona',
    intro: 'Dirigimos la obra y gestionamos a todos los agentes para que se cumplan plazo, coste y calidad. La propiedad recibe cada semana un informe claro del avance.',
    includes: ['Dirección de obra', 'Project management y coordinación de industriales', 'Control de costes y certificaciones', 'Informe semanal para la propiedad', 'Gestión de cambios sin sorpresas'],
  },
  {
    id: 'entrega', slug: 'entrega', n: '04', title: 'Entrega', sub: "Equipamiento y legalizaciones", alt: ['Entrega', 'FF&E y entrega'],
    what: 'Diseño y selección de mobiliario y equipamiento (FF&E), coordinación de proveedores, legalizaciones y documentación final.',
    get: "El edificio equipado y listo para operar, alquilar o vender.",
    seoTitle: 'FF&E, legalización y entrega de edificios rehabilitados',
    intro: 'Diseñamos y seleccionamos el mobiliario y el equipamiento (FF&E), coordinamos a los proveedores hasta la instalación y cerramos toda la documentación para que el edificio opere desde el primer día.',
    includes: ['Diseño y selección de mobiliario y equipamiento (FF&E)', 'Coordinación de proveedores e instalación', 'Certificado final de obra, legalizaciones e inspecciones', 'Cédulas de habitabilidad y licencias de actividad', 'Libro del edificio y acompañamiento en la puesta en marcha'],
  },
];

export const featured = {
  eyebrow: 'Caso destacado · Patrimonio catalogado · 2024',
  title: 'Oficinas en un edificio de 1910 · IESE Business School',
  before: { src: '/img/iese-l-antes.jpg', alt: 'IESE Edificio L antes de la rehabilitación' },
  after: { src: '/img/iese-l-despues.jpg', alt: 'IESE Edificio L después de la rehabilitación' },
  situation: 'Edificio catalogado sin licencia de actividad: un tercio de la superficie no se podía usar, y escaleras, accesibilidad e incendios estaban fuera de normativa. El IESE quería recuperarlo entero para oficinas sin tocar el patrimonio.',
  transformation: 'Due diligence, informe favorable de Patrimonio, cambio de uso a oficinas, proyecto e interiorismo, y obra a precio y plazo cerrados. Fachada, cubierta, madera y pavimentos restaurados.',
  resultFigure: 'Renta anual x2',
  result: 'Superficie útil de 500 a 743 m², capacidad de 20 a 50 personas y amortización en 8,8 años.',
  testimonial: null, // { quote, author, role }
};

export const moreProjects = [
  { tag: 'Residencia senior · 716 m²', client: 'Associació Cultural Carena', img: '/img/carena-residencia.jpg' },
  { tag: 'Club juvenil · 3.000 m²', client: 'Fundación Padua', img: '/img/padua.jpg' },
  { tag: 'Oficinas · 1.000 m²', client: 'Aloalto', img: '/img/aloalto.jpg' },
  { tag: 'Showroom y oficinas · 800 m²', client: 'Papiol', img: '/img/papiol.jpg' },
  { tag: 'Residencia universitaria · 1ª fase · 350 m²', client: 'Colegio Mayor Universitario Pedralbes', img: '/img/cmu-pedralbes.jpg' },
  { tag: 'Oficinas · 200 m²', client: 'Mier Giralt Abogados', img: '/img/mier-giralt.jpg' },
];

// phase = id de fase del método. img = foto del estado actual (se muestra en B/N)
export const wip = [
  { use: 'Residencia universitaria · 4.000 m²', client: 'Colegio Mayor Universitario Bonaigua', phase: 'obra', text: 'Rehabilitación integral e interiorismo de la residencia.', img: '/img/wip-bonaigua.jpg' },
  { use: 'De equipamiento cultural a 5 viviendas · 577 m²', client: 'Fundació Privada Montseny', phase: 'obra', text: 'Cambio de uso y segregación en 5 viviendas de alquiler.', img: '/img/wip-lepant.jpg' },
  { use: 'De residencia senior a oficina institucional · 1.225 m²', client: 'Fundació Familiar Catalana', phase: 'proyecto-y-licencias', text: 'Edificio catalogado transformado en las oficinas de la UIC, interiorismo incluido. En licitación de obra.', img: '/img/wip-vila-regina.jpg' },
  { use: 'De oficinas a 5 viviendas · 490 m²', client: 'Fondo de inversión Relanza', phase: 'viabilidad', text: 'Due diligence técnica y urbanística para convertir cinco oficinas en viviendas antes de invertir.', img: '/img/wip-muntaner.jpg' },
  { use: 'Oficinas · 210 m²', client: 'Mafer.ai', phase: 'viabilidad', text: 'Local de dos plantas con patio para una empresa de 18 personas que prevé doblar plantilla. Estudio de distribución, licencia de actividad y auditoría del presupuesto de obra.', img: '/img/wip-mafer.jpg' },
];

export const reviews = [
  { quote: 'Buscábamos un estudio de arquitectura en Barcelona para la reforma integral de nuestro Flexliving y el equipo de DTRES superó nuestras expectativas. Entendieron perfectamente cómo reflejar nuestros valores en el espacio. Se encargaron de todo, desde el interiorismo hasta la gestión de licencias, cumpliendo con los plazos de entrega y costes objetivo.', rating: 5, author: 'Arnau Lluch', context: 'Reforma integral de un Flexliving' },
  { quote: 'He tenido la suerte de poder colaborar con ellos en el proceso de reforma de un hotel. Su profesionalidad y seguimiento hicieron que quisiera seguir trabajando con ellos. En ambos casos me han aportado tranquilidad, escucha activa y profesionalidad, algo que por desgracia, hoy en día, no es fácil de encontrar.', rating: 5, author: 'Jon Abalop', context: 'Reforma de un hotel' },
  { quote: 'They manage the entire process end-to-end, from initial ideation and design to project planning and final execution. What truly sets them apart is their style, which uniquely blends a modern aesthetic with the authentic spirit of Barcelona.', rating: 5, author: 'Magdalena K.', context: 'Tres reformas integrales', lang: 'en' },
];

export const team = {
  title: 'Un solo interlocutor. Un equipo completo detrás.',
  text: 'Hablas con una sola persona de principio a fin. Detrás, un equipo de 12 personas en Barcelona: arquitectos, interioristas y modeladores 3D, con ingeniería, arquitectura técnica y constructora de confianza. Diseñamos, tramitamos y dirigimos la obra, de la primera visita a la entrega de llaves.',
  image: { src: '/img/equipo.jpg', alt: 'Equipo de DTRES trabajando en el estudio de Barcelona' },
  partners: [
    { name: 'Nacho Vallhonrat', role: 'Arquitecto, socio cofundador', title: 'Director de Estrategia y Adquisición', note: 'Profesor de la Escuela de Arquitectura UIC', img: '/img/nacho.jpg' },
    { name: 'Pablo Notario', role: 'Arquitecto, socio cofundador', title: 'Director de Operaciones y Finanzas', note: 'Profesor de la Escuela de Arquitectura UIC', img: '/img/pablo.jpg' },
    { name: 'Iñigo Ugalde', role: 'Doctor arquitecto, socio', title: 'Director de Calidad', note: 'Director de la Escuela de Arquitectura UIC', img: '/img/inigo.jpg' },
  ],
};

// Equipo (fuente: Notion · Equipo web)
export const people = {
  staff: [
    { name: 'Elisabeth Pino', role: 'Directora de Proyecto y Producción', sub: 'Arquitecta senior' },
    { name: 'Arnau Carbó', role: 'Director de Proyecto y Diseño', sub: 'Arquitecto senior', note: 'Profesor de la Escuela de Arquitectura UIC' },
    { name: 'Miquel Marquès', role: 'Director de Proyecto y BIM Manager', sub: 'Arquitecto senior' },
    { name: 'Marta Cusí', role: 'Responsable de Diseño de Interiores', sub: 'Interiorista' },
    { name: 'Blanca de Prat', role: 'Arquitectura y diseño de interiores', sub: 'Arquitecta junior' },
    { name: 'Sofía Egido', role: 'Arquitectura y diseño de interiores', sub: 'Arquitecta junior' },
    { name: 'Andrea Peña', role: 'Modeladora 3D' },
    { name: 'Natasha Schnippenkoetter', role: 'Modeladora 3D' },
    { name: 'Eliana Mullis', role: 'Modeladora 3D' },
  ],
  partners: [
    { name: 'Pere Rams', role: 'Ingeniero' },
    { name: 'Sonia Castelló', role: 'Arquitecta técnica' },
    { name: 'José Peris', role: 'Constructor consultor' },
  ],
};

export const faqs = [
  { q: '¿Cómo trabajáis con un fondo o inversor antes de la compra?', a: 'Hacemos la due diligence en paralelo a la negociación. En pocas semanas sabes qué permite el edificio, cuánto cuesta transformarlo y cuánto tarda, con una conclusión clara: comprar, negociar o no comprar. Si no compras, solo has invertido en esa fase.' },
  { q: '¿Qué os diferencia de un estudio de arquitectura convencional?', a: 'Un único interlocutor de la due diligence a la entrega de llaves. Proyecto, interiorismo, licencias, obra y FF&E en el mismo equipo, sin cambios de responsable entre fases ni información que se pierde por el camino.' },
  { q: '¿Cómo controláis el presupuesto y el plazo de obra?', a: 'Cerramos el presupuesto con la constructora antes de empezar, sobre un proyecto ejecutivo completo. Durante la obra, la propiedad recibe cada semana un informe con el avance, el coste y las decisiones pendientes.' },
  { q: '¿Trabajáis con edificios catalogados?', a: 'Sí, es nuestra especialidad. En Barcelona, las obras en edificios del Catálogo de Patrimonio pueden requerir un informe previo del Ayuntamiento, que puede ser favorable, favorable con condiciones o desfavorable. Preparamos la consulta previa y el proyecto para conseguir un informe favorable, como en el IESE, Vila Regina o Lesseps.' },
  { q: '¿Puedo contrataros solo para una fase?', a: 'Sí. Puedes empezar por la viabilidad, el proyecto, la obra o el FF&E y la entrega, y te acompañamos hasta el final.' },
];

export const blog = [
  { tag: 'Viabilidad', title: 'Due diligence técnica de un edificio en Barcelona: qué revisar antes de comprar', slug: 'due-diligence-tecnica-edificio-barcelona' },
  { tag: 'Proyecto y licencias', title: 'Cambio de uso a vivienda en Barcelona: requisitos y plazos', slug: 'cambio-uso-a-vivienda-barcelona' },
  { tag: 'Proyecto y licencias', title: 'Segregar una vivienda en varias en Barcelona: requisitos y rentabilidad', slug: 'segregar-vivienda-barcelona' },
];

// Todos los proyectos (no vivienda). cat: patrimonio | residencias | oficinas | equipamientos. status: null | 'En obra' | 'En licitación' | 'En viabilidad'
export const allProjects = [
  { use: 'Oficinas en edificio de 1910', client: 'IESE Business School', m2: 1022, cat: 'patrimonio', heritage: true, img: '/img/pj-iese-l.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'IESE Business School', m2: 279, cat: 'oficinas', heritage: true, img: '/img/pj-iese-a.jpg', place: 'Barcelona' },
  { use: 'Oficinas de la UIC', client: 'Fundació Familiar Catalana', m2: 1225, cat: 'patrimonio', heritage: true, img: '/img/pj-vila-regina.jpg', status: 'En licitación', place: 'Barcelona' },
  { use: 'Plan especial y licencias de obra nueva', client: 'Fundació Familiar Catalana', m2: 5163, cat: 'equipamientos', img: '/img/ffc-plantada.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'OIP', m2: 1000, cat: 'oficinas', heritage: true, img: '/img/pj-oip.jpg', place: 'Barcelona' },
  { use: 'Residencia senior', client: 'Associació Col·laborativa Montroig', m2: 1000, cat: 'residencias', heritage: true, img: '/img/pj-lesseps.jpg', place: 'Barcelona' },
  { use: 'Residencia senior', client: 'Associació Cultural Carena', m2: 716, cat: 'residencias', img: '/img/pj-carena-residencia.jpg', place: 'Barcelona' },
  { use: 'Residencia universitaria', client: 'Colegio Mayor Universitario Bonaigua', m2: 4000, cat: 'residencias', img: '/img/pj-bonaigua.jpg', status: 'En obra', place: 'Barcelona' },
  { use: 'Residencia universitaria · 1ª fase', client: 'Colegio Mayor Universitario Pedralbes', m2: 350, cat: 'residencias', img: '/img/pj-cmu.jpg', place: 'Barcelona' },
  { use: 'Club juvenil', client: 'Fundación Padua', m2: 3000, cat: 'equipamientos', img: '/img/pj-padua.jpg', place: 'Barcelona' },
  { use: 'Club juvenil', client: 'Associació Cultural Carena', m2: 1752, cat: 'equipamientos', img: '/img/carena-club.jpg', place: 'Barcelona' },
  { use: 'Vestuarios', client: 'Brafa', cat: 'equipamientos', img: '/img/pj-brafa-vestuarios.jpg', place: 'Barcelona' },
  { use: 'Graderías', client: 'Brafa', cat: 'equipamientos', img: '/img/pj-brafa-graderias.jpg', place: 'Barcelona' },
  { use: 'De coliving a 5 viviendas de alquiler', client: 'Fundació Privada Montseny', m2: 577, cat: 'residencias', img: '/img/pj-lepant.jpg', status: 'En obra', place: 'Barcelona' },
  { use: 'De oficinas a 5 viviendas', client: 'Fondo de inversión Relanza', m2: 490, cat: 'residencias', img: '/img/pj-muntaner.jpg', status: 'En viabilidad', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Giménez-Salinas Abogados', m2: 1000, cat: 'oficinas', img: '/img/pj-gimenez-salinas.jpg', status: 'En viabilidad', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Mafer.ai', m2: 210, cat: 'oficinas', img: '/img/pj-mafer.jpg', status: 'En viabilidad', place: 'Barcelona' },
  { use: 'Headquarters', client: 'Amelia Hub', m2: 2000, cat: 'oficinas', img: '/img/pj-amelia.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Aloalto', m2: 1000, cat: 'oficinas', img: '/img/pj-aloalto.jpg', place: 'Barcelona' },
  { use: 'Showroom y oficinas', client: 'Papiol', m2: 800, cat: 'oficinas', img: '/img/pj-papiol.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Triple A Risk Finance', m2: 400, cat: 'oficinas', img: '/img/pj-frankie.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Entrelazadogs', m2: 400, cat: 'oficinas', img: '/img/entrelazadogs.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Mier Giralt Abogados', m2: 200, cat: 'oficinas', img: '/img/pj-mier.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Delaire', m2: 100, cat: 'oficinas', img: '/img/pj-delaire.jpg', place: 'Barcelona' },
  { use: 'Estudio de arquitectura', client: 'DTRES', m2: 100, cat: 'oficinas', img: '/img/pj-dtres.jpg', place: 'Barcelona' },
];

// Logos de clientes (blancos, para fondo oscuro)
export const clients = [
  { name: 'IESE Business School', logo: '/img/clientes/iese.png' },
  { name: 'UIC Barcelona', logo: '/img/clientes/uic.png' },
  { name: 'Colegio Mayor Universitario Bonaigua', logo: '/img/clientes/bonaigua.png' },
  { name: 'Relanza Capital', logo: '/img/clientes/relanza-capital.png' },
  { name: 'Triple A Risk Finance', logo: '/img/clientes/triple-a-risk-finance.png' },
  { name: 'Mier Giralt Laboralistas', logo: '/img/clientes/mier-giralt.png' },
  { name: 'Heads Up Barcelona', logo: '/img/clientes/headsup.png' },
  { name: 'Aloalto', logo: '/img/clientes/aloalto.png' },
  { name: 'Qgat Homes', logo: '/img/clientes/qgat-homes.png' },
  { name: 'Delaire', logo: '/img/clientes/delaire.png' },
  { name: 'Amelia Hub', logo: '/img/clientes/amelia-hub.png' },
  { name: 'CDC Hiacre', logo: '/img/clientes/cdc-hiacre.png' },
  { name: 'Pich Architects', logo: '/img/clientes/pich-architects.png' },
  { name: 'GCA Architects', logo: '/img/clientes/gca.png' },
  { name: 'Century 21 Nexus', logo: '/img/clientes/century21.png' },
  { name: 'Global Exchange', logo: '/img/clientes/global-exchange.png' },
  { name: 'Red Educativa Arenales', logo: '/img/clientes/arenales.png' },
  { name: 'Editorial Casals', logo: '/img/clientes/editorial-casals.png' },
  { name: 'Fundació Privada Montseny', logo: '/img/clientes/fundacio-montseny.png' },
  { name: 'Club Pàdua', logo: '/img/clientes/club-padua.png' },
  { name: 'Col·legi Xaloc', logo: '/img/clientes/xaloc.png' },
  { name: 'Mafer.ai', logo: '/img/clientes/mafer.png' },
  { name: 'Papiol Alfombres', logo: '/img/clientes/papiol.png' },
  { name: 'Entrelazadogs', logo: '/img/clientes/entrelazadogs.png' },
];
