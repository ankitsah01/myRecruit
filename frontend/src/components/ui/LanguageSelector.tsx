'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageCode } from '@/lib/translations';

export interface Language {
  code: LanguageCode;
  name: string;
  flagCode: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flagCode: 'GB' },
  { code: 'fr', name: 'Français', flagCode: 'FR' },
  { code: 'mg', name: 'Malagasy', flagCode: 'MG' },
  { code: 'hi', name: 'हिन्दी', flagCode: 'IN' },
  { code: 'bn', name: 'বাংলা', flagCode: 'BD' },
  { code: 'zh', name: '中文', flagCode: 'CN' },
];

interface LanguageSelectorProps {
  className?: string;
  dropDirection?: 'down' | 'up';
}

export function LanguageSelector({ className = '', dropDirection = 'down' }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const selected = languages.find((l) => l.code === language) || languages[0];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (lang: Language) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all shadow-2xs hover:border-teal-500/60 cursor-pointer"
      >
        <span className="text-slate-400 font-extrabold uppercase text-[11px]">{selected.flagCode}</span>
        <span className="font-semibold text-slate-800">{selected.name}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown Menu (Styled matching user screenshot) */}
      {isOpen && (
        <div
          className={`absolute right-0 z-50 w-44 rounded-xl bg-[#0b1938] text-white shadow-2xl border border-white/10 py-1.5 animate-fade-in ${
            dropDirection === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
        >
          <div className="py-1">
            {languages.map((lang) => {
              const isCurrent = lang.code === selected.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer group ${
                    isCurrent
                      ? 'bg-teal-500/20 text-teal-300 font-bold'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-bold uppercase text-[11px] w-6 shrink-0 group-hover:text-teal-300 transition-colors">
                      {lang.flagCode}
                    </span>
                    <span className="text-sm font-medium tracking-wide">{lang.name}</span>
                  </div>
                  {isCurrent && <Check className="w-3.5 h-3.5 text-teal-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
