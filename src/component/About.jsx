import React from "react";
import AboutContent from "../allComponent/AboutContent";
import Footer from "../allComponent/Footer";
import HeroPage2 from "../allComponent/HeroPage2";
import Navbar from "../allComponent/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroPage2 heading="ABOUT" text="I am friendly REACT DEVELOPER" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
