import React from "react";
import styled, { keyframes } from "styled-components";
import { FiExternalLink, FiGithub, FiActivity } from "react-icons/fi";

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 12px)); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(calc(-50% - 12px)); }
  100% { transform: translateX(0); }
`;

const MarqueeSectionContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 10px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MarqueeRow = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 24px;
  width: max-content;
  will-change: transform;
  animation: ${({ $reverse }) => ($reverse ? scrollRight : scrollLeft)}
    ${({ $duration }) => $duration || 38}s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeCard = styled.div`
  width: 360px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(16px);
  flex-shrink: 0;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;

  &:hover {
    border-color: ${({ theme }) => theme.borderHighlight};
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(255, 87, 51, 0.25);
  }

  @media (max-width: 480px) {
    width: 310px;
    padding: 16px;
  }

  .thumb-box {
    width: 100%;
    height: 165px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 14px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.border};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .cat-tag {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 999px;
      background: ${({ theme }) => theme.gradient};
      color: #ffffff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
    }
  }

  &:hover .thumb-box img {
    transform: scale(1.06);
  }

  h4 {
    font-size: 1.15rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    margin: 0 0 6px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.textSecondary};
    margin: 0 0 14px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 2.65rem;
  }

  .tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }

  .pill {
    font-size: 0.7rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
    background: ${({ theme }) => theme.accentSoft};
    color: ${({ theme }) => theme.accent};
    border: 1px solid ${({ theme }) => theme.border};
  }

  .actions {
    display: flex;
    gap: 8px;
    margin-top: auto;
  }
`;

const ActionBtn = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "primary":
        return `
          background: ${theme.gradient};
          color: #ffffff;
          &:hover {
            opacity: 0.92;
            transform: translateY(-1px);
          }
        `;
      case "secondary":
        return `
          background: ${theme.surfaceHover};
          color: ${theme.text};
          border-color: ${theme.border};
          &:hover {
            color: ${theme.accent};
            border-color: ${theme.borderHighlight};
            transform: translateY(-1px);
          }
        `;
      case "case":
        return `
          background: ${theme.accentSoft};
          color: ${theme.accent};
          border-color: ${theme.borderHighlight};
          &:hover {
            background: ${theme.accent};
            color: #ffffff;
            transform: translateY(-1px);
          }
        `;
      default:
        return "";
    }
  }}
`;

const ProjectMarquee = ({ projects, onSelectCaseStudy }) => {
  // Split 12 projects into two smooth dual infinite rows
  const half = Math.ceil(projects.length / 2);
  const row1 = projects.slice(0, half);
  const row2 = projects.slice(half);

  // Duplicate for seamless 100% infinite loop without gaps
  const row1List = [...row1, ...row1, ...row1, ...row1];
  const row2List = [...row2, ...row2, ...row2, ...row2];

  return (
    <MarqueeSectionContainer>
      {/* Row 1: Leftward Infinite Flow */}
      <MarqueeRow>
        <MarqueeTrack $duration={40}>
          {row1List.map((proj, idx) => (
            <MarqueeCard key={`row1-${proj.id}-${idx}`}>
              <div className="thumb-box">
                <img src={proj.image} alt={proj.alt || proj.title} loading="lazy" />
                <span className="cat-tag">{proj.category}</span>
              </div>

              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>

              <div className="tech-row">
                {proj.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="actions">
                <ActionBtn
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  $variant="primary"
                >
                  <span>Demo</span>
                  <FiExternalLink />
                </ActionBtn>

                <ActionBtn
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  $variant="secondary"
                >
                  <span>Code</span>
                  <FiGithub />
                </ActionBtn>

                <ActionBtn
                  as="button"
                  onClick={() => onSelectCaseStudy(proj)}
                  $variant="case"
                >
                  <span>Case Study</span>
                  <FiActivity />
                </ActionBtn>
              </div>
            </MarqueeCard>
          ))}
        </MarqueeTrack>
      </MarqueeRow>

      {/* Row 2: Rightward Infinite Flow */}
      <MarqueeRow>
        <MarqueeTrack $reverse={true} $duration={45}>
          {row2List.map((proj, idx) => (
            <MarqueeCard key={`row2-${proj.id}-${idx}`}>
              <div className="thumb-box">
                <img src={proj.image} alt={proj.alt || proj.title} loading="lazy" />
                <span className="cat-tag">{proj.category}</span>
              </div>

              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>

              <div className="tech-row">
                {proj.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="actions">
                <ActionBtn
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  $variant="primary"
                >
                  <span>Demo</span>
                  <FiExternalLink />
                </ActionBtn>

                <ActionBtn
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  $variant="secondary"
                >
                  <span>Code</span>
                  <FiGithub />
                </ActionBtn>

                <ActionBtn
                  as="button"
                  onClick={() => onSelectCaseStudy(proj)}
                  $variant="case"
                >
                  <span>Case Study</span>
                  <FiActivity />
                </ActionBtn>
              </div>
            </MarqueeCard>
          ))}
        </MarqueeTrack>
      </MarqueeRow>
    </MarqueeSectionContainer>
  );
};

export default ProjectMarquee;
