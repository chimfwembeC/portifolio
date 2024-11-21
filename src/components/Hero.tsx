import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion';

export default function Hero() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleModalOpen = () => {
    //     setIsModalOpen(true);
    //   };
    
      const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
      };
    
    //   const handleModalClose = () => setIsModalOpen(false);
  const profile = '/assets/imgs/profile.jpeg';
    
  return (
    <div>
         {/* Main Section */}
      <div className="text-center mt-20 h-screen py-10 bg-gradient-to-b from-gray-900 to-orange-800 text-white">
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Text Section */}
            <div className="flex justify-center items-center">
              <div className=" px-10 mx-auto">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    I’m Chimfwembe Kangwa <span className="text-orange-500">Full-stack Developer</span>
                  </h2>
                </motion.h1>
                <p className="mt-4 text-gray-100 text-sm sm:text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                </p>
                <motion.button
                  className="mt-6 bg-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-orange-600"
                  whileHover={{ scale: 1.1 }}
                  onClick={toggleModal}
                >
                  View My Work
                </motion.button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full">
              <div className="z-10 max-w-4xl flex justify-center items-center mx-auto text-center relative">
                <img src={profile} alt="Developer" className="rounded-full md:w-96 w-64 md:h-96 h-64" />
              </div>
            </div>
          </div>
        </motion.p>
      </div>
    </div>
  )
}
