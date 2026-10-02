import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'dark', size = 'md', className = '' }: LogoProps) {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg tracking-[-0.03em]',
    md: 'text-[1.35rem] tracking-[-0.035em]',
    lg: 'text-2xl tracking-[-0.04em]',
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group cursor-pointer select-none transition-all duration-300 hover:opacity-95 ${className}`}
    >
      {/* High-End Architectural Monogram Icon */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center transition-all duration-300 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* High-Def Brand Teal Gradient */}
            <linearGradient id="brandTeal" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="50%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>

            {/* Subtle Inner Glow */}
            <linearGradient id="glowOverlay" x1="24" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Hexagonal Global Framework Shield */}
          <path
            d="M24 5L40 14.5V33.5L24 43L8 33.5V14.5L24 5Z"
            stroke="url(#brandTeal)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className={isDark ? "opacity-85 group-hover:opacity-100 transition-opacity duration-300" : "opacity-90 group-hover:opacity-100 transition-opacity duration-300"}
          />

          {/* Precision Architectural "M" Wings (Interlocking Talent Bridges) */}
          <path
            d="M15 33V18L24 26.5L33 18V33"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isDark ? "text-[#0b1938] dark:text-white" : "text-white"}
          />

          {/* Center Bridge Accent Line */}
          <path
            d="M19.5 22.25L24 26.5L28.5 22.25"
            stroke="#14b8a6"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Floating Apex Diamond (Recruitment North Star) */}
          <path
            d="M24 9.5L27 12.5L24 15.5L21 12.5L24 9.5Z"
            fill="#14b8a6"
            className="drop-shadow-[0_0_6px_rgba(20,184,166,0.6)]"
          />

          {/* Core Keystone Nodes */}
          <circle cx="15" cy="33" r="2.2" fill="#0d9488" />
          <circle cx="33" cy="33" r="2.2" fill="#0d9488" />
          <circle cx="24" cy="26.5" r="2" fill="#2dd4bf" />
        </svg>
      </div>

      {/* Corporate Typography Suite */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center leading-none">
          <span
            className={`font-black uppercase tracking-tight ${textSizes[size]} ${
              isDark ? 'text-[#0b1938] dark:text-white' : 'text-white'
            }`}
          >
            My<span className="text-[#0d9488] dark:text-[#14b8a6] font-black">Recruit</span>
          </span>
        </div>

        {/* Global Authority Tagline */}
        <div className="flex items-center mt-1">
          <span
            className={`text-[9.5px] font-bold uppercase tracking-[0.2em] leading-none ${
              isDark ? 'text-slate-500 dark:text-slate-400' : 'text-slate-300/80'
            }`}
          >
            Mauritius International
          </span>
        </div>
      </div>
    </Link>
  );
}
