'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, translations } from '@/lib/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  // Trigger Google Translate cookie & event for full DOM translation across all page text
  const applyDOMTranslation = (targetLang: LanguageCode) => {
    try {
      const googleCodeMap: Record<LanguageCode, string> = {
        en: 'en',
        fr: 'fr',
        mg: 'mg',
        hi: 'hi',
        bn: 'bn',
        zh: 'zh-CN',
      };

      const gCode = googleCodeMap[targetLang] || 'en';

      if (targetLang === 'en') {
        // Reset cookie to English / clear
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = `googtrans=/en/en; path=/;`;
      } else {
        document.cookie = `googtrans=/en/${gCode}; path=/;`;
      }

      // If google translate select element is in DOM, trigger its change event
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (combo) {
        combo.value = gCode;
        combo.dispatchEvent(new Event('change'));
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('myrecruit_lang') as LanguageCode;
      if (saved && translations[saved]) {
        setLanguageState(saved);
        if (saved !== 'en') {
          setTimeout(() => applyDOMTranslation(saved), 600);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('myrecruit_lang', lang);
    } catch {
      // ignore
    }
    applyDOMTranslation(lang);
  };

  const t = (key: string, fallback?: string): string => {
    const dict = translations[language] || translations.en;
    if (dict && dict[key]) {
      return dict[key];
    }
    const defaultDict = translations.en;
    if (defaultDict && defaultDict[key]) {
      return defaultDict[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
