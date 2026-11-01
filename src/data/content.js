// Contenido base de la web (ES). Lo que vive en Notion se sobrescribe en build (ver notion.js).
export const site = {
  name: 'DTRES',
  legalName: 'ESDETRES Arquitectura e Interiorismo SLP',
  taxId: 'B67432088',
  registry: null, // p. ej. 'el Registro Mercantil de Barcelona, tomo X, folio Y, hoja B-Z'
  url: 'https://detres.eu',
  email: 'info@detres.eu',
  phone: '+34 931 255 444',
  phoneDisplay: '931 255 444',
  address: { street: "Carrer d'Osi 23", postalCode: '08034', city: 'Barcelona', region: 'Catalunya', country: 'ES' },
  placeId: 'ChIJv3MWA6yXpBIRj6tO7BPYQxA',
  areaServed: ['Barcelona', 'Catalunya'],
};

export const meta = {
  homeTitle: 'DTRES · Transformación de edificios en Barcelona: due diligence, licencias, interiorismo y obra',
  homeDesc: 'Arquitectura y diseño que elevan el valor de tu inversión. Transformamos edificios en Barcelona y Catalunya: due diligence, cambio de uso, edificios catalogados, interiorismo y obra a precio cerrado.',
};

export const hero = {
  eyebrow: 'Arquitectura e interiorismo · Barcelona y Catalunya · Desde 2017',
  title: 'Arquitectura y diseño que elevan el valor de tu inversión.',
  subtitle:
    'Transformamos edificios para darles un nuevo uso, con interiorismo de carácter, licencias ágiles y una obra sin sorpresas. De la due diligence a la entrega de llaves.',
  image: { src: '/img/iese-l-hero.jpg', alt: 'IESE Edificio L, edificio catalogado de 1910 rehabilitado como oficinas' },
};

export const audiences = {
  title: 'Para quien tiene un edificio con potencial. O quiere tenerlo.',
  items: [
    { title: 'Fundaciones e instituciones', text: 'Edificios que deben seguir cumpliendo su misión: residencias, colegios mayores, sedes. Rigor patrimonial y un resultado digno y duradero.' },
    { title: 'Inversores y family offices', text: 'Saber qué permite un activo antes de comprarlo. Due diligence, cambio de uso y una obra con plazos y costes controlados.' },
    { title: 'Patrimonio familiar', text: 'Un edificio heredado o que no rinde. Lo convertimos en viviendas, hospitality o espacio de trabajo, con un único interlocutor.' },
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
  title: 'Licencias que avanzan. Edificios que rinden.',
  text: 'Conocemos a fondo la normativa urbanística y patrimonial de Catalunya, los criterios de cada ayuntamiento y sus márgenes de interpretación. Eso nos permite maximizar, siempre dentro de la legalidad, el aprovechamiento y la rentabilidad de cada edificio, y que las licencias avancen sin bloqueos.',
  image: { src: '/img/iese-l-detalle.jpg', alt: 'Detalle restaurado del IESE Edificio L, edificio catalogado de 1910' },
  proofs: [
    { tag: 'Patrimonio catalogado · 1.022 m²', title: 'Campus universitario · IESE Business School', text: 'Reforma integral e interiorismo que transmite los valores de la institución, con el campus en funcionamiento.' },
    { tag: 'Patrimonio catalogado · 1.225 m²', title: 'Oficinas · Fundació Familiar Catalana', text: 'Sede de las oficinas de la UIC. Plan especial integral, licencias, obra e interiorismo. Más licencias para 5.163 m² de obra nueva en la parcela.' },
    { tag: 'Patrimonio catalogado · 1.000 m²', title: 'Residencia senior · Associació Col·laborativa Montroig', text: 'Transformación integral e interiorismo de ático y sobreático, con la residencia en funcionamiento.' },
    { tag: 'Cambio de uso · 577 m²', title: 'Viviendas de alquiler · Fundació Privada Montseny', text: 'De coliving en desuso a 5 viviendas: segregación, proyecto, licencias y obra.' },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'viabilidad', n: '01', title: 'Viabilidad',
    what: 'Due diligence técnica, urbanística y patrimonial: usos posibles, edificabilidad y riesgos.',
    get: 'Un informe con lo que permite el edificio, cuánto cuesta y cuánto tarda, antes de invertir.',
    seoTitle: 'Due diligence técnica de edificios en Barcelona',
    intro: 'Antes de comprar o transformar un edificio necesitas saber qué permite el planeamiento, qué protege Patrimonio, en qué estado está y cuánto costará. Lo analizamos y te damos una conclusión clara: comprar, negociar o no comprar.',
    includes: ['Situación urbanística: usos admitidos, edificabilidad y densidad de viviendas', 'Protección patrimonial y necesidad de informe de Patrimonio', 'Estado de estructura, instalaciones, fachada y cubierta', 'Habitabilidad, accesibilidad e incendios según el uso futuro', 'Presupuesto estimado, plazo de licencias y obra, y rentabilidad'],
  },
  {
    id: 'proyecto-y-licencias', slug: 'proyecto-y-licencias', n: '02', title: 'Proyecto y licencias',
    what: 'Arquitectura e interiorismo, proyecto básico y ejecutivo con instalaciones, permiso de obra, cambio de uso y licencia de actividad.',
    get: 'El proyecto definido, el presupuesto cerrado y las licencias en marcha.',
    seoTitle: 'Proyecto, interiorismo y licencias en Barcelona',
    intro: 'Diseñamos el edificio y su interiorismo, y tramitamos todo lo necesario para que la obra empiece cuanto antes: permisos de obra, cambio de uso, licencia de actividad y consultas con Patrimonio.',
    includes: ['Arquitectura e interiorismo', 'Proyecto básico y ejecutivo con instalaciones', 'Consulta previa e informe de Patrimonio', 'Permiso de obra, cambio de uso y licencia de actividad', 'Licitación y presupuesto cerrado con constructora'],
  },
  {
    id: 'obra', slug: 'obra', n: '03', title: 'Obra',
    what: 'Dirección de obra y project management.',
    get: 'Plazos, costes y calidad bajo control, con un informe semanal para la propiedad.',
    seoTitle: 'Dirección de obra y project management en Barcelona',
    intro: 'Dirigimos la obra y gestionamos a todos los agentes para que se cumplan plazo, coste y calidad. La propiedad recibe cada semana un informe claro del avance.',
    includes: ['Dirección de obra', 'Project management y coordinación de industriales', 'Control de costes y certificaciones', 'Informe semanal para la propiedad', 'Gestión de cambios sin sorpresas'],
  },
  {
    id: 'entrega', slug: 'entrega', n: '04', title: 'Entrega',
    what: 'Documentación final, legalizaciones y libro del edificio.',
    get: 'El edificio listo para operar, alquilar o vender.',
    seoTitle: 'Legalización y entrega de edificios rehabilitados',
    intro: 'Cerramos el proyecto con toda la documentación en regla para que el edificio pueda operar, alquilarse o venderse desde el primer día.',
    includes: ['Certificado final de obra', 'Legalizaciones e inspecciones', 'Cédulas de habitabilidad y licencias de actividad', 'Libro del edificio', 'Acompañamiento en la puesta en marcha'],
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

export const wip = [
  { title: 'En obra · Residencia universitaria · 4.000 m²', client: 'Colegio Mayor Universitario Bonaigua', text: 'Rehabilitación integral e interiorismo de la residencia.' },
  { title: 'En obra · Segregación de 5 viviendas · 577 m²', client: 'Fundació Privada Montseny', text: 'De coliving en desuso a 5 viviendas: cambio de uso y segregación.' },
  { title: 'En licitación · Oficinas · 1.225 m²', client: 'Fundació Familiar Catalana', text: 'Transformación de un edificio catalogado en las oficinas de la UIC, interiorismo incluido.' },
  { title: 'En viabilidad · De oficinas a 5 viviendas · 490 m²', client: 'Fondo de inversión Relanza', text: 'Due diligence técnica y urbanística para convertir cinco oficinas en viviendas antes de invertir.' },
];

export const reviews = [
  { quote: 'Buscábamos un estudio de arquitectura en Barcelona para la reforma integral de nuestro Flexliving y el equipo de DTRES superó nuestras expectativas. Entendieron perfectamente cómo reflejar nuestros valores en el espacio. Se encargaron de todo, desde el interiorismo hasta la gestión de licencias, cumpliendo con los plazos de entrega y costes objetivo.', author: 'Arnau Lluch', context: 'Reforma integral de un Flexliving' },
  { quote: 'He tenido la suerte de poder colaborar con ellos en el proceso de reforma de un hotel. Su profesionalidad y seguimiento hicieron que quisiera seguir trabajando con ellos. En ambos casos me han aportado tranquilidad, escucha activa y profesionalidad, algo que por desgracia, hoy en día, no es fácil de encontrar.', author: 'Jon Abalop', context: 'Reforma de un hotel' },
  { quote: 'They manage the entire process end-to-end, from initial ideation and design to project planning and final execution. What truly sets them apart is their style, which uniquely blends a modern aesthetic with the authentic spirit of Barcelona.', author: 'Magdalena K.', context: 'Tres reformas integrales', lang: 'en' },
];

export const team = {
  title: 'Arquitectos, interioristas y técnicos. Un solo equipo.',
  text: '14 personas en Barcelona que diseñan, tramitan y dirigen la obra. Cada proyecto lo lideramos de la primera visita a la entrega de llaves.',
  image: { src: '/img/equipo.jpg', alt: 'Equipo de DTRES trabajando en el estudio de Barcelona' },
  partners: [
    { name: 'Nacho Vallhonrat', role: 'Socio cofundador y Director General', img: '/img/nacho.jpg' },
    { name: 'Pablo Notario', role: 'Socio cofundador y Director de Operaciones', img: '/img/pablo.jpg' },
    { name: 'Iñigo Ugalde', role: 'Socio y Director de Expansión y Relaciones Institucionales', note: 'Director de la Escuela de Arquitectura de la UIC', img: '/img/inigo.jpg' },
  ],
};

export const faqs = [
  { q: '¿Qué incluye una due diligence de un edificio en Barcelona?', a: 'Estado técnico, situación urbanística y patrimonial, usos posibles, edificabilidad, licencias necesarias, coste estimado de la transformación y plazo realista.' },
  { q: '¿Se puede cambiar el uso de un edificio a vivienda?', a: 'Depende del planeamiento urbanístico de la zona, que decide si el uso residencial está permitido y en qué condiciones. Además, la vivienda debe cumplir la normativa de habitabilidad de Catalunya (superficie, ventilación y luz natural) y los estatutos de la comunidad no deben impedirlo. Se necesita proyecto técnico y licencia. Lo comprobamos en la fase de viabilidad, antes de que inviertas.' },
  { q: '¿Trabajáis con edificios catalogados?', a: 'Sí, es nuestra especialidad. En Barcelona, las obras en edificios del Catálogo de Patrimonio pueden requerir un informe previo del Ayuntamiento, que puede ser favorable, favorable con condiciones o desfavorable. Preparamos la consulta previa y el proyecto para conseguir un informe favorable, como en el IESE, Vila Regina o Lesseps.' },
  { q: '¿Puedo contrataros solo para una fase?', a: 'Sí. Puedes empezar por la viabilidad, el proyecto, la obra o la entrega, y te acompañamos hasta el final.' },
];

export const blog = [
  { tag: 'Viabilidad', title: 'Due diligence técnica de un edificio en Barcelona: qué revisar antes de comprar', slug: 'due-diligence-tecnica-edificio-barcelona' },
  { tag: 'Proyecto y licencias', title: 'Cambio de uso a vivienda en Barcelona: requisitos y plazos', slug: 'cambio-uso-a-vivienda-barcelona' },
  { tag: 'Proyecto y licencias', title: 'Segregar una vivienda en varias en Barcelona: requisitos y rentabilidad', slug: 'segregar-vivienda-barcelona' },
];

// Todos los proyectos (no vivienda). cat: patrimonio | residencias | oficinas | equipamientos. status: null | 'En obra' | 'En licitación' | 'En viabilidad'
export const allProjects = [
  { use: 'Oficinas en edificio de 1910', client: 'IESE Business School', m2: 1022, cat: 'patrimonio', heritage: true, img: '/img/iese-l-hero.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'IESE Business School', m2: 279, cat: 'oficinas', heritage: true, img: '/img/iese-a.jpg', place: 'Barcelona' },
  { use: 'Oficinas de la UIC', client: 'Fundació Familiar Catalana', m2: 1225, cat: 'patrimonio', heritage: true, status: 'En licitación', place: 'Barcelona' },
  { use: 'Plan especial y licencias de obra nueva', client: 'Fundació Familiar Catalana', m2: 5163, cat: 'equipamientos', place: 'Barcelona' },
  { use: 'Oficinas', client: 'OIP', m2: 1000, cat: 'oficinas', heritage: true, img: '/img/oip.jpg', place: 'Barcelona' },
  { use: 'Residencia senior', client: 'Associació Col·laborativa Montroig', m2: 1000, cat: 'residencias', heritage: true, img: '/img/lesseps.jpg', place: 'Barcelona' },
  { use: 'Residencia senior', client: 'Associació Cultural Carena', m2: 716, cat: 'residencias', img: '/img/carena-residencia.jpg', place: 'Barcelona' },
  { use: 'Residencia universitaria', client: 'Colegio Mayor Universitario Bonaigua', m2: 4000, cat: 'residencias', status: 'En obra', place: 'Barcelona' },
  { use: 'Residencia universitaria · 1ª fase', client: 'Colegio Mayor Universitario Pedralbes', m2: 350, cat: 'residencias', img: '/img/cmu-pedralbes.jpg', place: 'Barcelona' },
  { use: 'Club juvenil', client: 'Fundación Padua', m2: 3000, cat: 'equipamientos', img: '/img/padua.jpg', place: 'Barcelona' },
  { use: 'Club juvenil', client: 'Associació Cultural Carena', m2: 1752, cat: 'equipamientos', place: 'Barcelona' },
  { use: 'Vestuarios y gradas', client: 'Brafa', m2: 1000, cat: 'equipamientos', place: 'Barcelona' },
  { use: 'De coliving a 5 viviendas de alquiler', client: 'Fundació Privada Montseny', m2: 577, cat: 'residencias', status: 'En obra', place: 'Barcelona' },
  { use: 'De oficinas a 5 viviendas', client: 'Fondo de inversión Relanza', m2: 490, cat: 'residencias', status: 'En viabilidad', place: 'Barcelona' },
  { use: 'Headquarters', client: 'Amelia Hub', m2: 2000, cat: 'oficinas', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Aloalto', m2: 1000, cat: 'oficinas', img: '/img/aloalto.jpg', place: 'Barcelona' },
  { use: 'Showroom y oficinas', client: 'Papiol', m2: 800, cat: 'oficinas', img: '/img/papiol.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Triple Risk', m2: 400, cat: 'oficinas', img: '/img/frankie.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Entrelazadogs', m2: 400, cat: 'oficinas', img: '/img/entrelazadogs.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Mier Giralt Abogados', m2: 200, cat: 'oficinas', img: '/img/mier-giralt.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Delaire', m2: 100, cat: 'oficinas', img: '/img/delaire.jpg', place: 'Barcelona' },
  { use: 'Estudio de arquitectura', client: 'DTRES', m2: 100, cat: 'oficinas', img: '/img/oficinas-dtres.jpg', place: 'Barcelona' },
];
