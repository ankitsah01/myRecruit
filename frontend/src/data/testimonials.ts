export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  quote: string;
  type: 'employer' | 'worker';
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Placeholder Employer',
    role: 'Operations Manager',
    company: 'Example Construction Co.',
    country: 'Mauritius',
    quote: 'Genuine employer testimonial will appear here. MyRecruit made it straightforward to source the workers we needed quickly and professionally.',
    type: 'employer',
  },
  {
    id: 't2',
    name: 'Placeholder Worker',
    role: 'Construction Worker',
    company: '',
    country: 'Bangladesh',
    quote: 'Genuine worker testimonial will appear here. The team was helpful throughout the entire process and everything was transparent from the start.',
    type: 'worker',
  },
  {
    id: 't3',
    name: 'Placeholder Employer',
    role: 'HR Director',
    company: 'Example Textile Ltd.',
    country: 'Mauritius',
    quote: 'Genuine employer testimonial will appear here. Professional, responsive and they delivered candidates that matched our requirements.',
    type: 'employer',
  },
];
