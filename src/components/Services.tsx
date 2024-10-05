import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { services } from '../data/servicesData'; // Adjust the import path as needed

// Variants for modal animation
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

// Modal component
const Modal: React.FC<{ service: any; onClose: () => void }> = ({ service, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <motion.div
        className="bg-white text-black p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-8"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h2>
        <p>{service.description}</p>
        <p className="mt-4">{service.details}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Calculate number of pages
  const totalPages = Math.ceil(services.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);

  // Change page handler
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-red-500 h-full min-h-screen mt-12">
      <section id="services" className="bg-gradient-to-b from-gray-700 to-gray-800 text-white p-6 sm:p-10 min-h-screen">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
          {currentItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-col items-center transition-transform duration-300 ease-in-out min-w-[150px]"
              onClick={() => setSelectedService(service)} // Open modal with selected service
              variants={{ visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
            >
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-center text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 sm:mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 mx-1 bg-gray-600 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 rounded-md ${
                currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-600 text-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 mx-1 bg-gray-600 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Render modal when a service is selected */}
        {selectedService && (
          <Modal
            service={selectedService}
            onClose={() => setSelectedService(null)} // Close modal
          />
        )}
      </section>
    </div>
  );
};

export default Services;
