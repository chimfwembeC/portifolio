import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    setIsSticky(scrollY > viewportHeight * 0.2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleModalClose = () => setIsModalOpen(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'HTML', progress: 90, icon: '/assets/svgs/html-5-svgrepo-com.svg', description: 'HyperText Markup Language' },
    { name: 'CSS', progress: 80, icon: '/assets/svgs/css-3-svgrepo-com.svg', description: 'Cascading Style Sheets' },
    { name: 'JavaScript', progress: 85, icon: '/assets/svgs/javascript-svgrepo-com.svg', description: 'Programming Language' },
    { name: 'Laravel', progress: 85, icon: '/assets/svgs/laravel-svgrepo-com.svg', description: 'PHP Framework' },
    { name: 'Python', progress: 85, icon: '/assets/svgs/python-svgrepo-com.svg', description: 'Programming Language' },
    { name: 'TailwindCSS', progress: 85, icon: '/assets/svgs/tailwindcss-icon-svgrepo-com.svg', description: 'CSS Framework' },
    { name: 'React', progress: 85, icon: '/assets/svgs/react-javascript-js-framework-facebook-svgrepo-com.svg', description: 'JavaScript Library' },
  ];

  const floatVariants: Variants = {
    floating: { y: [0, -10, 0], transition: { duration: 5, repeat: Infinity, repeatType: 'loop' } },
  };

  return (
    <header>
      {/* Navbar Section */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? 'bg-gray-900 bg-opacity-80 shadow-lg' : 'bg-transparent'}`}
      >
        <nav className="flex justify-between items-center p-6">
          <motion.div
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="assets/imgs/profile.jpeg" alt="Developer" className="rounded-full w-12 h-12" />
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <ul
            id="mobile-menu"
            className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto md:block bg-gray-900 md:bg-transparent z-40 md:z-auto transition-all duration-300 ease-in-out`}
          >
            {['About', 'Projects', 'Services', 'Contact'].map((section) => (
              <motion.li
                key={section}
                whileHover={{ scale: 1.5 }}
                className="hover:text-orange-500 p-4 md:p-0"
              >
                <button onClick={() => scrollToSection(section.toLowerCase())}>{section}</button>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.3 }}
            className="hidden md:inline-block bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </motion.button>
        </nav>
      </div>

      {/* Main Section */}
      <div className="text-center mt-20 h-screen py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
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
                  whileHover={{ scale: 1.5 }}
                  onClick={toggleModal}
                >
                  View My Work
                </motion.button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full">
              <div className="z-10 max-w-4xl flex justify-center items-center mx-auto text-center relative">
                <img src="assets/imgs/profile.jpeg" alt="Developer" className="rounded-full md:w-96 w-64 md:h-96 h-64" />
              </div>
            </div>
          </div>
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
