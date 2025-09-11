import { useLanguage } from '../../contexts/LanguageContext';
import './Showcase.css';

const Showcase = () => {
   const { t } = useLanguage();

   return (
      <section id='showcase' className='showcase'>
         <div className='container-constrained'>
            <div className='section-header'>
               <h2>{t.showcase.title}</h2>
               <p>{t.showcase.subtitle}</p>
            </div>
            <div className='showcase-grid'>
               <div className='showcase-item'>
                  <div className='showcase-image'>
                     <div className='menu-example cafe'>
                        <h4>Sunrise Café</h4>
                        <div className='menu-category'>☕ Coffee & Drinks</div>
                        <div className='menu-items'>
                           <div className='item'>Espresso - $3.50</div>
                           <div className='item'>Latte - $4.75</div>
                           <div className='item'>Cold Brew - $4.25</div>
                        </div>
                     </div>
                  </div>
                  <div className='showcase-info'>
                     <h3>{t.showcase.items.cafe.title}</h3>
                     <p>{t.showcase.items.cafe.description}</p>
                  </div>
               </div>
               <div className='showcase-item'>
                  <div className='showcase-image'>
                     <div className='menu-example restaurant'>
                        <h4>Bella Vista Restaurant</h4>
                        <div className='menu-category'>🍝 Italian Classics</div>
                        <div className='menu-items'>
                           <div className='item'>Spaghetti Carbonara - $18.50</div>
                           <div className='item'>Margherita Pizza - $16.00</div>
                           <div className='item'>Tiramisu - $8.50</div>
                        </div>
                     </div>
                  </div>
                  <div className='showcase-info'>
                     <h3>{t.showcase.items.restaurant.title}</h3>
                     <p>{t.showcase.items.restaurant.description}</p>
                  </div>
               </div>
               <div className='showcase-item'>
                  <div className='showcase-image'>
                     <div className='menu-example fastfood'>
                        <h4>Quick Bites</h4>
                        <div className='menu-category'>🍔 Burgers & More</div>
                        <div className='menu-items'>
                           <div className='item'>Classic Burger - $12.99</div>
                           <div className='item'>Chicken Wings - $9.99</div>
                           <div className='item'>Loaded Fries - $7.50</div>
                        </div>
                     </div>
                  </div>
                  <div className='showcase-info'>
                     <h3>{t.showcase.items.fastfood.title}</h3>
                     <p>{t.showcase.items.fastfood.description}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Showcase;
