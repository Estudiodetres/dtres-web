// Contingut de la web en català. Imatges, xifres i dades compartides vénen de content.js.
import * as es from './content.js';

export const site = es.site;
export const stats = { ...es.stats, yearsLabel: '+15 anys', yearsText: "D'experiència en arquitectura, interiorisme i obra" };

export const meta = {
  homeTitle: "Transformació d'edificis a Barcelona · DTRES Arquitectura",
  homeDesc: "Due diligence, canvi d'ús, edificis catalogats, llicències, interiorisme i obra a Barcelona i Catalunya. De la primera visita al lliurament de claus.",
};

export const hero = {
  eyebrow: 'Arquitectura i interiorisme · Barcelona i Catalunya · Des de 2017',
  title: 'Arquitectura i disseny que eleven el valor de la teva inversió.',
  subtitle: "Transformem edificis per donar-los un nou ús, amb interiorisme de caràcter, llicències àgils i una obra sense sorpreses. De la due diligence al lliurament de claus.",
  image: { src: es.hero.image.src, alt: "IESE Edifici L, edifici catalogat de 1910 rehabilitat com a oficines" },
};

export const audiences = {
  title: 'Qui vol transformar un edifici obsolet en un actiu únic i rendible.',
  items: [
    { title: 'Fons i inversors Real Estate', text: "Due diligence abans de la compra, canvi d'ús i una obra amb termini i cost tancats per complir el pla de negoci." },
    { title: 'Family offices i patrimoni familiar', text: 'Edificis propis o heretats que no rendeixen el que podrien. Els convertim en habitatges, hospitality o oficines.' },
    { title: 'Fundacions i institucions', text: 'Residències, col·legis majors i seus que han de continuar complint la seva missió, amb rigor patrimonial.' },
    { title: 'Empreses i seus corporatives', text: "Oficines i headquarters que representen la companyia i n'acompanyen el creixement." },
    { title: 'Agències i gestors immobiliaris', text: 'Viabilitat i due diligence tècnica per assessorar millor els seus clients abans de comprar o vendre.' },
  ],
};

export const usp = {
  eyebrow: 'Normativa i patrimoni a Catalunya',
  title: 'Llicències més ràpides. Edificis més rendibles.',
  text: "Coneixem a fons la normativa urbanística i patrimonial de Catalunya, els criteris de cada ajuntament i els seus marges d'interpretació. Això ens permet maximitzar, sempre dins de la legalitat, l'aprofitament i la rendibilitat de cada edifici, i que les llicències avancin sense bloquejos.",
  image: { src: es.usp.image.src, alt: "Detall restaurat de l'IESE Edifici L, edifici catalogat de 1910" },
  proofs: [
    { tag: 'Patrimoni catalogat · IESE Business School', title: 'Campus universitari · 1.022 m²', text: "Reforma integral i interiorisme que transmet els valors de la institució, amb el campus en funcionament." },
    { tag: 'Patrimoni catalogat · Fundació Familiar Catalana', title: 'Oficines · 1.225 m²', text: "Seu de les oficines de la UIC. Pla especial integral, llicències, obra i interiorisme. A més, llicències per a 5.163 m² d'obra nova a la parcel·la." },
    { tag: 'Patrimoni catalogat · Associació Col·laborativa Montroig', title: 'Residència sènior · 1.000 m²', text: "Transformació integral i interiorisme de l'àtic i el sobreàtic, amb la residència en funcionament." },
    { tag: "Canvi d'ús · Fundació Privada Montseny", title: 'Habitatges de lloguer · 577 m²', text: "D'un coliving en desús a 5 habitatges: segregació, projecte, llicències i obra." },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'viabilitat', n: '01', title: 'Viabilitat', sub: 'Due diligence tècnica o estudi de viabilitat', alt: ['Viabilitat'],
    what: 'Due diligence tècnica, urbanística i patrimonial: usos possibles, edificabilitat i riscos.',
    get: "Un informe amb el que permet l'edifici, quant costa i quant triga, abans d'invertir.",
    seoTitle: "Due diligence tècnica d'edificis a Barcelona",
    intro: "Abans de comprar o transformar un edifici necessites saber què permet el planejament, què protegeix Patrimoni, en quin estat és i quant costarà. L'analitzem i et donem una conclusió clara: comprar, negociar o no comprar.",
    includes: ["Situació urbanística: usos admesos, edificabilitat i densitat d'habitatges", "Protecció patrimonial i necessitat d'informe de Patrimoni", "Estat de l'estructura, les instal·lacions, la façana i la coberta", "Habitabilitat, accessibilitat i incendis segons l'ús futur", "Pressupost estimat, termini de llicències i obra, i rendibilitat"],
  },
  {
    id: 'proyecto-y-licencias', slug: 'projecte-i-llicencies', n: '02', title: 'Projecte', sub: "Permís d'obra, llicència d'activitat, projecte bàsic, projecte executiu i projecte d'interiorisme", alt: ['Projecte i llicències'],
    what: "Arquitectura i interiorisme, projecte bàsic i executiu amb instal·lacions, permís d'obra, canvi d'ús i llicència d'activitat.",
    get: 'El projecte definit, el pressupost tancat i les llicències en marxa.',
    seoTitle: 'Projecte, interiorisme i llicències a Barcelona',
    intro: "Dissenyem l'edifici i el seu interiorisme, i tramitem tot el necessari perquè l'obra comenci com més aviat millor: permisos d'obra, canvi d'ús, llicència d'activitat i consultes amb Patrimoni.",
    includes: ['Arquitectura i interiorisme', 'Projecte bàsic i executiu amb instal·lacions', 'Consulta prèvia i informe de Patrimoni', "Permís d'obra, canvi d'ús i llicència d'activitat", 'Licitació i pressupost tancat amb constructora'],
  },
  {
    id: 'obra', slug: 'obra', n: '03', title: 'Obra', sub: "Direcció d'obra i project management", alt: ['Obra'],
    what: "Direcció d'obra i project management.",
    get: 'Terminis, costos i qualitat sota control, amb un informe setmanal per a la propietat.',
    seoTitle: "Direcció d'obra i project management a Barcelona",
    intro: "Dirigim l'obra i gestionem tots els agents perquè es compleixin termini, cost i qualitat. La propietat rep cada setmana un informe clar de l'avenç.",
    includes: ["Direcció d'obra", "Project management i coordinació d'industrials", 'Control de costos i certificacions', 'Informe setmanal per a la propietat', 'Gestió de canvis sense sorpreses'],
  },
  {
    id: 'entrega', slug: 'lliurament', n: '04', title: 'Lliurament', sub: 'Equipament (FF&E) i legalitzacions', alt: ['Lliurament'],
    what: "Disseny i selecció de mobiliari i equipament (FF&E), coordinació de proveïdors, legalitzacions i documentació final.",
    get: "L'edifici equipat i a punt per operar, llogar o vendre.",
    seoTitle: "FF&E, legalització i lliurament d'edificis rehabilitats",
    intro: "Dissenyem i seleccionem el mobiliari i l'equipament (FF&E), coordinem els proveïdors fins a la instal·lació i tanquem tota la documentació perquè l'edifici operi des del primer dia.",
    includes: ['Disseny i selecció de mobiliari i equipament (FF&E)', 'Coordinació de proveïdors i instal·lació', "Certificat final d'obra, legalitzacions i inspeccions", "Cèdules d'habitabilitat i llicències d'activitat", "Llibre de l'edifici i acompanyament en la posada en marxa"],
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

export const wip = es.wip.map((w, i) => ({ ...w, ...[
  { use: 'Residència universitària · 4.000 m²', text: 'Rehabilitació integral i interiorisme de la residència.' },
  { use: 'Segregació de 5 habitatges · 577 m²', text: "D'un coliving en desús a 5 habitatges: canvi d'ús i segregació." },
  { use: 'Oficines · 1.225 m²', text: "Edifici catalogat transformat en les oficines de la UIC, interiorisme inclòs. En licitació d'obra." },
  { use: "D'oficines a 5 habitatges · 490 m²", client: "Fons d'inversió Relanza", text: "Due diligence tècnica i urbanística per convertir cinc oficines en habitatges abans d'invertir." },
][i] }));

export const reviews = es.reviews.map((r, i) => ({ ...r, lang: r.lang || 'es', context: ["Reforma integral d'un Flexliving", "Reforma d'un hotel", 'Tres reformes integrals'][i] }));

export const team = {
  title: 'Un sol interlocutor. Un equip complet al darrere.',
  text: "Parles amb una sola persona de principi a fi. Al darrere, un equip de 12 persones a Barcelona: arquitectes, interioristes i modeladors 3D, amb enginyeria, arquitectura tècnica i constructora de confiança. Dissenyem, tramitem i dirigim l'obra, des de la primera visita fins al lliurament de claus.",
  image: { src: es.team.image.src, alt: "Equip de DTRES treballant a l'estudi de Barcelona" },
  partners: [
    { ...es.team.partners[0], role: 'Arquitecte, soci cofundador', title: "Director d'Estratègia i Adquisició", note: "Professor de l'Escola d'Arquitectura UIC" },
    { ...es.team.partners[1], role: 'Arquitecte, soci cofundador', title: "Director d'Operacions i Finances", note: "Professor de l'Escola d'Arquitectura UIC" },
    { ...es.team.partners[2], role: 'Doctor arquitecte, soci', title: 'Director de Qualitat', note: "Director de l'Escola d'Arquitectura UIC" },
  ],
};

export const faqs = [
  { q: 'Com treballeu amb un fons o inversor abans de la compra?', a: "Fem la due diligence en paral·lel a la negociació. En poques setmanes saps què permet l'edifici, quant costa transformar-lo i quant triga, amb una conclusió clara: comprar, negociar o no comprar. Si no compres, només has invertit en aquesta fase." },
  { q: "Què us diferencia d'un estudi d'arquitectura convencional?", a: "Un únic interlocutor de la due diligence al lliurament de claus. Projecte, interiorisme, llicències, obra i FF&E dins el mateix equip, sense canvis de responsable entre fases ni informació que es perd pel camí." },
  { q: "Com controleu el pressupost i el termini d'obra?", a: "Tanquem el pressupost amb la constructora abans de començar, sobre un projecte executiu complet. Durant l'obra, la propietat rep cada setmana un informe amb l'avenç, el cost i les decisions pendents." },
  { q: 'Treballeu amb edificis catalogats?', a: "Sí, és la nostra especialitat. A Barcelona, les obres en edificis del Catàleg de Patrimoni poden requerir un informe previ de l'Ajuntament, que pot ser favorable, favorable amb condicions o desfavorable. Preparem la consulta prèvia i el projecte per aconseguir un informe favorable, com a l'IESE, Vila Regina o Lesseps." },
  { q: 'Puc contractar-vos només per a una fase?', a: "Sí. Pots començar per la viabilitat, el projecte, l'obra o l'FF&E i el lliurament, i t'acompanyem fins al final." },
];
export const clients = es.clients;
const peopleRole = {'Responsable de BIM y Estudios de Viabilidad': 'Responsable de BIM i Estudis de Viabilitat', 'Responsable de Diseño de Interiores': 'Responsable de Disseny d’Interiors', 'BIM Manager y Estudios de Viabilidad': 'BIM Manager i Estudis de Viabilitat', 'Arquitectura y diseño de interiores': 'Arquitectura i disseny d’interiors', 'Responsable de Planificación y Procesos': 'Responsable de Planificació i Processos', 'Responsable de Calidad y Trámites': 'Responsable de Qualitat i Tràmits', 'Arquitecto senior': 'Arquitecte sènior', 'Profesor de la Escuela de Arquitectura UIC': "Professor de l'Escola d'Arquitectura UIC", 'Project Manager': 'Project Manager', 'Arquitecta senior': 'Arquitecta sènior', 'Arquitecto senior': 'Arquitecte sènior', 'Interiorista': 'Interiorista', 'Arquitecta junior': 'Arquitecta júnior', 'Modeladora 3D': 'Modeladora 3D', 'Ingeniero': 'Enginyer', 'Arquitecta técnica': 'Arquitecta tècnica', 'Constructor': 'Constructor'};
export const people = { staff: es.people.staff.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role, sub: x.sub && (peopleRole[x.sub] ?? x.sub), note: x.note && (peopleRole[x.note] ?? x.note) })), partners: es.people.partners.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role })) };

export const statusLabels = { 'En obra': 'En obra', 'En licitación': 'En licitació', 'En viabilidad': 'En viabilitat' };

const use = {
  'Vestuarios': 'Vestidors', 'Graderías': 'Graderies', 'Oficinas en edificio de 1910': 'Oficines en un edifici de 1910', Oficinas: 'Oficines', 'Oficinas de la UIC': 'Oficines de la UIC',
  'Plan especial y licencias de obra nueva': "Pla especial i llicències d'obra nova", 'Residencia senior': 'Residència sènior',
  'Residencia universitaria': 'Residència universitària', 'Residencia universitaria · 1ª fase': 'Residència universitària · 1a fase',
  'Club juvenil': 'Club juvenil', 'Vestuarios y gradas': 'Vestidors i graderies', 'De coliving a 5 viviendas de alquiler': "De coliving a 5 habitatges de lloguer",
  'De oficinas a 5 viviendas': "D'oficines a 5 habitatges", Headquarters: 'Seu corporativa', 'Showroom y oficinas': 'Showroom i oficines', 'Estudio de arquitectura': "Estudi d'arquitectura",
};
const client = { 'Fondo de inversión Relanza': "Fons d'inversió Relanza" };
export const allProjects = es.allProjects.map((p) => ({ ...p, use: use[p.use] ?? p.use, client: client[p.client] ?? p.client }));
