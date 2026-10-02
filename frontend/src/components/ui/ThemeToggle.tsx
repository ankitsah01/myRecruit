'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export function ThemeToggle({ showLabel = false, className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 ${className}`} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all duration-300 cursor-pointer ${
        isDark
          ? 'bg-[#0c1a35] border-teal-500/40 text-teal-300 hover:border-teal-400 hover:bg-[#11244a] shadow-xs'
          : 'bg-white border-slate-200 text-slate-700 hover:border-teal-500/60 hover:text-[#0b1938] hover:bg-slate-50 shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 text-teal-300 transition-transform duration-300 rotate-0 scale-100 group-hover:-rotate-12" />
        ) : (
          <Sun className="w-4 h-4 text-teal-600 transition-transform duration-300 rotate-0 scale-100 group-hover:rotate-45" />
        )}
      </div>

      {showLabel ? (
        <span className="text-xs font-semibold select-none">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      ) : (
        <span className="sr-only">
          {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </span>
      )}
    </button>
  );
}
