import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css'





const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#services">Services</a></p>
  </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
        <div className="navbar-links">
            <div className="navbar-links-logo">
                <h1>Liam Hilton <br /> <span>Web developer & UX/UI</span></h1>
            </div>
            <div className="navbar-links-container">
                <Menu/>
            </div>
            <div className="Contact-btn">
           <a href="#contact">Contact</a>
         </div>

         {/* navbar menu */}
         <div className='navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#8ECAE6" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#8ECAE6" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <Menu/>
            <div className="navbar-menu_container-links-contact">
             <a href="#contact">Contact</a>
             
          </div>
            </div>
          </div>
        )
      }
        </div>
      </div>
    </div>
  )
}

export default Navbar
