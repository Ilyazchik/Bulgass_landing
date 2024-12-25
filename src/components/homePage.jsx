import { useContext } from 'react'; 
import { LanguageContext } from '../language-config/LanguageContext';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Footer from '../partials/Footer';
import translations from '../language-config/translations';

function Home() {
  const { language } = useContext(LanguageContext); 


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header translations={translations[language]} />

      <main className="flex-grow">
        <HeroHome translations={translations[language]} />
        <FeaturesHome translations={translations[language]} />
        <FeaturesBlocks translations={translations[language]} />
        <Testimonials translations={translations[language]} />
      </main>

      <Footer translations={translations[language]} />
    </div>
  );
}

export default Home;