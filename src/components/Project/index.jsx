import React from "react";
import images from "../images/images.jsx";
import FeaturedProject from "../FeaturedProject";
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
  SeeAllContainer
} from "./StyleComponents";

const Projects = () => {
  const projectsData = [
    {
      images: { name: "Wikipedia", img: images.wiki },
      title: "AI MCQ Quiz Generator",
      desc: "Interactive Wikipedia URL input converts to MCQ questions for practice.",
      live: "https://ai-mcq-generator-seven.vercel.app/",
      github: "https://github.com/Nitish567478/AI-MCQ-Generator-Frontend",
    },
    {
      images: { name: "Task Management", img: images.task },
      title: "Task Management System",
      desc: "Task manager with add, edit, delete, local storage, and history views.",
      live: "https://task-manager-psi-sandy.vercel.app/login",
      github: "https://github.com/Nitish567478/Task-Manager-Frontend",
    },
    {
      images: { name: "School", img: images.school },
      title: "School Management",
      desc: "School website with admission forms, queries, and full information.",
      live: "https://my-school-sooty.vercel.app/",
      github: "https://github.com/Nitish567478/My-School",
    },
    {
      images: { name: "Counter", img: images.counter },
      title: "Counter",
      desc: "Simple counter to track repetitions like chants or counts.",
      live: "https://counter-gray-five.vercel.app/",
      github: "https://github.com/Nitish567478/counter",
    },
    {
      images: { name: "Feedback", img: images.feedback },
      title: "Feedback Management System",
      desc: "Store and view work feedback with location tracking.",
      live: "https://lighthearted-kelpie-beca12.netlify.app/",
      github: "https://github.com/Nitish567478/feedback-website",
    },
    {
      images: { name: "Canvas", img: images.canvas },
      title: "Collaborative Canvas",
      desc: "Real-time collaborative drawing with multiple users and DSA practice.",
      live: "https://collaborative-canvas-1-rwuf.onrender.com/",
      github: "https://github.com/Nitish567478/collaborative-canvas",
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
      <ProjectsSection id="projects">
        <ProjectsHeading>Projects</ProjectsHeading>

        <ProjectGrid>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} delay={0.15 + index * 0.1}>
              <ProjectImage
                src={project.images.img}
                alt={project.images.name}
                loading="lazy"
              />

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>

              <ProjectLinks>
                <ProjectButton
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </ProjectButton>

                <ProjectButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <span>GitHub</span>
                  <span>↗</span>
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
            <span>See All Projects</span>
            <span>↗</span>
          </ProjectButton>
        </SeeAllContainer>
      </ProjectsSection>

      <FeaturedProject />
    </>
  );
};

export default Projects;