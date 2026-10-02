const principles = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: 'Candidate Verification',
    desc: 'We review candidate identity, documentation and relevant experience before presenting any individual to an employer.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Clear Employment Terms',
    desc: 'Workers should understand their employment terms, conditions and responsibilities before accepting any placement.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'No Worker Placement Fees',
    desc: 'Workers are not charged recruitment placement fees. Applying to MyRecruit is entirely free for all candidates.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Licensed Operation',
    desc: 'MyRecruit Ltd operates as a licensed recruitment agency in Mauritius. Contact us directly for our licensing information.',
  },
];

export function ResponsibleRecruitment() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="label-tag">Our Commitment</span>
            <h2 className="section-title mt-2 mb-5">
              Recruitment With{' '}
              <span className="text-teal-600 dark:text-teal-400">Transparency</span> &amp; Responsibility
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Responsible recruitment is central to how we operate. We are committed to a process that is transparent, fair and protective of all parties involved — both employer and worker.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Our principles are built around honesty, verified information and a clear understanding of rights and responsibilities at every stage of the recruitment process.
            </p>
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-[#0c1a35] border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:border-teal-500/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
