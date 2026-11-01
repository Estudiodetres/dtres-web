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
  title: 'For those who own a building with potential. Or want to.',
  items: [
    { title: 'Foundations and institutions', text: 'Buildings that must keep serving their mission: residences, university halls, headquarters. Heritage rigour and a dignified, lasting result.' },
    { title: 'Investors and family offices', text: 'Know what an asset allows before you buy it. Due diligence, change of use and construction with controlled time and cost.' },
    { title: 'Family-owned property', text: 'An inherited building, or one that underperforms. We turn it into homes, hospitality or workspace, with a single point of contact.' },
  ],
};

export const usp = {
  eyebrow: 'Planning and heritage in Catalonia',
  title: 'Permits that move. Buildings that perform.',
  text: "We know Catalonia's planning and heritage regulations inside out, along with each city council's criteria and room for interpretation. That lets us maximise, always within the law, the buildable potential and return of every building, and keep permits moving without blockages.",
  image: { src: es.usp.image.src, alt: 'Restored detail of IESE Building L, a listed 1910 building' },
  proofs: [
    { tag: 'Listed heritage · 1,022 m²', title: 'University campus · IESE Business School', text: "Full refurbishment and interior design that conveys the institution's values, with the campus fully operational." },
    { tag: 'Listed heritage · 1,225 m²', title: 'Offices · Fundació Familiar Catalana', text: 'Offices for UIC Barcelona. Special plan, permits, construction and interior design. Plus permits for 5,163 m² of new build on the plot.' },
    { tag: 'Listed heritage · 1,000 m²', title: 'Senior residence · Associació Col·laborativa Montroig', text: 'Full transformation and interior design of the top two floors, with the residence fully operational.' },
    { tag: 'Change of use · 577 m²', title: 'Rental homes · Fundació Privada Montseny', text: 'From a disused coliving to 5 homes: subdivision, design, permits and construction.' },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'feasibility', n: '01', title: 'Feasibility',
    what: 'Technical, planning and heritage due diligence: possible uses, buildable area and risks.',
    get: 'A report on what the building allows, what it costs and how long it takes, before you invest.',
    seoTitle: 'Technical due diligence for buildings in Barcelona',
    intro: 'Before buying or transforming a building you need to know what planning allows, what heritage protects, what condition it is in and what it will cost. We analyse it and give you a clear conclusion: buy, negotiate or walk away.',
    includes: ['Planning status: permitted uses, buildable area and housing density', 'Heritage protection and whether a heritage report is needed', 'Condition of structure, services, façade and roof', 'Habitability, accessibility and fire safety for the future use', 'Cost estimate, permit and construction timeline, and return'],
  },
  {
    id: 'proyecto-y-licencias', slug: 'design-and-permits', n: '02', title: 'Design and permits',
    what: 'Architecture and interior design, basic and detailed design with services, building permit, change of use and activity licence.',
    get: 'A defined design, a fixed budget and permits under way.',
    seoTitle: 'Architecture, interior design and permits in Barcelona',
    intro: 'We design the building and its interiors, and handle everything needed to start construction as soon as possible: building permits, change of use, activity licence and heritage consultations.',
    includes: ['Architecture and interior design', 'Basic and detailed design with services', 'Heritage pre-consultation and report', 'Building permit, change of use and activity licence', 'Tendering and fixed-price contract with the builder'],
  },
  {
    id: 'obra', slug: 'construction', n: '03', title: 'Construction',
    what: 'Site supervision and project management.',
    get: 'Time, cost and quality under control, with a weekly report for the owner.',
    seoTitle: 'Construction management in Barcelona',
    intro: 'We supervise the works and manage every party so that time, cost and quality are met. The owner receives a clear progress report every week.',
    includes: ['Site supervision', 'Project management and trade coordination', 'Cost control and valuations', 'Weekly report for the owner', 'Change management without surprises'],
  },
  {
    id: 'entrega', slug: 'handover', n: '04', title: 'Handover',
    what: 'Final documentation, legal sign-offs and building logbook.',
    get: 'The building ready to operate, let or sell.',
    seoTitle: 'Legal sign-off and handover of rehabilitated buildings',
    intro: 'We close the project with all documentation in order, so the building can operate, be let or be sold from day one.',
    includes: ['Completion certificate', 'Legal sign-offs and inspections', 'Habitability certificates and activity licences', 'Building logbook', 'Support during start-up'],
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

export const wip = [
  { title: 'Under construction · University hall · 4,000 m²', client: 'Colegio Mayor Universitario Bonaigua', text: 'Full rehabilitation and interior design of the residence.' },
  { title: 'Under construction · Subdivision into 5 homes · 577 m²', client: 'Fundació Privada Montseny', text: 'From a disused coliving to 5 homes: change of use and subdivision.' },
  { title: 'Out to tender · Offices · 1,225 m²', client: 'Fundació Familiar Catalana', text: 'Transformation of a listed building into offices for UIC Barcelona, interiors included.' },
  { title: 'Feasibility · From offices to 5 homes · 490 m²', client: 'Relanza investment fund', text: 'Technical and planning due diligence to turn five offices into homes before investing.' },
];

export const reviews = es.reviews.map((r, i) => ({ ...r, lang: r.lang || 'es', context: ['Full refurbishment of a flexliving', 'Hotel refurbishment', 'Three full refurbishments'][i] }));

export const team = {
  title: 'Architects, interior designers and technical experts. One team.',
  text: '14 people in Barcelona who design, secure permits and manage construction. We lead every project from the first visit to handover.',
  image: { src: es.team.image.src, alt: 'The DTRES team working in the Barcelona studio' },
  partners: [
    { ...es.team.partners[0], role: 'Co-founding Partner and Managing Director' },
    { ...es.team.partners[1], role: 'Co-founding Partner and Operations Director' },
    { ...es.team.partners[2], role: 'Partner and Director of Expansion and Institutional Relations', note: 'Director of the UIC School of Architecture' },
  ],
};

export const faqs = [
  { q: 'What does building due diligence in Barcelona include?', a: 'Technical condition, planning and heritage status, possible uses, buildable area, permits required, estimated transformation cost and a realistic timeline.' },
  { q: 'Can a building be converted to residential use?', a: "It depends on the local zoning plan, which decides whether residential use is allowed and on what terms. Homes must also meet Catalonia's habitability standards (floor area, ventilation and natural light), and the building's community rules must not prevent it. A technical design and a permit are required. We check all this in the feasibility phase, before you invest." },
  { q: 'Do you work with listed buildings?', a: "Yes, it is our speciality. In Barcelona, works on buildings in the Heritage Catalogue may require a prior report from the City Council, which can be favourable, favourable with conditions or unfavourable. We prepare the pre-consultation and the design to secure a favourable report, as at IESE, Vila Regina and Lesseps." },
  { q: 'Can I hire you for just one phase?', a: 'Yes. You can start with feasibility, design, construction or handover, and we stay with you to the end.' },
];

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
