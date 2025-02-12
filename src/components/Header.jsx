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




const Hero = () => {
  return (
    
   <div className="header" id="home">
    <div className='scroll'>
      <a href="#about"><HiArrowSmallDown size='2rem'/></a>
</div>
     <div className='Header-main'>
     <div className='image-1'>
         <img src={Orion_edit} alt="art-image" />
         <img src={Orion_puzzle} alt="art-image" />
         </div>
        <h1><em>Build</em> 
         <br /><span> Create</span><br /> <strong>Empower.</strong> <br />
         <p>I turn ideas into pixel perfect websites</p> </h1>
         <div className="image-2">
         <img src={Orion_settings} alt="art-image" />
         <img src={Orion_code} alt="art-image" />
        
         </div>
      {/* <div className='image-2'>
         <img src={Orion_puzzle} alt="art-image" />
         </div> */}
    </div>
    
    
    <div className='icons'>
    <a href='https://github.com/yourusernamehere'>
           <FontAwesomeIcon icon={faGithub} size='2x'/>
           </a>
           <a href='https://Linkedin.com/yourusernamehere'>
           <FontAwesomeIcon icon={faLinkedin} size='2x'/>
           </a>
           <a href='https://tiktok.com/yourusernamehere'>
           <FontAwesomeIcon icon={faTiktok} size='2x'/>
           </a>
           {/* <a  className="top" href="#home"><FaArrowUp />
</a> */}
          
    </div>
    <a className="services" href="#portfolio">
    <p>Portfolio</p>
    <a href=""><span>BrickByBrick <strong> 🟢</strong></span></a>
   </a>

 

   {/* <a className="services" href="services">
    Services
   <FontAwesomeIcon icon={faWandMagicSparkles} style={{ color: 'white' }} size='1x' />
   </a> */}
   
   
   
    
   </div>
  )
}

export default Hero