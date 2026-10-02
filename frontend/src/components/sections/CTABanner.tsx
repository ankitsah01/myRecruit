import Link from 'next/link';

export function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b1938] to-[#040b18] dark:from-[#060c18] dark:to-[#02050b] border border-white/10 p-10 sm:p-16 shadow-2xl">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-teal-300 mb-6">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Take the Next Step
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Take the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#14b8a6]">Next Step?</span>
            </h2>

            <div className="max-w-2xl mx-auto mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">For Employers</p>
                  <p className="text-sm text-slate-300">Tell us what workers you need and we will source, screen and coordinate suitable candidates for your business.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">For Workers</p>
                  <p className="text-sm text-slate-300">Submit your profile and our team will match you with legitimate employment opportunities in Mauritius.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/request-workers" className="btn-accent text-base px-9 py-4 shadow-lg shadow-teal-950/25 w-full sm:w-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Request Workers
              </Link>
              <Link href="/apply" className="btn-outline-white text-base px-9 py-4 w-full sm:w-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Find a Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
