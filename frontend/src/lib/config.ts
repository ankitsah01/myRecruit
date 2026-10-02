export const siteConfig = {
  name: 'MyRecruit Ltd',
  shortName: 'MYRECRUIT',
  tagline: 'Connecting Businesses With The Right People',
  description: 'Professional recruitment solutions connecting Mauritian employers with reliable overseas talent and helping workers find legitimate opportunities in Mauritius.',
  url: 'https://myrecruitltd.mu',
  ogImage: '/og-image.jpg',
  contact: {
    phone: '+230 XXX XXXX',
    whatsapp: '+230XXXXXXXX',
    email: 'info@myrecruitltd.mu',
    address: 'Port Louis, Mauritius',
    officeHours: 'Monday – Friday: 8:30 AM – 5:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Port+Louis+Mauritius',
  },
  stats: [
    { value: '100+', label: 'Workers Recruited' },
    { value: '100+', label: 'Employers Served' },
    { value: '10+', label: 'Recruitment Countries' },
    { value: '10+', label: 'Years of Experience' },
  ],
  social: {
    facebook: 'https://facebook.com/myrecruitltd',
    linkedin: 'https://linkedin.com/company/myrecruitltd',
    instagram: 'https://instagram.com/myrecruitltd',
  },
};

export type SiteConfig = typeof siteConfig;
