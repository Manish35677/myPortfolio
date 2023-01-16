import "./FooterStyle.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>55WZ Hastsal Uttam Nagar</p>
              <p>New Delhi, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              798-864-4179
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mpmanishkumar3@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am energetic fresher and young guy who always look forward to complete the task within given frame of time. I am proficient in HTML5, CSS3, JavaScript, Bootstrap, ReactJs, React Native and Restfull API's and always eager to learn and face new challenges.
          </p>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100006530858421" target="_blank" rel="noreferrer">
              <FaFacebook
              className="iconStyle"
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://twitter.com/manishk73437226?t=G0Gtp8VQbxd1PykVx6sLqA&s=08" target="_blank" rel="noreferrer">
            <FaTwitter
            className="iconStyle"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>

            <a href="https://www.linkedin.com/in/manish-kumar-835832232/" target="_blank" rel="noreferrer">
            <FaLinkedin
            className="iconStyle"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
