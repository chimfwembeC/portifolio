import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import ScrollProgressBar from '../ui components/ScrollProgressBar';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiSearch, BiSearchAlt, BiSearchAlt2 } from 'react-icons/bi';
import { FaFileAlt, FaFileCode, FaInfoCircle, FaPhoneAlt, FaProjectDiagram } from 'react-icons/fa';
import { RiServiceFill } from 'react-icons/ri';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    setIsSticky(scrollY > viewportHeight * 0.2);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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

      <ScrollProgressBar />
      {/* Navbar Section */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out rounded-b-2xl px-4 ${isSticky ? 'bg-gray-900 bg-opacity-80 shadow-lg' : 'bg-transparent'}`}
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
                className="w-8 h-8 "
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
            className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto md:block bg-gray-900 bg-opacity-80 md:bg-transparent z-40 md:z-auto transition-all duration-300 ease-in-out rounded-b-2xl`}
          >
             {/* 'Projects', 'Services','Resume','Search' */}
            {[              
              {name:'Home', icon: <BiHomeAlt />},
              {name:'Projects', icon: <FaProjectDiagram />},
              {name:'Services', icon: <RiServiceFill />},
              {name:'Resume', icon: <FaFileAlt />},
              // {name:'Blog', icon: <Blog />},
              {name:'Search', icon: <BiSearchAlt />},
            ].map((section) => (
              <div className="" key={section.name}>
                <div className="hidden lg:flex m-2">
                {/* onClick={() => scrollToSection(section.toLowerCase())} */}
                  <Link className='button' to={`/${section.name.toLowerCase()}`} >
                    <span className="spark__container">
                      <span className="spark" />
                    </span>
                    <span className="backdrop" />
                    <span className="text flex justify-center items-center gap-4 ">{section.name} {section.icon}</span>
                  </Link>
                </div>

                <div className="m-2 flex justify-center items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="lg:hidden md:inline-block bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600"
                    onClick={() => scrollToSection(section.name.toLowerCase())}
                  >
                    {section.name}
                    {section.icon}
                  </motion.button>
                </div>
              </div>
            ))}
          </ul>

<div className={`hidden ${isSticky ? 'bg-gray-900 bg-opacity-80 shadow-lg' : 'bg-transparent'}`}>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat amet! Minus unde aliquam molestiae maxime cumque fugiat obcaecati nemo nisi fuga vero, tempora dolores aperiam quaerat delectus, ad repellat.
</div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="hidden  bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 text-white gap-4 md:flex justify-center items-center"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me  <FaPhoneAlt />
          </motion.button>
        </nav>
      </div>


    </header>
  );
};

export default Header;
