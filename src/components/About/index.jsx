import React from "react";
import {
  AboutSection,
  AboutPart,
  AboutHeading,
  AboutParagraph,
  StrongAbout,
  EducationSection,
  EducationHeading,
  EducationList,
  EducationItem
} from "./StyleComponent";

const About = () => {
  const educationData = [
    {
      degree: "B.Tech (Computer Science & Engineering)",
      institution: "RKDF University, Ranchi",
      duration: "Currently Studying",
    },
    {
      degree: "12th (ISc)",
      institution: "Geeta Inter College, Hazaribag",
      duration: "2020 - 2022",
    },
    {
      degree: "10th",
      institution: "Lal Bihari Mahto Divine Public School, Giridih",
      duration: "2018 - 2020",
    },
  ];

  return (
    <AboutSection id="about">
      {/* --- Left Side: About Content --- */}
      <AboutPart>
        <AboutHeading>About Me</AboutHeading>
        <AboutParagraph>
          Hi, I’m <StrongAbout>Nitish Kumar Yadav</StrongAbout>, a passionate{" "}
          <StrongAbout>React Developer</StrongAbout> from Giridih, Jharkhand. 
          I bridge the gap between complex backend logic and pixel-perfect frontend design.
        </AboutParagraph>
        <AboutParagraph>
          I specialize in <StrongAbout>React.js, Node.js,</StrongAbout> and modern web ecosystems. 
          My goal is to build scalable applications that provide a seamless user experience while maintaining clean, maintainable code.
        </AboutParagraph>
        <AboutParagraph>
          I am a <StrongAbout>Full Stack Developer</StrongAbout> with a passion for turning complex problems into intuitive, high-performance web applications. 
          Currently pursuing my <StrongAbout>B.Tech at RKDF University</StrongAbout>, I’ve transitioned from being curious about how the web works to building 
          robust systems using the <StrongAbout>MERN stack</StrongAbout>.
        </AboutParagraph>
        {/* <AboutParagraph>
          My approach is simple: <StrongAbout>Code with purpose.</StrongAbout> Whether I’m perfecting a UI transition in <StrongAbout>React</StrongAbout> or 
          architecting a database in <StrongAbout>MongoDB</StrongAbout>, I focus on scalability and user experience. I don’t just write code; I build digital solutions 
          that help people connect and create.
        </AboutParagraph> */}
      </AboutPart>

      {/* --- Right Side: Education Timeline --- */}
      <EducationSection>
        <EducationHeading>Education</EducationHeading>
        <EducationList>
          {educationData.map((edu, index) => (
            <EducationItem key={index}>
              <strong>{edu.degree}</strong>
              <p>{edu.institution}</p>
              <span>{edu.duration}</span>
            </EducationItem>
          ))}
        </EducationList>
      </EducationSection>
    </AboutSection>
  );
};

export default About;