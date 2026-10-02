export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'employer' | 'worker';
}

export const faqs: FAQ[] = [
  {
    id: 'e1',
    question: 'What types of workers can you recruit?',
    answer: 'We recruit workers across construction, manufacturing and textiles, hospitality and tourism, domestic and care, and agriculture sectors. Our sourcing network covers a range of skill levels from general labour to experienced tradespeople and technical specialists.',
    category: 'employer',
  },
  {
    id: 'e2',
    question: 'Which countries do you recruit from?',
    answer: 'We source candidates from a number of countries across Asia and Africa. The specific sourcing market depends on the role, required skills, and employer preference. Contact us to discuss suitable sourcing countries for your requirements.',
    category: 'employer',
  },
  {
    id: 'e3',
    question: 'How long does the recruitment process take?',
    answer: 'Timelines vary depending on the role, number of workers required and documentation involved. We will provide an estimated timeline once we understand your requirements.',
    category: 'employer',
  },
  {
    id: 'e4',
    question: 'How are candidates screened?',
    answer: 'Candidates are reviewed against your specific requirements including skills, experience, qualifications and documentation before being presented for employer review.',
    category: 'employer',
  },
  {
    id: 'e5',
    question: 'Can employers interview candidates before selection?',
    answer: 'Yes. We coordinate candidate interviews between employers and shortlisted candidates, remotely via video call or in person.',
    category: 'employer',
  },
  {
    id: 'e6',
    question: 'Who handles work permit documentation?',
    answer: 'We assist with coordinating required recruitment and work permit documentation. Employers are responsible for applicable permit fees and statutory requirements.',
    category: 'employer',
  },
  {
    id: 'e7',
    question: 'What costs are involved for employers?',
    answer: 'Our fees are discussed directly with employers based on requirements. There are no hidden charges. Costs typically include our recruitment service fee and any applicable statutory or documentation costs.',
    category: 'employer',
  },
  {
    id: 'e8',
    question: 'Can you recruit multiple workers at the same time?',
    answer: 'Yes. We handle single placements as well as bulk recruitment requirements. Please tell us how many workers you need.',
    category: 'employer',
  },
  {
    id: 'w1',
    question: 'Is applying free for workers?',
    answer: 'Yes. Submitting your application through MyRecruit is completely free for workers. We do not charge workers any recruitment placement fees.',
    category: 'worker',
  },
  {
    id: 'w2',
    question: 'What documents are required to apply?',
    answer: 'You will need a valid passport and a current CV or resume. Additional documents such as qualifications or work certificates may be required depending on the role.',
    category: 'worker',
  },
  {
    id: 'w3',
    question: 'What jobs are available in Mauritius?',
    answer: 'Available positions depend on current employer requirements. We work across construction, manufacturing, hospitality, domestic and care, and agriculture. Submit your profile and we will match you with suitable opportunities.',
    category: 'worker',
  },
  {
    id: 'w4',
    question: 'How does the matching process work?',
    answer: 'Once your application is received, our team reviews your profile, experience and documentation, then matches you with suitable employer opportunities and contacts you directly.',
    category: 'worker',
  },
  {
    id: 'w5',
    question: 'How long does the process take?',
    answer: 'The timeline depends on your profile, availability of opportunities, and the work permit process. We will keep you informed at each stage.',
    category: 'worker',
  },
  {
    id: 'w6',
    question: 'Will I need a work permit to work in Mauritius?',
    answer: 'Yes. Non-citizen workers require a valid work permit to work in Mauritius. We assist with coordinating the required documentation as part of the recruitment process.',
    category: 'worker',
  },
  {
    id: 'w7',
    question: 'How will I be contacted after applying?',
    answer: 'We will contact you using the phone number or email address provided in your application. Please ensure your contact details are accurate.',
    category: 'worker',
  },
];
