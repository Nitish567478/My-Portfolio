import React, { useState } from "react";
import images from "../images/images.jsx";
import FeaturedProject from "../FeaturedProject/index.jsx";
import {
  ProjectsSection,
  ProjectsHeading,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDesc,
  ProjectLinks,
  ProjectButton,
  SeeAllContainer,
  TechStack,
  TechTag,
  FilterContainer,
  FilterButton,
  FeaturedBadge
} from "./StyleComponents.js";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

const projectsData = [

  {
    id: "ai-mcq",
    image: images.wiki,
    alt: "AI MCQ Generator Screenshot",
    title: "AI MCQ Quiz Generator",
    desc: "AI-powered system that converts Wikipedia URLs into structured MCQ questions.",
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    category: "AI",
    featured: true,
    caseStudy: `
Problem:
Manual MCQ creation from large content is time-consuming.

Solution:
Integrated OpenAI API to dynamically generate structured MCQs from Wikipedia content.

Architecture:
React → Express → OpenAI API → Response Formatter

Key Features:
• Dynamic question generation
• API integration
• Structured formatting
• Error handling

Impact:
Automated question generation with scalable backend logic.
    `,
    live: "https://ai-mcq-generator-seven.vercel.app/",
    github: "https://github.com/Nitish567478/AI-MCQ-Generator-Frontend",
  },

  {
    id: "task-manager",
    image: images.task,
    alt: "Task Management System Screenshot",
    title: "Task Management System",
    desc: "Authentication-based task management system with CRUD operations.",
    tech: ["React", "JWT", "Context API"],
    category: "Frontend",
    featured: true,
    caseStudy: `
Problem:
Users need structured task tracking.

Solution:
Developed authentication-based task manager with persistent state handling.

Key Features:
• Add / Edit / Delete tasks
• Secure login
• Local storage persistence
• Dynamic state updates

Impact:
Improved productivity through organized workflow management.
    `,
    live: "https://task-manager-psi-sandy.vercel.app/login",
    github: "https://github.com/Nitish567478/Task-Manager-Frontend",
  },

  {
    id: "school-management",
    image: images.school,
    alt: "School Management Website",
    title: "School Management System",
    desc: "Informational and admission management website for school administration.",
    tech: ["React", "Form Handling", "Responsive UI"],
    category: "Frontend",
    featured: false,
    caseStudy: `
Problem:
Schools need a digital platform for admission queries and information.

Solution:
Built responsive website with admission form and structured information layout.

Key Features:
• Admission form handling
• Information sections
• Responsive design
• Clean UI structure

Impact:
Improved accessibility of school information and digital inquiries.
    `,
    live: "https://my-school-sooty.vercel.app/",
    github: "https://github.com/Nitish567478/My-School",
  },

  {
    id: "counter-app",
    image: images.counter,
    alt: "Counter Application",
    title: "Counter Application",
    desc: "Lightweight counter app with dynamic state updates.",
    tech: ["React", "useState"],
    category: "Frontend",
    featured: false,
    caseStudy: `
Problem:
Basic state management practice application.

Solution:
Implemented dynamic counter with increment and decrement logic.

Key Features:
• Real-time updates
• Simple UI
• State management

Impact:
Strengthened understanding of React state handling.
    `,
    live: "https://counter-gray-five.vercel.app/",
    github: "https://github.com/Nitish567478/counter",
  },

  {
    id: "feedback-system",
    image: images.feedback,
    alt: "Feedback Management System",
    title: "Feedback Management System",
    desc: "Full-stack feedback collection and storage platform.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    featured: true,
    caseStudy: `
Problem:
Organizations require structured feedback storage.

Solution:
Developed full-stack system with backend API and database integration.

Architecture:
React → Express → MongoDB

Key Features:
• Feedback submission
• Data storage
• Backend API
• Scalable database schema

Impact:
Improved structured data handling and backend integration skills.
    `,
    live: "https://lighthearted-kelpie-beca12.netlify.app/",
    github: "https://github.com/Nitish567478/feedback-website",
  },

  {
    id: "collab-canvas",
    image: images.canvas,
    alt: "Collaborative Canvas",
    title: "Real-Time Collaborative Canvas",
    desc: "Multi-user real-time drawing platform using WebSockets.",
    tech: ["React", "Node.js", "Socket.io"],
    category: "Full Stack",
    featured: true,
    caseStudy: `
    Problem:
    Traditional drawing apps lack real-time collaboration.

    Solution:
    Implemented WebSocket-based synchronization for multiple users.

    Architecture:
    React Canvas → Socket.io → Node Server

    Key Features:
    • Real-time drawing
    • Multi-user support
    • Event-based communication

    Impact:
    Achieved low-latency multi-user canvas updates.
    `,
    live: "https://collaborative-canvas-1-rwuf.onrender.com/",
    github: "https://github.com/Nitish567478/collaborative-canvas",
  },

//   {
//     id: "calculator-app",
//     image: images.cpp,
//     alt: "Calculator Application",
//     title: "Calculator Application",
//     desc: "Basic calculator with arithmetic operations and clean UI.",
//     tech: ["React", "JavaScript"],
//     category: "Frontend",
//     featured: false,
//     caseStudy: `
// Problem:
// Basic arithmetic operation interface.

// Solution:
// Built calculator with dynamic number input and operation handling.

// Key Features:
// • Add / Subtract / Multiply / Divide
// • Clean UI
// • State handling

// Impact:
// Improved logic building and UI structuring.
//     `,
//     live: "https://chat-gpt-pizl.vercel.app/",
//     github: "https://github.com/nitishyadav47/calculator",
//   },

//   {
//     id: "quiz-app",
//     image: images.cpp,
//     alt: "Quiz Application",
//     title: "Quiz Application",
//     desc: "Interactive quiz app with score tracking and navigation logic.",
//     tech: ["React", "State Management"],
//     category: "Frontend",
//     featured: false,
//     caseStudy: `
// Problem:
// Users need interactive practice quizzes.

// Solution:
// Built quiz application with score tracking and next-question navigation.

// Key Features:
// • Dynamic question rendering
// • Score calculation
// • Result display

// Impact:
// Enhanced understanding of conditional rendering and state logic.
//     `,
//     live: "https://your-live-link.com",
//     github: "https://github.com/nitishyadav47/quiz-app",
//   }

  ];

  const categories = ["All", "AI", "Frontend", "Full Stack"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <>
      <ProjectsSection id="projects">
        <ProjectsHeading>Projects</ProjectsHeading>

        <FilterContainer>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} featured={project.featured}>

              {project.featured && (
                <FeaturedBadge>Featured</FeaturedBadge>
              )}

              <ProjectImage
                src={project.image}
                alt={project.alt}
                loading="lazy"
              />

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>

              <TechStack>
                {project.tech.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>

              <ProjectLinks>
                <ProjectButton
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Live Demo ↗
                </ProjectButton>

                <ProjectButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  GitHub ↗
                </ProjectButton>

                <ProjectButton
                  as="button"
                  onClick={() => setSelectedProject(project)}
                  variant="secondary"
                >
                  Case Study
                </ProjectButton>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectGrid>

        <SeeAllContainer>
          <ProjectButton
            href="http://myallproj.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            large
          >
            See All Projects ↗
          </ProjectButton>
        </SeeAllContainer>
      </ProjectsSection>

      {/* Modal Popup */}
      {selectedProject && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>{selectedProject.title}</h2>
            <pre style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
              {selectedProject.caseStudy}
            </pre>
            <button
              style={closeButtonStyle}
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <FeaturedProject />
    </>
  );
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999
};

const modalStyle = {
  background: "#1a1a1a",
  padding: "40px",
  borderRadius: "20px",
  maxWidth: "700px",
  width: "90%",
  color: "#fff",
  border: "1px solid rgba(255,87,51,0.4)"
};

const closeButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "#ff5733",
  color: "#fff",
  cursor: "pointer"
};

export default Projects;