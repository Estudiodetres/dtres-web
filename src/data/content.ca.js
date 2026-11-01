// Contingut de la web en català. Imatges, xifres i dades compartides vénen de content.js.
import * as es from './content.js';

export const site = es.site;
export const stats = { ...es.stats, yearsLabel: '+15 anys', yearsText: "D'experiència en arquitectura, interiorisme i obra" };

export const meta = {
  homeTitle: "DTRES · Transformació d'edificis a Barcelona: due diligence, llicències, interiorisme i obra",
  homeDesc: "Arquitectura i disseny que eleven el valor de la teva inversió. Transformem edificis a Barcelona i Catalunya: due diligence, canvi d'ús, edificis catalogats, interiorisme i obra a preu tancat.",
};

export const hero = {
  eyebrow: 'Arquitectura i interiorisme · Barcelona i Catalunya · Des de 2017',
  title: 'Arquitectura i disseny que eleven el valor de la teva inversió.',
  subtitle: "Transformem edificis per donar-los un nou ús, amb interiorisme de caràcter, llicències àgils i una obra sense sorpreses. De la due diligence al lliurament de claus.",
  image: { src: es.hero.image.src, alt: "IESE Edifici L, edifici catalogat de 1910 rehabilitat com a oficines" },
};

export const audiences = {
  title: 'Per a qui té un edifici amb potencial. O el vol tenir.',
  items: [
    { title: 'Fundacions i institucions', text: 'Edificis que han de continuar complint la seva missió: residències, col·legis majors, seus. Rigor patrimonial i un resultat digne i durador.' },
    { title: 'Inversors i family offices', text: "Saber què permet un actiu abans de comprar-lo. Due diligence, canvi d'ús i una obra amb terminis i costos controlats." },
    { title: 'Patrimoni familiar', text: "Un edifici heretat o que no rendeix. El convertim en habitatges, hospitality o espai de treball, amb un únic interlocutor." },
  ],
};

export const usp = {
  eyebrow: 'Normativa i patrimoni a Catalunya',
  title: 'Llicències que avancen. Edificis que rendeixen.',
  text: "Coneixem a fons la normativa urbanística i patrimonial de Catalunya, els criteris de cada ajuntament i els seus marges d'interpretació. Això ens permet maximitzar, sempre dins de la legalitat, l'aprofitament i la rendibilitat de cada edifici, i que les llicències avancin sense bloquejos.",
  image: { src: es.usp.image.src, alt: "Detall restaurat de l'IESE Edifici L, edifici catalogat de 1910" },
  proofs: [
    { tag: 'Patrimoni catalogat · 1.022 m²', title: 'Campus universitari · IESE Business School', text: "Reforma integral i interiorisme que transmet els valors de la institució, amb el campus en funcionament." },
    { tag: 'Patrimoni catalogat · 1.225 m²', title: 'Oficines · Fundació Familiar Catalana', text: "Seu de les oficines de la UIC. Pla especial integral, llicències, obra i interiorisme. A més, llicències per a 5.163 m² d'obra nova a la parcel·la." },
    { tag: 'Patrimoni catalogat · 1.000 m²', title: 'Residència sènior · Associació Col·laborativa Montroig', text: "Transformació integral i interiorisme de l'àtic i el sobreàtic, amb la residència en funcionament." },
    { tag: "Canvi d'ús · 577 m²", title: 'Habitatges de lloguer · Fundació Privada Montseny', text: "D'un coliving en desús a 5 habitatges: segregació, projecte, llicències i obra." },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'viabilitat', n: '01', title: 'Viabilitat',
    what: 'Due diligence tècnica, urbanística i patrimonial: usos possibles, edificabilitat i riscos.',
    get: "Un informe amb el que permet l'edifici, quant costa i quant triga, abans d'invertir.",
    seoTitle: "Due diligence tècnica d'edificis a Barcelona",
    intro: "Abans de comprar o transformar un edifici necessites saber què permet el planejament, què protegeix Patrimoni, en quin estat és i quant costarà. L'analitzem i et donem una conclusió clara: comprar, negociar o no comprar.",
    includes: ["Situació urbanística: usos admesos, edificabilitat i densitat d'habitatges", "Protecció patrimonial i necessitat d'informe de Patrimoni", "Estat de l'estructura, les instal·lacions, la façana i la coberta", "Habitabilitat, accessibilitat i incendis segons l'ús futur", "Pressupost estimat, termini de llicències i obra, i rendibilitat"],
  },
  {
    id: 'proyecto-y-licencias', slug: 'projecte-i-llicencies', n: '02', title: 'Projecte i llicències',
    what: "Arquitectura i interiorisme, projecte bàsic i executiu amb instal·lacions, permís d'obra, canvi d'ús i llicència d'activitat.",
    get: 'El projecte definit, el pressupost tancat i les llicències en marxa.',
    seoTitle: 'Projecte, interiorisme i llicències a Barcelona',
    intro: "Dissenyem l'edifici i el seu interiorisme, i tramitem tot el necessari perquè l'obra comenci com més aviat millor: permisos d'obra, canvi d'ús, llicència d'activitat i consultes amb Patrimoni.",
    includes: ['Arquitectura i interiorisme', 'Projecte bàsic i executiu amb instal·lacions', 'Consulta prèvia i informe de Patrimoni', "Permís d'obra, canvi d'ús i llicència d'activitat", 'Licitació i pressupost tancat amb constructora'],
  },
  {
    id: 'obra', slug: 'obra', n: '03', title: 'Obra',
    what: "Direcció d'obra i project management.",
    get: 'Terminis, costos i qualitat sota control, amb un informe setmanal per a la propietat.',
    seoTitle: "Direcció d'obra i project management a Barcelona",
    intro: "Dirigim l'obra i gestionem tots els agents perquè es compleixin termini, cost i qualitat. La propietat rep cada setmana un informe clar de l'avenç.",
    includes: ["Direcció d'obra", "Project management i coordinació d'industrials", 'Control de costos i certificacions', 'Informe setmanal per a la propietat', 'Gestió de canvis sense sorpreses'],
  },
  {
    id: 'entrega', slug: 'lliurament', n: '04', title: 'Lliurament',
    what: "Documentació final, legalitzacions i llibre de l'edifici.",
    get: "L'edifici a punt per operar, llogar o vendre.",
    seoTitle: "Legalització i lliurament d'edificis rehabilitats",
    intro: "Tanquem el projecte amb tota la documentació en regla perquè l'edifici pugui operar, llogar-se o vendre's des del primer dia.",
    includes: ["Certificat final d'obra", 'Legalitzacions i inspeccions', "Cèdules d'habitabilitat i llicències d'activitat", "Llibre de l'edifici", 'Acompanyament en la posada en marxa'],
  },
];

export const featured = {
  ...es.featured,
  eyebrow: 'Cas destacat · Patrimoni catalogat · 2024',
  title: "Oficines en un edifici de 1910 · IESE Business School",
  before: { src: es.featured.before.src, alt: "IESE Edifici L abans de la rehabilitació" },
  after: { src: es.featured.after.src, alt: "IESE Edifici L després de la rehabilitació" },
  situation: "Edifici catalogat sense llicència d'activitat: un terç de la superfície no es podia fer servir, i escales, accessibilitat i incendis estaven fora de normativa. L'IESE el volia recuperar sencer per a oficines sense tocar el patrimoni.",
  transformation: "Due diligence, informe favorable de Patrimoni, canvi d'ús a oficines, projecte i interiorisme, i obra a preu i termini tancats. Façana, coberta, fusta i paviments restaurats.",
  resultFigure: 'Renda anual x2',
  result: 'Superfície útil de 500 a 743 m², capacitat de 20 a 50 persones i amortització en 8,8 anys.',
};

export const moreProjects = [
  { tag: 'Residència sènior · 716 m²', client: 'Associació Cultural Carena', img: '/img/carena-residencia.jpg' },
  { tag: 'Club juvenil · 3.000 m²', client: 'Fundación Padua', img: '/img/padua.jpg' },
  { tag: 'Oficines · 1.000 m²', client: 'Aloalto', img: '/img/aloalto.jpg' },
  { tag: 'Showroom i oficines · 800 m²', client: 'Papiol', img: '/img/papiol.jpg' },
  { tag: 'Residència universitària · 1a fase · 350 m²', client: 'Colegio Mayor Universitario Pedralbes', img: '/img/cmu-pedralbes.jpg' },
  { tag: 'Oficines · 200 m²', client: 'Mier Giralt Abogados', img: '/img/mier-giralt.jpg' },
];

export const wip = [
  { title: 'En obra · Residència universitària · 4.000 m²', client: 'Colegio Mayor Universitario Bonaigua', text: 'Rehabilitació integral i interiorisme de la residència.' },
  { title: 'En obra · Segregació de 5 habitatges · 577 m²', client: 'Fundació Privada Montseny', text: "D'un coliving en desús a 5 habitatges: canvi d'ús i segregació." },
  { title: 'En licitació · Oficines · 1.225 m²', client: 'Fundació Familiar Catalana', text: "Transformació d'un edifici catalogat en les oficines de la UIC, interiorisme inclòs." },
  { title: "En viabilitat · D'oficines a 5 habitatges · 490 m²", client: "Fons d'inversió Relanza", text: "Due diligence tècnica i urbanística per convertir cinc oficines en habitatges abans d'invertir." },
];

export const reviews = es.reviews.map((r, i) => ({ ...r, lang: r.lang || 'es', context: ["Reforma integral d'un Flexliving", "Reforma d'un hotel", 'Tres reformes integrals'][i] }));

export const team = {
  title: 'Arquitectes, interioristes i tècnics. Un sol equip.',
  text: "14 persones a Barcelona que dissenyen, tramiten i dirigeixen l'obra. Liderem cada projecte des de la primera visita fins al lliurament de claus.",
  image: { src: es.team.image.src, alt: "Equip de DTRES treballant a l'estudi de Barcelona" },
  partners: [
    { ...es.team.partners[0], role: 'Soci cofundador i Director General' },
    { ...es.team.partners[1], role: "Soci cofundador i Director d'Operacions" },
    { ...es.team.partners[2], role: "Soci i Director d'Expansió i Relacions Institucionals", note: "Director de l'Escola d'Arquitectura de la UIC" },
  ],
};

export const faqs = [
  { q: "Què inclou una due diligence d'un edifici a Barcelona?", a: "Estat tècnic, situació urbanística i patrimonial, usos possibles, edificabilitat, llicències necessàries, cost estimat de la transformació i termini realista." },
  { q: "Es pot canviar l'ús d'un edifici a habitatge?", a: "Depèn del planejament urbanístic de la zona, que decideix si l'ús residencial està permès i en quines condicions. A més, l'habitatge ha de complir la normativa d'habitabilitat de Catalunya (superfície, ventilació i llum natural) i els estatuts de la comunitat no ho han d'impedir. Cal projecte tècnic i llicència. Ho comprovem en la fase de viabilitat, abans que inverteixis." },
  { q: 'Treballeu amb edificis catalogats?', a: "Sí, és la nostra especialitat. A Barcelona, les obres en edificis del Catàleg de Patrimoni poden requerir un informe previ de l'Ajuntament, que pot ser favorable, favorable amb condicions o desfavorable. Preparem la consulta prèvia i el projecte per aconseguir un informe favorable, com a l'IESE, Vila Regina o Lesseps." },
  { q: 'Puc contractar-vos només per a una fase?', a: "Sí. Pots començar per la viabilitat, el projecte, l'obra o el lliurament, i t'acompanyem fins al final." },
];

export const statusLabels = { 'En obra': 'En obra', 'En licitación': 'En licitació', 'En viabilidad': 'En viabilitat' };

const use = {
  'Oficinas en edificio de 1910': 'Oficines en un edifici de 1910', Oficinas: 'Oficines', 'Oficinas de la UIC': 'Oficines de la UIC',
  'Plan especial y licencias de obra nueva': "Pla especial i llicències d'obra nova", 'Residencia senior': 'Residència sènior',
  'Residencia universitaria': 'Residència universitària', 'Residencia universitaria · 1ª fase': 'Residència universitària · 1a fase',
  'Club juvenil': 'Club juvenil', 'Vestuarios y gradas': 'Vestidors i graderies', 'De coliving a 5 viviendas de alquiler': "De coliving a 5 habitatges de lloguer",
  'De oficinas a 5 viviendas': "D'oficines a 5 habitatges", Headquarters: 'Seu corporativa', 'Showroom y oficinas': 'Showroom i oficines', 'Estudio de arquitectura': "Estudi d'arquitectura",
};
const client = { 'Fondo de inversión Relanza': "Fons d'inversió Relanza" };
export const allProjects = es.allProjects.map((p) => ({ ...p, use: use[p.use] ?? p.use, client: client[p.client] ?? p.client }));
