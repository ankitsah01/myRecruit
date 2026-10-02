import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { sectors } from '@/data/sectors';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Sectors We Serve',
  description: 'MyRecruit recruits across construction, manufacturing and textiles, hospitality and tourism, domestic and care, and agriculture sectors in Mauritius.',
};

export default function SectorsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">Industries</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">Sectors We Serve</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Connecting Mauritian businesses with qualified workers across key industries.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Link key={sector.id} href={`/sectors/${sector.slug}`} className="group block bg-white dark:bg-[#0c1a35] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-800">
                <div className="relative h-52 overflow-hidden">
                  <Image src={sector.image} alt={sector.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">{sector.name}</h2>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{sector.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sector.roles.slice(0, 3).map((r) => (
                      <span key={r} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">{r}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0b1938] dark:text-teal-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                    Explore Sector
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
