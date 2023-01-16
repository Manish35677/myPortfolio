import "./NavStyle.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showHum, setShowHum] = useState(false);
  const handleClick = () => {
    setShowHum(!showHum);
  };
  // *******************************************
const [color, setColor] = useState(false)
const changeColor = () => {
  if(window.scrollY >= 100){
    setColor(true)
  }
  else{
    setColor(false)
  }
}

window.addEventListener("scroll", changeColor)
  return (
    <header className={color? "header header-bg": "header"}>
      <NavLink to="/">
        <h1>MyPortfolio</h1>
      </NavLink>
      <ul className={showHum ? "nav-style active" : "nav-style"}>
        <li>
          <NavLink className="nav-link menu_active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/project">Project</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {showHum ? (
          <ImCross size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
