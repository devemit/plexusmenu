import './App.css';
import { Header, Hero, Features, Showcase, Pricing, Testimonials, Footer } from './components';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
   return (
      <LanguageProvider>
         <div className='App'>
            <Header />
            <Hero />
            <Features />
            <Showcase />
            <Pricing />
            <Testimonials />
            <Footer />
         </div>
      </LanguageProvider>
   );
}

export default App;
