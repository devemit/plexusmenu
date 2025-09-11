import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../translations';
import type { Language, TranslationKeys } from '../translations';

interface LanguageContextType {
   language: Language;
   setLanguage: (lang: Language) => void;
   t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
   children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
   const [language, setLanguage] = useState<Language>('en');

   const value = {
      language,
      setLanguage,
      t: translations[language],
   };

   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
   const context = useContext(LanguageContext);
   if (context === undefined) {
      throw new Error('useLanguage must be used within a LanguageProvider');
   }
   return context;
};
