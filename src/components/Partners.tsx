import React from 'react';
import { motion, Variants } from 'framer-motion';
import { partners } from '../data/PartnerData'; // Adjust the import path as needed

// Variants for the slider animation
const sliderVariants: Variants = {
  animate: {
    x: ['0%', '-100%'], // Move from 0% to -100% (full container width)
    transition: {
      x: {
        repeat: Infinity, // Infinite loop
        repeatType: 'loop', // Seamless loop
        duration: 60, // Slow scroll for smoothness
        ease: 'linear',
      },
    },
  },
};

const Partners: React.FC = () => {
  return (
    <section id="partners" className="bg-gradient-to-t from-gray-700 to-gray-800 text-white p-6 sm:p-10">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        Our Partners
      </motion.h2>

      <div className="mt-6 sm:mt-8 overflow-hidden relative">
        <motion.div
          className="flex space-x-4 sm:space-x-8 w-[200%]" // Double the width to fit duplicated items
          variants={sliderVariants}
          animate="animate"
        >
          {partners.concat(partners).map((partner, index) => ( // Duplicate items for seamless loop
            <motion.div
              key={index}
              className="bg-gray-800 p-3 sm:p-4 rounded-lg w-24 sm:w-32 md:w-40 flex flex-col items-center transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)' }}
            >
              <a href={partner.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={`/assets/svgs/${partner.logo}`} // Ensure this path is correct
                  alt={partner.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3"
                />
                <div className="text-center">
                  <span className="text-xs sm:text-sm md:text-base font-medium">{partner.name}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
