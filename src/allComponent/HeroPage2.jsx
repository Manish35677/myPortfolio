import './HeroPage2.css'

import React from 'react'

const HeroPage2 = ({heading, text}) => {
  return (
    <div className='hero-img'>
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroPage2