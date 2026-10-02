import type { Metadata } from 'next';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about MyRecruit Ltd recruitment services for employers and workers.',
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">FAQ</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Answers to common questions from employers and workers about our recruitment services.</p>
        </div>
      </section>
      <FAQSection />
      <CTABanner />
    </div>
  );
}
