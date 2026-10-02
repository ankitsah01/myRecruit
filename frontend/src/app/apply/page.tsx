'use client';

import { useState } from 'react';
import { WorkerIcon } from '@/components/ui/WorkerIcon';

const initialForm = {
  fullName: '',
  dob: '',
  nationality: '',
  passportNumber: '',
  phone: '',
  email: '',
  currentCountry: '',
  fieldOfInterest: '',
  yearsExperience: '',
  additionalInfo: '',
};

export default function ApplyPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (k: keyof typeof form, v: string) => setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="pt-24 min-h-[75vh] bg-slate-50 dark:bg-[#070e1c] flex items-center justify-center px-4 transition-colors">
        <div className="max-w-md w-full text-center bg-white dark:bg-[#0c1a35] p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Application Submitted!</h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
            Thank you for applying with MyRecruit Ltd. Your profile has been registered in our database. We will notify you when a matching job opening opens in Mauritius.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setForm(initialForm);
            }}
            className="btn-accent w-full text-sm py-3 font-semibold"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
            Candidate Application
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Find Work in Mauritius</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Submit your profile and let our team match your experience with verified opportunities in Mauritius.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors">
        <div className="max-w-3xl mx-auto">
          {/* Zero fee banner */}
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-5 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-950 dark:text-emerald-200">Applying is 100% Free for Workers</h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-300/90">
                MyRecruit Ltd does NOT charge any recruitment or placement fees to candidate job seekers.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0c1a35] rounded-2xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center p-1.5">
                <WorkerIcon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Worker Registration Form</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Please provide genuine information matching your passport</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-teal-400 mb-4">
                  1. Personal &amp; Identity
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Legal Name *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="As printed on passport"
                      value={form.fullName}
                      onChange={(e) => set('fullName', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Date of Birth *</label>
                    <input
                      required
                      type="date"
                      className="input-field"
                      value={form.dob}
                      onChange={(e) => set('dob', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Nationality *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="e.g. Malagasy, Indian, Bangladeshi"
                      value={form.nationality}
                      onChange={(e) => set('nationality', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Passport Number *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="Valid international passport"
                      value={form.passportNumber}
                      onChange={(e) => set('passportNumber', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Current Country of Residence *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="Where do you live currently?"
                      value={form.currentCountry}
                      onChange={(e) => set('currentCountry', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number / WhatsApp *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="+country code and phone"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      className="input-field"
                      placeholder="personal@email.com"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-teal-400 mb-4">
                  2. Profession &amp; Experience
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Sector of Interest *</label>
                    <select
                      required
                      className="select-field"
                      value={form.fieldOfInterest}
                      onChange={(e) => set('fieldOfInterest', e.target.value)}
                    >
                      <option value="">Select industry</option>
                      <option value="Construction">Construction</option>
                      <option value="Manufacturing & Textiles">Manufacturing &amp; Textiles</option>
                      <option value="Hospitality & Tourism">Hospitality &amp; Tourism</option>
                      <option value="Domestic & Care">Domestic &amp; Care</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Other">Other Skills</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Years of Experience *</label>
                    <select
                      required
                      className="select-field"
                      value={form.yearsExperience}
                      onChange={(e) => set('yearsExperience', e.target.value)}
                    >
                      <option value="">Select years</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">CV / Bio-data Document</label>
                    <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 text-center hover:border-teal-500 dark:hover:border-teal-400 bg-slate-50/50 dark:bg-[#070e1c]/40 transition-colors">
                      <input type="file" accept=".pdf,.doc,.docx" className="text-xs text-slate-500 dark:text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-500 transition-colors" />
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">Accepted: PDF, DOC, DOCX up to 5MB</p>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Passport Scan / Photo</label>
                    <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 text-center hover:border-teal-500 dark:hover:border-teal-400 bg-slate-50/50 dark:bg-[#070e1c]/40 transition-colors">
                      <input type="file" accept=".jpg,.jpeg,.png,.pdf" className="text-xs text-slate-500 dark:text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-500 transition-colors" />
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">Accepted: JPG, PNG, PDF up to 5MB</p>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Additional Details</label>
                    <textarea
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Tell us about your certifications, foreign work history, or languages you speak..."
                      value={form.additionalInfo}
                      onChange={(e) => set('additionalInfo', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-[#070e1c] p-4 rounded-xl text-xs text-slate-500 dark:text-slate-400 leading-relaxed border border-slate-100 dark:border-slate-800">
                By submitting this form, you confirm that your provided information is truthful and authorize MyRecruit Ltd to store your documents for potential employer matching in accordance with our data privacy policy.
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-accent w-full text-base py-4 font-bold"
              >
                {status === 'loading' ? 'Processing Application...' : 'Submit Application — Free'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
