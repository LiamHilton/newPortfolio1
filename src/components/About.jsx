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
      From the initial concept to the final design, I focus on every detail to create a seamless, visually stunning, and functional website that aligns with your brand and goals.
      With an understanding of user experience, responsive design, and the latest web technologies,
      I craft websites that not only look great but also perform flawlessly across all devices. 
      
      
      <hr />
      <br />
      </p>
      
      <p>
      Whether you’re looking for a sleek portfolio, an engaging business site, or an e-commerce platform, I transform your ideas into a beautifully executed online presence.
      </p>
      <div className='about-me-button'>
        <a href="#services"><HiArrowSmallDown size='2rem'/></a>
       </div>
   
      
    
    </div>
  </section>
)
  
}

export default About