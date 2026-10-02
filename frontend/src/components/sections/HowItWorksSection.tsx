'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BuildingIcon } from '@/components/ui/BuildingIcon';
import { WorkerIcon } from '@/components/ui/WorkerIcon';

interface Step {
  num: string;
  tag: string;
  title: string;
  desc: string;
  details: string;
  icon: React.ReactNode;
}

const employerSteps: Step[] = [
  {
    num: '01',
    tag: 'Requirements Phase',
    title: 'Tell Us Your Requirement',
    desc: 'Submit your precise workforce needs, role specifications, required skills, and expected arrival timeline.',
    details: 'Job profile analysis • Headcount planning • Salary benchmarking',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'International Talent Sourcing',
    title: 'We Source & Rigorously Screen',
    desc: 'Our sourcing network across accredited partner regions reviews background, qualifications, and past performance.',
    details: 'Skill competency assessment • Criminal background check • Trade verification',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Candidate Selection',
    title: 'Shortlisting & Employer Interview',
    desc: 'Curated shortlist of pre-screened candidates presented with video profiles and interviews coordinated seamlessly.',
    details: 'Video interview coordination • Technical evaluation • Employer choice confirmation',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    tag: 'Statutory Compliance',
    title: 'Documentation & Work Permit Support',
    desc: 'Complete administrative management for Mauritius Work Permit applications, attestation, and medical clearances.',
    details: 'Ministry of Labour liaison • Medical fitness vetting • Flight logistics arrangement',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: '05',
    tag: 'Deployment & Onboarding',
    title: 'Worker Arrival & On-Site Handover',
    desc: 'Worker arrives in Mauritius, airport reception coordination, and orientation to seamlessly integrate into your operations.',
    details: 'Airport pick-up assistance • Orientation briefing • Post-placement check-ins',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const workerSteps: Step[] = [
  {
    num: '01',
    tag: 'Registration',
    title: 'Submit Your Profile (Free)',
    desc: 'Register your contact information, passport details, trade experience, and upload your CV through our secure portal.',
    details: 'Zero fees charged • Secure document storage • Fast initial acknowledgement',
    icon: <WorkerIcon className="w-5 h-5" />,
  },
  {
    num: '02',
    tag: 'Document Validation',
    title: 'Profile & Document Verification',
    desc: 'Our specialist consultants verify your identity, employment background, and professional qualifications.',
    details: 'Passport authenticity check • Experience verification • Skill categorization',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Career Matching',
    title: 'Employer Job Matching',
    desc: 'When an authorized Mauritian company requests workers with your profile, we match and submit your credentials.',
    details: 'Direct employer match • Transparent salary offer • Clear contract terms',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '04',
    tag: 'Interview & Selection',
    title: 'Employer Interview & Offer',
    desc: 'We brief you for the interview, coordinate the meeting with the Mauritian employer, and clarify all contract details.',
    details: 'Interview preparation • Contract clarity explanation • Offer letter execution',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '05',
    tag: 'Mauritius Work Permit',
    title: 'Work Permit & Travel Clearance',
    desc: 'We coordinate with the employer to secure your legal Work Permit and assist you with arrival preparations.',
    details: 'Legal government visa/permit • Travel advisory briefing • Arrival welcome guidance',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<'employer' | 'worker'>('employer');

  const steps = activeTab === 'employer' ? employerSteps : workerSteps;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#070e1c] dark:via-[#091326] dark:to-[#070e1c] relative overflow-hidden">
      {/* Decorative background grid subtle */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#0b1938 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:bg-teal-950/60 dark:border-teal-700/60 dark:text-teal-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1938] dark:text-white tracking-tight leading-tight">
            How The Process Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A clear, compliant, and transparent 5-step roadmap engineered for both employers and overseas job seekers — from first consultation to verified placement.
          </p>

          {/* Interactive Dual-Pathway Selector */}
          <div className="mt-8 inline-flex p-1.5 bg-slate-200/80 dark:bg-[#0c1a35] backdrop-blur-sm rounded-2xl border border-slate-300/60 dark:border-slate-700 shadow-inner">
            <button
              onClick={() => setActiveTab('employer')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'employer'
                  ? 'bg-[#0b1938] text-white shadow-lg shadow-[#0b1938]/25 scale-[1.02] dark:bg-slate-800 dark:border dark:border-slate-600'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <BuildingIcon className="w-4 h-4 text-teal-400" />
              <span>For Employers (Hire Workers)</span>
            </button>
            <button
              onClick={() => setActiveTab('worker')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'worker'
                  ? 'bg-[#0d9488] text-white shadow-lg shadow-teal-600/25 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <WorkerIcon className="w-5 h-5" />
              <span>For Workers (Job Seekers)</span>
            </button>
          </div>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {/* Connecting bar for desktop */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-teal-500/20 via-[#0d9488] to-teal-500/20 z-0"></div>

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="group relative bg-white dark:bg-[#0c1a35] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col z-10"
            >
              {/* Step indicator header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b1938] to-[#152e5c] text-white flex items-center justify-center font-black text-sm shadow-md group-hover:from-[#0d9488] group-hover:to-[#0f766e] group-hover:text-white transition-all duration-300">
                  {step.num}
                </div>
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#0d9488] dark:text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Tag / Category */}
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#0d9488] dark:text-teal-400 mb-1.5">
                {step.tag}
              </div>

              {/* Step Title */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0b1938] dark:group-hover:text-teal-300 transition-colors leading-snug mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1">
                {step.desc}
              </p>

              {/* Feature highlight bullet */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 -mx-2 -mb-2 p-2 rounded-xl">
                {step.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
