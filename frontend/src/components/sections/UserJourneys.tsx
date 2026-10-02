import Link from 'next/link';
import { BuildingIcon } from '@/components/ui/BuildingIcon';
import { WorkerIcon } from '@/components/ui/WorkerIcon';

const journeys = [
  {
    type: 'employer',
    tag: 'For Employers',
    title: 'Find the workforce your business needs.',
    description:
      'Tell us your staffing requirements and let our team source, screen and coordinate suitable overseas candidates — saving you time and effort.',
    features: ['Candidate Sourcing', 'Screening & Vetting', 'Interview Coordination', 'Work Permit Support'],
    cta: 'Request Workers',
    href: '/request-workers',
    btnClass: 'btn-primary',
    icon: <BuildingIcon className="w-8 h-8" />,
    bg: 'bg-[#0b1938] dark:bg-[#0c1a35] border border-transparent dark:border-slate-800',
    tagColor: 'text-teal-400',
    textColor: 'text-white',
    descColor: 'text-slate-300',
    featureColor: 'text-slate-200',
    featureDot: 'bg-[#14b8a6]',
    iconBg: 'bg-white/10 dark:bg-white/5',
    iconColor: 'text-[#14b8a6]',
  },
  {
    type: 'worker',
    tag: 'For Workers',
    title: 'Find legitimate opportunities in Mauritius.',
    description:
      'Submit your profile and let our recruitment team match your skills and experience with suitable employment opportunities in Mauritius.',
    features: ['Free to Apply', 'Profile Matching', 'Employer Connection', 'Work Permit Guidance'],
    cta: 'Apply for a Job',
    href: '/apply',
    btnClass: 'btn-accent',
    icon: <WorkerIcon className="w-10 h-10" />,
    bg: 'bg-slate-50 dark:bg-[#0c1a35] border border-slate-200/80 dark:border-slate-800',
    tagColor: 'text-[#0d9488] dark:text-teal-400',
    textColor: 'text-slate-900 dark:text-white',
    descColor: 'text-slate-600 dark:text-slate-300',
    featureColor: 'text-slate-700 dark:text-slate-300',
    featureDot: 'bg-[#0d9488]',
    iconBg: 'bg-teal-50 dark:bg-teal-950/60',
    iconColor: 'text-[#0d9488] dark:text-teal-300',
  },
];

export function UserJourneys() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="label-tag">Two Pathways</span>
          <h2 className="section-title mt-1">How Can We Help You?</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Whether you are an employer looking for overseas workers or an individual seeking opportunities in Mauritius — we are here to help.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {journeys.map((j) => (
            <div
              key={j.type}
              className={`${j.bg} rounded-2xl p-8 sm:p-10 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${j.iconBg} ${j.iconColor} mb-6`}>
                  {j.icon}
                </div>

                {/* Tag */}
                <span className={`block text-xs font-bold uppercase tracking-widest ${j.tagColor} mb-3`}>
                  {j.tag}
                </span>

                {/* Title */}
                <h3 className={`text-2xl sm:text-3xl font-bold ${j.textColor} mb-4 leading-tight`}>
                  {j.title}
                </h3>

                {/* Description */}
                <p className={`${j.descColor} text-base leading-relaxed mb-7`}>
                  {j.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {j.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm font-medium ${j.featureColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${j.featureDot} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={j.href} className={`${j.btnClass} text-base px-7 py-3`}>
                  {j.cta}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
