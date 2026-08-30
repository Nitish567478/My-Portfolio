import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FiCpu, FiGrid, FiGlobe, FiCheck, FiX, FiExternalLink, FiLayers, FiZap } from "react-icons/fi";
import images from "../images/images.jsx";
import TechSphere3D from "./TechSphere3D";
import {
  SkillsSection,
  SectionHeader,
  SectionBadge,
  SectionTitle,
  SectionSubtitle,
  ViewControlRow,
  ViewToggleBtn,
  SkillsGrid,
  SkillTiltWrapper,
  SkillCard3D,
  CardGlowHalo,
  SkillIconBox3D,
  IconGlowRing,
  SkillName3D,
  SkillCategoryTag3D,
  SkillLevelBar3D,
  SkillLevelFill3D,
  SkillFooterRow,
  SkillLevelPercent,
  InspectHint,
  SkillModalOverlay,
  SkillModalCard,
  ModalCloseBtn,
  ModalIconHeader,
  ModalSkillName,
  ModalCategoryBadge,
  ModalProficiencyRow,
  ModalSectionTitle,
  ModalProjectList,
  ModalConceptList
} from "./StyleComponents.js";

const skillsData = [
  {
    name: "React.js",
    category: "Frontend",
    img: images.react,
    level: 92,
    color: "#61dafb",
    experience: "3+ Years",
    projects: ["AI MCQ Quiz Generator", "Real-Time Collaborative Canvas", "Task Management System"],
    concepts: ["Hooks & Custom Hooks", "Context API & State Architecture", "Virtual DOM & Performance", "Component Lifecycle"]
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    img: images.javascript,
    level: 95,
    color: "#f7df1e",
    experience: "3+ Years",
    projects: ["All Portfolio Projects", "Real-Time Canvas", "Feedback Hub"],
    concepts: ["Asynchronous JS & Promises", "Closures & Scopes", "Event Loop & DOM Manipulation", "ES6+ Modules"]
  },
  {
    name: "Node.js",
    category: "Backend",
    img: images.node,
    level: 88,
    color: "#339933",
    experience: "2+ Years",
    projects: ["Collaborative Canvas Server", "AI MCQ Generator Backend", "Feedback System API"],
    concepts: ["Event-Driven Architecture", "RESTful API Design", "Express Middleware Pipelines", "Streams & File System"]
  },
  {
    name: "Express.js",
    category: "Backend",
    img: images.express,
    level: 88,
    color: "#e2e8f0",
    experience: "2+ Years",
    projects: ["AI MCQ API Service", "Feedback Hub Endpoints", "School Management API"],
    concepts: ["Route Handlers & Routing", "CORS & Security Middleware", "Error Handling Architecture", "Authentication Integration"]
  },
  {
    name: "MongoDB",
    category: "Database",
    img: images.mongodb,
    level: 85,
    color: "#47a248",
    experience: "2+ Years",
    projects: ["Feedback Management System", "Barber Booking System"],
    concepts: ["NoSQL Schema Design", "Mongoose ODM & Models", "Aggregation Pipelines", "CRUD Optimization"]
  },
  {
    name: "DBMS & SQL",
    category: "Database",
    img: images.dbms,
    level: 84,
    color: "#00758f",
    experience: "2+ Years",
    projects: ["Academic Relational Systems", "Database Optimization Modules"],
    concepts: ["Relational Normalization (1NF-3NF)", "Complex Joins & Subqueries", "ACID Transactions", "Indexing & Query Optimization"]
  },
  {
    name: "HTML5 & Semantic Web",
    category: "Frontend",
    img: images.html,
    level: 96,
    color: "#e34f26",
    experience: "4+ Years",
    projects: ["All Web Projects", "School Admissions Portal"],
    concepts: ["Semantic HTML5 Elements", "Web Accessibility (WCAG)", "SEO Structure & Microdata", "Canvas API"]
  },
  {
    name: "CSS3 & Modern CSS",
    category: "Frontend",
    img: images.css,
    level: 92,
    color: "#1572b6",
    experience: "4+ Years",
    projects: ["Full Portfolio Theme System", "Barber Shop UI"],
    concepts: ["CSS Grid & Flexbox", "Glassmorphism & Backdrop Filters", "Keyframe 3D Animations", "Responsive Media Queries"]
  },
  {
    name: "Bootstrap & Tailwind",
    category: "Frontend",
    img: images.bootstrap,
    level: 88,
    color: "#7952b3",
    experience: "3+ Years",
    projects: ["School Management System", "Barber Shop Website"],
    concepts: ["Responsive Grid Systems", "Utility-First Styling", "Component Prototyping", "Custom Theme Extension"]
  },
  {
    name: "C++",
    category: "Languages",
    img: images.cpp,
    level: 82,
    color: "#00599c",
    experience: "3+ Years",
    projects: ["300+ DSA Solutions", "Algorithm Simulations"],
    concepts: ["Object-Oriented Programming (OOP)", "Pointers & Memory Management", "STL (Vectors, Maps, Sets)", "Algorithmic Complexity (Big O)"]
  },
  {
    name: "Python",
    category: "Languages",
    img: images.python,
    level: 84,
    color: "#3776ab",
    experience: "2+ Years",
    projects: ["Data Automation Scripts", "AI Prompting Pipelines"],
    concepts: ["Data Structures & Scripting", "API Integration", "Automation Workflows", "File Processing"]
  },
  {
    name: "Git & Version Control",
    category: "Tools",
    img: images.git,
    level: 90,
    color: "#f05032",
    experience: "3+ Years",
    projects: ["All Open Source Repositories"],
    concepts: ["Branching Strategies & Merging", "Rebase & Commit Hygiene", "Conflict Resolution", "Version Tagging"]
  },
  {
    name: "GitHub & CI/CD",
    category: "Tools",
    img: images.github,
    level: 92,
    color: "#ffffff",
    experience: "3+ Years",
    projects: ["20+ Public Repositories", "Vercel / Netlify Deployments"],
    concepts: ["Pull Requests & Code Reviews", "GitHub Actions & Deployments", "Repo Management", "Open Source Collaboration"]
  },
];

const categories = ["All", "Frontend", "Backend", "Database", "Languages", "Tools"];

const Skills = () => {
  const [viewMode, setViewMode] = useState("3d-cards"); // "3d-cards" | "3d-sphere"
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <SkillsSection id="skills">
      <SectionHeader>
        <SectionBadge>
          <FiCpu />
          <span>Core Technical Arsenal</span>
        </SectionBadge>
        <SectionTitle>Skills & Technologies</SectionTitle>
        <SectionSubtitle>
          Explore my complete technology stack through interactive cards or an orbital interactive sphere.
        </SectionSubtitle>
      </SectionHeader>

      {/* View Switcher: Grid View vs Orbital Sphere View */}
      <ViewControlRow>
        <ViewToggleBtn
          $isActive={viewMode === "3d-cards"}
          onClick={() => setViewMode("3d-cards")}
        >
          <FiGrid />
          <span>Grid View</span>
        </ViewToggleBtn>

        <ViewToggleBtn
          $isActive={viewMode === "3d-sphere"}
          onClick={() => setViewMode("3d-sphere")}
        >
          <FiGlobe />
          <span>Orbital Sphere View</span>
        </ViewToggleBtn>
      </ViewControlRow>

      {/* View 1: 3D Parallax Hologram Grid */}
      {viewMode === "3d-cards" ? (
        <SkillsGrid>
          {skillsData.map((skill) => (
            <SkillTiltWrapper key={skill.name}>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={600}
                glareEnable={true}
                glareMaxOpacity={0.18}
                glareColor={skill.color}
                glarePosition="all"
                glareBorderRadius="24px"
              >
                <SkillCard3D
                  $glowColor={skill.color}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <CardGlowHalo $color={skill.color} />

                  <SkillIconBox3D>
                    <IconGlowRing $color={skill.color} />
                    <img src={skill.img} alt={skill.name} loading="lazy" />
                  </SkillIconBox3D>

                  <SkillName3D>{skill.name}</SkillName3D>
                  <SkillCategoryTag3D>{skill.category}</SkillCategoryTag3D>

                  <SkillLevelBar3D>
                    <SkillLevelFill3D $level={skill.level} $color={skill.color} />
                  </SkillLevelBar3D>

                  <SkillFooterRow>
                    <SkillLevelPercent className="font-mono">
                      {skill.level}% Mastery
                    </SkillLevelPercent>
                    <InspectHint>Click to Inspect ↗</InspectHint>
                  </SkillFooterRow>
                </SkillCard3D>
              </Tilt>
            </SkillTiltWrapper>
          ))}
        </SkillsGrid>
      ) : (
        /* View 2: 3D Orbiting Sphere */
        <TechSphere3D
          skills={skillsData}
          onSelectSkill={(skill) => setSelectedSkill(skill)}
        />
      )}

      {/* 3D Skill Details Inspector Modal */}
      {selectedSkill && (
        <SkillModalOverlay onClick={() => setSelectedSkill(null)}>
          <SkillModalCard
            $glowColor={selectedSkill.color}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalCloseBtn onClick={() => setSelectedSkill(null)}>
              <FiX size={20} />
            </ModalCloseBtn>

            <ModalIconHeader>
              <div className="icon-3d-box" style={{ borderColor: selectedSkill.color }}>
                <img src={selectedSkill.img} alt={selectedSkill.name} />
              </div>
              <div>
                <ModalCategoryBadge>{selectedSkill.category}</ModalCategoryBadge>
                <ModalSkillName>{selectedSkill.name}</ModalSkillName>
                <p className="exp-label">Experience: {selectedSkill.experience}</p>
              </div>
            </ModalIconHeader>

            <ModalProficiencyRow>
              <div className="prof-header">
                <span>Proficiency Level</span>
                <span className="val font-mono">{selectedSkill.level}%</span>
              </div>
              <div className="prof-bar">
                <div
                  className="prof-fill"
                  style={{
                    width: `${selectedSkill.level}%`,
                    background: selectedSkill.color,
                  }}
                ></div>
              </div>
            </ModalProficiencyRow>

            <ModalSectionTitle>
              <FiLayers /> Core Concepts & Mastery
            </ModalSectionTitle>
            <ModalConceptList>
              {selectedSkill.concepts.map((concept, idx) => (
                <li key={idx}>
                  <FiCheck className="check-icon" style={{ color: selectedSkill.color }} />
                  <span>{concept}</span>
                </li>
              ))}
            </ModalConceptList>

            <ModalSectionTitle>
              <FiZap /> Implemented in Key Projects
            </ModalSectionTitle>
            <ModalProjectList>
              {selectedSkill.projects.map((proj, idx) => (
                <li key={idx}>
                  <span className="proj-dot" style={{ background: selectedSkill.color }}></span>
                  <span>{proj}</span>
                </li>
              ))}
            </ModalProjectList>
          </SkillModalCard>
        </SkillModalOverlay>
      )}
    </SkillsSection>
  );
};

export default Skills;