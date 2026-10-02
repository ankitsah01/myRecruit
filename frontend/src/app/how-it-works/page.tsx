import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/sections/CTABanner';
import { BuildingIcon } from '@/components/ui/BuildingIcon';
import { WorkerIcon } from '@/components/ui/WorkerIcon';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Understand the MyRecruit recruitment process for employers and workers — from submission to placement.',
};

const employerSteps = [
  { num: '01', title: 'Tell Us Your Requirement', desc: 'Submit your staffing needs, positions, experience requirements and timeline through our employer form.' },
  { num: '02', title: 'We Source & Screen', desc: 'Our team identifies and reviews potential candidates against your specific requirements.' },
  { num: '03', title: 'Candidate Selection', desc: 'Suitable candidates are presented for your review. Interviews are coordinated as required.' },
  { num: '04', title: 'Documentation & Permit Support', desc: 'We assist with the required recruitment and work permit documentation and coordination.' },
  { num: '05', title: 'Worker Arrives', desc: 'The selected worker is ready to begin employment at your business.' },
];

const workerSteps = [
  { num: '01', title: 'Submit Your Application', desc: 'Enter your personal, professional and contact information through our secure application form.' },
  { num: '02', title: 'Profile Verification', desc: 'Our team reviews your qualifications, experience and submitted documents.' },
  { num: '03', title: 'Employer Matching', desc: 'We match suitable candidates with available opportunities that fit your skills.' },
  { num: '04', title: 'Interview / Selection', desc: 'We coordinate the next stage with the employer, including any interview requirements.' },
  { num: '05', title: 'Work Permit Process', desc: 'We support the required documentation process to prepare for your employment in Mauritius.' },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">The Process</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">How It Works</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">A clear, structured recruitment process for both employers and workers — from first contact to successful placement.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Employers */}
          <div className="bg-slate-50 dark:bg-[#0c1a35] rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <BuildingIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">Pathway 1</p>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">For Employers</h2>
              </div>
            </div>
            <div className="space-y-6">
              {employerSteps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0b1938] dark:bg-teal-500/20 text-white dark:text-teal-300 border border-transparent dark:border-teal-500/30 font-black text-sm flex items-center justify-center flex-shrink-0">{s.num}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/request-workers" className="btn-accent w-full justify-center">Request Workers</Link>
            </div>
          </div>

          {/* Workers */}
          <div className="bg-[#0b1938] dark:bg-[#0c1a35] rounded-2xl p-8 shadow-sm border border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <WorkerIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-teal-400">Pathway 2</p>
                <h2 className="text-xl font-bold text-white">For Workers</h2>
              </div>
            </div>
            <div className="space-y-6">
              {workerSteps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">{s.num}</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="text-sm font-semibold text-white">No recruitment placement fees are charged to workers.</p>
              </div>
              <Link href="/apply" className="btn-accent w-full justify-center">Apply Now — It&apos;s Free</Link>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
