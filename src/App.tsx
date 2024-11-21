import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // PrimeReact Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import ErrorPage from "./Error-page";
import Skill from "./pages/Skill";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import ScrollProgressBar from "./components/ui components/ScrollProgressBar";
import SocialIcons from "./components/layouts/SocialIcons";
// import Resume from './pages/Resume';
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Search from "./pages/Search";
import About from "./pages/About";
import Resume from "./pages/Resume";
import BackToTop from "./components/BackToTop";

const App: React.FC = () => {
  const profile = "/assets/imgs/profile.jpeg";

  const resumeSrc = "/assets/files/invoice-2.pdf"; // Path to your PDF file

  console.log("resumeSrc", resumeSrc);
  return (
    <div className="">
      <BrowserRouter>
        <SocialIcons /> {/* Fixed sidebar for social icons */}
        <div className=" flex-col">
          <Header />
          {/* <Sidebar /> */}

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/skills" element={<Skill />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/projects/:id" element={<ProjectDetails />}></Route>
            <Route
              path="/resume"
              element={
                <Resume isOpen={true} onClose={() => {}} src={resumeSrc} />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/search" element={<Search />}></Route>

            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          <BackToTop />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
