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
