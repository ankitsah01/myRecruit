import type { Metadata } from 'next';
import Link from 'next/link';
import { vacancies } from '@/data/vacancies';

export const metadata: Metadata = {
  title: 'Current Vacancies',
  description: 'Browse current job opportunities in Mauritius across construction, manufacturing, hospitality, domestic care and agriculture sectors.',
};

export default function VacanciesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">Opportunities</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">Current Job Opportunities</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Browse available positions in Mauritius across key employment sectors.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors">
        <div className="max-w-7xl mx-auto">
          {vacancies.length === 0 ? (
            <div className="max-w-lg mx-auto text-center py-20">
              <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">No Vacancies Right Now</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">No vacancies are available right now. Submit your profile and we will contact you when a suitable opportunity becomes available.</p>
              <Link href="/apply" className="btn-accent text-base px-8 py-4">Submit Your Profile</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vacancies.map((v) => (
                <div key={v.id} className="bg-white dark:bg-[#0c1a35] rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{v.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{v.industry} · {v.location}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-teal-500/10 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 rounded-full whitespace-nowrap">{v.employmentType}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{v.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">{v.salary}</span>
                    <span className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">{v.experience} exp.</span>
                  </div>
                  <Link href="/apply" className="btn-accent w-full justify-center text-sm py-2.5">Apply Now</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
