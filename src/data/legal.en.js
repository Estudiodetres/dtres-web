// Legal texts (EN).
import { site } from './content.js';

const company = `<strong>${site.legalName}</strong>`;
const id = `${company}, tax ID ${site.taxId}, registered office at ${site.address.street}, ${site.address.postalCode} ${site.address.city}, Spain`;
const reg = site.registry ? ` Registered with ${site.registry}.` : '';

export const updated = '1 November 2026';

export const legal = {
  title: 'Legal notice',
  desc: 'Details of the owner of detres.eu and terms of use of the website.',
  sections: [
    ['Website owner', `<p>In accordance with Article 10 of Spanish Law 34/2002 on information society services and e-commerce (LSSI-CE), the owner of this website is ${id}.${reg}</p>
      <p>Contact: <a href="mailto:${site.email}">${site.email}</a> · +34 ${site.phoneDisplay}.</p>`],
    ['Professional activity', `<p>${site.legalName} is a professional architecture firm. The architects who sign its projects are members of the Catalan Association of Architects (COAC), hold the official Spanish architect's degree and practise under the COAC Code of Ethics and professional rules, available at <a href="https://www.arquitectes.cat" rel="noopener">arquitectes.cat</a>.</p>`],
    ['Terms of use', `<p>Access to this website is free and implies acceptance of this legal notice. You agree to use its content appropriately and not for unlawful purposes or in bad faith.</p>
      <p>The information published is general and indicative. It does not constitute technical, planning or legal advice for any specific case: every building requires its own analysis.</p>`],
    ['Intellectual and industrial property', `<p>The texts, photographs, drawings, designs, logos and other content on this website belong to ${site.legalName} or to third parties who have authorised their use. Reproduction, distribution or transformation without express permission is prohibited, except for personal and private use.</p>
      <p>Project photographs are published with the consent of their owners.</p>`],
    ['Liability', `<p>We work to keep the information accurate and up to date, but we cannot guarantee it is error-free or that the website will always be available. Links to third-party sites are provided for reference only; we are not responsible for their content.</p>`],
    ['Governing law', `<p>This legal notice is governed by Spanish law. Any dispute shall be submitted to the courts of Barcelona, unless consumer protection law provides otherwise.</p>`],
  ],
};

export const privacy = {
  title: 'Privacy policy',
  desc: 'How we handle the personal data you send us through detres.eu.',
  sections: [
    ['Data controller', `<p>${id}. Contact for privacy matters: <a href="mailto:${site.email}">${site.email}</a>.</p>`],
    ['What data we process', `<p>Only what you give us in the contact form: name, email, phone (optional), company or organisation (optional), your profile and your message. We do not ask for special categories of data; please do not include them in your message.</p>`],
    ['What we use it for', `<p>To reply to your enquiry, schedule the call you request and, if there is mutual interest, prepare a proposal. We do not send marketing communications without your express consent, and we do not carry out automated profiling.</p>`],
    ['Legal basis', `<p>The consent you give when submitting the form, and steps taken at your request prior to entering into a contract (Art. 6(1)(a) and 6(1)(b) of Regulation (EU) 2016/679, GDPR).</p>`],
    ['How long we keep it', `<p>While we handle your enquiry and, if we do not end up working together, for up to 12 months. If an engagement follows, for the duration of the professional relationship and any applicable statutory liability periods.</p>`],
    ['Who else has access', `<p>We do not share your data with third parties unless required by law. To provide the service we use the following providers, acting as data processors under GDPR-compliant agreements:</p>
      <ul><li><strong>Netlify, Inc.</strong> (website hosting and form handling).</li><li><strong>Notion Labs, Inc.</strong> (internal record of enquiries).</li></ul>
      <p>Both may process data in the United States. These transfers rely on the EU-US Data Privacy Framework or, failing that, on the Standard Contractual Clauses approved by the European Commission.</p>`],
    ['Your rights', `<p>You can request access, rectification, erasure, objection, restriction of processing and portability of your data, and withdraw your consent at any time, by emailing <a href="mailto:${site.email}">${site.email}</a>. If you believe we have not handled your request properly, you can complain to the Spanish Data Protection Agency (<a href="https://www.aepd.es" rel="noopener">aepd.es</a>).</p>`],
    ['Security', `<p>We apply reasonable technical and organisational measures to protect your data: encrypted connections (HTTPS), access restricted to the team handling enquiries, and providers with security guarantees.</p>`],
  ],
};

export const cookies = {
  title: 'Cookie policy',
  desc: 'detres.eu does not use tracking, analytics or advertising cookies.',
  sections: [
    ['What cookies are', `<p>Small files that some websites store in your browser to remember information about your visit.</p>`],
    ['Cookies used on this website', `<p><strong>None.</strong> detres.eu does not set first-party or third-party cookies: we use no analytics, advertising or social media tools that track your browsing. Fonts are served from our own server, with no third-party connections.</p>
      <p>That is why we do not show a cookie banner: there is nothing to accept or reject.</p>`],
    ['External links', `<p>Some links lead to third-party sites, such as Google Maps or Google reviews. If you visit them, those sites may use their own cookies under their own policies.</p>`],
    ['Changes', `<p>If we ever add a tool that uses cookies, we will update this policy and ask for your consent before setting them.</p>`],
  ],
};
