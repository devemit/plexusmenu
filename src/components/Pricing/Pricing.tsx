import { useLanguage } from '../../contexts/LanguageContext';
import './Pricing.css';

const Pricing = () => {
   const { t } = useLanguage();
   const plan = t.pricing.plan;

   return (
      <section id='pricing' className='pricing'>
         <div className='container-constrained'>
            <div className='section-header'>
               <h2>{t.pricing.title}</h2>
               <p>{t.pricing.subtitle}</p>
            </div>

            <div className='pricing-grid'>
               <div className='pricing-card single'>
                  <div className='plan-header'>
                     <div className='plan-icon'>💼</div>
                     <h3 className='plan-name'>{plan.name}</h3>
                     <div className='plan-price'>
                        <span className='amount'>{plan.price}</span>
                        {plan.period && <span className='period'>{plan.period}</span>}
                     </div>
                  </div>
                  <ul className='plan-features'>
                     {plan.features.map((feat, idx) => (
                        <li key={idx}>
                           <span className='check'>✔</span>
                           <span>{feat}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Pricing;
