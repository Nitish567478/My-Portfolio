import React from "react";
import "./index.css";
import images from "../images/images.jsx";

const skillsData = {
  programming: [
    { name: "C++", img: images.cpp },
    { name: "Python", img: images.python },
    { name: "JavaScript", img: images.javascript },
  ],

  frontend: [
    { name: "HTML", img: images.html },
    { name: "CSS", img: images.css },
    { name: "React", img: images.react },
    { name: "Bootstrap", img: images.bootstrap },
  ],

  backend: [
    { name: "Node.js", img: images.node },
    { name: "Express.js", img: images.express },
  ],

  database: [
    { name: "DBMS", img: images.dbms },
    { name: "MongoDB", img: images.mongodb }, 
  ],

  tools: [
    { name: "Git", img: images.git },
    { name: "GitHub", img: images.github },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Skills</h2>

      {/* Programming */}
      <div className="skills-category programming">
        <h3 className="skills-category-heading programming">Programming</h3>
        <div className="skills-container">
          {skillsData.programming.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="skills-category frontend">
        <h3 className="skills-category-heading frontend">Frontend</h3>
        <div className="skills-container">
          {skillsData.frontend.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="skills-category backend">
        <h3 className="skills-category-heading backend">Backend</h3>
        <div className="skills-container">
          {skillsData.backend.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Database */}
      <div className="skills-category database">
        <h3 className="skills-category-heading database">Database</h3>
        <div className="skills-container">
          {skillsData.database.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="skills-category tools">
        <h3 className="skills-category-heading tools">Tools</h3>
        <div className="skills-container">
          {skillsData.tools.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-image" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
