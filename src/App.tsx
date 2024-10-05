import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/layouts/Header';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/layouts/Footer';
import Testimonials from './components/testimonials';
import BackToTop from './components/BackToTop';
import ScrollProgressBar from './components/ui components/ScrollProgressBar';
import Partners from './components/Partners';
import Sidebar from './components/layouts/Sidebar';
import SocialIcons from './components/layouts/SocialIcons';
// import GitHubCalendarComponent from './components/ui components/GitHubCalendarComponent';

const App: React.FC = () => {
  return (
    <motion.div
      className="h-screen flex bg-gray-900 text-white gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sidebar is fixed */}
      {/* <Sidebar /> */}
      <SocialIcons /> {/* Fixed sidebar for social icons */}
      {/* Main content area next to the sidebar */}
      <div className="w-full flex flex-col">
        <Header />
        <ScrollProgressBar />

        <main className="flex-grow">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Skills />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Projects />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Services />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Partners />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Testimonials />
          </motion.div>
          <motion.div          
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <ContactForm />
          </motion.div>
          <BackToTop />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default App;
