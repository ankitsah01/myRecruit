import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CTABanner } from '@/components/sections/CTABanner';
import { ResponsibleRecruitment } from '@/components/sections/ResponsibleRecruitment';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MyRecruit Ltd — a licensed Mauritius-based recruitment agency specialising in overseas worker recruitment for employers across key industries.',
};

const features = [
  { title: 'Wider Talent Pool', desc: 'Access qualified candidates beyond the local recruitment market through our international sourcing network.' },
  { title: 'Candidate Screening', desc: 'Candidates are reviewed against employer requirements before being presented for consideration.' },
  { title: 'Simplified Recruitment', desc: 'We manage the sourcing and coordination, reducing time and effort required from employers.' },
  { title: 'End-to-End Support', desc: 'Support throughout the full recruitment process from sourcing through to worker arrival.' },
  { title: 'Industry Expertise', desc: 'Focused recruitment across key operational sectors including construction, manufacturing and hospitality.' },
  { title: 'Mauritius Focused', desc: 'In-depth knowledge of Mauritius employment requirements, work permit procedures and recruitment compliance.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">About MyRecruit</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2 mb-5 leading-tight">
            A Recruitment Partner<br />You Can Trust
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            MyRecruit Ltd is a Mauritius-based recruitment agency focused on connecting employers with qualified overseas workers across key industries.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="label-tag">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Who We Are</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>MyRecruit Ltd is a licensed recruitment agency based in Mauritius, specialising in the sourcing, screening and placement of overseas workers across key employment sectors.</p>
              <p>We work directly with Mauritian employers to understand their workforce requirements and coordinate the identification, review and recruitment of suitable non-citizen candidates — managing the process from initial sourcing through to work permit coordination and worker arrival.</p>
              <p>For overseas workers, we provide a legitimate and transparent pathway to explore employment opportunities in Mauritius — free of charge.</p>
              <p>Our approach is built on transparency, professionalism and a genuine commitment to responsible recruitment practices that protect both employer and worker interests.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/request-workers" className="btn-accent">Request Workers</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=700&q=85"
                alt="MyRecruit professional team"
                width={700}
                height={480}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-[#0c1a35] rounded-xl p-4 shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="text-2xl font-black text-[#0b1938] dark:text-white">10+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Years in Mauritius</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-[#0b1938] dark:bg-[#0c1a35] rounded-xl p-4 shadow-xl border border-white/10">
              <div className="text-2xl font-black text-[#0d9488] dark:text-teal-400">10+</div>
              <div className="text-xs text-slate-300 font-medium">Source Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c]/80 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="label-tag">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Why MyRecruit?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group relative bg-white dark:bg-[#0c1a35] rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-teal-500/40 dark:hover:border-teal-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-950/60 text-[#0d9488] dark:text-teal-400 border border-teal-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-2xl font-black text-slate-200 dark:text-slate-700/60 select-none group-hover:text-teal-500/40 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#0d9488] dark:group-hover:text-teal-300 transition-colors">{f.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="responsible">
        <ResponsibleRecruitment />
      </div>
      <CTABanner />
    </div>
  );
}
