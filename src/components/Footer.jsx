import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-slogan">
        <h2>"<em>Build</em>,<span> Create</span>, <strong>Empower.</strong>"</h2>
      </div>
      <hr />

      <div className="footer-content">
        <div className="footer-info">
         <a href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#services">Services</a>
         <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">
          <div className="social-icons">
          <a href='https://github.com/yourusernamehere'>
           <FontAwesomeIcon icon={faGithub} size='2x'/>
           </a>
           <a href='https://Linkedin.com/yourusernamehere'>
           <FontAwesomeIcon icon={faLinkedin} size='2x'/>
           </a>
           <a href='https://tiktok.com/yourusernamehere'>
           <FontAwesomeIcon icon={faTiktok} size='2x'/>
           </a>
           <a href="#"><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Liam H Code.  All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
