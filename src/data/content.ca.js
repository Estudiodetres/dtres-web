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
  title: "Donem una nova vida al teu edifici.",
  subtitle: "Arquitectura i disseny que n'eleven el valor i la identitat, amb llicències que avancen i obra amb termini i cost tancats.",
  image: { src: '/img/hero-papiol.jpg', alt: 'Showroom i oficines de Papiol a Barcelona, amb doble alçada i escala' },
};

export const audiences = {
  title: 'Qui vol transformar un edifici obsolet en un actiu únic i rendible.',
  items: [
    { icon: 'invest', title: "Inversors", text: "Fons i inversors particulars que compren per transformar. Due diligence abans de la compra, canvi d'ús i obra amb termini i cost tancats per complir el pla de negoci." },
    { icon: 'institution', title: "Fundacions i institucions", text: "Residències, col·legis majors i seus que han de continuar complint la seva missió, amb rigor patrimonial." },
    { icon: 'owner', title: "Propietaris", text: "Patrimonials i family offices amb edificis propis o heretats que no rendeixen el que podrien. Els convertim en habitatges, hospitality o oficines." },
    { icon: 'company', title: "Empreses", text: "Seus i oficines que representen la companyia i n'acompanyen el creixement." },
  ],
};

export const usp = {
  eyebrow: 'Normativa i patrimoni a Catalunya',
  title: 'Llicències més ràpides. Edificis més rendibles.',
  text: "Coneixem a fons la normativa urbanística i patrimonial de Catalunya, els criteris de cada ajuntament i els seus marges d'interpretació. Això ens permet maximitzar, sempre dins de la legalitat, l'aprofitament i la rendibilitat de cada edifici, i que les llicències avancin sense bloquejos.",
  image: { src: es.usp.image.src, alt: "Visita tècnica de l'equip DTRES en un edifici en rehabilitació" },
  proofs: [
    { icon: 'split', title: 'Llicències per fases', tag: 'Estratègia de tramitació', text: "Sabem quines llicències demanar i en quin ordre. Dividim l'expedient en parts que avancen en paral·lel, en lloc d'una sola llicència que ho bloqueja tot." },
    { icon: 'route', title: "El recorregut de l'expedient", tag: "Del visat de l'ECA a l'ajuntament", text: "Coneixem com viatja el projecte des que el visa l'ECA fins que l'ajuntament el reparteix entre els seus departaments. Així planifiquem terminis i estratègia des del primer dia." },
    { icon: 'heritage', title: 'Patrimoni, sense sorpreses', tag: 'Experiència en edificis catalogats', text: "Sabem què accepta Patrimoni, què no i què es pot negociar. Abans que compris un edifici, et diem si el teu projecte es pot fer." },
    { icon: 'ready', title: "A punt el dia que acaba l'obra", tag: 'Legalitzacions en paral·lel', text: "Durant l'obra tramitem legalitzacions, butlletins d'electricitat i la resta de permisos. Si hi ha requeriments, apareixen amb l'obra en marxa, quan el constructor els pot resoldre ràpid. L'edifici queda a punt per operar, llogar o vendre el mateix dia que acaben els treballs." },
  ],
};

export const phases = [
  {
    id: 'viabilidad', slug: 'viabilitat', n: '01', title: 'Viabilitat', sub: "Due diligence tècnica", alt: ['Viabilitat'],
    what: 'Due diligence tècnica, urbanística i patrimonial: usos possibles, edificabilitat i riscos.',
    get: "Identifiquem els riscos tècnics, avaluem el cost de la inversió, revisem el compliment normatiu i legal i fixem els terminis de tot el procés.",
    seoTitle: "Due diligence tècnica d'edificis a Barcelona",
    intro: "Abans de comprar o transformar un edifici necessites saber què permet el planejament, què protegeix Patrimoni, en quin estat és i quant costarà. L'analitzem i et donem una conclusió clara: comprar, negociar o no comprar.",
    includes: ["Situació urbanística: usos admesos, edificabilitat i densitat d'habitatges", "Protecció patrimonial i necessitat d'informe de Patrimoni", "Estat de l'estructura, les instal·lacions, la façana i la coberta", "Habitabilitat, accessibilitat i incendis segons l'ús futur", "Pressupost estimat, termini de llicències i obra, i rendibilitat"],
  },
  {
    id: 'proyecto-y-licencias', slug: 'projecte-i-llicencies', n: '02', title: 'Projecte', sub: "Arquitectura i permís d'obra, enginyeria i llicència d'activitat, interiorisme i mobiliari", alt: ['Projecte i llicències'],
    what: "Arquitectura i interiorisme, projecte bàsic i executiu amb instal·lacions, permís d'obra, canvi d'ús i llicència d'activitat.",
    get: "Un projecte dissenyat i construït en 3D per viure'l abans de construir-lo, definit al detall en BIM i amb el permís d'obra concedit.",
    seoTitle: 'Projecte, interiorisme i llicències a Barcelona',
    intro: "Dissenyem l'edifici i el seu interiorisme, i tramitem tot el necessari perquè l'obra comenci com més aviat millor: permisos d'obra, canvi d'ús, llicència d'activitat i consultes amb Patrimoni.",
    includes: ['Arquitectura i interiorisme', 'Projecte bàsic i executiu amb instal·lacions', 'Consulta prèvia i informe de Patrimoni', "Permís d'obra, canvi d'ús i llicència d'activitat", 'Licitació i pressupost tancat amb constructora'],
  },
  {
    id: 'obra', slug: 'obra', n: '03', title: 'Obra', sub: "Project management i direcció d'obra amb arquitecte, aparellador, enginyer i interiorista", alt: ['Obra'],
    what: "Direcció d'obra i project management.",
    get: "Terminis, costos i qualitat constructiva sota control, amb un informe setmanal i un sol interlocutor.",
    seoTitle: "Direcció d'obra i project management a Barcelona",
    intro: "Dirigim l'obra i gestionem tots els agents perquè es compleixin termini, cost i qualitat. La propietat rep cada setmana un informe clar de l'avenç.",
    includes: ["Direcció d'obra", "Project management i coordinació d'industrials", 'Control de costos i certificacions', 'Informe setmanal per a la propietat', 'Gestió de canvis sense sorpreses'],
  },
  {
    id: 'entrega', slug: 'lliurament', n: '04', title: 'Lliurament', sub: "Equipament i legalitzacions", alt: ['Lliurament'],
    what: "Disseny i selecció de mobiliari i equipament (FF&E), coordinació de proveïdors, legalitzacions i documentació final.",
    get: "L'edifici equipat i a punt per operar, llogar o vendre.",
    seoTitle: "Legalització, FF&E i lliurament d'edificis",
    intro: "Dissenyem i seleccionem el mobiliari i l'equipament (FF&E), coordinem els proveïdors fins a la instal·lació i tanquem tota la documentació perquè l'edifici operi des del primer dia.",
    includes: ['Disseny i selecció de mobiliari i equipament (FF&E)', 'Coordinació de proveïdors i instal·lació', "Certificat final d'obra, legalitzacions i inspeccions", "Cèdules d'habitabilitat i llicències d'activitat", "Llibre de l'edifici i acompanyament en la posada en marxa"],
  },
];

export const featured = {
  ...es.featured,
  eyebrow: 'Cas destacat · Patrimoni catalogat · 2024',
  title: "Oficines en edifici 1910 · IESE Business School",
  before: { src: es.featured.before.src, alt: "IESE Edifici L abans de la rehabilitació" },
  after: { src: es.featured.after.src, alt: "IESE Edifici L després de la rehabilitació" },
  situation: "Edifici catalogat sense llicència d'activitat: un terç de la superfície no es podia fer servir, i escales, accessibilitat i incendis estaven fora de normativa. L'IESE el volia recuperar sencer per a oficines sense tocar el patrimoni.",
  transformation: "Due diligence, informe favorable de Patrimoni, canvi d'ús a oficines, projecte i interiorisme, i obra a preu i termini tancats. Façana, coberta, fusta i paviments restaurats.",
  resultFigure: 'Renda anual x2',
  result: 'Superfície útil de 500 a 743 m², capacitat de 20 a 50 persones i amortització en 8,8 anys.',
  case: {
    "eyebrow": "Cas d'èxit",
    "title": "Patrimoni catalogat de 1910 · IESE Business School",
    "subtitle": "Un edifici mig en desús convertit en oficines per a 50 persones. El doble de renda, retornant l'edifici al seu estat original patrimonial.",
    "steps": [
      {
        "label": "Inici",
        "text": "Sense llicència d'activitat, el 30% dels metres quadrats quedava fora de normativa i no es podia fer servir.",
        "img": "/img/iese-l-inicio.jpg",
        "alt": "IESE Edifici L abans de l'obra"
      },
      {
        "label": "Transformació",
        "text": "Due diligence per fixar cost, terminis, permisos i capacitat. Permís d'obra amb Patrimoni i obra a preu i termini tancats amb el constructor.",
        "img": "/img/iese-l-obra.jpg",
        "alt": "IESE Edifici L durant l'obra"
      },
      {
        "label": "Resultat",
        "text": "Oficines per a 50 persones amb instal·lacions noves, domòtica i ventilació amb recuperador de calor. Més aïllament, paviment original recuperat i millor qualificació energètica.",
        "img": "/img/iese-l-resultado.jpg",
        "alt": "IESE Edifici L acabat"
      }
    ],
    "figures": [{"n": "x2€", "t": "Renda anual", "s": "El doble que abans"}, {"n": "+49%", "t": "Superfície útil", "s": "De 500 a 743 m²"}, {"n": "+30p", "t": "Llocs de treball", "s": "De 20 a 50 persones"}]
  },
};

export const moreProjects = [
  { tag: 'Residència sènior · 716 m²', client: 'Associació Cultural Carena', img: '/img/pj-carena-residencia.jpg' },
  { tag: 'Club juvenil · 3.000 m²', client: 'Fundación Padua', img: '/img/pj-padua.jpg' },
  { tag: 'Oficines · 1.000 m²', client: 'Aloalto', img: '/img/pj-aloalto.jpg' },
  { tag: 'Showroom i oficines · 800 m²', client: 'Papiol', img: '/img/pj-papiol.jpg' },
  { tag: 'Residència universitària · 1.500 m²', client: 'Colegio Mayor Universitario Pedralbes', img: '/img/pj-cmu.jpg' },
  { tag: 'Oficines · 200 m²', client: 'Mier Giralt Abogados', img: '/img/pj-mier.jpg' },
];

export const wip = es.wip.map((w, i) => ({ ...w, ...[
  { use: 'Residència universitària · 4.000 m²', text: 'Rehabilitació integral i interiorisme de la residència.' },
  { use: 'Oficines · 1.200 m²', text: "Edifici catalogat transformat en les oficines de la UIC, interiorisme inclòs. En licitació d'obra." },
  { use: '5 habitatges · 500 m²', client: "Fons d'inversió Relanza", text: "Due diligence tècnica i urbanística per convertir cinc oficines en habitatges abans d'invertir." },
  { use: 'Centre juvenil · 500 m²', text: "Canvi d'ús d'un edifici protegit de Joan Rubió i Bellver per a un projecte socioeducatiu. Due diligence, distribució i llicències." },
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
const peopleRole = {'Directora de Proyecto y Producción': 'Directora de Projecte i Producció', 'Director de Proyecto y Diseño': 'Director de Projecte i Disseny', 'Director de Proyecto y BIM Manager': 'Director de Projecte i BIM Manager', 'Constructor consultor': 'Constructor consultor', 'Responsable de BIM y Estudios de Viabilidad': 'Responsable de BIM i Estudis de Viabilitat', 'Responsable de Diseño de Interiores': 'Responsable de Disseny d’Interiors', 'BIM Manager y Estudios de Viabilidad': 'BIM Manager i Estudis de Viabilitat', 'Arquitectura y diseño de interiores': 'Arquitectura i disseny d’interiors', 'Responsable de Planificación y Procesos': 'Responsable de Planificació i Processos', 'Responsable de Calidad y Trámites': 'Responsable de Qualitat i Tràmits', 'Arquitecto senior': 'Arquitecte sènior', 'Profesor de la Escuela de Arquitectura UIC': "Professor de l'Escola d'Arquitectura UIC", 'Project Manager': 'Project Manager', 'Arquitecta senior': 'Arquitecta sènior', 'Arquitecto senior': 'Arquitecte sènior', 'Interiorista': 'Interiorista', 'Arquitecta junior': 'Arquitecta júnior', 'Modeladora 3D': 'Modeladora 3D', 'Ingeniero': 'Enginyer', 'Arquitecta técnica': 'Arquitecta tècnica', 'Constructor': 'Constructor'};
export const people = { staff: es.people.staff.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role, sub: x.sub && (peopleRole[x.sub] ?? x.sub), note: x.note && (peopleRole[x.note] ?? x.note) })), partners: es.people.partners.map((x) => ({ ...x, role: peopleRole[x.role] ?? x.role })) };

export const statusLabels = { 'Cambio de uso': "Canvi d'ús", 'En obra': 'En obra', 'En licitación': 'En licitació', 'En viabilidad': 'En viabilitat' };

const use = {
  'Vivienda': 'Habitatge',
  'Centro juvenil': 'Centre juvenil',
  'Docencia': 'Docència', '5 viviendas': '5 habitatges', 'Nuestro estudio': 'El nostre estudi',
  'Vestuarios': 'Vestidors', 'Graderías': 'Graderies', 'Oficinas en edificio de 1910': 'Oficines en un edifici de 1910', Oficinas: 'Oficines', 'Oficinas de la UIC': 'Oficines de la UIC',
  'Plan especial y licencias de obra nueva': "Pla especial i llicències d'obra nova", 'Residencia senior': 'Residència sènior',
  'Residencia universitaria': 'Residència universitària', 'Residencia universitaria · 1ª fase': 'Residència universitària · 1a fase',
  'Club juvenil': 'Club juvenil', 'Vestuarios y gradas': 'Vestidors i graderies', 'De coliving a 5 viviendas de alquiler': "De coliving a 5 habitatges de lloguer",
  'De oficinas a 5 viviendas': "D'oficines a 5 habitatges", Headquarters: 'Seu corporativa', 'Showroom y oficinas': 'Showroom i oficines', 'Estudio de arquitectura': "Estudi d'arquitectura",
};
const client = { 'Le Mirath · El Cairo': 'Le Mirath · El Caire', 'Inversor particular': 'Inversor particular', 'Escuela Deportiva Brafa': "Escola Esportiva Brafa", 'Fondo de inversión Relanza': "Fons d'inversió Relanza" };
export const allProjects = es.allProjects.map((p) => ({ ...p, use: use[p.use] ?? p.use, client: client[p.client] ?? p.client }));

// Home v2: bloques nuevos (dolores, bonus, método corto)
export const home2 = {
  "pains": {
    "eyebrow": "El que frena una operació",
    "title": "Et sona?",
    "items": [
      {
        "icon": "doubt",
        "text": "No saps si el que vols fer és possible en aquest edifici, ni si l'operació serà rendible."
      },
      {
        "icon": "clock",
        "text": "Cada mes que passa és rendibilitat que deixes de guanyar amb el teu edifici, i la teva tesi d'inversió comença a trontollar."
      },
      {
        "icon": "blocked",
        "text": "Patrimoni bloqueja el que volies fer."
      }
    ]
  },
  "bonus": {
    "eyebrow": "Consultoria gratuïta · 30 min amb un soci",
    "title": "La teva primera viabilitat, en 30 minuts.",
    "text": "Un soci arquitecte revisa el teu edifici o la teva idea i et diu si és viable, quins riscos té i com continuar amb una due diligence.",
    "cta": "Reservar la meva consultoria gratuïta"
  },
  "methodTitle": "Quatre fases. Un sol interlocutor.",
  "methodCta": "Començar per la viabilitat",
  "authority": "Qui som",
  "phaseShort": {
    "viabilidad": "Riscos, cost i terminis abans d'invertir.",
    "proyecto-y-licencias": "Disseny en 3D i permís d'obra concedit.",
    "obra": "Termini, cost i qualitat sota control, amb un sol interlocutor.",
    "entrega": "Equipat i a punt per operar, llogar o vendre."
  },
  "journey": {
    "eyebrow": "De la due diligence al lliurament de claus",
    "title": "Cada fase té el seu risc. El resolem abans que et costi diners.",
    "problem": "El problema",
    "solution": "Com el resolem",
    "pains": {
      "viabilidad": "No saps si el que vols fer és possible en aquest edifici, ni si l'operació serà rendible.",
      "proyecto-y-licencias": "La llicència no arriba o Patrimoni bloqueja el projecte. Cada mes és rendibilitat que deixes de guanyar i la teva tesi comença a trontollar.",
      "obra": "L'obra s'allarga, el pressupost es dispara i ningú et dona respostes clares.",
      "entrega": "Acaba l'obra, però falten butlletins i legalitzacions: l'edifici no pot obrir."
    },
    "fix": {
      "entrega": "Tramitem butlletins i legalitzacions durant l'obra. L'edifici, equipat i a punt per operar, llogar o vendre el dia que acaba."
    }
  },
  "wa": {
    "pre": "Prefereixes parlar ara?",
    "link": "Escriu-nos per WhatsApp →"
  }
};
