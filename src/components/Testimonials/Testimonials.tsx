import { useLanguage } from '../../contexts/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
   const { t } = useLanguage();

   return (
      <section id='testimonials' className='testimonials'>
         <div className='container-constrained'>
            <div className='section-header'>
               <h2>{t.testimonials.title}</h2>
               <p>{t.testimonials.subtitle}</p>
            </div>
            <div className='testimonials-grid'>
               <div className='testimonial-card'>
                  <div className='testimonial-content'>
                     <p>"{t.testimonials.items.sarah.text}"</p>
                  </div>
                  <div className='testimonial-author'>
                     <div className='author-avatar'>SM</div>
                     <div className='author-info'>
                        <h4>{t.testimonials.items.sarah.name}</h4>
                        <p>{t.testimonials.items.sarah.role}</p>
                     </div>
                  </div>
                  <div className='testimonial-rating'>⭐⭐⭐⭐⭐</div>
               </div>
               <div className='testimonial-card'>
                  <div className='testimonial-content'>
                     <p>"{t.testimonials.items.marco.text}"</p>
                  </div>
                  <div className='testimonial-author'>
                     <div className='author-avatar'>MR</div>
                     <div className='author-info'>
                        <h4>{t.testimonials.items.marco.name}</h4>
                        <p>{t.testimonials.items.marco.role}</p>
                     </div>
                  </div>
                  <div className='testimonial-rating'>⭐⭐⭐⭐⭐</div>
               </div>
               <div className='testimonial-card'>
                  <div className='testimonial-content'>
                     <p>"{t.testimonials.items.jennifer.text}"</p>
                  </div>
                  <div className='testimonial-author'>
                     <div className='author-avatar'>JL</div>
                     <div className='author-info'>
                        <h4>{t.testimonials.items.jennifer.name}</h4>
                        <p>{t.testimonials.items.jennifer.role}</p>
                     </div>
                  </div>
                  <div className='testimonial-rating'>⭐⭐⭐⭐⭐</div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
