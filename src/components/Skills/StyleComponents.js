import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 80px 20px;
  background: var(--bg);
  color: var(--text);
  position: relative;
  overflow: hidden;


  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(255,87,51,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,87,51,0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const SkillsHeading = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width:768px){
    font-size: 2.2rem;
  }

  @media (max-width:480px){
    font-size: 1.8rem;
  }
`;

export const SkillsCategory = styled.div`
  margin-bottom: 50px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(10px);
  padding: 35px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(255,87,51,0.25);
    border-color: rgba(255,87,51,0.5);
  }

  @media (max-width:768px){
    padding: 25px;
  }
`;

export const CategoryHeading = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 30px;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #ff5733, #ff8e53);
    border-radius: 2px;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 25px;
  justify-items: center;
`;

export const SkillCard = styled.div`
  width: 100%;
  max-width: ${({ large }) => (large ? "680px" : "380px")};
  background: rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 25px 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.05);

  &:hover {
    background: rgba(255,87,51,0.15);
    transform: translateY(-6px);
    box-shadow: 0 15px 30px rgba(255,87,51,0.35);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const SkillImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
`;

export const SkillName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`;