'use client';

import { useState } from 'react';
import { BuildingIcon } from '@/components/ui/BuildingIcon';

const initialForm = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  industry: '',
  numberOfWorkers: '',
  positions: '',
  requiredSkills: '',
  minExperience: '',
  startDate: '',
  salaryRange: '',
  accommodation: '',
  preferredCountry: '',
  additionalInfo: '',
};

export default function RequestWorkersPage() {
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
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Submitted!</h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
            Thank you for submitting your workforce request. Our team will review your requirements and get in touch with you shortly.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setForm(initialForm);
            }}
            className="btn-accent w-full text-sm py-3 font-semibold"
          >
            Submit Another Request
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
            Employer Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Request Workers</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us what you need. We’ll help you build the right workforce.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#0c1a35] rounded-2xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <BuildingIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Employer Workforce Request</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Provide details about your required staff and company</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-teal-400 mb-4">
                  1. Company &amp; Contact Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Company Name *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="e.g. Island Construction Ltd"
                      value={form.companyName}
                      onChange={(e) => set('companyName', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Contact Person *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="Full Name"
                      value={form.contactPerson}
                      onChange={(e) => set('contactPerson', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      className="input-field"
                      placeholder="corporate@domain.mu"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="+230 XXX XXXX"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-teal-400 mb-4">
                  2. Staffing Requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Industry Sector *</label>
                    <select
                      required
                      className="select-field"
                      value={form.industry}
                      onChange={(e) => set('industry', e.target.value)}
                    >
                      <option value="">Select an industry</option>
                      <option value="Construction">Construction</option>
                      <option value="Manufacturing & Textiles">Manufacturing &amp; Textiles</option>
                      <option value="Hospitality & Tourism">Hospitality &amp; Tourism</option>
                      <option value="Domestic & Care">Domestic &amp; Care</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Number of Workers *</label>
                    <input
                      required
                      type="number"
                      min="1"
                      className="input-field"
                      placeholder="e.g. 5"
                      value={form.numberOfWorkers}
                      onChange={(e) => set('numberOfWorkers', e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Position(s) Needed *</label>
                    <input
                      required
                      className="input-field"
                      placeholder="e.g. Masons, Tile Layers, Plumbers"
                      value={form.positions}
                      onChange={(e) => set('positions', e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Key Skills Required</label>
                    <textarea
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Describe necessary capabilities or trade certifications..."
                      value={form.requiredSkills}
                      onChange={(e) => set('requiredSkills', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-teal-400 mb-4">
                  3. Terms &amp; Logistics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Minimum Experience</label>
                    <select
                      className="select-field"
                      value={form.minExperience}
                      onChange={(e) => set('minExperience', e.target.value)}
                    >
                      <option value="">Select requirement</option>
                      <option value="Entry level">Entry level</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Expected Start Date</label>
                    <input
                      type="date"
                      className="input-field"
                      value={form.startDate}
                      onChange={(e) => set('startDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Indicative Salary Range</label>
                    <input
                      className="input-field"
                      placeholder="e.g. MUR 18,000 - 25,000"
                      value={form.salaryRange}
                      onChange={(e) => set('salaryRange', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Accommodation Status</label>
                    <select
                      className="select-field"
                      value={form.accommodation}
                      onChange={(e) => set('accommodation', e.target.value)}
                    >
                      <option value="">Select option</option>
                      <option value="Provided">Provided by Employer</option>
                      <option value="Allowance">Housing Allowance Provided</option>
                      <option value="Not Provided">Worker Arranges Own</option>
                      <option value="Negotiable">To Be Discussed</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Preferred Sourcing Country</label>
                    <input
                      className="input-field"
                      placeholder="e.g. India, Madagascar, Bangladesh, Nepal or Open"
                      value={form.preferredCountry}
                      onChange={(e) => set('preferredCountry', e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Additional Instructions</label>
                    <textarea
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Any specific licensing, language or shift preferences..."
                      value={form.additionalInfo}
                      onChange={(e) => set('additionalInfo', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-[#070e1c] p-4 rounded-xl text-xs text-slate-500 dark:text-slate-400 leading-relaxed border border-slate-100 dark:border-slate-800">
                By submitting this request, you agree to receive communications regarding candidates and recruitment services. Your information is confidential under our privacy standards.
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-accent w-full text-base py-4 font-bold"
              >
                {status === 'loading' ? 'Submitting Request...' : 'Request Workers'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
