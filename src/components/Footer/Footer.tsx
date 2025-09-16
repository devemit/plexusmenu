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
                     <a
                        href='https://instagram.com/plexusmenu'
                        aria-label='Instagram'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <svg
                           width='20'
                           height='20'
                           viewBox='0 0 24 24'
                           fill='none'
                           aria-hidden='true'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              d='M7 2H17C20.3137 2 23 4.68629 23 8V16C23 19.3137 20.3137 22 17 22H7C3.68629 22 1 19.3137 1 16V8C1 4.68629 3.68629 2 7 2Z'
                              stroke='#E1306C'
                              strokeWidth='2'
                           />
                           <circle cx='12' cy='12' r='3.5' stroke='#E1306C' strokeWidth='2' />
                           <circle cx='17.5' cy='6.5' r='1.5' fill='#E1306C' />
                        </svg>
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
                        <a target='_blank' href='https://reformbeachbar.vercel.app/'>
                           {t.footer.product.demo}
                        </a>
                     </li>
                  </ul>
               </div>

               <div className='footer-section'>
                  <h4>{t.footer.contact.title}</h4>
                  <div className='contact-info'>
                     <p>📧 mitkoiliev505@gmail.com</p>
                     <p>📞 +389 77 954273</p>
                     <p>📍 Macedonia</p>
                  </div>
               </div>
            </div>
            <div className='footer-bottom'>
               <div className='footer-legal'>
                  <p>{t.footer.legal.copyright}</p>
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
