import React from "react";
import images from "../images/images.jsx"; // Update path to your actual image
import "./index.css";

const FeaturedProject = () => {
  return (
    <section className="featured-section">
      <h2 className="featured-title">
        Featured Project
      </h2>

      <div className="featured-project">
        <div className="featured-image">
          <img 
            src={images.barber} 
            alt="Barber Shop Website - Modern booking system with responsive design"
            className="project-image"
          />
        </div>

        <div className="featured-content">
          <h3 className="featured-project-title">Barber Shop Website</h3>
          
          <p className="featured-description">
            Modern barber shop website featuring real-time booking system, 
            dynamic service listings, team profiles, and fully responsive 
            UI/UX design across all devices.
          </p>

          <div className="featured-links project-links">
            <a
              href="https://your-barber-site.netlify.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo 
              <span className="arrow">↗</span>
            </a>

            <a
              href="https://github.com/nitishyadav47/barber-shop-website" // Update repo name
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code 
              <span className="arrow">↗</span>
            </a>
          </div>

          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Tailwind CSS</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
