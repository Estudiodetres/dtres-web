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
  whatsapp: '34655307513', // WhatsApp de Nacho
  social: [], // TODO: LinkedIn del estudio, Instagram… (https://…)
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
  title: "Damos una nueva vida a tu edificio.",
  subtitle: "Arquitectura y diseño que elevan su valor y su identidad, con licencias que avanzan y obra con plazo y coste cerrados.",
  image: { src: '/img/hero-papiol.jpg', alt: 'Showroom y oficinas de Papiol en Barcelona, con doble altura y escalera' },
};

export const audiences = {
  title: 'Quienes quieren transformar un edificio obsoleto en un activo único y rentable.',
  items: [
    { icon: 'invest', title: "Inversores", text: "Fondos e inversores particulares que compran para transformar. Due diligence antes de la compra, cambio de uso y obra con plazo y coste cerrados para cumplir el plan de negocio." },
    { icon: 'institution', title: "Fundaciones e instituciones", text: "Residencias, colegios mayores y sedes que deben seguir cumpliendo su misión, con rigor patrimonial." },
    { icon: 'owner', title: "Propietarios", text: "Patrimoniales y family offices con edificios propios o heredados que no rinden lo que podrían. Los convertimos en viviendas, hospitality u oficinas." },
    { icon: 'company', title: "Empresas", text: "Sedes y oficinas que representan a la compañía y acompañan su crecimiento." },
  ],
};

// m2 y precio se recalculan desde Notion (Casos de éxito + Ajustes web)
export const stats = {
  yearsLabel: '+15 años',
  yearsText: 'De experiencia en arquitectura, interiorismo y obra',
  projects: '+100',
  m2: 30000, // m² transformados (mínimo mostrado en la web)
  obraM: 36, // M€ de obra gestionada (fijo)
  pricePerM2: 1200,
};

export const usp = {
  eyebrow: 'Normativa y patrimonio en Catalunya',
  title: 'Licencias más rápidas. Edificios más rentables.',
  text: 'Conocemos a fondo la normativa urbanística y patrimonial de Catalunya, los criterios de cada ayuntamiento y sus márgenes de interpretación. Eso nos permite maximizar, siempre dentro de la legalidad, el aprovechamiento y la rentabilidad de cada edificio, y que las licencias avancen sin bloqueos.',
  image: { src: '/img/usp-obra.jpg', alt: 'Visita técnica del equipo DTRES en un edificio en rehabilitación' },
  proofs: [
    { icon: 'split', title: 'Licencias por fases', tag: 'Estrategia de tramitación', text: 'Sabemos qué licencias pedir y en qué orden. Dividimos el expediente en partes que avanzan en paralelo, en lugar de una sola licencia que lo bloquea todo.' },
    { icon: 'route', title: 'El recorrido del expediente', tag: 'Del visado de la ECA al ayuntamiento', text: 'Conocemos cómo viaja el proyecto desde que lo visa la ECA hasta que el ayuntamiento lo reparte entre sus departamentos. Así planificamos plazos y estrategia desde el primer día.' },
    { icon: 'heritage', title: 'Patrimonio, sin sorpresas', tag: 'Experiencia en edificios catalogados', text: 'Sabemos qué acepta Patrimonio, qué no y qué se puede negociar. Antes de que compres un edificio, te decimos si tu proyecto se puede hacer.' },
    { icon: 'ready', title: 'Listo el día que acaba la obra', tag: 'Legalizaciones en paralelo', text: 'Durante la obra tramitamos legalizaciones, boletines de electricidad y el resto de permisos. Si hay requerimientos, aparecen con la obra en marcha, cuando la constructora puede resolverlos rápido. El edificio queda listo para operar, alquilar o vender el mismo día que terminan los trabajos.' },
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
    seoTitle: 'Legalización, FF&E y entrega de edificios',
    intro: 'Diseñamos y seleccionamos el mobiliario y el equipamiento (FF&E), coordinamos a los proveedores hasta la instalación y cerramos toda la documentación para que el edificio opere desde el primer día.',
    includes: ['Diseño y selección de mobiliario y equipamiento (FF&E)', 'Coordinación de proveedores e instalación', 'Certificado final de obra, legalizaciones e inspecciones', 'Cédulas de habitabilidad y licencias de actividad', 'Libro del edificio y acompañamiento en la puesta en marcha'],
  },
];

export const featured = {
  eyebrow: 'Caso destacado · Patrimonio catalogado · 2024',
  title: 'Oficinas en edificio 1910 · IESE Business School',
  before: { src: '/img/iese-l-antes2.jpg', alt: 'IESE Edificio L antes de la rehabilitación' },
  after: { src: '/img/iese-l-despues2.jpg', alt: 'IESE Edificio L después de la rehabilitación' },
  situation: 'Edificio catalogado sin licencia de actividad: un tercio de la superficie no se podía usar, y escaleras, accesibilidad e incendios estaban fuera de normativa. El IESE quería recuperarlo entero para oficinas sin tocar el patrimonio.',
  transformation: 'Due diligence, informe favorable de Patrimonio, cambio de uso a oficinas, proyecto e interiorismo, y obra a precio y plazo cerrados. Fachada, cubierta, madera y pavimentos restaurados.',
  resultFigure: 'Renta anual x2',
  result: 'Superficie útil de 500 a 743 m², capacidad de 20 a 50 personas y amortización en 8,8 años.',
  testimonial: null, // { quote, author, role }
  case: {
    "eyebrow": "Caso de éxito",
    "title": "Patrimonio catalogado de 1910 · IESE Business School",
    "subtitle": "Un edificio a medio usar convertido en oficinas para 50 personas. El doble de renta, devolviendo el edificio a su estado original patrimonial.",
    "steps": [
      {
        "label": "Inicio",
        "text": "Sin licencia de actividad, el 30% de los metros cuadrados quedaba fuera de normativa y no se podía usar.",
        "img": "/img/iese-l-inicio.jpg",
        "alt": "IESE Edificio L antes de la obra"
      },
      {
        "label": "Transformación",
        "text": "Due diligence para fijar coste, plazos, permisos y capacidad. Permiso de obra con Patrimonio y obra a precio y plazo cerrados con la constructora.",
        "img": "/img/iese-l-obra.jpg",
        "alt": "IESE Edificio L durante la obra"
      },
      {
        "label": "Resultado",
        "text": "Oficinas para 50 personas con instalaciones nuevas, domótica y ventilación con recuperador de calor. Más aislamiento, pavimento original recuperado y mejor calificación energética.",
        "img": "/img/iese-l-resultado.jpg",
        "alt": "IESE Edificio L terminado"
      }
    ],
    "figures": [{"n": "x2€", "t": "Renta anual", "s": "El doble que antes"}, {"n": "+49%", "t": "Superficie útil", "s": "De 500 a 743 m²"}, {"n": "+30p", "t": "Puestos de trabajo", "s": "De 20 a 50 personas"}]
  },
};

// Más proyectos destacados en la home (por imagen de allProjects, en este orden)
export const moreImgs = ['/img/pj-iese-l.jpg', '/img/pj-carena-residencia.jpg', '/img/pj-papiol.jpg', '/img/pj-cmu.jpg', '/img/pj-hotel-cairo.jpg', '/img/carena-club.jpg'];

export const moreProjects = [
  { tag: 'Residencia senior · 716 m²', client: 'Associació Cultural Carena', img: '/img/pj-carena-residencia.jpg' },
  { tag: 'Club juvenil · 3.000 m²', client: 'Fundación Padua', img: '/img/pj-padua.jpg' },
  { tag: 'Oficinas · 1.000 m²', client: 'Aloalto', img: '/img/pj-aloalto.jpg' },
  { tag: 'Showroom y oficinas · 800 m²', client: 'Papiol', img: '/img/pj-papiol.jpg' },
  { tag: 'Residencia universitaria · 1.500 m²', client: 'Colegio Mayor Universitario Pedralbes', img: '/img/pj-cmu.jpg' },
  { tag: 'Oficinas · 200 m²', client: 'Mier Giralt Abogados', img: '/img/pj-mier.jpg' },
];

// phase = id de fase del método. img = foto del estado actual (se muestra en B/N)
export const wip = [
  { use: 'Residencia universitaria · 4.000 m²', client: 'Colegio Mayor Universitario Bonaigua', phase: 'obra', text: 'Rehabilitación integral e interiorismo de la residencia.', img: '/img/pj-bonaigua.jpg' },
  { use: 'Oficinas · 1.200 m²', client: 'Fundació Familiar Catalana', phase: 'proyecto-y-licencias', text: 'Edificio catalogado transformado en las oficinas de la UIC, interiorismo incluido. En licitación de obra.', img: '/img/pj-vila-regina.jpg' },
  { use: '5 viviendas · 500 m²', client: 'Fondo de inversión Relanza', phase: 'viabilidad', text: 'Due diligence técnica y urbanística para convertir cinco oficinas en viviendas antes de invertir.', img: '/img/pj-muntaner.jpg' },
  { use: 'Centro juvenil · 500 m²', client: 'Heads Up Barcelona', phase: 'viabilidad', text: 'Cambio de uso de un edificio protegido de Joan Rubió i Bellver para un proyecto socioeducativo. Due diligence, distribución y licencias.', img: '/img/pj-headsup.jpg' },
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
    { name: 'Nacho Vallhonrat', role: 'Arquitecto, socio cofundador', title: 'Director de Estrategia y Adquisición', note: 'Profesor de la Escuela de Arquitectura UIC', img: '/img/nacho.jpg', linkedin: 'https://www.linkedin.com/in/nacho-vallhonrat-garcia-valdecasas' },
    { name: 'Pablo Notario', role: 'Arquitecto, socio cofundador', title: 'Director de Operaciones y Finanzas', note: 'Profesor de la Escuela de Arquitectura UIC', img: '/img/pablo.jpg', linkedin: 'https://www.linkedin.com/in/pablo-notario-602436253' },
    { name: 'Iñigo Ugalde', role: 'Doctor arquitecto, socio', title: 'Director de Calidad', note: 'Director de la Escuela de Arquitectura UIC', img: '/img/inigo.jpg', linkedin: 'https://www.linkedin.com/in/i%C3%B1igo-ugalde-a7b49317' },
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
  { use: 'Oficinas', client: 'IESE Business School', m2: 1000, cat: 'patrimonio', heritage: true, img: '/img/pj-iese-l.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'IESE Business School', m2: 279, cat: 'oficinas', heritage: true, img: '/img/pj-iese-a.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Fundació Familiar Catalana', m2: 1200, cat: 'patrimonio', heritage: true, img: '/img/pj-vila-regina.jpg', status: 'En licitación', place: 'Barcelona' },
  { use: 'Docencia', client: 'Fundació Familiar Catalana', m2: 5000, status: 'En obra', cat: 'equipamientos', img: '/img/ffc-plantada.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'OIP', m2: 1000, cat: 'oficinas', heritage: true, img: '/img/pj-oip.jpg', place: 'Barcelona' },
  { use: 'Residencia senior', client: 'Associació Col·laborativa Montroig', m2: 1000, cat: 'residencias', heritage: true, img: '/img/pj-lesseps.jpg', place: 'Barcelona' },
  { use: 'Residencia senior', client: 'Associació Cultural Carena', m2: 716, cat: 'residencias', img: '/img/pj-carena-residencia.jpg', place: 'Barcelona' },
  { use: 'Residencia universitaria', client: 'Colegio Mayor Universitario Bonaigua', m2: 4000, cat: 'residencias', img: '/img/pj-bonaigua.jpg', status: 'En obra', place: 'Barcelona' },
  { use: 'Residencia universitaria', client: 'Colegio Mayor Universitario Pedralbes', m2: 1500, cat: 'residencias', img: '/img/pj-cmu.jpg', place: 'Barcelona' },
  { use: 'Club juvenil', client: 'Fundación Padua', m2: 3000, cat: 'equipamientos', img: '/img/pj-padua.jpg', place: 'Barcelona' },
  { use: 'Club juvenil', client: 'Associació Cultural Carena', m2: 1800, cat: 'equipamientos', img: '/img/carena-club.jpg', place: 'Barcelona' },
  { use: 'Vestuarios', client: 'Escuela Deportiva Brafa', m2: 1300, cat: 'equipamientos', img: '/img/pj-brafa-vestuarios.jpg', place: 'Barcelona' },
  { use: 'Graderías', client: 'Escuela Deportiva Brafa', m2: 700, cat: 'equipamientos', img: '/img/pj-brafa-graderias.jpg', place: 'Barcelona' },
  { use: '5 viviendas', client: 'Fundació Privada Montseny', m2: 600, tag: 'Cambio de uso', cat: 'residencias', img: '/img/pj-lepant.jpg', status: 'En obra', place: 'Barcelona' },
  { use: '5 viviendas', client: 'Fondo de inversión Relanza', m2: 500, tag: 'Cambio de uso', cat: 'residencias', img: '/img/pj-muntaner.jpg', status: 'En viabilidad', place: 'Barcelona' },
  { use: 'Vivienda', client: 'Inversor particular', m2: 200, cat: 'residencias', tag: 'Cambio de uso', img: '/img/pj-vivienda-inversor.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Giménez-Salinas Abogados', m2: 1000, cat: 'oficinas', img: '/img/pj-gimenez-salinas.jpg', status: 'En viabilidad', place: 'Barcelona' },
  { use: 'Centro juvenil', client: 'Heads Up Barcelona', m2: 500, cat: 'equipamientos', heritage: true, tag: 'Cambio de uso', status: 'En viabilidad', img: '/img/pj-headsup.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Mafer.ai', m2: 200, cat: 'oficinas', img: '/img/pj-mafer.jpg', status: 'En viabilidad', place: 'Barcelona' },
  { use: 'Hotel', client: 'Le Mirath · El Cairo', m2: 1000, cat: 'residencias', img: '/img/pj-hotel-cairo.jpg', place: 'El Cairo' },
  { use: 'Oficinas', client: 'Amelia Hub', m2: 2000, cat: 'oficinas', img: '/img/pj-amelia.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Aloalto', m2: 1000, cat: 'oficinas', img: '/img/pj-aloalto.jpg', place: 'Barcelona' },
  { use: 'Showroom y oficinas', client: 'Papiol', m2: 800, cat: 'oficinas', img: '/img/pj-papiol.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Triple A Risk Finance', m2: 400, cat: 'oficinas', img: '/img/pj-frankie.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Mier Giralt Abogados', m2: 200, cat: 'oficinas', img: '/img/pj-mier.jpg', place: 'Barcelona' },
  { use: 'Oficinas', client: 'Delaire', m2: 100, cat: 'oficinas', img: '/img/pj-delaire.jpg', place: 'Barcelona' },
  { use: 'Nuestro estudio', client: 'DTRES', cat: 'oficinas', img: '/img/pj-dtres.jpg', place: 'Barcelona' },
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

// Home v2: bloques nuevos (dolores, bonus, método corto)
export const home2 = {
  "pains": {
    "eyebrow": "Lo que frena una operación",
    "title": "¿Te suena?",
    "items": [
      {
        "icon": "doubt",
        "text": "No sabes si lo que quieres hacer es posible en ese edificio, ni si la operación será rentable."
      },
      {
        "icon": "clock",
        "text": "Cada mes que pasa es rentabilidad que dejas de ganar con tu edificio, y tu tesis de inversión empieza a tambalearse."
      },
      {
        "icon": "blocked",
        "text": "Patrimonio bloquea lo que querías hacer."
      }
    ]
  },
  "bonus": {
    "eyebrow": "Consultoría gratuita · 30 min con un socio",
    "title": "Tu primera viabilidad, en 30 minutos.",
    "text": "Un socio arquitecto revisa tu edificio o tu idea y te dice si es viable, qué riesgos tiene y cómo seguir con una due diligence.",
    "cta": "Reservar mi consultoría gratuita"
  },
  "methodTitle": "Cuatro fases. Un solo interlocutor.",
  "methodCta": "Empezar por la viabilidad",
  "authority": "Quiénes somos",
  "phaseShort": {
    "viabilidad": "Riesgos, coste y plazos antes de invertir.",
    "proyecto-y-licencias": "Diseño en 3D y permiso de obra concedido.",
    "obra": "Plazo, coste y calidad bajo control, con un solo interlocutor.",
    "entrega": "Equipado y listo para operar, alquilar o vender."
  },
  "journey": {
    "eyebrow": "De la due diligence a la entrega de llaves",
    "title": "Cada fase tiene su riesgo. Lo resolvemos antes de que te cueste dinero.",
    "problem": "El problema",
    "solution": "Cómo lo resolvemos",
    "pains": {
      "viabilidad": "No sabes si lo que quieres hacer es posible en ese edificio, ni si la operación será rentable.",
      "proyecto-y-licencias": "La licencia no llega o Patrimonio bloquea el proyecto. Cada mes es rentabilidad que dejas de ganar y tu tesis empieza a tambalearse.",
      "obra": "La obra se alarga, el presupuesto se dispara y nadie te da respuestas claras.",
      "entrega": "Termina la obra, pero faltan boletines y legalizaciones: el edificio no puede abrir."
    },
    "fix": {
      "entrega": "Tramitamos boletines y legalizaciones durante la obra. El edificio, equipado y listo para operar, alquilar o vender el día que acaba."
    }
  },
  "wa": {
    "pre": "¿Prefieres hablar ahora?",
    "link": "Escríbenos por WhatsApp →"
  }
};
