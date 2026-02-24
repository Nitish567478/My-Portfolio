import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 80px 20px;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  position: relative;
  overflow: hidden;
`;

export const SkillsHeading = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #ffffff, #ffe0d5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width:768px){
    font-size: 2.2rem;
  }

  @media (max-width:480px){
    font-size: 1.8rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 40px;
  margin: 0 auto;
`;

export const SkillItem = styled.div`
  text-align: center;
  perspective: 1000px;
`;

export const SkillIcon = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #646363;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  transform-style: preserve-3d;

  box-shadow:
    8px 8px 20px rgba(0, 0, 0, 0.5),
    -6px -6px 15px rgba(255, 255, 255, 0.1);

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    transform: translateZ(30px);
  }

  &:hover {
    transform: rotateY(15deg) rotateX(15deg) scale(1.1);
    box-shadow:
      0 0 30px rgba(255,255,255,0.6),
      8px 8px 25px rgba(0,0,0,0.8);
  }
`;

export const SkillLabel = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;