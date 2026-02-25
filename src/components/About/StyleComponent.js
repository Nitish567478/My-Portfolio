import styled, { keyframes } from "styled-components";

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutSection = styled.section`
  padding: 80px 20px;
  background: var(--bg);
  color: var(--text);
  display: flex;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(255,87,51,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,87,51,0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255,255,255,0.02) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width:768px){
    padding: 60px 0;
    flex-direction: column;
  }

  @media (max-width:480px){
    padding: 40px 0;
  }
`;

export const AboutPart = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (max-width:768px){
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width:480px){
    padding: 0 15px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const AboutHeading = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff5733, #ff8e53, #ffa726);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(255,87,51,0.3);
  animation: ${slideInDown} 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
`;

export const AboutParagraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 300;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s both;
`;

export const StrongAbout = styled.strong`
  background: linear-gradient(135deg, #ff5733, #ff8e53);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  padding: 0.2rem 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #ff5733, #ff8e53);
    border-radius: 1px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const EducationSection = styled.section`
  max-width: 800px;
  margin-right: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (max-width:768px){
    max-width: 100%;
    width: 100%;
    margin: 3rem -20px 0 -20px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  @media (max-width:480px){
    padding: 0 15px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const EducationHeading = styled.h3`
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 2rem;
  font-weight: 700;
  color: #ffffff;
  position: relative;
  animation: ${slideInDown} 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s both;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ff5733, #ff8e53);
    border-radius: 2px;
  }

  @media (max-width:480px){
    font-size: 2rem;
  }
`;

export const EducationList = styled.div`
  position: relative;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 87, 51, 0.3); // Vertical Timeline Line
`;

export const EducationItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  transition: all 0.3s ease;

  &::before { // Timeline Dot
    content: "";
    position: absolute;
    left: -27px;
    top: 25px;
    width: 12px;
    height: 12px;
    background: #ff5733;
    border-radius: 50%;
    box-shadow: 0 0 10px #ff5733;
  }

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 87, 51, 0.05);
    border-color: rgba(255, 87, 51, 0.4);
  }

  strong {
    display: block;
    font-size: 1.15rem;
    color: #fff;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
  }

  span {
    display: inline-block;
    margin-top: 10px;
    font-size: 0.85rem;
    color: #ff8e53;
    font-weight: 600;
    background: rgba(255, 142, 83, 0.1);
    padding: 3px 12px;
    border-radius: 20px;
  }
`;