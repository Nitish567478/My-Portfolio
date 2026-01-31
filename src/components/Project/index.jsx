import React from "react";
import images from "../images/images.jsx";
import "./index.css";

const Projects = () => {
  const projectsData = [
    {
      images: { name: "C++", img: images.cpp },
      title: "Balloon Pop Game",
      desc: "Interactive game built with React hooks and animations",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/balloon-pop-game",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "Simon Says",
      desc: "Memory game with sound effects and smooth animations",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/simon-says",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "School Admission Form",
      desc: "Complete admission system with form validation",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/admission-form",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "Portfolio Website",
      desc: "Personal portfolio with smooth scrolling and responsive UI",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/portfolio",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "Todo App",
      desc: "Task manager with add, edit, delete and local storage support",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/todo-app",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "Weather App",
      desc: "Live weather app using API with search and dynamic UI updates",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/weather-app",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "Calculator",
      desc: "Simple calculator with clean UI and fast calculations",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/calculator",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "Quiz App",
      desc: "Quiz app with score tracking and next question navigation",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/quiz-app",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "E-commerce UI",
      desc: "Shopping UI with product cards, cart layout and filters",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/ecommerce-ui",
    },
    {
      images: { name: "C++", img: images.cpp },
      title: "Login Signup Form",
      desc: "Authentication UI with validations and modern design",
      live: "https://your-live-link.com",
      github: "https://github.com/your-username/login-signup",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            {/* ✅ FIXED HERE */}
            <img
              src={project.images.img}
              alt={project.images.name}
              className="skill-image"
            />

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo <span className="arrow">↗</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
