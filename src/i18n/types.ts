export interface Dictionary {
  nav: {
    aboutUs: string;
    wado: string;
    guide: string;
    support: string;
    store: string;
    myPage: string;
    aboutSub: { label: string; href: string }[];
    guideSub: { label: string; href: string }[];
    supportSub: { label: string; href: string }[];
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    sub1: string;
    sub2: string;
    cta1: string;
    cta2: string;
    categories: string[];
  };
  painPoints: {
    title: string;
    subtitle: string;
    items: string[];
    transition: string;
    transitionHighlight: string;
  };
  solution: {
    badge: string;
    title: string;
    titleHighlight: string;
    values: { title: string; desc: string }[];
  };
  categoriesSection: {
    title: string;
    titleHighlight: string;
    items: {
      emoji: string;
      label: string;
      quote: string;
      desc: string;
      cta: string;
    }[];
  };
  trust: {
    title: string;
    titleHighlight: string;
    stats: { label: string; value: string; desc: string }[];
  };
  bestsellers: {
    badge: string;
    title: string;
    desc: string;
    viewAll: string;
  };
  testimonials: {
    title: string;
    titleHighlight: string;
    reviews: { text: string; author: string; tag: string }[];
  };
  finalCta: {
    title: string;
    desc1: string;
    desc2: string;
    cta1: string;
    cta2: string;
  };
  footer: {
    slogan: string;
    company: string;
    navTitle: string;
    contactTitle: string;
    phone: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    ceo: string;
    bizNo: string;
    salesNo: string;
    rights: string;
  };
  // Sub pages
  aboutOverview: {
    badge: string;
    title: string;
    subtitle: string;
    introTitle: string;
    intro1: string;
    intro2: string;
    tags: string[];
    companyInfoTitle: string;
    companyInfo: { dt: string; dd: string }[];
    visionTitle: string;
    visions: { title: string; desc: string }[];
  };
  aboutHistory: {
    badge: string;
    title: string;
    subtitle: string;
    timeline: { year: string; events: string[] }[];
  };
  aboutCerts: {
    badge: string;
    title: string;
    subtitle: string;
    certs: { title: string; org: string; number: string; date: string; scope: string }[];
  };
  aboutLocation: {
    badge: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    roadAddr: string;
    roadAddrLabel: string;
    lotAddr: string;
    lotAddrLabel: string;
    zipLabel: string;
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: string;
    hoursSub: string;
  };
  wadoPage: {
    badge: string;
    title: string;
    desc: string;
    allFilter: string;
    detailOpen: string;
    detailClose: string;
    buyBtn: string;
  };
  guideHub: {
    badge: string;
    title: string;
    desc: string;
    viewGuide: string;
    categories: { title: string; subtitle: string; desc: string }[];
  };
  guideTemplate: {
    stretchTitle: string;
    videoTitle: string;
    videoSoon: string;
    videoPlaceholder: string;
    tipsTitle: string;
    tips: { title: string; desc: string }[];
  };
  guideBarospine: {
    badge: string;
    title: string;
    desc: string;
    exercises: { title: string; desc: string }[];
  };
  guideKids: {
    badge: string;
    title: string;
    desc: string;
    exercises: { title: string; desc: string }[];
  };
  guideGolf: {
    badge: string;
    title: string;
    desc: string;
    exercises: { title: string; desc: string }[];
  };
  guideFoamroller: {
    badge: string;
    title: string;
    desc: string;
    exercises: { title: string; desc: string }[];
  };
  supportPage: {
    badge: string;
    title: string;
    desc: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    contactTitle: string;
    contactPhone: string;
    contactPhoneSub: string;
    contactEmail: string;
    contactEmailSub: string;
    contactAddress: string;
    contactAddressSub: string;
    contactHours: string;
    contactHoursSub: string;
  };
  noticePage: {
    badge: string;
    title: string;
    desc: string;
  };
  resourcesPage: {
    badge: string;
    title: string;
    desc: string;
    downloadNote: string;
  };
  products: {
    name: string;
    desc: string;
    detail: string;
    features: string[];
  }[];
}
