import React from 'react'
import Footer from '../allComponent/Footer'
import HeroPage2 from '../allComponent/HeroPage2'
import Navbar from '../allComponent/Navbar'
import Work from '../allComponent/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroPage2 
      heading="PROJECT" 
      text="Some of my recent Projects" 
      />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
