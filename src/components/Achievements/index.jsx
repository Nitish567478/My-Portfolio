import React, { useState } from "react";
import { FiAward, FiExternalLink, FiX, FiCheckCircle, FiMaximize2, FiGift, FiStar, FiUsers, FiTerminal } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Tilt from "react-parallax-tilt";
import hackathonImg from "../../assets/hackathon.jpg";
import {
  Section,
  SectionHeader,
  SectionBadge,
  SectionTitle,
  SectionSubtitle,
  StatsBannerGrid,
  StatMilestoneCard,
  MilestoneNum,
  MilestoneLabel,
  GoogleAmbassadorCard,
  GoogleBadgeRow,
  GooglePill,
  SwagPill,
  GoogleTitle,
  GoogleDesc,
  GoogleSwagList,
  SwagItem,
  GoogleVisualBox,
  HackathonOrganizerCard,
  HackathonVisualBox,
  CertificatesHeaderRow,
  CertificatesHeading,
  ViewAllBtn,
  CertificateCardsGrid,
  CertCard,
  CertImageWrapper,
  CertOverlay,
  CertInfo,
  CertTitle,
  CertTag,
  ModalOverlay,
  ModalCardWrapper,
  ModalHeader,
  ModalCloseButton,
  ModalGrid,
  ModalCertCard,
  ModalCertImg,
  ModalCertFooter,
  LightboxOverlay,
  LightboxContent,
  LightboxClose
} from "./StyleComponents";

const statsMilestones = [
  { count: "300+", label: "DSA & Problem Solving", desc: "LeetCode & Competitive Coding" },
  { count: "2025", label: "Hackathon Lead Organizer", desc: "RKDF University, Ranchi" },
  { count: "2025", label: "Google Ambassador", desc: "Official Campus Representation" },
  { count: "20+", label: "Completed Projects", desc: "Full Stack & Frontend Apps" },
];

const externalCertificates = [
  { id: "uiux", url: "https://i.ibb.co/q3nMZKqK/uiux.jpg", name: "UI/UX Design Certification", issuer: "Design Academy", tag: "Design" },
  { id: "sql", url: "https://i.ibb.co/MDhvb4rW/sql.png", name: "SQL & Database Management", issuer: "Database Engineering", tag: "Database" },
  { id: "python", url: "https://i.ibb.co/mWB8VGv/python.png", name: "Python Programming Specialization", issuer: "Python Institute", tag: "Programming" },
  { id: "javascript", url: "https://i.ibb.co/8LZ9LKx8/javascript.png", name: "JavaScript Advanced Certification", issuer: "JS Foundation", tag: "Frontend" },
  { id: "html", url: "https://i.ibb.co/0V83YY2F/html.png", name: "HTML5 & Responsive Web Design", issuer: "W3C Web Standards", tag: "Frontend" },
  { id: "git", url: "https://i.ibb.co/vxTyVpY3/git.png", name: "Git & GitHub Version Control", issuer: "DevOps Foundations", tag: "Tools" },
  { id: "flexbox", url: "https://i.ibb.co/ymB1Qrn6/flexbox.png", name: "CSS Flexbox & Modern Layouts", issuer: "Frontend Masters", tag: "Frontend" },
  { id: "bootstrap", url: "https://i.ibb.co/RTB6CrTD/bootstrap.png", name: "Bootstrap 5 Framework", issuer: "Responsive Web Dev", tag: "Frontend" },
  { id: "nhai", url: "https://i.ibb.co/3mFNXMkj/NHAI.jpg", name: "NHAI Project Recognition", issuer: "NHAI Technical Program", tag: "Achievement" },
  { id: "participate-uiux", url: "https://i.ibb.co/wFLBYww9/Participate-UIUX.jpg", name: "UI/UX Design Hackathon", issuer: "Design Sprint Series", tag: "Hackathon" },
  { id: "robo", url: "https://i.ibb.co/t127d24/robo.jpg", name: "Robotics & Embedded Systems", issuer: "Technical Workshop", tag: "Engineering" },
  { id: "participation", url: "https://i.ibb.co/fVDwVFmm/participation.jpg", name: "National Tech Symposium", issuer: "University Tech Fest", tag: "Symposium" },
];

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const featuredCertificates = externalCertificates.slice(0, 4);

  return (
    <Section id="achievements">
      <SectionHeader>
        <SectionBadge>
          <FiAward />
          <span>Recognitions & Proof of Work</span>
        </SectionBadge>
        <SectionTitle>Achievements & Leadership</SectionTitle>
        <SectionSubtitle>
          A proven track record of technical leadership, hackathon organization, Google Student Ambassadorship, and verified credentials.
        </SectionSubtitle>
      </SectionHeader>

      {/* Top Milestones Stats */}
      <StatsBannerGrid>
        {statsMilestones.map((item, index) => (
          <StatMilestoneCard key={index}>
            <MilestoneNum>{item.count}</MilestoneNum>
            <MilestoneLabel>{item.label}</MilestoneLabel>
            <p className="desc">{item.desc}</p>
          </StatMilestoneCard>
        ))}
      </StatsBannerGrid>

      {/* Google Student Ambassador 2025 Featured Card */}
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1200}
        scale={1.01}
        transitionSpeed={600}
      >
        <GoogleAmbassadorCard>
          <div>
            <GoogleBadgeRow>
              <GooglePill>
                <FcGoogle size={18} />
                <span>Google Student Ambassador 2025</span>
              </GooglePill>
              <SwagPill>
                <FiGift size={16} />
                <span>Official Google Swag Winner</span>
              </SwagPill>
            </GoogleBadgeRow>

            <GoogleTitle>
              <span className="google-g">G</span>
              <span className="google-o1">o</span>
              <span className="google-o2">o</span>
              <span className="google-g2">g</span>
              <span className="google-l">l</span>
              <span className="google-e">e</span> Student Ambassador (2025)
            </GoogleTitle>

            <GoogleDesc>
              Selected to represent Google developer ecosystems and technologies on campus. Successfully led student tech initiatives, promoted developer community growth, and awarded exclusive official Google branded swags and merchandise in recognition of outstanding leadership.
            </GoogleDesc>

            <GoogleSwagList>
              <SwagItem>
                <FiStar /> Official Google Ambassador Recognition
              </SwagItem>
              <SwagItem>
                <FiGift /> Exclusive Google Swags & Merch Kit
              </SwagItem>
              <SwagItem>
                <FiAward /> Campus Tech Event Leadership
              </SwagItem>
              <SwagItem>
                <FiCheckCircle /> Developer Ecosystem Advocacy
              </SwagItem>
            </GoogleSwagList>
          </div>

          <GoogleVisualBox>
            <div className="google-icon-large">
              <FcGoogle />
            </div>
            <h4>Google Campus Representative</h4>
            <p>Class of 2025 • Student Ambassador Program</p>
          </GoogleVisualBox>
        </GoogleAmbassadorCard>
      </Tilt>

      {/* Campus Hackathon 2025 Lead Organizer Card */}
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1200}
        scale={1.01}
        transitionSpeed={600}
      >
        <HackathonOrganizerCard>
          <div>
            <GoogleBadgeRow>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: 800,
                background: "rgba(255, 87, 51, 0.15)",
                border: "1px solid rgba(255, 87, 51, 0.4)",
                color: "#ff5733"
              }}>
                <FiUsers size={16} />
                <span>Lead Organizer & Team Leader</span>
              </span>

              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: 800,
                background: "rgba(99, 102, 241, 0.15)",
                border: "1px solid rgba(99, 102, 241, 0.4)",
                color: "#818cf8"
              }}>
                <span>RKDF University, Ranchi • 2025</span>
              </span>
            </GoogleBadgeRow>

            <GoogleTitle style={{ color: "#ffffff" }}>
              Campus Hackathon 2025 • <span style={{ color: "#ff5733" }}>Lead Organizer & Leader</span>
            </GoogleTitle>

            <GoogleDesc>
              Spearheaded and organized a university-level Hackathon at RKDF University, Ranchi alongside a dedicated student team. Served as the Lead Organizer and Team Leader, directing event execution, problem statement design, participant mentoring, and technical evaluation pipelines.
            </GoogleDesc>

            <GoogleSwagList>
              <SwagItem>
                <FiUsers /> Led Organizing Committee & Student Volunteers
              </SwagItem>
              <SwagItem>
                <FiTerminal /> Problem Statement & Track Architecture
              </SwagItem>
              <SwagItem>
                <FiAward /> Managed Live Submissions & Judging Rounds
              </SwagItem>
              <SwagItem>
                <FiCheckCircle /> RKDF University, Ranchi Campus Initiative
              </SwagItem>
            </GoogleSwagList>
          </div>

          <HackathonVisualBox>
            <img
              src={hackathonImg}
              alt="Campus Hackathon 2025 Lead Organizer & Team Leader"
              loading="lazy"
            />
            <div className="image-overlay-badge">
              <h4>Hackathon Team Leader</h4>
              <p>RKDF University • 2025</p>
            </div>
          </HackathonVisualBox>
        </HackathonOrganizerCard>
      </Tilt>

      {/* Featured Certificates Showcase */}
      <CertificatesHeaderRow>
        <CertificatesHeading>Verified Credentials</CertificatesHeading>
        <ViewAllBtn onClick={() => setIsModalOpen(true)}>
          <span>View All 12 Certificates</span>
          <FiExternalLink />
        </ViewAllBtn>
      </CertificatesHeaderRow>

      <CertificateCardsGrid>
        {featuredCertificates.map((cert) => (
          <Tilt
            key={cert.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={500}
          >
            <CertCard onClick={() => setLightboxImage(cert)}>
              <CertImageWrapper>
                <img src={cert.url} alt={cert.name} loading="lazy" />
                <CertOverlay>
                  <FiMaximize2 size={24} />
                  <span>Click to Expand</span>
                </CertOverlay>
              </CertImageWrapper>
              <CertInfo>
                <CertTag>{cert.tag}</CertTag>
                <CertTitle>{cert.name}</CertTitle>
                <p className="issuer">{cert.issuer}</p>
              </CertInfo>
            </CertCard>
          </Tilt>
        ))}
      </CertificateCardsGrid>

      {/* All Certificates Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalCardWrapper onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <h3>All Verified Certificates & Honors</h3>
                <p>12 Credentials & Certificates</p>
              </div>
              <ModalCloseButton onClick={() => setIsModalOpen(false)}>
                <FiX size={20} />
              </ModalCloseButton>
            </ModalHeader>

            <ModalGrid>
              {externalCertificates.map((item) => (
                <ModalCertCard key={item.id}>
                  <ModalCertImg
                    src={item.url}
                    alt={item.name}
                    loading="lazy"
                    onClick={() => setLightboxImage(item)}
                  />
                  <ModalCertFooter>
                    <div>
                      <span className="badge">{item.tag}</span>
                      <h4>{item.name}</h4>
                      <p>{item.issuer}</p>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="open-link"
                    >
                      <FiExternalLink />
                    </a>
                  </ModalCertFooter>
                </ModalCertCard>
              ))}
            </ModalGrid>
          </ModalCardWrapper>
        </ModalOverlay>
      )}

      {/* Lightbox Zoom Viewer */}
      {lightboxImage && (
        <LightboxOverlay onClick={() => setLightboxImage(null)}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <LightboxClose onClick={() => setLightboxImage(null)}>
              <FiX size={24} />
            </LightboxClose>
            <img src={lightboxImage.url} alt={lightboxImage.name} />
            <div className="lightbox-caption">
              <h4>{lightboxImage.name}</h4>
              <p>{lightboxImage.issuer}</p>
              <a
                href={lightboxImage.url}
                target="_blank"
                rel="noopener noreferrer"
                className="full-view-btn"
              >
                Open Original in New Tab <FiExternalLink />
              </a>
            </div>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </Section>
  );
};

export default Achievements;
