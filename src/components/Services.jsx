import React, { useState }from 'react';
import './Services.css';




const serviceData = [
  {
    id: 1,
    category: "Basic",
    description: "A single page website that reflects your vision. Perfect for Landing pages, sole traders and small businesses wanting to offer a simple point of contact.",
    features: ["✔️ 1 page with sections for About Us, Services, Reviews, FAQs & Contact", "✔️ 1 week turnaround", 
    "✔️ 1 round of feeback", "✔️ Branding with logo, colours and fonts","✔️ Animations on request" ],
    borderColor: "#FB8500", // Orange-Red for Basic,
  },
  {
    id: 2,
    category: "Professional",
    description: "An ideal solution for businesses who require a websites that that evelates your brand with room to grow whilst not missing one details to spare.",
    features: [ "✔️ 4 Pages [ Home, About Us, Services, Contact ]", " ✔️ 2 week turnaround", "✔️ 2 rounds of feedback","✔️ pixel perfect branding through iconography and images.",
    "✔️ Scroll and button animations"
  ],
  borderColor: "#6A5ACD", // Blue-Violet for Professional
  
  },
  {
    id: 3,
    category: "Deluxe",
    description: "A comprehensive website that offers a foundation for a growing business. Build an online presense that represents your value without missing a page.",
    features: ["✔️ up to 10 pages [ Features from Professional + 4/6 more such as Portfolio, FAQs, Blog etc", " ✔️ 3 week turnaround", " ✔️ 3 rounds of feedback"
    , " ✔️ Richer branding throgh UX/UI and styling", " ✔️ Scroll, Button and page animations", " ✔️ Additional extras upon request.."],
    borderColor: "#FFB703", // Lime Green for UX/UI
  },
];

const Services = () => {
  return (
    <section id='services' className="services-container">
      <h2 className="services-title">My Website packages </h2>
      {/* <p className='services-sub-heading'>Unsure what you need? No worries!Get in touch!, and i can set up a brief consultation to
       get your dream website on the go.
        </p> */}
      <div className="services-grid">
        {serviceData.map((service) => (
          <div className="service-card" key={service.id}
          style={{ borderColor: service.borderColor }}>

            <h3 className="service-category">{service.category}</h3>
            <p className="service-description">{service.description}</p>
            <p className="key-features-label">Key Features</p>
            <ul className="features-list">
              {service.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="enquire-button"><a href="#contact">Enquire now</a></button>      
                </div>
        ))}
      </div>

      <p></p>
    </section>
  );
};

export default Services;
