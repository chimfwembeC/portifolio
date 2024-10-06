import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const PageNavigation: React.FC = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-8 z-30 bg-gray-800 p-4 h-screen">
      <a href="/">
      <img src="assets/imgs/profile.jpeg" alt="Developer" className="rounded-full w-12 h-12" />      
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500 transition">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500 transition">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500 transition">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500 transition">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default PageNavigation;
