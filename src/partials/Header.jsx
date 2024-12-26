import { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import bulgass from '../assets/bulgassNew.png';
import { LanguageContext } from "../language-config/LanguageContext";

function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="block" aria-label="Cruip">
              <img src={bulgass} alt="bilgassIcon"  width="50"/>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage}>
              {language === "en" ? "RU" : "EN"}
            </button>
            <Link to="/courses" className="block" aria-label="Cruip">
              <button>Курсы</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;