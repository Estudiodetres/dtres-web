// Website content in English. Images, figures and shared data come from content.js.
import * as es from './content.js';

export const site = es.site;
export const stats = { ...es.stats, yearsLabel: '15+ years', yearsText: 'Of experience in architecture, interior design and construction', projects: '100+' };

export const meta = {
  homeTitle: 'Building transformation in Barcelona · DTRES Architecture',
  homeDesc: 'Due diligence, change of use, listed buildings, permits, interior design and construction in Barcelona and Catalonia. From first visit to handover.',
};

export const hero = {
  eyebrow: 'Architecture and interior design · Barcelona and Catalonia · Since 2017',
  title: 'Architecture and design that raise the value of your investment.',
  subtitle: 'We transform buildings for a new use, with distinctive interiors, fast-moving permits and construction without surprises. From due diligence to handover.',
  image: { src: '/img/hero-papiol.jpg', alt: 'Papiol showroom and offices in Barcelona, with a double-height space and staircase' },
};

export const audiences = {
  title: 'Those who want to turn an obsolete building into a unique, high-performing asset.',
  items: [
    { icon: 'invest', title: "Investors", text: "Funds and private investors buying to transform. Due diligence before purchase, change of use and construction at a fixed time and cost to deliver the business plan." },
    { icon: 'institution', title: "Foundations and institutions", text: "Residences, university halls and headquarters that must keep serving their mission, with heritage rigour." },
    { icon: 'owner', title: "Owners", text: "Family offices and property owners with owned or inherited buildings that underperform. We turn them into homes, hospitality or offices." },
    { icon: 'company', title: "Companies", text: "Headquarters and offices that represent the company and support its growth." },
  ],
};

export const usp = {
  eyebrow: 'Planning and heritage in Catalonia',
  title: 'Faster permits. Higher returns.',
  text: "We know Catalonia's planning and heritage regulations inside out, along with each city council's criteria and room for interpretation. That lets us maximise, always within the law, the buildable potential and return of every building, and keep permits moving without blockages.",
  image: { src: es.usp.image.src, alt: 'DTRES team on a site visit in a building under refurbishment' },
  proofs: [
    { icon: 'split', title: 'Phased permits', tag: 'Permitting strategy', text: 'We know which permits to apply for and in what order. We split the application into parts that move in parallel, instead of one single permit that blocks everything.' },
    { icon: 'route', title: 'How the file travels', tag: 'From ECA review to the city council', text: "We know how a project moves from the ECA's review until the city council assigns it to its departments. So we plan timelines and strategy from day one." },
    { icon: 'heritage', title: 'Heritage, no surprises', tag: 'Experience with listed buildings', text: "We know what the heritage authority accepts, what it rejects and what can be negotiated. Before you buy a building, we tell you whether your project can be done." },
    { icon: 'ready', title: 'Ready the day works finish', tag: 'Sign-offs in parallel', text: 'During construction we process the legalisations, electrical certificates and other permits. Any requests surface while works are under way, when the builder can solve them fast. The building is ready to operate, let or sell the day works finish.' },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'feasibility', n: '01', title: 'Feasibility', sub: "Technical due diligence", alt: ['Feasibility'],
    what: 'Technical, planning and heritage due diligence: possible uses, buildable area and risks.',
    get: "We identify technical risks, assess the investment cost, check planning and legal compliance and set the timeline for the whole process.",
    seoTitle: 'Technical due diligence for buildings in Barcelona',
    intro: 'Before buying or transforming a building you need to know what planning allows, what heritage protects, what condition it is in and what it will cost. We analyse it and give you a clear conclusion: buy, negotiate or walk away.',
    includes: ['Planning status: permitted uses, buildable area and housing density', 'Heritage protection and whether a heritage report is needed', 'Condition of structure, services, façade and roof', 'Habitability, accessibility and fire safety for the future use', 'Cost estimate, permit and construction timeline, and return'],
  },
  {
    id: 'proyecto-y-licencias', slug: 'design-and-permits', n: '02', title: 'Design', sub: "Architecture and building permit, engineering and activity licence, interior design and furniture", alt: ['Design and permits'],
    what: 'Architecture and interior design, basic and detailed design with services, building permit, change of use and activity licence.',
    get: "A design built in 3D so you can experience it before it is built, detailed in BIM and with the building permit granted.",
    seoTitle: 'Architecture, interior design and permits in Barcelona',
    intro: 'We design the building and its interiors, and handle everything needed to start construction as soon as possible: building permits, change of use, activity licence and heritage consultations.',
    includes: ['Architecture and interior design', 'Basic and detailed design with services', 'Heritage pre-consultation and report', 'Building permit, change of use and activity licence', 'Tendering and fixed-price contract with the builder'],
  },
  {
    id: 'obra', slug: 'construction', n: '03', title: 'Construction', sub: "Project management and site supervision by architect, building surveyor, engineer and interior designer", alt: ['Construction'],
    what: 'Site supervision and project management.',
    get: "Time, cost and build quality under control, with a weekly report and a single point of contact.",
    seoTitle: 'Construction management in Barcelona',
    intro: 'We supervise the works and manage every party so that time, cost and quality are met. The owner receives a clear progress report every week.',
    includes: ['Site supervision', 'Project management and trade coordination', 'Cost control and valuations', 'Weekly report for the owner', 'Change management without surprises'],
  },
  {
    id: 'entrega', slug: 'handover', n: '04', title: 'Handover', sub: "Fit-out and legal sign-offs", alt: ['Handover'],
    what: 'Furniture, fixtures and equipment (FF&E) design and selection, supplier coordination, legal sign-offs and final documentation.',
    get: "The building fitted out and ready to operate, let or sell.",
    seoTitle: 'FF&E, legal sign-off and handover of rehabilitated buildings',
    intro: 'We design and select furniture, fixtures and equipment (FF&E), coordinate suppliers through installation, and close all documentation so the building can operate from day one.',
    includes: ['FF&E design and selection', 'Supplier coordination and installation', 'Completion certificate, legal sign-offs and inspections', 'Habitability certificates and activity licences', 'Building logbook and support during start-up'],
  },
];

export const featured = {
  ...es.featured,
  eyebrow: 'Featured case · Listed heritage · 2024',
  title: 'Offices in a 1910 building · IESE Business School',
  before: { src: es.featured.before.src, alt: 'IESE Building L before rehabilitation' },
  after: { src: es.featured.after.src, alt: 'IESE Building L after rehabilitation' },
  situation: 'A listed building without an activity licence: a third of its floor area could not be used, and stairs, accessibility and fire safety did not meet regulations. IESE wanted to recover all of it as offices without touching the heritage.',
  transformation: 'Due diligence, favourable heritage report, change of use to offices, design and interiors, and construction at a fixed price and timeline. Façade, roof, timber and floors restored.',
  resultFigure: 'Annual rent x2',
  result: 'Usable area from 500 to 743 m², capacity from 20 to 50 people and payback in 8.8 years.',
};

export const moreProjects = [
  { tag: 'Senior residence · 716 m²', client: 'Associació Cultural Carena', img: '/img/pj-carena-residencia.jpg' },
  { tag: 'Youth club · 3,000 m²', client: 'Fundación Padua', img: '/img/pj-padua.jpg' },
  { tag: 'Offices · 1,000 m²', client: 'Aloalto', img: '/img/pj-aloalto.jpg' },
  { tag: 'Showroom and offices · 800 m²', client: 'Papiol', img: '/img/pj-papiol.jpg' },
  { tag: 'University hall · 1,500 m²', client: 'Colegio Mayor Universitario Pedralbes', img: '/img/pj-cmu.jpg' },
  { tag: 'Offices · 200 m²', client: 'Mier Giralt Abogados', img: '/img/pj-mier.jpg' },
];

export const wip = es.wip.map((w, i) => ({ ...w, ...[
  { use: 'University hall · 4,000 m²', text: 'Full rehabilitation and interior design of the residence.' },
  { use: 'Offices · 1,200 m²', text: 'A listed building transformed into offices for UIC Barcelona, interiors included. Out to tender.' },
  { use: '5 homes · 500 m²', client: 'Relanza investment fund', text: 'Technical and planning due diligence to turn five offices into homes before investing.' },
  { use: 'Youth centre · 500 m²', text: 'Change of use of a listed Joan Rubió i Bellver building for a socio-educational project. Due diligence, space planning and permits.' },
][i] }));

export const reviews = es.reviews.map((r, i) => ({ ...r, lang: r.lang || 'es', context: ['Full refurbishment of a flexliving', 'Hotel refurbishment', 'Three full refurbishments'][i] }));

export const team = {
  title: 'One point of contact. A full team behind it.',
  text: 'You deal with one person from start to finish. Behind them, a team of 12 in Barcelona: architects, interior designers and 3D modellers, backed by a trusted engineer, building surveyor and contractor. We design, secure permits and manage construction, from the first visit to handover.',
  image: { src: es.team.image.src, alt: 'The DTRES team working in the Barcelona studio' },
  partners: [
    { ...es.team.partners[0], role: 'Architect, co-founding partner', title: 'Director of Strategy and Acquisition', note: 'Lecturer at the UIC School of Architecture' },
    { ...es.team.partners[1], role: 'Architect, co-founding partner', title: 'Director of Operations and Finance', note: 'Lecturer at the UIC School of Architecture' },
    { ...es.team.partners[2], role: 'PhD architect, partner', title: 'Quality Director', note: 'Director of the UIC School of Architecture' },
  ],
};

export const faqs = [
  { q: 'How do you work with a fund or investor before the purchase?', a: 'We run due diligence alongside the negotiation. Within a few weeks you know what the building allows, what it costs to transform and how long it takes, with a clear conclusion: buy, negotiate or walk away. If you do not buy, you have only invested in that phase.' },
  { q: 'What sets you apart from a conventional architecture firm?', a: 'A single point of contact from due diligence to handover. Design, interiors, permits, construction and FF&E in one team, with no change of lead between phases and nothing lost along the way.' },
  { q: 'How do you control construction cost and time?', a: 'We fix the price with the contractor before starting, based on a complete detailed design. During construction, the owner receives a weekly report on progress, cost and pending decisions.' },
  { q: 'Do you work with listed buildings?', a: "Yes, it is our speciality. In Barcelona, works on buildings in the Heritage Catalogue may require a prior report from the City Council, which can be favourable, favourable with conditions or unfavourable. We prepare the pre-consultation and the design to secure a favourable report, as at IESE, Vila Regina and Lesseps." },
  { q: 'Can I hire you for just one phase?', a: 'Yes. You can start with feasibility, design, construction or FF&E and handover, and we stay with you to the end.' },
];
export const clients = es.clients;
const peopleRole = {'Directora de Proyecto y Producción': 'Project and Production Director', 'Director de Proyecto y Diseño': 'Project and Design Director', 'Director de Proyecto y BIM Manager': 'Project Director and BIM Manager', 'Constructor consultor': 'Consulting contractor', 'Responsable de BIM y Estudios de Viabilidad': 'Head of BIM and Feasibility Studies', 'Responsable de Diseño de Interiores': 'Head of Interior Design', 'BIM Manager y Estudios de Viabilidad': 'BIM Manager and Feasibility Studies', 'Arquitectura y diseño de interiores': 'Architecture and interior design', 'Responsable de Planificación y Procesos': 'Head of Planning and Processes', 'Responsable de Calidad y Trámites': 'Head of Quality and Permitting', 'Arquitecto senior': 'Senior architect', 'Profesor de la Escuela de Arquitectura UIC': 'Lecturer at the UIC School of Architecture', 'Project Manager': 'Project Manager', 'Arquitecta senior': 'Senior architect', 'Arquitecto senior': 'Senior architect', 'Interiorista': 'Interior designer', 'Arquitecta junior': 'Junior architect', 'Modeladora 3D': '3D modeller', 'Ingeniero': 'Engineer', 'Arquitecta técnica': 'Building surveyor', 'Constructor': 'Contractor'};
export const people = { staff: es.people.staff.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role, sub: x.sub && (peopleRole[x.sub] ?? x.sub), note: x.note && (peopleRole[x.note] ?? x.note) })), partners: es.people.partners.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role })) };

export const statusLabels = { 'Cambio de uso': 'Change of use', 'En obra': 'Under construction', 'En licitación': 'Out to tender', 'En viabilidad': 'Feasibility' };

const use = {
  'Vivienda': 'Home',
  'Centro juvenil': 'Youth centre',
  'Docencia': 'Education', '5 viviendas': '5 homes', 'Nuestro estudio': 'Our studio',
  'Vestuarios': 'Changing rooms', 'Graderías': 'Stands', 'Oficinas en edificio de 1910': 'Offices in a 1910 building', Oficinas: 'Offices', 'Oficinas de la UIC': 'Offices for UIC Barcelona',
  'Plan especial y licencias de obra nueva': 'Special plan and new-build permits', 'Residencia senior': 'Senior residence',
  'Residencia universitaria': 'University hall', 'Residencia universitaria · 1ª fase': 'University hall · Phase 1',
  'Club juvenil': 'Youth club', 'Vestuarios y gradas': 'Changing rooms and stands', 'De coliving a 5 viviendas de alquiler': 'From coliving to 5 rental homes',
  'De oficinas a 5 viviendas': 'From offices to 5 homes', Headquarters: 'Headquarters', 'Showroom y oficinas': 'Showroom and offices', 'Estudio de arquitectura': 'Architecture studio',
};
const client = { 'Le Mirath · El Cairo': 'Le Mirath · Cairo', 'Inversor particular': 'Private investor', 'Escuela Deportiva Brafa': 'Brafa Sports School', 'Fondo de inversión Relanza': 'Relanza investment fund' };
export const allProjects = es.allProjects.map((p) => ({ ...p, use: use[p.use] ?? p.use, client: client[p.client] ?? p.client }));
