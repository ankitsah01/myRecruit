import { testimonials } from '@/data/testimonials';

const avatarColors = ['bg-[#0b1938]', 'bg-[#0d9488]', 'bg-teal-700'];
const initials = (name: string) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-tag">What People Say</span>
          <h2 className="section-title mt-2">Trusted by Employers & Workers</h2>
          <p className="section-subtitle mt-4 mx-auto max-w-2xl">
            Real feedback from the businesses and individuals we have worked with.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-slate-50 dark:bg-[#0c1a35] rounded-2xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col card-hover card-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#F59E0B] drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}{t.company ? ` · ${t.company}` : ''} · {t.country}
                  </p>
                </div>
                {/* Type badge */}
                <span className={`ml-auto text-xs font-semibold px-2.5 py-1 rounded-full ${
                  t.type === 'employer'
                    ? 'bg-[#0b1938]/10 text-[#0b1938] dark:bg-slate-800 dark:text-slate-200'
                    : 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300'
                }`}>
                  {t.type === 'employer' ? 'Employer' : 'Worker'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-8">
          * Placeholder testimonials shown. Genuine testimonials will be displayed as they are received.
        </p>
      </div>
    </section>
  );
}
