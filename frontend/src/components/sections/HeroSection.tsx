'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck } from 'lucide-react';
import mauritiusPinImg from '../../../public/mauritius-pin.png';

const trustBadges = [
  {
    icon: (
      <Image
        src={mauritiusPinImg}
        alt="Mauritius Based"
        width={20}
        height={20}
        className="w-5 h-5 object-contain shrink-0 drop-shadow-xs"
      />
    ),
    label: 'Mauritius Based',
  },
  {
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 12C3.8 7.5 7.6 4.5 12 4.5C16.4 4.5 20.2 7.5 22 12C20.2 16.5 16.4 19.5 12 19.5C7.6 19.5 3.8 16.5 2 12Z"
          fill="#FFFFFF"
          stroke="#0f766e"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="4.2" fill="#0d9488" stroke="#0f766e" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="2.2" fill="#0b1938" />
        <circle cx="13.2" cy="10.8" r="0.9" fill="#FFFFFF" />
      </svg>
    ),
    label: 'Transparent Process',
  },
  {
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.3V2Z"
          fill="#0284c7"
        />
        <path
          d="M12 2L20 5.5V11.5C20 16.5 16.6 21.1 12 22.3V2Z"
          fill="#38bdf8"
        />
        <path
          d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.3C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z"
          stroke="#0369a1"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15.5 9.5"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'Verified Candidates',
  },
  {
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9.5" fill="#FFFFFF" stroke="#EF4444" strokeWidth="2.5" />
        <line x1="5.28" y1="5.28" x2="18.72" y2="18.72" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'No Worker Fees',
  },
];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/15 to-white dark:from-[#050b16] dark:via-[#071326] dark:to-[#070e1c] pt-24 pb-16">
      {/* Background subtle overlay pattern */}
      <div className="absolute inset-0 opacity-25 dark:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(15,37,87,0.12) 1.5px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Soft Ambient Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50 dark:opacity-30 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-36 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column — Content & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50/90 border border-teal-200/90 rounded-full px-4 py-2 text-xs sm:text-sm text-teal-700 dark:bg-teal-950/60 dark:border-teal-700/60 dark:text-teal-300 font-semibold mb-6 animate-fade-in-up shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>{t('hero.badge', 'Licensed Recruitment Agency • Mauritius')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-black text-[#0b1938] dark:text-white leading-[1.14] tracking-tight mb-6 animate-fade-in-up delay-100">
              {t('hero.titleLine1', 'Connecting')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] via-[#14b8a6] to-[#0f766e]">
                {t('hero.titleHighlight1', 'Global Talent')}
              </span>
              <br />
              {t('hero.titleLine2', 'With')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b1938] via-[#0d9488] to-[#14b8a6] dark:from-white dark:via-teal-300 dark:to-teal-400">
                {t('hero.titleHighlight2', 'Mauritius')}
              </span>
            </h1>

            {/* Subheadline Box */}
            <div className="relative mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300 justify-center lg:justify-start">
              <Link
                href="/request-workers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0b1938] hover:bg-[#071228] text-white font-bold text-base rounded-xl transition-all shadow-md shadow-slate-900/10 hover:-translate-y-0.5 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('btn.requestWorkers', 'Request Workers')}
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-base rounded-xl transition-all shadow-md shadow-teal-900/10 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('btn.findJob', 'Find Jobs in Mauritius')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up delay-400 pt-6 border-t border-slate-200/90 dark:border-slate-800 max-w-xl mx-auto lg:mx-0">
              {siteConfig.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-[#0b1938] dark:text-white leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Official Circular Accreditation & License Seal Emblem with Motion */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end xl:pr-10 2xl:pr-16 relative animate-fade-in-up delay-200 py-6 lg:py-0">
            {/* Ambient Breathing Background Glow */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-teal-400/20 via-teal-600/15 to-cyan-300/15 blur-3xl -z-10 animate-glow-pulse" />

            {/* Concentric Radar / Ripple Rings Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] xl:w-[460px] xl:h-[460px] flex items-center justify-center">
              {/* Outermost Dashed Rotating Orbit */}
              <div className="absolute inset-0 rounded-full border border-dashed border-teal-400/30 animate-orbit-slow">
                {/* Orbiting Teal Satellite Particle */}
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#14b8a6] shadow-[0_0_12px_#14b8a6]" />
              </div>

              {/* Radar Ripple Ring 1 */}
              <div
                className="absolute inset-6 sm:inset-8 rounded-full border border-teal-400/25 animate-radar-ripple"
                style={{ animationDelay: '0s' }}
              />

              {/* Radar Ripple Ring 2 with Reverse Orbit & Cyan Satellite */}
              <div
                className="absolute inset-12 sm:inset-16 rounded-full border border-teal-500/30 animate-radar-ripple"
                style={{ animationDelay: '1.3s' }}
              />
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-dashed border-teal-400/25 animate-orbit-reverse pointer-events-none">
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              </div>

              {/* Radar Ripple Ring 3 */}
              <div
                className="absolute inset-20 sm:inset-24 rounded-full border border-teal-400/35 animate-radar-ripple"
                style={{ animationDelay: '2.6s' }}
              />

              {/* Central Circular Seal Disc with Smooth Levitation / Float */}
              <div className="relative z-10 w-64 h-64 sm:w-76 sm:h-76 xl:w-84 xl:h-84 rounded-full bg-gradient-to-b from-[#0b1938] via-[#091530] to-[#060e20] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl shadow-slate-900/30 border border-teal-400/40 ring-1 ring-teal-400/30 backdrop-blur-xl group hover:border-teal-400/70 hover:scale-105 hover:shadow-[0_0_50px_rgba(13,148,136,0.35)] transition-all duration-500 animate-float-subtle">
                {/* Subtle Inner Glow Rim */}
                <div className="absolute inset-2 rounded-full border border-white/10 pointer-events-none" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent blur-xs" />

                {/* CERTIFIED Tag with Shield */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 mb-2 sm:mb-2.5 shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-teal-300">
                    CERTIFIED
                  </span>
                </div>

                {/* 3-Line Title: Licensed Recruitment Agency */}
                <h3 className="text-xl sm:text-2xl xl:text-3xl font-black text-white leading-tight tracking-tight my-1 sm:my-1.5 drop-shadow-sm">
                  Licensed<br />
                  Recruitment<br />
                  Agency
                </h3>

                {/* Teal Horizontal Rule */}
                <div className="w-14 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent my-2 sm:my-2.5" />

                {/* Subtitle: PRA ACT 2023 MAURITIUS */}
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-bold tracking-wider text-slate-200 uppercase">
                    PRA ACT 2023
                  </p>
                  <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-teal-300 uppercase">
                    MAURITIUS
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-[#070e1c]/90 border-t border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3.5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[#0b1938] dark:text-slate-200 font-semibold">
                <span className="shrink-0 flex items-center justify-center">{badge.icon}</span>
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
