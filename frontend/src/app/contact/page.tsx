import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact MyRecruit Ltd in Mauritius. Reach out via phone, email, WhatsApp or our contact form.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact Our Team</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Have questions about overseas recruitment, worker applications, or work permit procedures? We&apos;re here to help.</p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
