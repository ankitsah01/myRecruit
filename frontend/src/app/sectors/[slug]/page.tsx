import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { sectors } from '@/data/sectors';
import { CTABanner } from '@/components/sections/CTABanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return { title: 'Sector Not Found' };
  return {
    title: `${sector.name} Recruitment`,
    description: sector.fullDescription,
  };
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) notFound();

  const others = sectors.filter((s) => s.slug !== slug);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200/10">
        <div className="absolute inset-0 opacity-20">
          <Image src={sector.image} alt={sector.name} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#070e1c]/80" />
        <div className="relative max-w-7xl mx-auto">
          <Link href="/sectors" className="inline-flex items-center gap-1.5 text-sm text-teal-300 hover:text-white mb-6 transition-colors font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Sectors
          </Link>
          <div
            className="inline-block w-3 h-3 rounded-full mb-4"
            style={{ backgroundColor: sector.color }}
          />
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">{sector.name}</h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">{sector.fullDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-slate-100 dark:border-slate-800">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  width={800}
                  height={400}
                  className="w-full h-72 object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {sector.name} Recruitment in Mauritius
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">{sector.fullDescription}</p>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Roles We Recruit</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {sector.roles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2.5 bg-slate-50 dark:bg-[#0c1a35] border border-slate-100 dark:border-slate-800 rounded-lg px-4 py-3"
                  >
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{role}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-workers" className="btn-accent">
                  Request {sector.name} Workers
                </Link>
                <Link href="/apply" className="btn-outline">
                  Apply in This Sector
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0b1938] dark:bg-[#0c1a35] rounded-2xl p-6 text-white border border-slate-800">
                <h3 className="font-bold text-lg mb-3">Need {sector.name} Workers?</h3>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  Tell us your requirements and our team will source and screen suitable candidates for your business.
                </p>
                <Link href="/request-workers" className="btn-accent w-full justify-center text-sm">
                  Request Workers
                </Link>
              </div>

              <div className="bg-slate-50 dark:bg-[#0c1a35] rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">Looking for Work?</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">
                  Submit your profile for {sector.name} roles in Mauritius. Applying is free.
                </p>
                <Link href="/apply" className="btn-outline w-full justify-center text-sm">
                  Apply Now
                </Link>
              </div>

              <div className="bg-white dark:bg-[#0c1a35] rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider text-slate-500 dark:text-teal-400">Other Sectors</h3>
                <div className="space-y-2">
                  {others.map((s) => (
                    <Link
                      key={s.id}
                      href={`/sectors/${s.slug}`}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
