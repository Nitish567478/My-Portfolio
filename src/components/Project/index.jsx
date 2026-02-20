// Projects.jsx - COMPLETE UPDATED CODE WITH ALL BUTTONS ENHANCED
import React from "react";
import images from "../images/images.jsx";
import "./index.css";
import FeaturedProject from "../FeaturedProject";

const Projects = () => {
  const projectsData = [
    {
      images: { name: "Wikipedia", img: images.wiki },
      title: "AI MCQ Quiz Generator",
      desc: "Interactive Wikipedia URL input converts to MCQ questions for practice.",
      live: "https://ai-mcq-generator-seven.vercel.app/",
      github: "https://github.com/nitishyadav47/ai-mcq-generator",
    },
    {
      images: { name: "Task Management", img: images.task },
      title: "Task Management System",
      desc: "Task manager with add, edit, delete, local storage, and history views.",
      live: "https://task-manager-psi-sandy.vercel.app/login",
      github: "https://github.com/nitishyadav47/task-manager",
    },
    {
      images: { name: "School", img: images.school },
      title: "School Management",
      desc: "School website with admission forms, queries, and full information.",
      live: "https://my-school-sooty.vercel.app/",
      github: "https://github.com/nitishyadav47/school-management",
    },
    {
      images: { name: "Counter", img: images.counter },
      title: "Counter",
      desc: "Simple counter to track repetitions like chants or counts.",
      live: "https://counter-gray-five.vercel.app/",
      github: "https://github.com/nitishyadav47/counter",
    },
    {
      images: { name: "Feedback", img: images.feedback },
      title: "Feedback Management System",
      desc: "Store and view work feedback with location tracking.",
      live: "https://lighthearted-kelpie-beca12.netlify.app/",
      github: "https://github.com/nitishyadav47/feedback-system",
    },
    {
      images: { name: "Canvas", img: images.canvas },
      title: "Collaborative Canvas",
      desc: "Real-time collaborative drawing with multiple users and DSA practice.",
      live: "https://collaborative-canvas-1-rwuf.onrender.com/",
      github: "https://github.com/nitishyadav47/collaborative-canvas",
    },
    // {
    //   images: { name: "Calculator", img: images.cpp },
    //   title: "Calculator",
    //   desc: "Simple calculator with clean UI and fast calculations.",
    //   live: "https://chat-gpt-pizl.vercel.app/",
    //   github: "https://github.com/nitishyadav47/calculator",
    // },
    // {
    //   images: { name: "Quiz", img: images.cpp },
    //   title: "Quiz App",
    //   desc: "Quiz app with score tracking and next question navigation.",
    //   live: "https://your-live-link.com",
    //   github: "https://github.com/nitishyadav47/quiz-app",
    // },
  ];

  return (
    <>
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.images.img}
                alt={project.images.name}
                className="project-image"
                loading="lazy"
              />

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary-btn"
                  aria-label={`Live demo of ${project.title}`}
                >
                  <span className="btn-text">Live Demo</span>
                  <span className="arrow">↗</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn secondary-btn"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <span className="btn-text">GitHub</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="see-all-container">
          <a
            href="http://myallproj.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn gradient-btn see-all-btn"
            aria-label="View all projects portfolio"
          >
            <span className="btn-text">See All Projects</span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </section>
      <FeaturedProject />
    </>
  );
};

export default Projects;
