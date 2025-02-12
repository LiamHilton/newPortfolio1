import React from 'react'
import './About.css'
import aboutimg from '../assets/about-img.png';
import { HiArrowSmallDown } from "react-icons/hi2";

const About = () => {
  return (
    <section  id="about" className="about-me-container">
    <div className="about-me-image">
      <img
        src={aboutimg}
        alt="Profile"
      />
    
        {/* <div className='about-me-button'>
        <a href="#services"><HiArrowSmallDown size='2rem'/></a>
       </div> */}
    </div>
    <div className="about-me-content">
      <h1 className="about-me-title">Over the years,</h1>
      <p>
      I have been on a journey of growth in Frontend Web Development
       and UX/UI design the past year which has lead me to this very point. 
        My passion lies in crafting visually stunning and user-friendly
      websites that make dreams a reality. 
      <hr />
      <br />
      </p>
      <p>
      For me my main purpose in development is the client and creating high-converting websites
      that not only elevate your online presence but launches you into a new light for your business.
      Without a strategy in place then designs won't have the ability to bring a vison to life.
      that's where i come in.
      <hr />
      <br />
      </p>
      <p>
      I have fell in love with coding and everything design and in return that brought me the skills
      to now truly transform someones business idea into a reality. I have made it my mission to push to be 
      a difference in Web development and make services with all budgets accesible to having there dream website.
      <hr />
      <br />
      </p>
      <p>
      In simple terms my driving force is to bring light into this world through creating websites for people
      whom will have a positive effect in this world. So if that sounds like reach out below with your details 
      and lets starting building your dream website today. 
      </p>
      <div className='about-me-button'>
        <a href="#services"><HiArrowSmallDown size='2rem'/></a>
       </div>
   
      
    
    </div>
  </section>
)
  
}

export default About