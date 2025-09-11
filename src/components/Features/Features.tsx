import { useLanguage } from '../../contexts/LanguageContext';
import './Features.css';

const Features = () => {
   const { t } = useLanguage();

   return (
      <section id='features' className='features'>
         <div className='container-constrained'>
            <div className='section-header'>
               <h2>{t.features.title}</h2>
               <p>{t.features.subtitle}</p>
            </div>
            <div className='features-grid'>
               <div className='feature-card'>
                  <div className='feature-icon'>🎨</div>
                  <h3>{t.features.items.branding.title}</h3>
                  <p>{t.features.items.branding.description}</p>
               </div>
               <div className='feature-card'>
                  <div className='feature-icon'>📱</div>
                  <h3>{t.features.items.mobile.title}</h3>
                  <p>{t.features.items.mobile.description}</p>
               </div>
               <div className='feature-card'>
                  <div className='feature-icon'>⚡</div>
                  <h3>{t.features.items.updates.title}</h3>
                  <p>{t.features.items.updates.description}</p>
               </div>
               <div className='feature-card'>
                  <div className='feature-icon'>🌍</div>
                  <h3>{t.features.items.multilang.title}</h3>
                  <p>{t.features.items.multilang.description}</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
