import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    num: '01',
    badge: 'Global Sourcing',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Wider Talent Pool',
    desc: 'Access qualified candidates beyond the local recruitment market through our international sourcing network.',
    accentBg: 'bg-teal-50 dark:bg-teal-950/60 text-[#0d9488] dark:text-teal-300 border-teal-200/60 dark:border-teal-800/60',
    topGlow: 'from-teal-500 to-emerald-400',
    badgeColor: 'text-[#0d9488] dark:text-teal-400 bg-teal-500/10 border-teal-500/20',
  },
  {
    num: '02',
    badge: '100% Verified',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Candidate Screening',
    desc: 'Candidates are reviewed against employer requirements including skills, experience and documentation.',
    accentBg: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 border-cyan-200/60 dark:border-cyan-800/60',
    topGlow: 'from-cyan-500 to-blue-500',
    badgeColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    num: '03',
    badge: 'Fast-Track',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Simplified Recruitment',
    desc: 'We manage the sourcing and coordination, reducing the time and effort required from employers.',
    accentBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
    topGlow: 'from-emerald-500 to-teal-400',
    badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    num: '04',
    badge: 'Full Lifecycle',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'End-to-End Support',
    desc: 'Support throughout the recruitment process — from candidate sourcing through to worker arrival.',
    accentBg: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/60',
    topGlow: 'from-sky-500 to-indigo-500',
    badgeColor: 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20',
  },
  {
    num: '05',
    badge: 'Multi-Sector',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Industry Expertise',
    desc: 'Focused recruitment across key operational sectors including construction, manufacturing, hospitality and more.',
    accentBg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/60',
    topGlow: 'from-blue-500 to-cyan-500',
    badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    num: '06',
    badge: 'Regulatory Compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: 'Mauritius Focused',
    desc: 'In-depth knowledge of Mauritius employment requirements, work permit procedures and recruitment compliance.',
    accentBg: 'bg-teal-50 dark:bg-teal-950/60 text-[#0d9488] dark:text-teal-300 border-teal-200/60 dark:border-teal-800/60',
    topGlow: 'from-teal-500 to-cyan-400',
    badgeColor: 'text-[#0d9488] dark:text-teal-400 bg-teal-500/10 border-teal-500/20',
  },
];

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto">

        {/* Top: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          <div>
            <span className="label-tag">About MyRecruit</span>
            <h2 className="section-title mt-2 mb-6">
              A Recruitment Partner{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#14b8a6]">
                You Can Trust
              </span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                MyRecruit Ltd is a Mauritius-based recruitment agency specialising in the sourcing, screening and placement of overseas workers across key industries throughout Mauritius.
              </p>
              <p>
                We work directly with Mauritian employers to understand their workforce requirements and coordinate the identification, review and recruitment of suitable non-citizen candidates — managing the process from initial sourcing through to work permit coordination and worker arrival.
              </p>
              <p>
                Our approach is built on transparency, professionalism and a genuine commitment to responsible recruitment practices that protect both employer and worker interests.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {[
                'Licensed Operation',
                'International Candidate Sourcing',
                'Candidate Screening',
                'Work Permit Coordination',
                'Employer Support',
                'Transparent Recruitment',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <svg className="w-4 h-4 text-[#0d9488] dark:text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/about" className="btn-accent">
                Learn More About Us
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=700&q=85"
                alt="MyRecruit professional team meeting"
                width={700}
                height={480}
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#0c1a35] rounded-2xl p-5 shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="text-3xl font-black text-[#0b1938] dark:text-white mb-1">10+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Years Recruiting<br/>in Mauritius</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#0b1938] dark:bg-[#0c1a35] rounded-2xl p-5 shadow-xl border border-white/10 dark:border-slate-700">
              <div className="text-3xl font-black text-[#14b8a6] mb-1">10+</div>
              <div className="text-sm text-slate-300 font-medium">Source<br/>Countries</div>
            </div>
          </div>
        </div>

        {/* Why MyRecruit Grid */}
        <div className="text-center mb-14">
          <span className="label-tag">Why Choose Us</span>
          <h2 className="section-title mt-2 text-[#0b1938] dark:text-white">Why MyRecruit?</h2>
          <p className="section-subtitle mt-3 mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            A trusted bridge between international talent and Mauritius industry leaders, defined by compliance, care, and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-[#0c1a35] rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-teal-500/40 dark:hover:border-teal-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.topGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div>
                {/* Header row: Icon pill + Badge & Number Watermark */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl border ${f.accentBg} flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110`}
                  >
                    {f.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-2xl font-black text-slate-200 dark:text-slate-700/60 select-none group-hover:text-teal-500/40 transition-colors">
                      {f.num}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${f.badgeColor}`}>
                      {f.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#0d9488] dark:group-hover:text-teal-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
