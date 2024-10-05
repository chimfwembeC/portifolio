import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-8 z-50 bg-orange-500 p-4 rounded-l-lg">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-800 transition">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-800 transition">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-800 transition">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-800 transition">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
