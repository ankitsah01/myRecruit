'use client';

import Link from 'next/link';
import { 
  Globe2, 
  ShieldCheck, 
  FileCheck2, 
  Zap, 
  UserCheck, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Award,
  HeartHandshake,
  Clock
} from 'lucide-react';

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  desc: string;
  points: [string, string];
  badgeColor: string;
  iconColor: string;
}

const benefits: BenefitItem[] = [
  {
    icon: Globe2,
    tag: 'Global Pipeline',
    title: 'International Sourcing Network',
    desc: 'Direct recruitment pipelines across South Asia, East Africa, and Madagascar, providing access to dependable talent unavailable in the local market.',
    points: [
      'Multi-country accredited partner channels',
      'Custom candidate matching to exact job specs'
    ],
    badgeColor: 'bg-teal-50 text-[#0d9488] border-teal-200/60',
    iconColor: 'text-[#0d9488]'
  },
  {
    icon: ShieldCheck,
    tag: 'Quality & Vetting',
    title: 'Rigorous 3-Tier Pre-Screening',
    desc: 'Every candidate undergoes comprehensive trade competency testing, criminal background verification, and stringent medical clearance before shortlist presentation.',
    points: [
      'Hands-on trade tests & credential verification',
      'Recorded video interviews & portfolio reviews'
    ],
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    iconColor: 'text-emerald-500'
  },
  {
    icon: FileCheck2,
    tag: 'Immigration & Legal',
    title: 'Work Permit & Statutory Support',
    desc: 'We manage the entire bureaucratic process — from Mauritius Ministry of Labour documentation and PIO attestations to medical board clearances.',
    points: [
      'Complete Work Permit file preparation',
      'Zero regulatory paperwork burden on your HR team'
    ],
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
    iconColor: 'text-cyan-500'
  },
  {
    icon: Zap,
    tag: 'Speed & Agility',
    title: 'Streamlined Hiring Turnaround',
    desc: 'Our structured recruitment workflow accelerates overseas sourcing cycles from tedious months into a predictable, fast-track hiring process.',
    points: [
      'Active pre-vetted talent pools ready to interview',
      'Transparent milestone updates at every recruitment stage'
    ],
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/60',
    iconColor: 'text-sky-500'
  },
  {
    icon: UserCheck,
    tag: 'Client Partnership',
    title: 'Dedicated Account Management',
    desc: 'A dedicated recruitment specialist serves as your single point of accountability throughout the requisition, selection, and local deployment.',
    points: [
      'One-on-one hiring consultant for your company',
      'Seamless airport reception & local induction support'
    ],
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/60',
    iconColor: 'text-sky-500'
  },
  {
    icon: Building2,
    tag: 'Sector Versatility',
    title: 'Cross-Industry Specialization',
    desc: 'Specialized recruitment consultants with proven domain expertise in construction, manufacturing, hospitality, agriculture, and logistics.',
    points: [
      'Industry-tailored trade competency benchmarks',
      'Flexible hiring: single specialists to bulk manpower'
    ],
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
    iconColor: 'text-indigo-500'
  }
];

interface MetricHighlight {
  value: string;
  suffix?: string;
  label: string;
  sub: string;
  badge: string;
  statusDot: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  accentBorder: string;
}

const highlights: MetricHighlight[] = [
  {
    value: '10',
    suffix: '+',
    label: 'Source Countries',
    sub: 'Active global talent hubs across Asia & Africa',
    badge: 'Global Pipeline',
    statusDot: 'bg-emerald-500',
    tags: ['India', 'Madagascar', 'Nepal', 'Kenya'],
    icon: Globe2,
    iconColor: 'text-[#0d9488]',
    accentBorder: 'group-hover:border-teal-500'
  },
  {
    value: '3',
    suffix: '-Tier',
    label: 'Candidate Screening',
    sub: 'Technical trade tests, background & medical checks',
    badge: 'Zero Compromise',
    statusDot: 'bg-cyan-500',
    tags: ['Trade Audited', 'Police Clearance', 'Health Fit'],
    icon: ShieldCheck,
    iconColor: 'text-cyan-500',
    accentBorder: 'group-hover:border-cyan-400'
  },
  {
    value: '99',
    suffix: '%',
    label: 'Permit Success',
    sub: '100% Mauritius Ministry of Labour compliant',
    badge: 'Statutory Assured',
    statusDot: 'bg-blue-500',
    tags: ['Ministry Liaison', 'Full Attestation', 'Legal Peace'],
    icon: Award,
    iconColor: 'text-blue-500',
    accentBorder: 'group-hover:border-blue-400'
  },
  {
    value: '4-6',
    suffix: 'Wks',
    label: 'Turnaround Target',
    sub: 'From client requisition to arrival on-site',
    badge: 'Fast-Track',
    statusDot: 'bg-teal-500',
    tags: ['Instant Shortlist', 'Priority Permits', 'Flight Ready'],
    icon: Clock,
    iconColor: 'text-teal-500',
    accentBorder: 'group-hover:border-teal-400'
  }
];

export function WhyChooseEmployers() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-[#070e1c] dark:via-[#091326] dark:to-[#070e1c] relative overflow-hidden">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#0b1938_1px,transparent_1px)] dark:bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/80 border border-teal-200/70 text-[#0d9488] dark:bg-teal-950/60 dark:border-teal-700/60 dark:text-teal-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0d9488]" />
            <span>Why Choose MyRecruit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1938] dark:text-white tracking-tight leading-tight mb-5">
            Built for Speed, Compliance &amp; <span className="text-[#0d9488] dark:text-teal-400">Quality Talent</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Eliminate overseas hiring risks and delays. We provide Mauritian employers with verified, job-ready international candidates backed by complete regulatory management and end-to-end recruitment accountability.
          </p>
        </div>

        {/* 4 Professional Metric Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`group relative bg-white dark:bg-[#0c1a35] rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl ${item.accentBorder} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Subtle Color Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0b1938] via-[#0d9488] to-[#0b1938] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon without dark background + Live Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                      <span className={`w-2 h-2 rounded-full ${item.statusDot} animate-pulse`} />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Value Number Display */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#0b1938] dark:group-hover:text-teal-300 transition-colors">
                      <span>{item.value}</span>
                      <span className="text-xl sm:text-2xl font-extrabold text-[#0d9488] dark:text-teal-400">{item.suffix}</span>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mt-1">
                      {item.label}
                    </div>
                  </div>

                  {/* Subtitle / Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.sub}
                  </p>
                </div>

                {/* Micro Tags Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="inline-block text-[10px] font-medium bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative bg-white dark:bg-[#0c1a35] rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-teal-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top accent highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0d9488] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div>
                  {/* Top Bar: Icon without dark background + Category Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-8 h-8 ${b.iconColor}`} />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${b.badgeColor}`}>
                      {b.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#0b1938] dark:group-hover:text-teal-300 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {b.desc}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 mt-auto">
                  {b.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#0d9488] dark:text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Employer Assurance & Call to Action Box */}
        <div className="mt-14 bg-gradient-to-r from-[#0b1938] to-[#071228] rounded-2xl p-8 sm:p-10 shadow-xl text-white relative overflow-hidden">
          {/* Subtle light accents */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
                <HeartHandshake className="w-3.5 h-3.5 text-[#14b8a6]" />
                <span>The MyRecruit Employer Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Risk-Free Recruitment with Guaranteed Candidate Placement
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                We stand behind every candidate we place. Enjoy our comprehensive probationary replacement guarantee, 100% compliant documentation, and dedicated after-deployment check-ins.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/request-workers"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5 text-center"
              >
                <span>Request Workers Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
