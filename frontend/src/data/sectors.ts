export interface Sector {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  roles: string[];
  color: string;
}

export const sectors: Sector[] = [
  {
    id: 'construction',
    slug: 'construction',
    name: 'Construction',
    description: 'Skilled tradespeople and site professionals for construction projects across Mauritius.',
    fullDescription: 'We source qualified construction workers for residential, commercial and infrastructure projects throughout Mauritius.',
    icon: 'hard-hat',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    roles: ['Masons', 'Carpenters', 'Electricians', 'Plumbers', 'Site Supervisors', 'Heavy Equipment Operators'],
    color: '#F59E0B',
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing & Textiles',
    description: 'Production workers and quality professionals for manufacturing and textile industries.',
    fullDescription: 'We connect Mauritian manufacturers and textile businesses with skilled production workers and quality control specialists.',
    icon: 'factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    roles: ['Machine Operators', 'Quality Inspectors', 'Seamstresses', 'Pattern Cutters', 'Production Workers'],
    color: '#8B5CF6',
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    description: 'Front-of-house and back-of-house hospitality professionals for Mauritius tourism sector.',
    fullDescription: 'We source experienced hospitality professionals for hotels, resorts and restaurants across Mauritius.',
    icon: 'utensils',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    roles: ['Chefs', 'Waiters', 'Hotel Staff', 'Housekeeping', 'Resort Maintenance', 'Tourism Roles'],
    color: '#10B981',
  },
  {
    id: 'domestic-care',
    slug: 'domestic-care',
    name: 'Domestic & Care',
    description: 'Trusted domestic and care professionals for households and care facilities.',
    fullDescription: 'We carefully screen domestic and care workers to ensure reliability and the appropriate skills.',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?w=800&q=80',
    roles: ['Caregivers', 'Domestic Helpers', 'Nannies', 'Elderly Care Assistants'],
    color: '#EC4899',
  },
  {
    id: 'agriculture',
    slug: 'agriculture',
    name: 'Agriculture',
    description: 'Agricultural workers and technicians for farms and agribusiness operations.',
    fullDescription: 'We recruit experienced agricultural workers for farms, plantations and agribusiness operations.',
    icon: 'sprout',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    roles: ['Farm Workers', 'Agricultural Technicians', 'Greenhouse Operators', 'Harvesting Workers'],
    color: '#22C55E',
  },
];
