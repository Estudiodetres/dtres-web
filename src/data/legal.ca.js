// Textos legals (CA).
import { site } from './content.js';

const company = `<strong>${site.legalName}</strong>`;
const id = `${company}, amb NIF ${site.taxId} i domicili a ${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
const reg = site.registry ? ` Inscrita a ${site.registry}.` : '';

export const updated = '1 de novembre de 2026';

export const legal = {
  title: 'Avís legal',
  desc: "Dades del titular de detres.eu i condicions d'ús del lloc web.",
  sections: [
    ['Titular del lloc web', `<p>En compliment de l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), t'informem que el titular d'aquest lloc web és ${id}.${reg}</p>
      <p>Contacte: <a href="mailto:${site.email}">${site.email}</a> · ${site.phoneDisplay}.</p>`],
    ['Activitat professional', `<p>${site.legalName} és una societat professional d'arquitectura. Els arquitectes que signen els projectes estan col·legiats al Col·legi d'Arquitectes de Catalunya (COAC), amb el títol oficial d'arquitecte expedit a Espanya, i exerceixen d'acord amb el Codi Deontològic i les normes professionals del COAC, disponibles a <a href="https://www.arquitectes.cat" rel="noopener">arquitectes.cat</a>.</p>`],
    ["Condicions d'ús", `<p>L'accés a aquest lloc web és gratuït i implica l'acceptació d'aquest avís legal. Et comprometes a fer un ús adequat dels continguts i a no fer-los servir per a activitats il·lícites o contràries a la bona fe.</p>
      <p>La informació publicada és de caràcter general i orientatiu. No constitueix assessorament tècnic, urbanístic ni jurídic per a un cas concret: cada edifici requereix una anàlisi específica.</p>`],
    ['Propietat intel·lectual i industrial', `<p>Els textos, fotografies, plànols, dissenys, logotips i la resta de continguts d'aquest lloc són propietat de ${site.legalName} o de tercers que n'han autoritzat l'ús. En queda prohibida la reproducció, distribució o transformació sense autorització expressa, excepte per a ús personal i privat.</p>
      <p>Les fotografies de projectes es publiquen amb el consentiment dels seus propietaris.</p>`],
    ['Responsabilitat', `<p>Treballem perquè la informació sigui exacta i estigui actualitzada, però no garantim l'absència d'errors ni la disponibilitat contínua del lloc. Els enllaços a llocs de tercers s'ofereixen només com a referència; no som responsables del seu contingut.</p>`],
    ['Legislació aplicable', `<p>Aquest avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals de Barcelona, llevat que la normativa de consumidors disposi un altre fur.</p>`],
  ],
};

export const privacy = {
  title: 'Política de privacitat',
  desc: "Com tractem les dades personals que ens envies a través de detres.eu.",
  sections: [
    ['Responsable del tractament', `<p>${id}. Correu de contacte per a qüestions de privacitat: <a href="mailto:${site.email}">${site.email}</a>.</p>`],
    ['Quines dades tractem', `<p>Només les que ens facilites al formulari de contacte: nom, correu electrònic, telèfon (opcional), empresa o entitat (opcional), el teu perfil i el missatge que escrius. No demanem dades especialment protegides; et preguem que no les incloguis al missatge.</p>`],
    ['Per a què les fem servir', `<p>Per respondre la teva sol·licitud, agendar la trucada que demanes i, si hi ha interès mutu, preparar una proposta de serveis. No enviem comunicacions comercials sense el teu consentiment exprés ni elaborem perfils automatitzats.</p>`],
    ['Base legal', `<p>El consentiment que dones en enviar el formulari i l'aplicació, a petició teva, de mesures precontractuals (art. 6.1.a i 6.1.b del Reglament (UE) 2016/679, RGPD).</p>`],
    ['Quant de temps les conservem', `<p>Mentre gestionem la teva sol·licitud i, si no arribem a col·laborar, un màxim de 12 mesos. Si es formalitza un encàrrec, durant la relació professional i els terminis legals de responsabilitat que corresponguin.</p>`],
    ['Qui més hi té accés', `<p>No cedim les teves dades a tercers excepte per obligació legal. Per prestar el servei fem servir aquests proveïdors, que actuen com a encarregats del tractament amb contracte conforme al RGPD:</p>
      <ul><li><strong>Netlify, Inc.</strong> (allotjament del web i recepció del formulari).</li><li><strong>Notion Labs, Inc.</strong> (registre intern de les sol·licituds).</li></ul>
      <p>Tots dos poden tractar dades als Estats Units. Aquestes transferències s'emparen en el Marc de Privacitat de Dades UE-EUA o, si no n'hi ha, en les clàusules contractuals tipus aprovades per la Comissió Europea.</p>`],
    ['Els teus drets', `<p>Pots demanar l'accés, la rectificació, la supressió, l'oposició, la limitació del tractament i la portabilitat de les teves dades, i retirar el consentiment en qualsevol moment, escrivint a <a href="mailto:${site.email}">${site.email}</a>. Si consideres que no hem atès bé la teva sol·licitud, pots reclamar davant l'Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es" rel="noopener">aepd.es</a>).</p>`],
    ['Seguretat', `<p>Apliquem mesures tècniques i organitzatives raonables per protegir les teves dades: connexió xifrada (HTTPS), accés restringit a l'equip que gestiona les sol·licituds i proveïdors amb garanties de seguretat.</p>`],
  ],
};

export const cookies = {
  title: 'Política de galetes',
  desc: "detres.eu no fa servir galetes de seguiment, analítica ni publicitat.",
  sections: [
    ['Què són les galetes', `<p>Són petits fitxers que alguns llocs web desen al navegador per recordar informació sobre la teva visita.</p>`],
    ['Galetes que fa servir aquest web', `<p><strong>Cap.</strong> detres.eu no instal·la galetes pròpies ni de tercers: no fem servir eines d'analítica, publicitat ni xarxes socials que rastregin la teva navegació. Les tipografies se serveixen des del nostre propi servidor, sense connexions a tercers.</p>
      <p>Per això no et mostrem cap avís de galetes: no hi ha res a acceptar ni rebutjar.</p>`],
    ['Enllaços externs', `<p>Alguns enllaços porten a llocs de tercers, com Google Maps o les ressenyes de Google. Si els visites, aquests llocs poden fer servir les seves pròpies galetes segons les seves polítiques.</p>`],
    ['Canvis', `<p>Si en el futur incorporem alguna eina que faci servir galetes, actualitzarem aquesta política i et demanarem el consentiment abans d'instal·lar-les.</p>`],
  ],
};
