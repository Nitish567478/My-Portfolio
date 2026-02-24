import React from "react";
import images from "../images/images.jsx";
import {
  SkillsSection,
  SkillsHeading,
  SkillsGrid,
  SkillItem,
  SkillIcon,
  SkillLabel
} from "./StyleComponents.js";

const skills = [
  { name: "C++", img: images.cpp },
  { name: "Python", img: images.python },
  { name: "JavaScript", img: images.javascript },

  { name: "HTML", img: images.html },
  { name: "CSS", img: images.css },
  { name: "React", img: images.react },
  { name: "Bootstrap", img: images.bootstrap },

  { name: "Node.js", img: images.node },
  { name: "Express.js", img: images.express },

  { name: "DBMS", img: images.dbms },
  { name: "MongoDB", img: images.mongodb },

  { name: "Git", img: images.git },
  { name: "GitHub", img: images.github },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsHeading>My Skills</SkillsHeading>

      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillIcon>
              <img src={skill.img} alt={skill.name} />
            </SkillIcon>
            <SkillLabel>{skill.name}</SkillLabel>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;