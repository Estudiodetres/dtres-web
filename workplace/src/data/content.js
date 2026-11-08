// Contenido de DTRES Workplace (copiado de la web anterior en Squarespace, con el estilo de detres.eu)
export const site = {
  name: 'DTRES Workplace',
  url: 'https://workplace.detres.eu',
  parent: 'https://detres.eu',
  email: 'info@detres.eu',
  phone: '+34 931 255 444',
  phoneDisplay: '931 255 444',
  whatsapp: '34655307513',
  booking: 'https://calendar.app.google/aw8RtuQPvH932VrBA',
  address: { street: "Carrer d'Osi 23, baixos 2a", postalCode: '08034', city: 'Barcelona' },
  legalName: 'ESDETRES Arquitectura e Interiorismo SLP',
  linkedin: 'https://www.linkedin.com/company/estudiodetres/',
  instagram: 'https://www.instagram.com/estudio_detres/',
};

export const hero = {
  eyebrow: 'Oficinas para empresas en crecimiento · Barcelona',
  title: 'Ayudamos a encontrar y transformar vuestras próximas oficinas',
  subtitle: 'Nos ocupamos de todo a precio y plazo cerrado.',
  image: { src: '/img/pj-amelia.jpg', alt: 'Oficina de Amelia Hub diseñada y construida por DTRES' },
  promises: [
    { title: 'Un único interlocutor', text: 'Nos ocupamos de todo el proceso por ti.' },
    { title: 'Plazo y precio cerrado', text: 'Compromiso por contrato.' },
    { title: 'Escoge con certeza', text: 'Local escogido según crecimiento futuro.' },
  ],
};

export const problem = {
  title: '¿No cabéis en vuestras oficinas?',
  steps: [
    { label: 'Problema', text: 'Tu oficina actual está llegando al límite, ya no cabéis más…' },
    { label: 'Consecuencia', text: 'El equipo prefiere teletrabajar porque hay demasiado ruido, no pueden hacer llamadas tranquilos y las interrupciones son constantes.' },
    { label: 'Solución', text: 'Os ayudamos a encontrar un nuevo local, diseñamos una distribución optimizada, gestionamos permisos y licencias y transformamos el espacio para que refleje vuestra cultura. Os lo entregamos listo para trabajar.' },
  ],
};

export const quote1 = {
  text: 'Tu empresa mueve millones, pero tu oficina parece una gestoría de barrio',
  sub: 'La falta de coherencia entre lo que decís que sois y lo que habla vuestro espacio es lo que rechaza el talento.',
  image: { src: '/img/pj-mier.jpg', alt: 'Oficina de Mier Giralt Abogados' },
};

export const pains = {
  title: 'Quieres crecer, pero…',
  items: [
    { title: 'El talento no viene', text: 'Si tu oficina huele a 1990, los mejores perfiles eligen a tu competencia.' },
    { title: 'Huyen del ruido', text: 'Si tu gente prefiere el salón de su casa es porque tu oficina es ruidosa, oscura y agotadora.' },
    { title: 'No cabemos más', text: 'Mantener despachos vacíos y pasillos oscuros es una vía de agua en tu balance.' },
  ],
};

export const quote2 = {
  text: 'Seguir en un espacio en el que no cabes te está frenando el crecimiento',
  sub: 'Invertir en un espacio diseñado a medida es invertir en tu equipo. Invertir en tu equipo es invertir en la empresa.',
};

export const gains = {
  title: 'Convertimos tu nueva oficina en un espacio que:',
  items: [
    { title: 'Transmite vuestro prestigio y valores', text: 'El espacio transmite vuestro prestigio.' },
    { title: 'Cada m² tiene sentido', text: 'm² que funcionan para foco y colaboración.' },
    { title: 'El talento y el equipo quieren estar', text: 'Espacio que funciona y transmite propósito.' },
  ],
};

export const method = {
  eyebrow: 'Método EDT',
  title: 'Tres pasos, un solo interlocutor',
  steps: [
    { n: '1', title: 'Estudio de viabilidad', text: 'Analizamos los problemas y deseos del equipo, desarrollamos la estrategia para solucionarlos y calculamos el presupuesto total de la inversión que deberéis hacer.' },
    { n: '2', title: 'Diseño virtual', text: 'Diseñamos y construimos la oficina en 3D.' },
    { n: '3', title: 'Transformación ágil', text: 'Obra y mobiliario a precio y plazo cerrado.' },
  ],
};

export const benefits = {
  title: 'Beneficios de la transformación',
  items: [
    { n: '+35%', title: 'Capacidad de foco', text: 'Reduce ruido e interrupciones.' },
    { n: '+30%', title: 'Optimización m²', text: 'Reduce espacios muertos.' },
    { n: '+25%', title: 'Retención de talento', text: 'Aumenta la retención del talento y el sentimiento de pertenencia.' },
  ],
};

export const testimonials = {
  title: 'Lo que dicen algunos de nuestros clientes',
  items: [
    { tag: 'Pertenencia y rendimiento', quote: 'La oficina se nos quedó pequeña por lo rápido que crecimos. Ya no nos representaba. Conseguimos una oficina ordenada y funcional.', name: 'David Ferré', role: 'Cofundador de Amelia Hub' },
    { tag: 'Concentración y ruido', quote: 'Las personas preferían quedarse en casa porque no tenían privacidad y había mucho ruido. Ahora, con una oficina que nos representa y pensada para socializar y concentrarse, el equipo vuelve con ganas.', name: 'Xavier Mier', role: 'Fundador de Mier Giralt Abogados' },
    { tag: 'Desperdicio de m² y oficina antigua', quote: 'Nuestra oficina era antigua y teníamos mucho espacio dedicado al stock de material. DTRES la transformó, ahorrando muchos m² y convirtiéndola en un espacio que transmite nuestra cultura.', name: 'Rosalía García', role: 'CEO de Delaire' },
  ],
};

// Casos de éxito de la home (antes / después). Las fotos de "antes" se añadirán desde la web anterior.
export const cases = [
  { name: 'DTRES', meta: '15 personas en 100 m²', slug: 'detres', img: '/img/pj-dtres.jpg' },
  { name: 'Mier Giralt', meta: '20 personas en 200 m²', slug: 'miergiraltlaboralistas', img: '/img/pj-mier.jpg' },
  { name: 'Carena', meta: '20 personas en 380 m²', slug: null, img: '/img/carena-club.jpg' },
  { name: 'IESE Barcelona', meta: '30 personas en 300 m²', slug: 'iese', img: '/img/pj-iese-a.jpg', before: '/img/iese-l-antes2.jpg' },
  { name: 'CMU Pedralbes', meta: '80 personas en 3.000 m²', slug: null, img: '/img/pj-cmu.jpg' },
  { name: 'Amelia Hub', meta: '100 personas en 1.000 m²', slug: 'ameliahub', img: '/img/pj-amelia.jpg' },
  { name: 'Papiol', meta: 'Showroom + oficina 800 m²', slug: 'papiol', img: '/img/pj-papiol.jpg' },
];

// Páginas de casos de éxito (mismas direcciones que la web anterior)
export const projects = [
  { slug: 'papiol', name: 'Papiol', title: 'Showroom y oficinas de Papiol', meta: 'Showroom + oficina · 800 m²', img: '/img/pj-papiol.jpg' },
  { slug: 'ameliahub', name: 'Amelia Hub', title: 'Oficinas de Amelia Hub', meta: '100 personas · 1.000 m²', img: '/img/pj-amelia.jpg' },
  { slug: 'iese', name: 'IESE Barcelona', title: 'Transformación del espacio de recepción de invitados del edificio de Dirección General del campus de Barcelona del IESE.', meta: '30 personas · 300 m²', img: '/img/pj-iese-a.jpg', desc: 'IESE Barcelona: diseño del espacio de trabajo de la Dirección General.' },
  { slug: 'padua', name: 'Pádua', title: 'Centro Pádua', meta: 'Oficinas y espacios de trabajo', img: '/img/pj-padua.jpg' },
  { slug: 'miergiraltlaboralistas', name: 'Mier Giralt Laboralistas', title: 'Oficinas de Mier Giralt Laboralistas', meta: '20 personas · 200 m²', img: '/img/pj-mier.jpg' },
  { slug: 'triples', name: 'Triple A', title: 'Oficinas de Triple A', meta: 'Diseño de oficinas', img: null },
  { slug: 'detres', name: 'DTRES', title: 'Nuestro estudio', meta: '15 personas · 100 m²', img: '/img/pj-dtres.jpg' },
  { slug: 'aieliahub-l8l3p', name: 'Brafa', title: 'Brafa', meta: 'Diseño de oficinas', img: '/img/pj-brafa-vestuarios.jpg' },
  { slug: 'oip', name: 'OIP', title: 'Oficinas de OIP', meta: 'Diseño de oficinas', img: '/img/pj-oip.jpg' },
  { slug: 'aloalto', name: 'Aloalto', title: 'Oficinas de Aloalto', meta: 'Diseño de oficinas', img: '/img/pj-aloalto.jpg' },
  { slug: 'delaire', name: 'Delaire', title: 'Oficinas de Delaire', meta: 'Diseño de oficinas', img: '/img/pj-delaire.jpg' },
];

export const team = {
  title: 'El equipo',
  members: [
    { name: 'Nacho Vallhonrat', role: 'Socio cofundador', img: '/img/tm-nacho.jpg' },
    { name: 'Pablo Notario', role: 'Socio cofundador', img: '/img/tm-pablo.jpg' },
    { name: 'Iñigo Ugalde', role: 'Socio · Director de Calidad', img: '/img/tm-inigo.jpg' },
    { name: 'Elisabeth Pino', role: 'Directora de Proyecto y Producción', img: '/img/tm-elisabeth.jpg' },
    { name: 'Arnau Carbó', role: 'Director de Proyecto y Diseño', img: '/img/tm-arnau.jpg' },
    { name: 'Miquel Marquès', role: 'Director de Proyecto y BIM Manager', img: '/img/tm-miquel.jpg' },
    { name: 'Marta Cusí', role: 'Responsable de Diseño de Interiores', img: '/img/tm-marta.jpg' },
    { name: 'Sofía Egido', role: 'Arquitectura y diseño de interiores', img: '/img/tm-sofia.jpg' },
    { name: 'Blanca de Prat', role: 'Arquitectura y diseño de interiores', img: '/img/tm-blanca.jpg' },
    { name: 'Andrea Peña', role: 'Modeladora 3D', img: '/img/tm-andrea.jpg' },
    { name: 'Natasha Schnippenkoetter', role: 'Modeladora 3D', img: '/img/tm-natasha.jpg' },
    { name: 'Eliana Mullis', role: 'Modeladora 3D', img: '/img/tm-eliana.jpg' },
  ],
};

export const contact = {
  eyebrow: 'Consultoría estratégica',
  title: 'Creamos oficinas que aceleran el crecimiento',
  text: 'Creamos activos estratégicos optimizados que aumentan la productividad, retienen el talento y refuerzan su cultura corporativa.',
};

// Copiado tal cual de detres.eu
export const clients = [
  {
    "name": "IESE Business School",
    "logo": "/img/clientes/iese.png"
  },
  {
    "name": "UIC Barcelona",
    "logo": "/img/clientes/uic.png"
  },
  {
    "name": "Colegio Mayor Universitario Bonaigua",
    "logo": "/img/clientes/bonaigua.png"
  },
  {
    "name": "Relanza Capital",
    "logo": "/img/clientes/relanza-capital.png"
  },
  {
    "name": "Triple A Risk Finance",
    "logo": "/img/clientes/triple-a-risk-finance.png"
  },
  {
    "name": "Mier Giralt Laboralistas",
    "logo": "/img/clientes/mier-giralt.png"
  },
  {
    "name": "Heads Up Barcelona",
    "logo": "/img/clientes/headsup.png"
  },
  {
    "name": "Aloalto",
    "logo": "/img/clientes/aloalto.png"
  },
  {
    "name": "Qgat Homes",
    "logo": "/img/clientes/qgat-homes.png"
  },
  {
    "name": "Delaire",
    "logo": "/img/clientes/delaire.png"
  },
  {
    "name": "Amelia Hub",
    "logo": "/img/clientes/amelia-hub.png"
  },
  {
    "name": "CDC Hiacre",
    "logo": "/img/clientes/cdc-hiacre.png"
  },
  {
    "name": "Pich Architects",
    "logo": "/img/clientes/pich-architects.png"
  },
  {
    "name": "GCA Architects",
    "logo": "/img/clientes/gca.png"
  },
  {
    "name": "Century 21 Nexus",
    "logo": "/img/clientes/century21.png"
  },
  {
    "name": "Global Exchange",
    "logo": "/img/clientes/global-exchange.png"
  },
  {
    "name": "Red Educativa Arenales",
    "logo": "/img/clientes/arenales.png"
  },
  {
    "name": "Editorial Casals",
    "logo": "/img/clientes/editorial-casals.png"
  },
  {
    "name": "Fundació Privada Montseny",
    "logo": "/img/clientes/fundacio-montseny.png"
  },
  {
    "name": "Club Pàdua",
    "logo": "/img/clientes/club-padua.png"
  },
  {
    "name": "Col·legi Xaloc",
    "logo": "/img/clientes/xaloc.png"
  },
  {
    "name": "Mafer.ai",
    "logo": "/img/clientes/mafer.png"
  },
  {
    "name": "Papiol Alfombres",
    "logo": "/img/clientes/papiol.png"
  }
];
export const featuredCase = {
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
  "figures": [
    {
      "n": "x2€",
      "t": "Renta anual",
      "s": "El doble que antes"
    },
    {
      "n": "+49%",
      "t": "Superficie útil",
      "s": "De 500 a 743 m²"
    },
    {
      "n": "+30p",
      "t": "Puestos de trabajo",
      "s": "De 20 a 50 personas"
    }
  ]
};
export const phases = [
  {
    "id": "viabilidad",
    "slug": "viabilidad",
    "n": "01",
    "title": "Viabilidad",
    "get": "Identificamos los riesgos técnicos, evaluamos el coste de la inversión, revisamos el cumplimiento normativo y legal y fijamos los plazos de todo el proceso."
  },
  {
    "id": "proyecto-y-licencias",
    "slug": "proyecto-y-licencias",
    "n": "02",
    "title": "Proyecto",
    "get": "Un proyecto diseñado y construido en 3D para vivirlo antes de construirlo, definido al detalle en BIM y con el permiso de obra concedido."
  },
  {
    "id": "obra",
    "slug": "obra",
    "n": "03",
    "title": "Obra",
    "get": "Plazos, costes y calidad constructiva bajo control, con un informe semanal y un solo interlocutor."
  },
  {
    "id": "entrega",
    "slug": "entrega",
    "n": "04",
    "title": "Entrega",
    "get": "El edificio equipado y listo para operar, alquilar o vender."
  }
];
export const dtresTeam = {
  "title": "Un solo interlocutor. Un equipo completo detrás.",
  "text": "Hablas con una sola persona de principio a fin. Detrás, un equipo de 12 personas en Barcelona: arquitectos, interioristas y modeladores 3D, con ingeniería, arquitectura técnica y constructora de confianza. Diseñamos, tramitamos y dirigimos la obra, de la primera visita a la entrega de llaves.",
  "image": {
    "src": "/img/equipo.jpg",
    "alt": "Equipo de DTRES trabajando en el estudio de Barcelona"
  },
  "partners": [
    {
      "name": "Nacho Vallhonrat",
      "role": "Arquitecto, socio cofundador",
      "title": "Director de Estrategia y Adquisición",
      "note": "Profesor de la Escuela de Arquitectura UIC",
      "img": "/img/nacho.jpg",
      "linkedin": "https://www.linkedin.com/in/nacho-vallhonrat-garcia-valdecasas"
    },
    {
      "name": "Pablo Notario",
      "role": "Arquitecto, socio cofundador",
      "title": "Director de Operaciones y Finanzas",
      "note": "Profesor de la Escuela de Arquitectura UIC",
      "img": "/img/pablo.jpg",
      "linkedin": "https://www.linkedin.com/in/pablo-notario-602436253"
    },
    {
      "name": "Iñigo Ugalde",
      "role": "Doctor arquitecto, socio",
      "title": "Director de Calidad",
      "note": "Director de la Escuela de Arquitectura UIC",
      "img": "/img/inigo.jpg",
      "linkedin": "https://www.linkedin.com/in/i%C3%B1igo-ugalde-a7b49317"
    }
  ]
};
export const stats = {
  "yearsLabel": "+15 años",
  "yearsText": "De experiencia en arquitectura, interiorismo y obra",
  "projects": "+100",
  "m2": 30000,
  "obraM": 36,
  "pricePerM2": 1200
};

// Estructura de la home de detres.eu adaptada a oficinas
export const audiences = {
  eyebrow: 'Trabajamos para',
  title: 'Empresas que crecen y necesitan una oficina a su altura.',
  items: [
    { icon: 'company', title: 'Empresas en crecimiento' },
    { icon: 'split', title: 'Despachos y firmas profesionales' },
    { icon: 'institution', title: 'Sedes corporativas' },
    { icon: 'heritage', title: 'Escuelas de negocio y universidades' },
  ],
};

export const journey = {
  eyebrow: 'Método DTRES · Del local a la entrega de llaves',
  title: 'Cada fase tiene su riesgo. Lo resolvemos antes de que te cueste dinero.',
  problem: 'El problema',
  solution: 'Cómo lo resolvemos',
  pains: {
    viabilidad: 'No sabes si el local que te gusta sirve para tu equipo, cuánto costará transformarlo ni si podréis crecer en él.',
    'proyecto-y-licencias': 'La licencia de actividad no llega y, mientras tanto, pagas dos alquileres.',
    obra: 'La obra se alarga, el presupuesto se dispara y nadie te da respuestas claras.',
    entrega: 'Termina la obra, pero faltan mobiliario, boletines o licencias: el equipo no puede entrar.',
  },
  fix: {
    entrega: 'Coordinamos mobiliario, boletines y legalizaciones durante la obra. La oficina, equipada y lista para trabajar el día que acaba.',
  },
  cta: 'Empezar por la viabilidad',
  start: 'Empezar aquí →',
};

export const usp = {
  eyebrow: 'Por qué una oficina nueva',
  title: 'Una oficina que acelera el crecimiento.',
  image: { src: '/img/pj-mier.jpg', alt: 'Oficinas de Mier Giralt Abogados diseñadas por DTRES' },
  proofs: [
    { icon: 'heritage', title: 'Transmite vuestro prestigio y valores', tag: 'Cultura e imagen', text: 'La coherencia entre lo que decís que sois y lo que habla vuestro espacio es lo que atrae al talento.' },
    { icon: 'split', title: 'Cada m² tiene sentido', tag: '+30% optimización', text: 'Metros que funcionan para el foco y la colaboración. Sin despachos vacíos ni pasillos oscuros.' },
    { icon: 'company', title: 'El equipo quiere estar', tag: '+35% foco · +25% retención', text: 'Menos ruido e interrupciones. El equipo vuelve a la oficina con ganas.' },
    { icon: 'route', title: 'Escoge con certeza', tag: 'Local según crecimiento', text: 'Te ayudamos a elegir un local que acompañe el crecimiento de la empresa en los próximos años.' },
  ],
};

export const bonus = {
  eyebrow: 'Consultoría gratuita · 30 min con un socio',
  title: 'Tu nueva oficina, en 30 minutos.',
  text: 'Un socio arquitecto revisa tu situación o el local que tienes en mente y te dice si encaja, qué costará y cómo seguir.',
  cta: 'Reservar mi consultoría gratuita',
};
