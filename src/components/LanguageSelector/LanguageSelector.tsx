import { useState, useRef, useEffect } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';
import type { Language } from '../../translations';

import './LanguageSelector.css';

const languages = {
   en: { name: 'English', flag: '🇺🇸' },
   mk: { name: 'Македонски', flag: '🇲🇰' },
   sr: { name: 'Српски', flag: '🇷🇸' },
};

const LanguageSelector = () => {
   const { language, setLanguage } = useLanguage();
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   const handleLanguageChange = (lang: Language) => {
      setLanguage(lang);
      setIsOpen(false);
   };

   return (
      <div className='language-selector' ref={dropdownRef}>
         <button
            className='language-button'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Select language'
         >
            <span>{languages[language].flag}</span>
            <span>{languages[language].name}</span>
            <span>{isOpen ? '▲' : '▼'}</span>
         </button>

         <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
            {Object.entries(languages).map(([lang, info]) => (
               <button
                  key={lang}
                  className={`language-option ${lang === language ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(lang as Language)}
               >
                  <span>{info.flag}</span>
                  <span>{info.name}</span>
               </button>
            ))}
         </div>
      </div>
   );
};

export default LanguageSelector;
