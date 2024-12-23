import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';
import Home from './components/homePage';
import { LanguageProvider } from './language-config/LanguageContext';
import LanguageSwitcher from './language-config/LanguageSwitcher';


function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []); 

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LanguageSwitcher />
    </LanguageProvider>
  );
}

export default App;
