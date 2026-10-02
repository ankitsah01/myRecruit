import { MetadataRoute } from 'next';
import { sectors } from '@/data/sectors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myrecruitltd.mu';

  const sectorUrls = sectors.map((s) => ({
    url: `${baseUrl}/sectors/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/about',
    '/employers',
    '/workers',
    '/sectors',
    '/how-it-works',
    '/vacancies',
    '/faq',
    '/contact',
    '/request-workers',
    '/apply',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes, ...sectorUrls];
}
