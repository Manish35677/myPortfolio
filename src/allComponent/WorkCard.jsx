import "./WorkCardStyle.css"

import React from 'react'
// import { a } from "react-router-dom"

const WorkCard = ({imgsrc, title, text, view}) => {
  return (
    <div className="project-card">
            <img src={imgsrc} alt="ProjectImg" />
            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
                <p>{text}</p>
                <div className="pro-btns">
                    <a target="_blank" rel="noreferrer" href={view} className="btn" >VIEW</a>
                    <a target="_blank" rel="noreferrer" href={view} className="btn" >SOURCE</a>
                </div>
            </div>
        </div>
  )
}

export default WorkCard
