import './HeroPage.css'

import React from 'react'
import IntroImg from '../assets/main.webp'
import { Link } from 'react-router-dom'
import resume from '../assets/selfResume.pdf'
const HeroPage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='into-img' src={IntroImg} alt='IntroIng' />
        </div>
        <div className="content">
            <p>HI, I'M MANISH KUMAR</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className='btn'>Project</Link>
                <a target="_blank" rel="noreferrer" href={resume} className='btn btn-light'>Download Resume</a>
            </div>
        </div>
    </div>
  )
}

export default HeroPage