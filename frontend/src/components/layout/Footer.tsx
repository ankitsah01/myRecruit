'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { Logo } from '@/components/ui/Logo';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';

const footerSections = [
  {
    key: 'footer.forEmployers',
    title: 'For Employers',
    links: [
      { label: 'Request Workers', href: '/request-workers' },
      { label: 'Why Choose MyRecruit', href: '/employers' },
      { label: 'Sectors We Serve', href: '/sectors' },
      { label: 'Work Permit Support', href: '/how-it-works' },
      { label: 'Employer FAQ', href: '/faq' },
    ],
  },
  {
    key: 'footer.forWorkers',
    title: 'For Workers',
    links: [
      { label: 'Browse Vacancies', href: '/vacancies' },
      { label: 'Apply Online (Free)', href: '/apply' },
      { label: 'Worker Process & Journey', href: '/workers' },
      { label: 'Work in Mauritius Guide', href: '/how-it-works' },
      { label: 'Worker FAQ', href: '/faq' },
    ],
  },
  {
    key: 'footer.agencyAbout',
    title: 'Agency & About',
    links: [
      { label: 'About MyRecruit', href: '/about' },
      { label: 'Our Recruitment Process', href: '/how-it-works' },
      { label: 'Responsible Recruitment', href: '/about#responsible' },
      { label: 'Our Core Sectors', href: '/sectors' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    key: 'footer.complianceLegal',
    title: 'Compliance & Legal',
    links: [
      { label: 'Ministry Compliance', href: '/about#responsible' },
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms of Engagement', href: '/contact' },
      { label: 'Ethical Recruitment Code', href: '/about#responsible' },
    ],
  },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071228] text-white relative z-10 border-t border-slate-800">
      {/* Trust & License Accreditation Strip */}
      <div className="bg-[#0b1938] border-b border-white/5 py-4 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-teal-100">
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
            <span>
              {t(
                'footer.license',
                'Licensed & Registered Recruitment Agency • In accordance with the Ministry of Labour, Human Resource Development & Training, Mauritius.'
              )}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>{t('footer.activePipelines', 'International Candidate Pipelines Active')}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 xl:gap-14 2xl:gap-20">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 space-y-6 max-w-md">
            <Logo variant="light" size="md" />

            <p className="text-slate-400 text-sm leading-relaxed">
              {t(
                'footer.desc',
                'MyRecruit connects Mauritian enterprises with thoroughly vetted international professionals while providing job seekers with transparent, 100% free overseas career pathways.'
              )}
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-3 pt-2 text-sm">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{siteConfig.contact.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-snug text-slate-400">{siteConfig.contact.address}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-500 hover:text-white flex items-center justify-center text-slate-400 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-500 hover:text-white flex items-center justify-center text-slate-400 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-500 hover:text-white flex items-center justify-center text-slate-400 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4 Link Columns */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                {t(section.key, section.title)}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-white/5 bg-[#040a18]">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {year} {siteConfig.name} Ltd. {t('footer.rights', 'All Rights Reserved. Republic of Mauritius.')}
          </p>
          <div className="flex items-center gap-6">
            <span>{t('footer.fairRecruit', 'Fair Recruitment Certified')}</span>
            <span>&bull;</span>
            <span>{t('footer.zeroFee', 'Zero Worker Fee Policy')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
