import React from "react";
import Footer from "../allComponent/Footer";
import Form from "../allComponent/Form";
import HeroPage2 from "../allComponent/HeroPage2";
import Navbar from "../allComponent/Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroPage2
        heading="CONTACT"
        text="The best time for new beginning is now"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
