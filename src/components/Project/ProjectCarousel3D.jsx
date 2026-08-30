import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiActivity, FiLayers } from "react-icons/fi";

const StageContainer = styled.div`
  width: 100%;
  height: 520px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1400px;
  overflow: hidden;
  margin: 20px 0 40px;
  user-select: none;

  @media (max-width: 768px) {
    height: 480px;
  }
`;

const Carousel3DStage = styled.div`
  position: relative;
  width: min(85vw, 420px);
  height: 380px;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card3DItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.surface};
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.borderHighlight : theme.border};
  border-radius: 28px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  box-shadow: ${({ $isActive, theme }) =>
    $isActive ? "0 25px 50px rgba(255, 87, 51, 0.35)" : "0 10px 30px rgba(0, 0, 0, 0.5)"};
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.6s ease, filter 0.6s ease, border-color 0.4s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  box-sizing: border-box;

  .proj-thumb-wrapper {
    width: 100%;
    height: 160px;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 16px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.border};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .cat-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 999px;
      background: ${({ theme }) => theme.gradient};
      color: #ffffff;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    margin: 0 0 6px 0;
  }

  p {
    font-size: 0.84rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textSecondary};
    margin: 0 0 14px 0;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tech-pills {
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
  }

  .btn-row {
    display: flex;
    gap: 8px;
  }
`;

const ActionSmallBtn = styled.a`
  display: inline-flex;
  align-items: center;
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
            transform: translateY(-2px);
          }
        `;
      case "secondary":
        return `
          background: ${theme.surface};
          color: ${theme.text};
          border-color: ${theme.border};
          &:hover {
            background: ${theme.surfaceHover};
            color: ${theme.accent};
            transform: translateY(-2px);
          }
        `;
      case "accent":
        return `
          background: ${theme.accentSoft};
          color: ${theme.accent};
          border-color: ${theme.borderHighlight};
          &:hover {
            background: ${theme.accent};
            color: #ffffff;
            transform: translateY(-2px);
          }
        `;
      default:
        return "";
    }
  }}
`;

const NavControlsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

const NavCircleBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderHighlight};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${({ theme }) => theme.gradient};
    color: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 87, 51, 0.4);
  }
`;

const IndicatorDots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? "24px" : "8px")};
  height: 8px;
  border-radius: 999px;
  background: ${({ $active, theme }) =>
    $active ? theme.gradient : "rgba(128, 128, 128, 0.3)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ProjectCarousel3D = ({ projects, onSelectCaseStudy }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projects.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  return (
    <StageContainer>
      <Carousel3DStage>
        {projects.map((proj, idx) => {
          // Calculate relative offset from currentIndex
          let offset = idx - currentIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          // 3D Cylinder geometry calculations
          const rotateY = offset * 45; // 45 degrees step
          const translateX = offset * 230; // 230px horizontal offset
          const translateZ = -Math.abs(offset) * 160 + (isActive ? 40 : 0);
          const scale = isActive ? 1 : 0.82;
          const opacity = isActive ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.35);

          return (
            <Card3DItem
              key={proj.id}
              $isActive={isActive}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: 100 - Math.abs(offset) * 10,
                pointerEvents: isVisible ? "auto" : "none",
              }}
              onClick={() => {
                if (!isActive) setCurrentIndex(idx);
              }}
            >
              <div className="proj-thumb-wrapper">
                <img src={proj.image} alt={proj.alt} />
                <span className="cat-badge">{proj.category}</span>
              </div>

              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className="tech-pills">
                {proj.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="btn-row">
                <ActionSmallBtn
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  $variant="primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Demo</span>
                  <FiExternalLink />
                </ActionSmallBtn>

                <ActionSmallBtn
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  $variant="secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Code</span>
                  <FiGithub />
                </ActionSmallBtn>

                <ActionSmallBtn
                  as="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCaseStudy(proj);
                  }}
                  $variant="accent"
                >
                  <span>Case Study</span>
                  <FiActivity />
                </ActionSmallBtn>
              </div>
            </Card3DItem>
          );
        })}
      </Carousel3DStage>

      <NavControlsRow>
        <NavCircleBtn onClick={handlePrev} aria-label="Previous Project">
          <FiChevronLeft />
        </NavCircleBtn>

        <IndicatorDots>
          {projects.map((_, i) => (
            <Dot
              key={i}
              $active={i === currentIndex}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </IndicatorDots>

        <NavCircleBtn onClick={handleNext} aria-label="Next Project">
          <FiChevronRight />
        </NavCircleBtn>
      </NavControlsRow>
    </StageContainer>
  );
};

export default ProjectCarousel3D;
