import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'For Workers',
  description: 'Looking for work in Mauritius? MyRecruit connects overseas workers with legitimate employment opportunities. Applying is completely free.',
};

const steps = [
  { num: '01', title: 'Submit Your Application', desc: 'Fill in your details, upload your CV and passport, and submit your profile through our secure form.' },
  { num: '02', title: 'Profile Review', desc: 'Our team reviews your qualifications, experience and submitted documents.' },
  { num: '03', title: 'Employer Matching', desc: 'We match your profile with suitable opportunities as they become available.' },
  { num: '04', title: 'Interview & Selection', desc: 'If selected, we coordinate the next stage with the employer.' },
  { num: '05', title: 'Work Permit Process', desc: 'We support the documentation process to prepare for your employment in Mauritius.' },
];

export default function WorkersPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">For Workers</span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                Find Legitimate<br />Work in Mauritius
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Submit your profile and let our recruitment team match your skills with suitable employment opportunities in Mauritius.
              </p>
              <div className="bg-teal-500/15 border border-teal-500/30 rounded-xl px-5 py-3 inline-flex items-center gap-2 mb-8">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-teal-200 font-semibold text-sm">Applying is completely free for workers</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply" className="btn-accent text-base px-8 py-4">Apply Now — It&apos;s Free</Link>
                <Link href="/vacancies" className="btn-outline-white text-base px-8 py-4">View Vacancies</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85"
                  alt="Skilled international worker in modern industry"
                  width={800}
                  height={520}
                  className="w-full h-[460px] object-cover object-center"
                  priority
                />

                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 bg-[#0b1938]/90 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">100% Free Application</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="label-tag">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">How It Works for Workers</h2>
          </div>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 items-start bg-slate-50 dark:bg-[#0c1a35] rounded-xl p-5 border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-teal-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow">
                  {s.num}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/apply" className="btn-accent text-base px-10 py-4">Submit Your Application</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
