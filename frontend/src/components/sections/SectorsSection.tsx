'use client';

import Link from 'next/link';
import Image from 'next/image';
import { sectors } from '@/data/sectors';

export function SectorsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070e1c] transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-tag">Industries</span>
          <h2 className="section-title mt-2">Sectors We Serve</h2>
          <p className="section-subtitle mt-4 mx-auto max-w-2xl">
            Connecting Mauritian businesses with qualified workers across key industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 cursor-pointer bg-white dark:bg-[#0c1a35] border border-slate-100 dark:border-slate-800"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Sector name overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{sector.name}</h3>
                </div>
                {/* Color accent dot */}
                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full"
                  style={{ backgroundColor: sector.color }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{sector.description}</p>

                {/* Roles */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {sector.roles.slice(0, 4).map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                    >
                      {role}
                    </span>
                  ))}
                  {sector.roles.length > 4 && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400">
                      +{sector.roles.length - 4} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/sectors/${sector.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b1938] dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors group-hover:gap-2.5"
                >
                  Explore Sector
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/sectors" className="btn-outline">
            View All Sectors
          </Link>
        </div>
      </div>
    </section>
  );
}
