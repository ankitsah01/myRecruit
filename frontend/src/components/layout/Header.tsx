'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Mail, ArrowRight, Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const navLinks = [
  { key: 'nav.home', label: 'Home', href: '/' },
  { key: 'nav.employers', label: 'Employers', href: '/employers' },
  { key: 'nav.workers', label: 'Workers', href: '/workers' },
  { key: 'nav.sectors', label: 'Sectors', href: '/sectors' },
  { key: 'nav.vacancies', label: 'Vacancies', href: '/vacancies' },
  { key: 'nav.faq', label: 'FAQ', href: '/faq' },
  { key: 'nav.contact', label: 'Contact', href: '/contact' },
];

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#070e1c]/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800 py-2.5'
            : 'bg-white/95 dark:bg-[#070e1c]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 py-3.5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo */}
            <div className="shrink-0">
              <Logo variant="dark" size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-1 justify-center px-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                      active
                        ? 'text-teal-700 bg-teal-50/90 border border-teal-200/70 shadow-xs dark:text-teal-300 dark:bg-teal-950/60 dark:border-teal-700/60'
                        : 'text-[#314158] hover:text-[#0b1938] hover:bg-slate-100/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/80'
                    }`}
                  >
                    <span>{t(link.key, link.label)}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons, Theme Toggle & Language Selector */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <ThemeToggle />
              <LanguageSelector />
              <Link
                href="/request-workers"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 bg-[#0b1938] hover:bg-[#071228] text-white font-bold text-xs xl:text-sm rounded-lg transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                <span>{t('btn.requestWorkers', 'Request Workers')}</span>
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-xs xl:text-sm rounded-lg transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <span>{t('btn.applyWorker', 'Apply as Worker')}</span>
              </Link>
            </div>

            {/* Mobile Actions: Theme Toggle + Language Selector + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <LanguageSelector />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-[#0b1938] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-[#070e1c] text-slate-900 dark:text-slate-100 shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0c1a35]">
            <div onClick={() => setMobileOpen(false)}>
              <Logo variant="dark" size="sm" />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? 'text-teal-700 bg-teal-50/90 border border-teal-200/70 dark:text-teal-300 dark:bg-teal-950/60 dark:border-teal-700/60'
                      : 'text-[#314158] hover:bg-slate-50 hover:text-[#0b1938] dark:text-slate-200 dark:hover:bg-slate-800/60 dark:hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {t(link.key, link.label)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact Info in Mobile Menu */}
          <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0a1426] text-xs text-slate-600 dark:text-slate-400 space-y-2">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 hover:text-[#0b1938] dark:hover:text-teal-300 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#0d9488]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-[#0b1938] dark:hover:text-teal-300 font-medium truncate"
            >
              <Mail className="w-3.5 h-3.5 text-[#0d9488]" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5 bg-white dark:bg-[#070e1c]">
            <Link
              href="/request-workers"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0b1938] text-white font-bold text-sm rounded-xl shadow-xs dark:bg-teal-600 dark:border dark:border-teal-500"
            >
              {t('btn.requestWorkers', 'Request Workers')}
            </Link>
            <Link
              href="/apply"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm rounded-xl shadow-xs"
            >
              {t('btn.applyWorker', 'Apply as Worker')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
