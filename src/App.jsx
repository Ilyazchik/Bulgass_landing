import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import AOS from 'https://cdn.skypack.dev/aos';
import { focusHandling } from 'https://cdn.skypack.dev/cruip-js-toolkit';

import Home from './components/homePage';

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
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
