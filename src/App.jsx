import { useEffect } from 'https://cdn.skypack.dev/react';
import {

  Route,
  useLocation
} from 'https://cdn.skypack.dev/react-router-dom@5.3.0';

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
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>

        <Route exact path="/">
          <Home />
        </Route>

    </>
  );
}

export default App;
