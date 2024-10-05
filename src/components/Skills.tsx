import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { skills } from '../data/SkillData'; // Adjust the import path as needed
import ProgressBar from './ui components/ProgressBar'; // Ensure this path is correct
import SkillIcon from './ui components/SkillIcon'; // Ensure this path is correct

// Variants for the slider animation
const sliderVariants: Variants = {
  animate: (isHovered: boolean) => ({
    x: isHovered ? 0 : ['0%', '-100%'], // Stops the animation when hovered
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 60, // Slow scroll for smoothness
        ease: 'linear',
      },
    },
  }),
};

const Skills: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-700 to-gray-800 text-white p-10 ">
      <motion.h2
        className="text-3xl font-bold text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        Skills
      </motion.h2>

      <div className="mt-8 overflow-hidden">
        <motion.div
          className="flex space-x-4 sm:space-x-8 w-max" // Adjust spacing and width
          custom={isHovered}
          variants={sliderVariants}
          animate="animate"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {skills.concat(skills).map((skill, index) => ( // Duplicate items for seamless loop
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg w-28 sm:w-40 md:w-48 flex flex-col items-center transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)' }}
            >
              <SkillIcon
                src={`/assets/svgs/${skill.icon}`} // Ensure this path is correct
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-4"
              />
              <div className="text-center">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-lg font-medium">{skill.name}</span>
                  <span className="text-xs sm:text-sm">{skill.progress}%</span>
                </div>
                <ProgressBar progress={skill.progress} />
                {skill.description && (
                  <p className="mt-2 text-gray-400 text-xs sm:text-sm">{skill.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
