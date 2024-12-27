import { useContext } from 'react';
import { LanguageContext } from '../language-config/LanguageContext';

function Footer() {
  const { language } = useContext(LanguageContext);
  const translations = {
    en:{footer: 'Made in ',
    footer1: 'All rights reversed.',},
    ru:{footer: 'Сделано в ',
    footer1: 'Все права защищены.',},
  }
  return (
    <footer className="flex justify-center items-center bottom-0 left-0 right-0 bg-white py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">
        
        
        <ul className="flex mb-4">
          <li className="ml-4">
            <a 
              href="https://www.instagram.com/bulgass.it"
              className="flex justify-center items-center p-3 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
          </li>

          <li className="ml-4">
            <a 
              href="https://wa.me/996508522911" 
              className="flex justify-center items-center p-3 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-3xl"></i>
            </a>
          </li>

        </ul>

        {/* Copyrights note */}
        <div className="text-sm text-gray-600">
          {translations[language].footer} <a className="text-blue-600 hover:underline" href="/">Bulgass</a>. {translations[language].footer1}
        </div>
      </div>
    </footer>
  );
}


export default Footer;
