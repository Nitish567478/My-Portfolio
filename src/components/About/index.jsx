import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiCode,
  FiCompass,
  FiLayers,
  FiCpu,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiZap,
  FiTerminal
} from "react-icons/fi";
import {
  AboutSection,
  SectionHeader,
  SectionBadge,
  SectionTitle,
  SectionSubtitle,
  MetricsBar,
  MetricBox,
  AboutGrid,
  AboutCard,
  StoryHeading,
  StoryParagraph,
  HighlightSpan,
  StrengthsGrid,
  StrengthItem,
  TimelineCard,
  TimelineHeading,
  TimelineList,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineYear,
  TimelineTag,
  TimelineTitle,
  TimelineOrg
} from "./StyleComponent";

const metrics = [
  {
    icon: <FiTerminal />,
    iconColor: "#ff5733",
    iconBg: "rgba(255, 87, 51, 0.12)",
    value: "2022 - 2026",
    label: "B.Tech CSE @ RKDF",
  },
  {
    icon: <FiZap />,
    iconColor: "#6366f1",
    iconBg: "rgba(99, 102, 241, 0.12)",
    value: "12+ MERN Apps",
    label: "Full Stack & AI Projects",
  },
  {
    icon: <FiAward />,
    iconColor: "#4285f4",
    iconBg: "rgba(66, 133, 244, 0.12)",
    value: "Google '25",
    label: "Student Ambassador",
  },
  {
    icon: <FiCheckCircle />,
    iconColor: "#22c55e",
    iconBg: "rgba(34, 197, 94, 0.12)",
    value: "Hackathon '25",
    label: "Lead Organizer & Leader",
  },
];

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "RKDF University, Ranchi",
    duration: "2022 - 2026",
    tag: "Graduating 2026",
    tagColor: "#22c55e",
    tagBg: "rgba(34, 197, 94, 0.12)",
    tagBorder: "rgba(34, 197, 94, 0.3)",
    nodeColor: "#22c55e",
    description: "Specializing in Full Stack Systems, Data Structures & Algorithms, Database Engineering, and Scalable Web Architectures.",
  },
  {
    degree: "Google Student Ambassador (2025)",
    institution: "Google Campus Developer Program",
    duration: "2025",
    tag: "Ambassadorship",
    tagColor: "#4285f4",
    tagBg: "rgba(66, 133, 244, 0.12)",
    tagBorder: "rgba(66, 133, 244, 0.3)",
    nodeColor: "#4285f4",
    description: "Advocated Google developer technologies on campus, coordinated tech events & workshops, and received official Google developer swag honors.",
  },
  {
    degree: "Lead Organizer & Team Leader - Campus Hackathon (2025)",
    institution: "RKDF University, Ranchi",
    duration: "2025",
    tag: "Leadership",
    tagColor: "#ff5733",
    tagBg: "rgba(255, 87, 51, 0.12)",
    tagBorder: "rgba(255, 87, 51, 0.3)",
    nodeColor: "#ff5733",
    description: "Spearheaded and organized a university-level Hackathon with a multi-member student team. Managed event tracks, problem statement design, mentor coordination, and technical evaluation rounds.",
  },
  {
    degree: "Senior Secondary / 12th (ISc - PCM)",
    institution: "Geeta Inter College, Hazaribag",
    duration: "2020 - 2022",
    tag: "Higher Secondary",
    tagColor: "#a855f7",
    tagBg: "rgba(168, 85, 247, 0.12)",
    tagBorder: "rgba(168, 85, 247, 0.3)",
    nodeColor: "#a855f7",
    description: "Specialized in Physics, Chemistry, and Mathematics with a strong analytical and problem-solving foundation.",
  },
  {
    degree: "Secondary School / 10th",
    institution: "Lal Bihari Mahto Divine Public School, Giridih",
    duration: "2018 - 2020",
    tag: "Secondary",
    tagColor: "#06b6d4",
    tagBg: "rgba(6, 182, 212, 0.12)",
    tagBorder: "rgba(6, 182, 212, 0.3)",
    nodeColor: "#06b6d4",
    description: "Excelled in Mathematics and Science foundations with active participation in science exhibitions and coding challenges.",
  },
];

const strengths = [
  { icon: <FiLayers />, title: "Full Stack MERN", desc: "React, Node.js, Express, MongoDB" },
  { icon: <FiCpu />, title: "Real-time & AI", desc: "WebSockets, REST APIs, OpenAI LLMs" },
  { icon: <FiCode />, title: "Clean Architecture", desc: "Maintainable, tested, production-ready code" },
  { icon: <FiCompass />, title: "Tech Leadership", desc: "Hackathon Organizer & Google Ambassador" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
  },
};

const About = () => {
  return (
    <AboutSection id="about">
      {/* Animated Header */}
      <SectionHeader
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <SectionBadge>
          <FiBookOpen />
          <span>My Journey & Background</span>
        </SectionBadge>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>
          Passionate Full Stack Engineer creating scalable web applications, real-time AI tools, and production-ready digital architectures.
        </SectionSubtitle>
      </SectionHeader>

      {/* Animated Quick Metrics Bar */}
      <MetricsBar
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {metrics.map((metric, idx) => (
          <MetricBox key={idx} variants={itemFadeUp}>
            <div
              className="metric-icon"
              style={{ background: metric.iconBg, color: metric.iconColor }}
            >
              {metric.icon}
            </div>
            <div className="metric-content">
              <h4>{metric.value}</h4>
              <p>{metric.label}</p>
            </div>
          </MetricBox>
        ))}
      </MetricsBar>

      {/* Main Content Grid with 3D Tilt & Staggered Animations */}
      <AboutGrid>
        {/* Left: Professional Story Card with Tilt */}
        <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          perspective={1200}
          scale={1.01}
          transitionSpeed={600}
        >
          <AboutCard
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <StoryHeading>Engineering with Passion & Purpose</StoryHeading>
            <StoryParagraph>
              Hello! I'm <HighlightSpan>Nitish Kumar Yadav</HighlightSpan>, a full-stack engineer from Giridih, Jharkhand. I bridge the gap between robust backend architectures and delightful, pixel-perfect frontend experiences.
            </StoryParagraph>
            <StoryParagraph>
              Pursuing my <HighlightSpan>B.Tech in Computer Science & Engineering (2022 - 2026) at RKDF University, Ranchi</HighlightSpan>, I spend my days architecting modern web applications with the <HighlightSpan>MERN stack (MongoDB, Express, React, Node.js)</HighlightSpan>, exploring AI integrations, and solving algorithmic challenges.
            </StoryParagraph>
            <StoryParagraph>
              My core philosophy is simple: <HighlightSpan>write clean, maintainable code that solves real problems</HighlightSpan>. Whether designing low-latency WebSocket communication or refining UI micro-animations, I focus relentlessly on user experience and system reliability.
            </StoryParagraph>

            <StrengthsGrid>
              {strengths.map((item, idx) => (
                <StrengthItem
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="icon-wrapper">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </StrengthItem>
              ))}
            </StrengthsGrid>
          </AboutCard>
        </Tilt>

        {/* Right: Animated Academic Background Timeline Card with Tilt */}
        <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          perspective={1200}
          scale={1.01}
          transitionSpeed={600}
        >
          <TimelineCard
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TimelineHeading>
              <div className="heading-left">
                <FiAward />
                <h3>Academic Background</h3>
              </div>
              <div className="live-badge">
                <span className="dot" />
                <span>B.Tech (2022-2026)</span>
              </div>
            </TimelineHeading>

            <TimelineList>
              {educationData.map((edu, index) => (
                <TimelineItem
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TimelineIcon $color={edu.nodeColor} />
                  <TimelineContent>
                    <div className="edu-top-row">
                      <TimelineYear>
                        <FiCalendar size={12} />
                        <span>{edu.duration}</span>
                      </TimelineYear>
                      <TimelineTag
                        $color={edu.tagColor}
                        $bg={edu.tagBg}
                        $border={edu.tagBorder}
                      >
                        {edu.tag}
                      </TimelineTag>
                    </div>
                    <TimelineTitle>{edu.degree}</TimelineTitle>
                    <TimelineOrg>
                      <FiMapPin size={13} />
                      <span>{edu.institution}</span>
                    </TimelineOrg>
                    <p className="edu-desc">{edu.description}</p>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </TimelineList>
          </TimelineCard>
        </Tilt>
      </AboutGrid>
    </AboutSection>
  );
};

export default About;