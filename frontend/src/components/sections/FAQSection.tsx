'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export function FAQSection() {
  const [tab, setTab] = useState<'employer' | 'worker'>('employer');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = faqs.filter((f) => f.category === tab);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="label-tag">FAQ</span>
          <h2 className="section-title mt-2">Frequently Asked Questions</h2>
          <p className="section-subtitle mt-4">
            Answers to common questions from employers and workers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center bg-white dark:bg-[#0c1a35] rounded-xl p-1.5 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 max-w-xs mx-auto">
          {(['employer', 'worker'] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setOpenId(null); }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                tab === t
                  ? 'bg-[#0b1938] dark:bg-teal-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {t === 'employer' ? 'Employers' : 'Workers'}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-[#0c1a35] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-slate-50 dark:hover:bg-[#11244a] transition-colors cursor-pointer"
                aria-expanded={openId === faq.id}
              >
                <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  openId === faq.id ? 'bg-[#0d9488] text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-slate-100 dark:bg-slate-800 mb-4" />
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Have a different question?{' '}
          <a href="/contact" className="text-[#0b1938] dark:text-teal-400 font-semibold hover:text-[#0d9488] transition-colors">
            Contact our team →
          </a>
        </p>
      </div>
    </section>
  );
}
