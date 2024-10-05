import React from 'react';
import { motion, Variants } from 'framer-motion';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const typewriterVariants: Variants = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: 'auto', transition: { duration: 1.5, ease: 'easeOut' } },
};

const scaleRotateVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const floatVariants: Variants = {
  floating: { y: [0, -10, 0], transition: { duration: 5, repeat: Infinity, repeatType: 'loop' } },
};

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-gradient-to-t from-gray-700 to-gray-800 text-white py-20 px-6 md:px-10 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/assets/imgs/background.jpg)' }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          About <span className="text-orange-500">Me</span>
          <div className="w-1/2 bg-orange-500">                       </div>          
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8"
          initial="hidden"
          animate="visible"
          variants={typewriterVariants}
          transition={{ delay: 0.5 }}
        >
          I’m a passionate and creative full-stack developer with experience in crafting high-quality,
          innovative web applications and designs. I focus on delivering unique solutions to my clients
          and continually strive to push boundaries in web development.
        </motion.p>

        {/* Floating Icons */}
        <div className="flex justify-center space-x-6 mt-10">
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center"
            variants={floatVariants}
            animate="floating"
          >
            <img src="/assets/svgs/html-5-svgrepo-com.svg" alt="HTML5" className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center"
            variants={floatVariants}
            animate="floating"
          >
            <img src="/assets/svgs/react-javascript-js-framework-facebook-svgrepo-com.svg" alt="React" className="w-10 h-10" />
          </motion.div>

          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center"
            variants={floatVariants}
            animate="floating"
          >
            <img src="/assets/svgs/tailwindcss-icon-svgrepo-com.svg" alt="Tailwind CSS" className="w-10 h-10" />
          </motion.div>
        </div>

        {/* Button */}
        <motion.button
          className="mt-10 bg-orange-500 px-8 py-3 rounded-md text-lg md:text-xl font-bold hover:bg-orange-600 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          onClick={() => console.log('Button Clicked')}
        >
          View My Work
        </motion.button>
      </div>
    </section>
  );
};

export default About;
