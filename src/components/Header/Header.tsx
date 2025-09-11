import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../LanguageSelector';
import './Header.css';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { t } = useLanguage();

   return (
      <header className='header'>
         <div className='container-constrained'>
            <div className='nav'>
               <div className='logo'>
                  <h2>
                     ple<span className='logo-x'>x</span>usMenu
                  </h2>
               </div>
               <button
                  className='mobile-menu-toggle'
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label='Toggle menu'
               >
                  ☰
               </button>
               <nav className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                  <a href='#features' onClick={() => setIsMenuOpen(false)}>
                     {t.header.features}
                  </a>
                  <a href='#showcase' onClick={() => setIsMenuOpen(false)}>
                     {t.header.examples}
                  </a>
                  <a href='#testimonials' onClick={() => setIsMenuOpen(false)}>
                     {t.header.reviews}
                  </a>
                  <a href='#contact' onClick={() => setIsMenuOpen(false)}>
                     {t.header.contact}
                  </a>
               </nav>
               <div className='header-actions'>
                  <LanguageSelector />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
