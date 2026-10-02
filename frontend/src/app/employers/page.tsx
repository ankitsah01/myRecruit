import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CTABanner } from '@/components/sections/CTABanner';
import { WhyChooseEmployers } from '@/components/sections/WhyChooseEmployers';

export const metadata: Metadata = {
  title: 'For Employers',
  description: 'Recruit qualified overseas workers for your Mauritius business. MyRecruit sources, screens and coordinates international candidates across key sectors.',
};

export default function EmployersPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">For Employers</span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                Find the Workforce<br />Your Business Needs
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Tell us your staffing requirements and let our team source, screen and coordinate suitable overseas candidates — saving you time, cost and complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-workers" className="btn-accent text-base px-8 py-4">Request Workers Now</Link>
                <Link href="/contact" className="btn-outline-white text-base px-8 py-4">Talk to Our Team</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=85"
                  alt="Construction workers"
                  width={700}
                  height={460}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseEmployers />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to Start Recruiting?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">Submit your staffing requirements and our team will reach out to discuss how we can help.</p>
          <Link href="/request-workers" className="btn-accent text-base px-10 py-4">Request Workers</Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
