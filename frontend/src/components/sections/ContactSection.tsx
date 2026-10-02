'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="label-tag">Get In Touch</span>
          <h2 className="section-title mt-2 text-[#0b1938] dark:text-white">Talk to MyRecruit</h2>
          <p className="section-subtitle mt-4 mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            Whether you are an employer or a worker, our team is ready to help. Reach out and we will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            {[
              {
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                label: 'Email Us',
                value: siteConfig.contact.email,
                href: `mailto:${siteConfig.contact.email}`,
              },
              {
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                label: 'Call Us',
                value: siteConfig.contact.phone,
                href: `tel:${siteConfig.contact.phone}`,
              },
              {
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                label: 'Office',
                value: siteConfig.contact.address,
                href: siteConfig.contact.mapsUrl,
              },
              {
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                label: 'Office Hours',
                value: siteConfig.contact.officeHours,
                href: null,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white dark:bg-[#0c1a35] rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-5 py-4 transition-colors shadow-md"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white dark:bg-[#0c1a35] rounded-2xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send Us a Message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="btn-outline text-sm px-6 py-2.5">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                    <input required className="input-field dark:bg-[#070e1c] dark:border-slate-700 dark:text-white dark:placeholder-slate-500" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                    <input required type="email" className="input-field dark:bg-[#070e1c] dark:border-slate-700 dark:text-white dark:placeholder-slate-500" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone / WhatsApp</label>
                    <input className="input-field dark:bg-[#070e1c] dark:border-slate-700 dark:text-white dark:placeholder-slate-500" placeholder="+230 XXX XXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject *</label>
                    <select required className="select-field dark:bg-[#070e1c] dark:border-slate-700 dark:text-white" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                      <option value="" className="dark:bg-[#070e1c] dark:text-slate-400">Select subject</option>
                      <option value="employer" className="dark:bg-[#070e1c] dark:text-white">I need workers</option>
                      <option value="worker" className="dark:bg-[#070e1c] dark:text-white">I want to work in Mauritius</option>
                      <option value="general" className="dark:bg-[#070e1c] dark:text-white">General enquiry</option>
                      <option value="other" className="dark:bg-[#070e1c] dark:text-white">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                  <textarea required rows={5} className="input-field dark:bg-[#070e1c] dark:border-slate-700 dark:text-white dark:placeholder-slate-500 resize-none" placeholder="Tell us how we can help you..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full text-base py-3.5 dark:bg-teal-600 dark:hover:bg-teal-700 dark:text-white">
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
