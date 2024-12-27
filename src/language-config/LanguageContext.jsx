import { createContext, useState } from 'react'; 
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>   
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
};  