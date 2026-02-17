// Mobile navigation toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});

// ===========================
// Internationalisation (i18n)
// ===========================
const translations = {
  cs: {
    // Meta
    'meta.title': 'Kateřina Volfová — Vývojářka a analytička',
    'meta.description': 'Kateřina Volfová — Vývojářka a analytička se zaměřením na Python, datové inženýrství a AI/ML.',

    // Skip link
    'skip': 'Přeskočit na obsah',

    // Navigation
    'nav.aria': 'Hlavní navigace',
    'nav.toggle': 'Přepnout navigaci',
    'nav.about': 'O mně',
    'nav.skills': 'Dovednosti',
    'nav.experience': 'Zkušenosti',
    'nav.education': 'Vzdělání',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.greeting': 'Ahoj, já jsem',
    'hero.title': 'Vývojářka a analytička',
    'hero.tagline': 'Se zaměřením na vývoj v Pythonu, datové inženýrství a AI/ML',
    'hero.cta': 'Napište mi',
    'hero.cta2': 'Zobrazit zkušenosti',

    // About
    'about.title': 'O mně',
    'about.p1': 'Jsem vývojářka a analytička z Prahy se zaměřením na vývoj v Pythonu, datové inženýrství a AI/ML. Baví mě vytvářet datově orientované služby, automatizovat procesy a řešit zapeklité technické problémy.',
    'about.p2': 'Záleží mi na produktech, na kterých pracuji, a ráda úzce spolupracuji s product ownery. Vždy chci, aby uživatelský zážitek byl co nejplynulejší.',
    'about.p3': 'Aktuálně pracuji v SAP Concur na serverless ETL pipeline v AWS a zároveň na volné noze přednáším programování v Pythonu. Za ty roky jsem si vyzkoušela všechno od web scrapingu a big data inženýrství po test management a výuku programování.',
    'about.p4': 'Mimo práci hodně čtu, poslouchám hudbu, hraju počítačové hry a automatizuji věci čistě pro radost.',
    'about.years': 'Let v IT',
    'about.english': 'Angličtina',

    // Skills
    'skills.title': 'Dovednosti a technologie',
    'skills.programming': 'Programování',
    'skills.data': 'Data, cloud a infrastruktura',
    'skills.testing': 'Testování',
    'skills.ai': 'AI a datová věda',
    'skills.tag.testAuto': 'Automatizace testů',
    'skills.tag.testAnalysis': 'Testovací analýza',
    'skills.tag.testMgmt': 'Test management',
    'skills.tag.apiTest': 'API testování',
    'skills.tag.stats': 'Statistika',

    // Experience
    'exp.title': 'Pracovní zkušenosti',

    'exp.sap.date': 'Srpen 2022 — současnost',
    'exp.sap.role': 'Software Developer',
    'exp.sap.desc': 'Vývoj datově orientovaných služeb (ETL procesy) v serverless architektuře v Pythonu. Využití lambd, SQS a dalších serverless nástrojů od AWS. Replikace dat do ElasticSearch, dotazování ES a práce s DynamoDB. Analýza dat a řešení problémů. Vývoj interních Python balíčků a testování našich řešení.',

    'exp.free.date': 'Listopad 2021 — současnost',
    'exp.free.company': 'Na volné noze',
    'exp.free.role': 'Python vývojářka',
    'exp.free.desc': 'Vývoj vlastního UI testovacího nástroje postaveného na Pythonu, pytestu a Seleniu, dockerizace řešení a webová aplikace pro zobrazení výsledků testů. Menší ad hoc projekty v Djangu.',

    'exp.msf.date': 'Červen 2020 — leden 2022',
    'exp.msf.company': 'Lékaři bez hranic — Sdílené IT služby Praha',
    'exp.msf.role': 'Vývojářka / IT analytička',
    'exp.msf.desc': 'Údržba datového skladu v PostgreSQL databázi. Optimalizace transformačních skriptů a příprava dat pro Power BI. Migrace části DWH do Azure Synapse Analytics. Vylepšení testovacího nástroje napsaného v Pythonu — zrychlení testů a jejich paralelní běh pomocí Dockeru.',

    'exp.lp.date': 'Leden 2019 — květen 2020',
    'exp.lp.role': 'Web Scraper vývojářka',
    'exp.lp.desc': 'Vývoj webových scraperů v Pythonu s frameworkem Scrapy.',

    'exp.make.date': 'Září 2018 — červen 2019',
    'exp.make.role': 'Lektorka programování pro děti',
    'exp.make.desc': 'Vedení zábavných kurzů programování pro děti, příprava sylabů a her pro jejich větší zapojení do programování.',

    'exp.tmobile.date': 'Prosinec 2017 — červenec 2018',
    'exp.tmobile.role': 'Big Data inženýrka',
    'exp.tmobile.desc': 'Práce s Cloudera stackem (HDFS, Hive/Impala, Spark). Psaní unit testů v Pythonu pro HQL transformační skripty. Analýza vstupních dat a transformace skriptů ze SAS do Hive. Využití Jupyter notebooků a Pandas pro datovou analýzu.',

    'exp.mall.date': 'Leden 2016 — srpen 2017',
    'exp.mall.role': 'Test manažerka a testerka webových aplikací',
    'exp.mall.desc': 'Vedení malého týmu pěti testerů, příprava testovacích plánů, time management a reporting. Vytváření nové vize testování v kontextu CI/CD a agilního vývoje. Návrh testovacích případů, manuální testování a automatizace testů v Pythonu a PHP.',

    // Education
    'edu.title': 'Vzdělání a certifikace',
    'edu.education': 'Vzdělání',
    'edu.gymn.desc': 'Gymnázium, 2011',
    'edu.certs': 'Certifikáty',
    'edu.istqb.date': 'Duben 2017',
    'edu.fce.date': 'Leden 2011',
    'edu.courses': 'Kurzy',
    'edu.aidev.desc': 'Robot Dreams, prosinec 2024 — 400/400 bodů',
    'edu.ml.desc': 'Robot Dreams, prosinec 2024 — 151/140 bodů',
    'edu.es.desc': 'A Cloud Guru, srpen 2022',
    'edu.aws.desc': 'A Cloud Guru, červenec 2022',
    'edu.bert.desc': 'Udacity, květen 2018',
    'edu.coursera.title': 'Různé kurzy na Coursera',
    'edu.languages': 'Jazyky',
    'edu.lang.en': 'Angličtina (C1)',
    'edu.lang.fr': 'Francouzština (A2)',
    'edu.lang.cs': 'Čeština (rodilý mluvčí)',

    // Hobbies
    'hobbies.title': 'Mimo kód',
    'hobbies.reading': 'Čtení',
    'hobbies.reading.desc': 'Hlavně beletrie, fantasy a sci-fi se slabostí pro japonskou a korejskou literaturu',
    'hobbies.music': 'Hudba',
    'hobbies.music.desc': 'Poslouchání, objevování nových zvuků a občas ťukání do kláves klavíru',
    'hobbies.gaming': 'Hraní',
    'hobbies.gaming.desc': 'Počítačové hry jako způsob relaxace — real-time strategie, Dota 2 a pohodové hry',
    'hobbies.automating': 'Automatizace',
    'hobbies.automating.desc': 'Programování a automatizace věcí pro zábavu a vibování s Claudem',

    // Footer
    'footer.title': 'Kontakt',
    'footer.email': '<strong>E-mail:</strong> <a href="mailto:katerina.volfova@wolfsden.cz">katerina.volfova@wolfsden.cz</a>',
    'footer.location': '<strong>Lokace:</strong> Praha, Česká republika',
    'footer.copy': '&copy; 2026 Kateřina Volfová. Všechna práva vyhrazena.',
  }
};

// Store the original English strings on first load
const englishStrings = {};

function captureEnglish() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    englishStrings[el.getAttribute('data-i18n')] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    englishStrings[el.getAttribute('data-i18n-html')] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    const [attr, key] = spec.split(':');
    englishStrings[key] = el.getAttribute(attr);
  });

  const descEl = document.querySelector('[data-i18n-meta="description"]');
  if (descEl) englishStrings['meta.description'] = descEl.getAttribute('content');
}

function applyLanguage(lang) {
  const strings = lang === 'cs' ? translations.cs : englishStrings;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) el.textContent = strings[key];
  });

  // HTML content (for elements with links/strong tags)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (strings[key]) el.innerHTML = strings[key];
  });

  // Attributes (aria-label etc.)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    const [attr, key] = spec.split(':');
    if (strings[key]) el.setAttribute(attr, strings[key]);
  });

  // Meta description
  const descEl = document.querySelector('[data-i18n-meta="description"]');
  if (descEl && strings['meta.description']) {
    descEl.setAttribute('content', strings['meta.description']);
  }

  // Update html lang attribute
  document.documentElement.lang = lang === 'cs' ? 'cs' : 'en';

  // Update toggle button text
  langToggle.textContent = lang === 'cs' ? 'EN' : 'CS';
  langToggle.setAttribute('aria-label', lang === 'cs' ? 'Switch to English' : 'Přepnout do češtiny');

  // Save preference
  localStorage.setItem('lang', lang);
}

// Initialise
const langToggle = document.getElementById('lang-toggle');
captureEnglish();

const savedLang = localStorage.getItem('lang');

if (savedLang === 'cs') {
  applyLanguage('cs');
}

langToggle.addEventListener('click', () => {
  const current = document.documentElement.lang;
  applyLanguage(current === 'cs' ? 'en' : 'cs');
});
