import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { BiSolidUpArrow } from "react-icons/bi";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  // Animation variants for hover effects
  const hoverEffect = {
    scale: 1.1, // Scale up on hover
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Shadow effect
    transition: { duration: 0.3 }, // Duration of the hover effect
  };

  return isVisible ? (
    <motion.button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg w-12 h-12 flex justify-center items-center" // Added flex and centering classes
      whileHover={hoverEffect} // Apply hover effect
    >
      {/* <FaArrowUp className="text-lg" /> Optional: Adjust the icon size */}
      {/* <RiArrowUpDoubleFill /> */}
      <BiSolidUpArrow className="text-lg" />
    </motion.button>
  ) : null;
};

export default BackToTop;
