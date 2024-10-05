import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData'; // Update the import path as needed

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger children with 0.3s delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const hoverEffect = {
  scale: 1.05, // Scale up slightly on hover
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Add shadow on hover
  transition: {
    duration: 0.3, // Duration of the hover effect
  },
};

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="projects" className="bg-gradient-to-t from-gray-700 to-gray-800 text-white p-6 sm:p-10 min-h-screen">
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        Projects
      </motion.h2>
      
      <motion.div
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        {currentItems.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg flex flex-col items-start overflow-hidden transition-transform duration-300 ease-in-out"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 sm:h-52 md:h-60 lg:h-48 xl:h-56 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold mt-2">{project.title}</h3>
              {/* <p className="mt-2">{project.description}</p> */}
              {/* {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:underline">
                  View Project
                </a>
              )} */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-600 text-white rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-600 text-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-600 text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
