import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard: React.FC = () => {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 border-4 border-transparent hover:border-orange-500 transition duration-300 ease-in-out transform hover:scale-105"
      whileHover={{
        scale: 1.05,
        borderColor: 'rgba(255, 100, 0, 1)', // Optional: Change color dynamically
      }}
    >
      <h3 className="text-xl font-semibold text-center text-gray-800">
        Your Title Here
      </h3>
      <p className="mt-2 text-gray-600">
        Your content goes here. Add more details as needed.
      </p>
    </motion.div>
  );
};

export default AnimatedCard;
