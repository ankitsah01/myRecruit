export interface Vacancy {
  id: string;
  title: string;
  industry: string;
  location: string;
  salary: string;
  experience: string;
  employmentType: string;
  postedDate: string;
  description: string;
  sector: string;
}

export const vacancies: Vacancy[] = [];
