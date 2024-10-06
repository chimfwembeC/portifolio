import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/SkillData'; // Update the path as needed

const masonryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
  transition: {
    duration: 0.3,
  },
};

const randomSpan = () => Math.floor(Math.random() * 3) + 1; // Generates a random row span between 1 and 3

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gradient-to-t from-orange-800 to-gray-700 text-white p-6 sm:p-10 min-h-screen">
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={masonryVariants}
      >
        Skills
      </motion.h2>

      {/* Masonry Grid */}
      <motion.div
        className="masonry-grid"
        initial="hidden"
        animate="visible"
        variants={masonryVariants}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="masonry-item flex flex-col items-center p-4"
            variants={itemVariants}
            whileHover={hoverEffect}
            style={{ "--row-span": randomSpan() } as React.CSSProperties}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
