import React from 'react';
import { motion } from 'framer-motion';

// import GitHubCalendarComponent from './components/ui components/GitHubCalendarComponent';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // PrimeReact Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import SocialIcons from '../components/layouts/SocialIcons';
import Header from '../components/layouts/Header';
import ScrollProgressBar from '../components/ui components/ScrollProgressBar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Testimonials from '../components/testimonials';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';
import Footer from '../components/layouts/Footer';
import Hero from '../components/Hero';
import PageNavigation from '../components/ui components/PageNavigation';
import Timeline from '../components/Experience';
import TimelineComponent from '../components/Experience';

const Home: React.FC = () => {
  return (
    <motion.div
      className="h-screen flex bg-gray-900 text-white gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >        
      {/* PageNavigation is fixed */}
      {/* <PageNavigation /> */}
    
      {/* Main content area next to the sidebar */}
      <div className="w-full flex flex-col">                
        <main className="flex-grow">
        <Hero />
        <About />         
        <Skills />
        <Projects />
        <Services />
        <Partners />
        <Testimonials />
        <TimelineComponent />
        <Contact />                    
        </main>
        {/* <Footer /> */}
      </div>
    </motion.div>
  );
};

export default Home;
