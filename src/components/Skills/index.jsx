import React from "react";
import images from "../images/images.jsx";
import {
  SkillsSection,
  SkillsHeading,
  SkillsCategory,
  CategoryHeading,
  SkillsContainer,
  SkillCard,
  SkillImage,
  SkillName
} from "./StyleComponents";

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
    <SkillsSection id="skills">
      <SkillsHeading>My Skills</SkillsHeading>

      {Object.entries(skillsData).map(([category, skills]) => (
        <SkillsCategory key={category}>
          <CategoryHeading>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryHeading>

          <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                large={
                  category === "backend" ||
                  category === "database" ||
                  category === "tools"
                }
              >
                <SkillImage src={skill.img} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsContainer>
        </SkillsCategory>
      ))}
    </SkillsSection>
  );
};

export default Skills;