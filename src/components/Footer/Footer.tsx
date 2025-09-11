import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
   const { t } = useLanguage();

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <footer id='contact' className='footer'>
         <div className='container-constrained'>
            <div className='footer-content'>
               <div className='footer-section'>
                  <h3>PlexusMenu</h3>
                  <p>{t.footer.description}</p>
                  <div className='social-links'>
                     <a href='#' aria-label='Facebook'>
                        📘
                     </a>
                     <a href='#' aria-label='Twitter'>
                        🐦
                     </a>
                     <a href='#' aria-label='Instagram'>
                        📷
                     </a>
                     <a href='#' aria-label='LinkedIn'>
                        💼
                     </a>
                  </div>
               </div>
               <div className='footer-section'>
                  <h4>{t.footer.product.title}</h4>
                  <ul>
                     <li>
                        <a href='#features'>{t.footer.product.features}</a>
                     </li>
                     <li>
                        <a href='#pricing'>{t.footer.product.pricing}</a>
                     </li>
                     <li>
                        <a href='#showcase'>{t.footer.product.examples}</a>
                     </li>
                     <li>
                        <a href='#demo'>{t.footer.product.demo}</a>
                     </li>
                  </ul>
               </div>
               <div className='footer-section'>
                  <h4>{t.footer.support.title}</h4>
                  <ul>
                     <li>
                        <a href='#help'>{t.footer.support.helpCenter}</a>
                     </li>
                     <li>
                        <a href='#contact'>{t.footer.support.contactUs}</a>
                     </li>
                     <li>
                        <a href='#docs'>{t.footer.support.documentation}</a>
                     </li>
                     <li>
                        <a href='#api'>{t.footer.support.api}</a>
                     </li>
                  </ul>
               </div>
               <div className='footer-section'>
                  <h4>{t.footer.company.title}</h4>
                  <ul>
                     <li>
                        <a href='#about'>{t.footer.company.aboutUs}</a>
                     </li>
                     <li>
                        <a href='#careers'>{t.footer.company.careers}</a>
                     </li>
                     <li>
                        <a href='#press'>{t.footer.company.press}</a>
                     </li>
                     <li>
                        <a href='#partners'>{t.footer.company.partners}</a>
                     </li>
                  </ul>
               </div>
               <div className='footer-section'>
                  <h4>{t.footer.contact.title}</h4>
                  <div className='contact-info'>
                     <p>📧 hello@plexusmenu.com</p>
                     <p>📞 1-800-PLEXUS</p>
                     <p>📍 123 Digital Ave, Tech City</p>
                  </div>
               </div>
            </div>
            <div className='footer-bottom'>
               <div className='footer-legal'>
                  <p>{t.footer.legal.copyright}</p>
                  <div className='legal-links'>
                     <a href='#privacy'>{t.footer.legal.privacy}</a>
                     <a href='#terms'>{t.footer.legal.terms}</a>
                     <a href='#cookies'>{t.footer.legal.cookies}</a>
                  </div>
               </div>
            </div>
         </div>
         <button className='back-to-top-btn' onClick={scrollToTop} aria-label='Back to top'>
            ↑
         </button>
      </footer>
   );
};

export default Footer;
