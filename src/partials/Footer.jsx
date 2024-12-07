import React from 'https://cdn.skypack.dev/react';
import { Link } from 'https://cdn.skypack.dev/react-router-dom@5.3.0';
import bulgass from '../assets/bulgass_black.png';


function Footer() {
  return (
    <footer className="flex justify-center items-center bottom-0 left-0 right-0 bg-white py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">
        
        {/* Social links */}
        <ul className="flex mb-4">
          <li className="ml-4">
            <Link 
              to="https://www.instagram.com/bulgass.it"
              className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </Link>
          </li>

          <li className="ml-4">
            <Link 
              to="https://wa.me/996508522960" 
              className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-3xl"></i>
            </Link>
          </li>

        </ul>

        {/* Copyrights note */}
        <div className="text-sm text-gray-600">
          Made in China <a className="text-blue-600 hover:underline" href="/">Bulgass</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


export default Footer;
