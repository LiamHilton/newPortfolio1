import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { HiArrowSmallDown } from "react-icons/hi2";
import { FaArrowUp } from "react-icons/fa";
import Orion_edit from '../assets/Orion_edit-window (2).svg';
import Orion_puzzle from '../assets/Orion_puzzle (1).svg';
 import Orion_settings from '../assets/Orion_settings-server.svg';
 import Orion_code from '../assets/Orion_code-window.svg';





 
 const Header = () => {
   return (
    <section  id="home"className="hero-container">
      <div className="hero-content">
        {/* Left Side: Workplace & Slogan */}
        <div className="hero-left">
          
          <h1 className="hero-slogan"><em>Build</em> <br />
           <span>Create</span> <br /><strong>Empower.</strong></h1>
           <div className="workplace-box">
            <a href=""><span><strong>BrickByBrick 🟢</strong></span></a>
          </div>
          
        </div>
        <hr />
        
        {/* Right Side: Hero Text & Buttons */}
        <div className="hero-right">
          <p className="hero-text">I'm a Frontend Web Deveoper with a passion for turning ideas into pixel perfect websites.
         </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="#portfolio" className="btn secondary">View Portfolio</a>
          </div>
        </div>
      </div>
    </section>
   );
 };
 
 export default Header;
 





// {/* <div className='icons'>
// <a href='https://github.com/yourusernamehere'>
//        <FontAwesomeIcon icon={faGithub} size='2x'/>
//        </a>
//        <a href='https://Linkedin.com/yourusernamehere'>
//        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
//        </a>
//        <a href='https://tiktok.com/yourusernamehere'>
//        <FontAwesomeIcon icon={faTiktok} size='2x'/>
//        </a>
//        {/* <a  className="top" href="#home"><FaArrowUp />
// </a> */}
    
// </div>
// <a className="services" href="#portfolio">
// <p>Portfolio</p>
// <a href=""><span>BrickByBrick <strong> 🟢</strong></span></a>
// </a> */}