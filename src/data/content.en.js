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
  image: { src: es.hero.image.src, alt: 'IESE Building L, a listed 1910 building rehabilitated as offices' },
};

export const audiences = {
  title: 'Those who want to turn an obsolete building into a unique, high-performing asset.',
  items: [
    { title: 'Real estate funds and investors', text: 'Due diligence before purchase, change of use and construction at a fixed time and cost to deliver the business plan.' },
    { title: 'Family offices and family-owned property', text: 'Owned or inherited buildings that underperform. We turn them into homes, hospitality or offices.' },
    { title: 'Foundations and institutions', text: 'Residences, university halls and headquarters that must keep serving their mission, with heritage rigour.' },
    { title: 'Companies and corporate headquarters', text: 'Offices and headquarters that represent the company and support its growth.' },
    { title: 'Real estate agencies and asset managers', text: 'Feasibility and technical due diligence to advise their clients better before buying or selling.' },
  ],
};

export const usp = {
  eyebrow: 'Planning and heritage in Catalonia',
  title: 'Faster permits. Higher returns.',
  text: "We know Catalonia's planning and heritage regulations inside out, along with each city council's criteria and room for interpretation. That lets us maximise, always within the law, the buildable potential and return of every building, and keep permits moving without blockages.",
  image: { src: es.usp.image.src, alt: 'Restored detail of IESE Building L, a listed 1910 building' },
  proofs: [
    { tag: 'Listed heritage · IESE Business School', title: 'University campus · 1,022 m²', text: "Full refurbishment and interior design that conveys the institution's values, with the campus fully operational." },
    { tag: 'Listed heritage · Fundació Familiar Catalana', title: 'Offices · 1,225 m²', text: 'Offices for UIC Barcelona. Special plan, permits, construction and interior design. Plus permits for 5,163 m² of new build on the plot.' },
    { tag: 'Listed heritage · Associació Col·laborativa Montroig', title: 'Senior residence · 1,000 m²', text: 'Full transformation and interior design of the top two floors, with the residence fully operational.' },
    { tag: 'Change of use · Fundació Privada Montseny', title: 'Rental homes · 577 m²', text: 'From a disused coliving to 5 homes: subdivision, design, permits and construction.' },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'feasibility', n: '01', title: 'Feasibility', sub: 'Technical due diligence or feasibility study', alt: ['Feasibility'],
    what: 'Technical, planning and heritage due diligence: possible uses, buildable area and risks.',
    get: 'A report on what the building allows, what it costs and how long it takes, before you invest.',
    seoTitle: 'Technical due diligence for buildings in Barcelona',
    intro: 'Before buying or transforming a building you need to know what planning allows, what heritage protects, what condition it is in and what it will cost. We analyse it and give you a clear conclusion: buy, negotiate or walk away.',
    includes: ['Planning status: permitted uses, buildable area and housing density', 'Heritage protection and whether a heritage report is needed', 'Condition of structure, services, façade and roof', 'Habitability, accessibility and fire safety for the future use', 'Cost estimate, permit and construction timeline, and return'],
  },
  {
    id: 'proyecto-y-licencias', slug: 'design-and-permits', n: '02', title: 'Design', sub: 'Building permit, activity licence, basic design, detailed design and interior design', alt: ['Design and permits'],
    what: 'Architecture and interior design, basic and detailed design with services, building permit, change of use and activity licence.',
    get: 'A defined design, a fixed budget and permits under way.',
    seoTitle: 'Architecture, interior design and permits in Barcelona',
    intro: 'We design the building and its interiors, and handle everything needed to start construction as soon as possible: building permits, change of use, activity licence and heritage consultations.',
    includes: ['Architecture and interior design', 'Basic and detailed design with services', 'Heritage pre-consultation and report', 'Building permit, change of use and activity licence', 'Tendering and fixed-price contract with the builder'],
  },
  {
    id: 'obra', slug: 'construction', n: '03', title: 'Construction', sub: 'Construction supervision and project management', alt: ['Construction'],
    what: 'Site supervision and project management.',
    get: 'Time, cost and quality under control, with a weekly report for the owner.',
    seoTitle: 'Construction management in Barcelona',
    intro: 'We supervise the works and manage every party so that time, cost and quality are met. The owner receives a clear progress report every week.',
    includes: ['Site supervision', 'Project management and trade coordination', 'Cost control and valuations', 'Weekly report for the owner', 'Change management without surprises'],
  },
  {
    id: 'entrega', slug: 'handover', n: '04', title: 'Handover', sub: 'Furniture, fixtures and equipment (FF&E) and legal sign-offs', alt: ['Handover'],
    what: 'Furniture, fixtures and equipment (FF&E) design and selection, supplier coordination, legal sign-offs and final documentation.',
    get: 'The building fitted out and ready to operate, let or sell.',
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
  { tag: 'Senior residence · 716 m²', client: 'Associació Cultural Carena', img: '/img/carena-residencia.jpg' },
  { tag: 'Youth club · 3,000 m²', client: 'Fundación Padua', img: '/img/padua.jpg' },
  { tag: 'Offices · 1,000 m²', client: 'Aloalto', img: '/img/aloalto.jpg' },
  { tag: 'Showroom and offices · 800 m²', client: 'Papiol', img: '/img/papiol.jpg' },
  { tag: 'University hall · Phase 1 · 350 m²', client: 'Colegio Mayor Universitario Pedralbes', img: '/img/cmu-pedralbes.jpg' },
  { tag: 'Offices · 200 m²', client: 'Mier Giralt Abogados', img: '/img/mier-giralt.jpg' },
];

export const wip = es.wip.map((w, i) => ({ ...w, ...[
  { use: 'University hall · 4,000 m²', text: 'Full rehabilitation and interior design of the residence.' },
  { use: 'Subdivision into 5 homes · 577 m²', text: 'From a disused coliving to 5 homes: change of use and subdivision.' },
  { use: 'Offices · 1,225 m²', text: 'A listed building transformed into offices for UIC Barcelona, interiors included. Out to tender.' },
  { use: 'From offices to 5 homes · 490 m²', client: 'Relanza investment fund', text: 'Technical and planning due diligence to turn five offices into homes before investing.' },
][i] }));

export const reviews = es.reviews.map((r, i) => ({ ...r, lang: r.lang || 'es', context: ['Full refurbishment of a flexliving', 'Hotel refurbishment', 'Three full refurbishments'][i] }));

export const team = {
  title: 'One point of contact. A full team behind it.',
  text: 'You deal with one person from start to finish. Behind them, 14 architects, interior designers, engineers and technical experts in Barcelona who design, secure permits and manage construction. We lead every project from the first visit to handover.',
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
const peopleRole = {'Responsable de Planificación y Procesos': 'Head of Planning and Processes', 'Responsable de Calidad y Trámites': 'Head of Quality and Permitting', 'Project Manager': 'Project Manager', 'Arquitecta senior': 'Senior architect', 'Arquitecto senior': 'Senior architect', 'Interiorista': 'Interior designer', 'Arquitecta junior': 'Junior architect', 'Modeladora 3D': '3D modeller', 'Ingeniero': 'Engineer', 'Arquitecta técnica': 'Building surveyor', 'Constructor': 'Contractor'};
export const people = { staff: es.people.staff.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role })), partners: es.people.partners.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role })) };

export const statusLabels = { 'En obra': 'Under construction', 'En licitación': 'Out to tender', 'En viabilidad': 'Feasibility' };

const use = {
  'Oficinas en edificio de 1910': 'Offices in a 1910 building', Oficinas: 'Offices', 'Oficinas de la UIC': 'Offices for UIC Barcelona',
  'Plan especial y licencias de obra nueva': 'Special plan and new-build permits', 'Residencia senior': 'Senior residence',
  'Residencia universitaria': 'University hall', 'Residencia universitaria · 1ª fase': 'University hall · Phase 1',
  'Club juvenil': 'Youth club', 'Vestuarios y gradas': 'Changing rooms and stands', 'De coliving a 5 viviendas de alquiler': 'From coliving to 5 rental homes',
  'De oficinas a 5 viviendas': 'From offices to 5 homes', Headquarters: 'Headquarters', 'Showroom y oficinas': 'Showroom and offices', 'Estudio de arquitectura': 'Architecture studio',
};
const client = { 'Fondo de inversión Relanza': 'Relanza investment fund' };
export const allProjects = es.allProjects.map((p) => ({ ...p, use: use[p.use] ?? p.use, client: client[p.client] ?? p.client }));
