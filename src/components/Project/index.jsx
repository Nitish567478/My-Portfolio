import React, { useState } from "react";
import { FiFolder, FiExternalLink, FiGithub, FiCheck, FiX, FiActivity } from "react-icons/fi";
import images from "../images/images.jsx";
import ProjectMarquee from "./ProjectMarquee";
import {
  ProjectsSection,
  SectionHeader,
  SectionBadge,
  SectionTitle,
  SectionSubtitle,
  ProjectActionBtn,
  CaseStudyModalOverlay,
  CaseStudyModalContent,
  ModalCloseBtn,
  ModalTitleRow,
  ModalHeaderDetails,
  ModalBodySection,
  ArchitectureFlowBox,
  FeatureList,
  ModalCTAFooter,
  SeeAllSection,
  AllProjectsBtn
} from "./StyleComponents.js";

const allProjectsData = [
  {
    id: "barber",
    image: images.barber,
    alt: "Barber Shop & Salon Management Platform",
    title: "Barber Shop Management System",
    desc: "Production-ready salon booking and business platform with stylist scheduling, haircut catalogue, customer appointments, and revenue analytics.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    category: "Full Stack & SaaS",
    problem: "Salons struggle with chaotic walk-in queues, double bookings, and manual phone scheduling, leading to lost revenue and poor customer retention.",
    solution: "Built a high-converting full-stack appointment booking and management suite with real-time seat availability, stylist selection, automated notifications, and an admin operations console.",
    architecture: "React Client → Express REST Engine → MongoDB Atlas Database → Real-Time Booking State Manager",
    keyFeatures: [
      "Real-time appointment slot booking with stylist selection",
      "Interactive hairstyle catalogue with pricing & duration",
      "Admin dashboard for revenue metrics and booking management",
      "Mobile-first responsive design tailored for customer convenience"
    ],
    impact: "Eliminates scheduling conflicts and reduces client wait times with instant digital confirmations.",
    live: "https://your-barber-site.netlify.app",
    github: "https://github.com/nitishyadav47/barber-shop-website",
  },
  {
    id: "milkhub",
    image: images.milkhub,
    alt: "MilkHub Dairy & Subscription Platform",
    title: "MilkHub (MERN Stack)",
    desc: "End-to-end dairy supply & milk subscription platform managing daily recurring deliveries, customer balance wallets, billing, and route tracking.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    category: "Full Stack & SaaS",
    problem: "Traditional dairy distributors face complex daily accounting, frequent order modifications, and inefficient manual payment collection.",
    solution: "Engineered a scalable MERN subscription portal enabling customers to pause/resume daily deliveries, top-up digital wallets, and view detailed monthly consumption statements.",
    architecture: "React SPA ⮀ Express Micro-services ⮀ MongoDB Schema Pipeline ⮀ Automated Billing Cron",
    keyFeatures: [
      "Flexible recurring milk & dairy subscription scheduler",
      "Digital customer wallet with automated debit per delivery",
      "Delivery agent route optimization & status confirmation",
      "Comprehensive monthly invoice & statement generation"
    ],
    impact: "Automates 100% of daily dairy accounting and subscription tracking for distributors and consumers.",
    live: "https://github.com/Nitish567478/MilkHub",
    github: "https://github.com/Nitish567478/MilkHub",
  },
  {
    id: "recipe-book",
    image: images.recipe,
    alt: "Recipe Book & Meal Planner",
    title: "Recipe Book & Meal Planner",
    desc: "Interactive culinary platform featuring rich recipe discovery, nutritional breakdowns, dynamic ingredient scaling, and personal meal planning.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
    category: "Web Applications",
    problem: "Home cooks waste time searching through cluttered food blogs without the ability to scale ingredients for varying guest counts or organize weekly meal plans.",
    solution: "Designed a clean, fast culinary application allowing users to search recipes by available kitchen ingredients, dynamically adjust serving sizes, and bookmark favorites.",
    architecture: "React UI Layer → Express API Gateway → Recipe Database Engine → Serving Scale Algorithm",
    keyFeatures: [
      "Search and filter recipes by dietary needs and available ingredients",
      "Dynamic serving size scaler with automated ingredient ratio updates",
      "Step-by-step interactive cooking mode with built-in timers",
      "User recipe publishing with image uploads and community reviews"
    ],
    impact: "Simplifies daily cooking with zero distraction interfaces and precise portion guidance.",
    live: "https://github.com/Nitish567478/Recipe-Book",
    github: "https://github.com/Nitish567478/Recipe-Book",
  },
  {
    id: "prompts-library",
    image: images.prompts,
    alt: "AI Prompts Library",
    title: "AI Prompts Library",
    desc: "Curated engineering repository of categorized AI prompts with live playground testing, copy-paste shortcuts, and community voting.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI API"],
    category: "AI & Full Stack",
    problem: "Engineers, creators, and marketers struggle with trial-and-error prompt engineering without a centralized, versioned prompt repository.",
    solution: "Created an intelligent prompt library with tagged categories (Coding, Copywriting, System Prompts, SEO), one-click copy, and integrated AI test playground.",
    architecture: "React Dashboard → Node.js API → OpenAI API Execution Gateway → MongoDB Prompt Collection",
    keyFeatures: [
      "500+ curated prompts across coding, design, business, and writing",
      "Live AI prompt tester with adjustable model temperature and tokens",
      "Copy-to-clipboard with parameter substitution tokens ({variable})",
      "Upvoting, favorites bookmarking, and community submissions"
    ],
    impact: "Saves hours of prompt iteration and ensures consistent high-quality AI outputs.",
    live: "https://github.com/Nitish567478/AI-Prompts-Library",
    github: "https://github.com/Nitish567478/AI-Prompts-Library",
  },
  {
    id: "testcase-gen",
    image: images.testcase,
    alt: "AI Test Case Generator",
    title: "AI Test Case Generator",
    desc: "Automated QA tool transforming user stories, API specs, and functional requirements into comprehensive unit and integration test suites.",
    tech: ["React.js", "Node.js", "Express", "OpenAI API", "Tailwind CSS"],
    category: "AI & Full Stack",
    problem: "Writing exhaustive test cases for complex requirements is tedious, error-prone, and frequently bottlenecks agile software release cycles.",
    solution: "Engineered an AI QA workbench that parses acceptance criteria, identifies edge cases, and automatically generates structured Gherkin and Jest/Mocha test scenarios.",
    architecture: "React Workbench → Express Backend → Prompt Engineering Pipeline → Test Suite Exporter",
    keyFeatures: [
      "Generates unit, edge-case, and negative test scenarios instantly",
      "Supports Gherkin (Given-When-Then), Jest, PyTest, and manual formats",
      "Export test cases directly to CSV, Markdown, and JSON",
      "Syntax highlighted code viewer with one-click clipboard copy"
    ],
    impact: "Reduces QA test planning time by 75% while catching critical edge cases early.",
    live: "https://github.com/Nitish567478/AI-Test-Case-Generator",
    github: "https://github.com/Nitish567478/AI-Test-Case-Generator",
  },
  {
    id: "interview-prep",
    image: images.interview,
    alt: "AI Interview Preparation Platform",
    title: "AI Interview Preparation Platform",
    desc: "Next-generation mock technical interview simulator offering realistic role-based questioning, code evaluation, and actionable feedback.",
    tech: ["React.js", "Node.js", "Express", "OpenAI API", "Web Speech API"],
    category: "AI & Full Stack",
    problem: "Job seekers lack affordable, realistic technical mock interview practice with immediate constructive feedback on their technical and behavioral answers.",
    solution: "Built an interactive conversational AI interview simulator with speech recognition, dynamic difficulty adaptation, code editor challenges, and detailed performance scorecards.",
    architecture: "React SPA & Web Speech API ⮀ Express WebSocket/REST ⮀ OpenAI Engine ⮀ Scorecard Analyzer",
    keyFeatures: [
      "Custom interview tracks: Frontend, Backend, Full Stack, and System Design",
      "Real-time voice conversation with speech-to-text and AI voice responses",
      "Integrated code editor for live algorithmic problem solving",
      "Comprehensive feedback report with score, strengths, and areas to improve"
    ],
    impact: "Helps software developers boost interview confidence and technical articulation.",
    live: "https://github.com/Nitish567478/AI-Interview-Preparation",
    github: "https://github.com/Nitish567478/AI-Interview-Preparation",
  },
  {
    id: "resume-builder",
    image: images.resume,
    alt: "AI Resume Builder",
    title: "AI Resume Builder & ATS Optimizer",
    desc: "Intelligent ATS-optimized resume builder that crafts impactful bullet points, checks keyword density, and generates polished PDF exports.",
    tech: ["React.js", "Node.js", "Express", "OpenAI API", "PDFKit"],
    category: "AI & Full Stack",
    problem: "Candidates often get filtered out by Applicant Tracking Systems (ATS) due to poor formatting and weak action-verb bullet points.",
    solution: "Created an automated resume studio that evaluates job descriptions, optimizes keyword match scores, and formats resumes into clean, ATS-compliant PDF templates.",
    architecture: "React Form Engine → AI Content Optimizer → PDF Rendering Engine → Cloud Storage",
    keyFeatures: [
      "AI bullet point enhancer using strong action verbs & quantifiable metrics",
      "Real-time ATS score calculation based on target job descriptions",
      "Multiple recruiter-approved modern templates with instant live preview",
      "High-resolution vector PDF download"
    ],
    impact: "Improves interview callback rates with tailored, ATS-verified resume formatting.",
    live: "https://github.com/Nitish567478/AI-Resume-Builder",
    github: "https://github.com/Nitish567478/AI-Resume-Builder",
  },
  {
    id: "website-maker",
    image: images.webmaker,
    alt: "AI Website Maker",
    title: "AI Website & Component Maker",
    desc: "Prompt-to-website engine that converts natural language design prompts into responsive React and Tailwind CSS web components with live sandbox preview.",
    tech: ["React.js", "Node.js", "Express", "OpenAI API", "Monaco Editor"],
    category: "AI & Full Stack",
    problem: "Building initial landing pages and UI prototypes from scratch requires hours of boilerplate code setup and CSS tweaking.",
    solution: "Developed an AI generator that parses layout descriptions, writes production-ready React components, and renders an isolated live preview sandbox instantly.",
    architecture: "React Sandbox → Express Backend → LLM Code Generator → Virtual DOM Live Runner",
    keyFeatures: [
      "Generates landing pages, navbars, hero sections, and pricing tables",
      "In-browser code editor with live hot-reloading preview",
      "One-click code download and export to React/Vite project",
      "Responsive view toggle (Desktop, Tablet, Mobile)"
    ],
    impact: "Accelerates frontend prototyping from hours to under 30 seconds.",
    live: "https://github.com/Nitish567478/AI-Website-Maker",
    github: "https://github.com/Nitish567478/AI-Website-Maker",
  },
  {
    id: "task-manager",
    image: images.task,
    alt: "Task Management System",
    title: "Task Manager (Auth & Kanban)",
    desc: "Full-stack project tracking workspace with JWT authentication, status pipelines, priority tags, and MongoDB database persistence.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth"],
    category: "Web Applications",
    problem: "Teams and individuals need an authenticated, distraction-free productivity app for managing project deadlines without heavyweight bloat.",
    solution: "Implemented an authenticated task workflow management tool with JWT session management, categorized columns, search filters, and real-time state synchronization.",
    architecture: "React State & Context API → Express REST API → MongoDB Mongoose ODM",
    keyFeatures: [
      "User authentication and protected dashboard routes",
      "Add, edit, complete, and delete task lifecycle",
      "Filter by priority (Urgent, High, Normal) and completion status",
      "Responsive glassmorphic UI designed for mobile and desktop"
    ],
    impact: "Boosts daily task execution with zero latency state updates.",
    live: "https://task-manager-psi-sandy.vercel.app/login",
    github: "https://github.com/Nitish567478/Task-Manager-Frontend",
  },
  {
    id: "thumbnail-gen",
    image: images.wiki,
    alt: "AI Thumbnail Generator",
    title: "AI-Powered Thumbnail Generator",
    desc: "Automated YouTube & social media thumbnail creation engine with AI background extraction, bold typography layouts, and lighting filters.",
    tech: ["React.js", "Node.js", "Express", "HTML5 Canvas", "OpenAI API"],
    category: "AI & Full Stack",
    problem: "Content creators struggle to produce high-CTR thumbnails consistently without complex Adobe Photoshop workflows.",
    solution: "Engineered an in-browser graphics generator combining AI subject cutout with high-converting thumbnail templates, glowing text outlines, and canvas export.",
    architecture: "HTML5 Canvas API ⮀ AI Subject Cutout Engine ⮀ Express Preset Pipeline",
    keyFeatures: [
      "Automated subject background removal and glow outline effects",
      "Preset high-CTR typography templates (Bold, Gaming, Tech, Vlog)",
      "High-resolution 1920x1080 JPEG/PNG image export",
      "Custom stickers, gradient badges, and overlay filters"
    ],
    impact: "Empowers creators to generate click-worthy thumbnails in seconds.",
    live: "https://ai-mcq-generator-seven.vercel.app/",
    github: "https://github.com/Nitish567478/AI-MCQ-Generator-Frontend",
  },
  {
    id: "images-to-url",
    image: images.canvas,
    alt: "Images to URL Converter",
    title: "Images to URL Cloud Converter",
    desc: "Cloud asset management platform converting uploaded images into high-speed CDN URLs with format compression and instant embed code snippets.",
    tech: ["React.js", "Node.js", "Express", "Cloudinary SDK", "Multer"],
    category: "Cloud & SaaS",
    problem: "Developers and content managers need a reliable way to host images and generate direct public CDN URLs without complex cloud dashboard navigation.",
    solution: "Built a drag-and-drop cloud asset uploader with automated WebP compression, secure CDN URL generation, and one-click markdown/HTML image copy.",
    architecture: "React File Dropzone → Multer Streamer → Cloudinary Storage API → CDN URL Dispatcher",
    keyFeatures: [
      "Bulk drag-and-drop image upload with live progress meters",
      "Instant CDN URL generation with copy-to-clipboard action",
      "Automated image format conversion and lossless compression",
      "Recent uploads history with image dimensions and size metrics"
    ],
    impact: "Speeds up image hosting and web embedding for developers and bloggers.",
    live: "https://collaborative-canvas-1-rwuf.onrender.com/",
    github: "https://github.com/Nitish567478/collaborative-canvas",
  },
  {
    id: "notes-share",
    image: images.school,
    alt: "Notes Share Collaborative Hub",
    title: "Notes Share Collaborative Hub",
    desc: "Markdown-powered collaborative notes repository allowing students and engineers to write, organize, tag, and publicly share study materials.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Markdown Parser"],
    category: "Web Applications",
    problem: "Sharing technical study notes across college batches often results in fragmented PDFs and unsearchable chat messages.",
    solution: "Created an open knowledge sharing portal where users can publish syntax-highlighted markdown notes, search by university subjects, and download structured documents.",
    architecture: "React Markdown Editor → Express REST Endpoints → MongoDB Document Store",
    keyFeatures: [
      "Live Markdown editor with split-screen rendered preview",
      "Unique shareable public links for notes and study guides",
      "Category tags by university subjects, semesters, and technologies",
      "One-click PDF download and syntax highlighted code blocks"
    ],
    impact: "Streamlines peer learning and technical notes discovery across campus.",
    live: "https://my-school-sooty.vercel.app/",
    github: "https://github.com/Nitish567478/My-School",
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <SectionBadge>
          <FiFolder />
          <span>MERN Stack & AI Systems</span>
        </SectionBadge>
        <SectionTitle>Featured Projects & Engineering Work</SectionTitle>
        <SectionSubtitle>
          A comprehensive portfolio of production-ready full stack web applications, AI automation tools, and scalable cloud systems.
        </SectionSubtitle>
      </SectionHeader>

      {/* Dual-Track Infinite Running Marquee Showcase for All 12 Projects */}
      <ProjectMarquee
        projects={allProjectsData}
        onSelectCaseStudy={(proj) => setSelectedProject(proj)}
      />

      {/* External Practice Projects Link */}
      <SeeAllSection>
        <AllProjectsBtn
          href="http://myallproj.ccbp.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Explore All 20+ Practice Projects on CCBP</span>
          <FiExternalLink size={18} />
        </AllProjectsBtn>
      </SeeAllSection>

      {/* Case Study Detailed Modal */}
      {selectedProject && (
        <CaseStudyModalOverlay onClick={() => setSelectedProject(null)}>
          <CaseStudyModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseBtn onClick={() => setSelectedProject(null)}>
              <FiX size={22} />
            </ModalCloseBtn>

            <ModalTitleRow>
              <div>
                <h2>{selectedProject.title}</h2>
                <p className="subtitle">{selectedProject.desc}</p>
              </div>
            </ModalTitleRow>

            <ModalHeaderDetails>
              <div className="detail-item">
                <span className="label">Category:</span>
                <span className="val">{selectedProject.category}</span>
              </div>
              <div className="detail-item">
                <span className="label">Stack:</span>
                <span className="val">{selectedProject.tech.join(" • ")}</span>
              </div>
            </ModalHeaderDetails>

            <ModalBodySection>
              <h4>Problem Statement</h4>
              <p>{selectedProject.problem}</p>

              <h4>Engineering Solution</h4>
              <p>{selectedProject.solution}</p>

              <h4>Architecture & Data Flow</h4>
              <ArchitectureFlowBox>
                <code>{selectedProject.architecture}</code>
              </ArchitectureFlowBox>

              <h4>Key Features & Implementation</h4>
              <FeatureList>
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx}>
                    <FiCheck className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </FeatureList>

              <h4>Measurable Impact</h4>
              <p>{selectedProject.impact}</p>
            </ModalBodySection>

            <ModalCTAFooter>
              <ProjectActionBtn
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                $variant="primary"
              >
                <span>Open Live Demo</span>
                <FiExternalLink />
              </ProjectActionBtn>

              <ProjectActionBtn
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                $variant="secondary"
              >
                <span>View Source Code</span>
                <FiGithub />
              </ProjectActionBtn>
            </ModalCTAFooter>
          </CaseStudyModalContent>
        </CaseStudyModalOverlay>
      )}
    </ProjectsSection>
  );
};

export default Projects;