import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContentStyle.css'
import Photo from '../assets/MyImg.jpeg'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
            I am React Frontend Developer. I create responsive secure websites for my clients.To work in a coordinated manner with the clients & for the company is always my priority.I always provides the client few options from which they can select what is best suited for them and then work according to their will. Meanwhile i also suggest what will be the best option as per my view.
          
        </p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack">
                <img src={Photo} alt="MyPhoto" className="img" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
