import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonialsData'; // Update path as needed

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const hoverEffect = {
  scale: 1.05, // Slightly increase scale on hover
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
  transition: {
    duration: 0.3, // Duration of the hover effect
  },
};

const Testimonials: React.FC = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  return (
    <section id="testimonials" className="bg-gradient-to-b from-gray-700 to-gray-800 text-white p-6 sm:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Testimonials</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
      >
        {currentTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.name}
            className="bg-gray-700 p-4 sm:p-6 rounded-lg flex flex-col items-center"
            variants={itemVariants}
            whileHover={hoverEffect} // Apply hover effect
          >
            {testimonial.photo && (
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mb-4"
              />
            )}
            <p className="text-base sm:text-lg italic text-center">"{testimonial.feedback}"</p>
            <p className="mt-4 text-right font-semibold text-orange-500">- {testimonial.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-6 sm:mt-8 flex justify-center space-x-2 sm:space-x-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md ${currentPage === index ? 'bg-orange-500 text-black' : 'bg-gray-700 text-white'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
