import React from 'react'
import './Portfolio.css';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const projects = [
    {
      id: 1,
      title: "Travel Website",
      description: "A stunning website showcasing a travel blog",
      image: {}
    },
    {
      id: 2,
      title: "E-Commerce UI Design",
      description: "A user-friendly shopping interface for a fashion brand.",
      image: {}
    },
    {
      id: 3,
      title: "Coffee Shop Website",
      description: "An elegant coffee shop website hero page.",
      image: {}
    },
    {
        id: 4,
        title: "Desktop & Mobile UX/UI",
        description: "User friendly responsive design example.",
        image: {}
      },
      {
        id: 5,
        title: "Yoga Website",
        description: "Timeless yoga wesbite with multiple pages.",
        image: {}
      },
      {
        id: 5,
        title: "Services Website",
        description: "Landing page with about, services and contact.",
        image: {}
      }
  ];


   
      
      const Portfolio = () => {
        return (
          <section id="portfolio" className="portfolio-container ">
            <h2 className="portfolio-title">My Portfolio</h2>
            <div className="portfolio-grid">
              {projects.map((project) => (
                <div className="portfolio-card" key={project.id}>
                  <img src={project.image} alt={project.title} className="portfolio-image" />
                  <div className="portfolio-details">
                    <h3 className="portfolio-card-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
       
      }

export default Portfolio