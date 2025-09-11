import { useLanguage } from '../../contexts/LanguageContext';
import './Hero.css';

const Hero = () => {
   const { t } = useLanguage();

   return (
      <section className='hero'>
         <div className='container'>
            <div className='hero-content'>
               <div className='hero-text'>
                  <h1>{t.hero.title}</h1>
                  <p>{t.hero.subtitle}</p>
                  <div className='hero-buttons'>
                     <button className='primary-button'>{t.hero.startTrial}</button>
                     <button className='secondary-button'>{t.hero.viewDemo}</button>
                  </div>
                  <div className='hero-stats'>
                     <div className='stat'>
                        <span className='stat-number'>500+</span>
                        <span className='stat-label'>{t.hero.stats.restaurants}</span>
                     </div>
                     <div className='stat'>
                        <span className='stat-number'>99.9%</span>
                        <span className='stat-label'>{t.hero.stats.uptime}</span>
                     </div>
                     <div className='stat'>
                        <span className='stat-number'>24/7</span>
                        <span className='stat-label'>{t.hero.stats.support}</span>
                     </div>
                  </div>
               </div>
               <div className='hero-image'>
                  <div className='phone-mockup'>
                     <div className='phone-screen'>
                        <div className='menu-preview'>
                           <h3>Bella Vista Café</h3>
                           <div className='menu-item'>
                              <span>Cappuccino</span>
                              <span>$4.50</span>
                           </div>
                           <div className='menu-item'>
                              <span>Avocado Toast</span>
                              <span>$12.00</span>
                           </div>
                           <div className='menu-item'>
                              <span>Caesar Salad</span>
                              <span>$14.50</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
