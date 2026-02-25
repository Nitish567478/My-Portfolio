import styled, { keyframes, css } from "styled-components";

/* ================= Animations ================= */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ================= Section ================= */

export const ProjectsSection = styled.section`
  padding: 60px 16px;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 80px 30px;
  }

  @media (min-width: 1200px) {
    padding: 100px 60px;
  }
`;

/* ================= Heading ================= */

export const ProjectsHeading = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

/* ================= Filter ================= */

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`;

export const FilterButton = styled.button`
  padding: 8px 18px;
  border-radius: 25px;
  border: 2px solid rgba(255,87,51,0.5);
  background: ${({ active }) =>
    active ? "rgba(255,87,51,0.3)" : "transparent"};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: rgba(255,87,51,0.3);
  }
`;

/* ================= Grid ================= */

export const ProjectGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

/* ================= Card ================= */

export const ProjectCard = styled.div`
  background: rgba(26,26,26,0.95);
  border-radius: 20px;
  padding: 1.8rem;
  border: 1px solid rgba(255,87,51,0.25);
  box-shadow: 0 15px 35px rgba(0,0,0,0.35);
  transition: 0.3s ease;
  animation: ${fadeUp} 0.6s ease forwards;

  ${({ featured }) =>
    featured &&
    css`
      border: 1px solid rgba(255,87,51,0.8);
      box-shadow: 0 20px 50px rgba(255,87,51,0.35);
    `}

  &:hover {
    transform: translateY(-8px);
  }

  @media (min-width: 768px) {
    padding: 2.2rem;
  }

  @media (min-width: 1200px) {
    padding: 2.5rem;
  }
`;

/* ================= Badge ================= */

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(90deg,#ff5733,#ff8e53);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.65rem;
  font-weight: 700;
  color: #fff;
`;

/* ================= Image ================= */

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 1.2rem;

  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1200px) {
    height: 220px;
  }
`;

/* ================= Text ================= */

export const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProjectDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255,255,255,0.85);
`;

/* ================= Tech Stack ================= */

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TechTag = styled.span`
  padding: 5px 12px;
  font-size: 0.7rem;
  border-radius: 20px;
  background: rgba(255,87,51,0.15);
  border: 1px solid rgba(255,87,51,0.4);
  color: #ffb199;
`;

/* ================= Buttons ================= */

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

export const ProjectButton = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  padding: ${({ large }) => (large ? "14px 28px" : "10px 18px")};
  border-radius: 18px;
  color: #ffffff;
  border: 2px solid rgba(255,87,51,0.6);
  background: ${({ variant }) =>
    variant === "gradient"
      ? "linear-gradient(135deg,#ff5733,#ff8e53,#ffa726)"
      : "rgba(255,87,51,0.25)"};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255,87,51,0.45);
  }
`;

/* ================= Footer Button ================= */

export const SeeAllContainer = styled.div`
  margin-top: 50px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 70px;
  }
`;