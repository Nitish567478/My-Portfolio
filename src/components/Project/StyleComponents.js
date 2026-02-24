import styled, { keyframes, css } from "styled-components";

const projectsHeadingPop = keyframes`
  0% { opacity:0; transform:translateY(-30px) scale(0.9); }
  100% { opacity:1; transform:translateY(0) scale(1); }
`;

const projectsLineGrow = keyframes`
  0% { transform:translateX(-50%) scaleX(0); opacity:0; }
  100% { transform:translateX(-50%) scaleX(1); opacity:1; }
`;

const projectCardIn = keyframes`
  to { opacity:1; transform:translateY(0) scale(1); }
`;

const projectsBgFloat = keyframes`
  0%,100% { transform:translateY(0) scale(1); }
  33% { transform:translateY(-20px) scale(1.05); }
  66% { transform:translateY(8px) scale(0.98); }
`;

export const ProjectsSection = styled.section`
  padding: 80px 20px;
  background: var(--bg);
  color: var(--text);
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  &::before {
    content:"";
    position:absolute;
    inset:0;
    background:
      radial-gradient(circle at 20% 30%, rgba(255,87,51,0.15) 0%, transparent 55%),
      radial-gradient(circle at 80% 70%, rgba(255,142,83,0.12) 0%, transparent 55%);
    filter:blur(15px);
    animation:${projectsBgFloat} 12s ease-in-out infinite;
    pointer-events:none;
    z-index:0;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation:none; }
  }
`;

export const ProjectsHeading = styled.h2`
  font-size: clamp(2.5rem,5vw,3.8rem);
  font-weight:900;
  text-align:center;
  margin:0 auto 4.5rem;
  background:linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  position:relative;
  letter-spacing:-0.02em;
  animation:${projectsHeadingPop} 1s ease-out both;
  z-index:2;

  &::after{
    content:"";
    position:absolute;
    left:50%;
    bottom:-15px;
    transform:translateX(-50%);
    width:100px;
    height:4px;
    border-radius:999px;
    background:linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
    animation:${projectsLineGrow} 1s ease-out 0.3s both;
    box-shadow:0 2px 12px rgba(255,87,51,0.5);
  }

  @media (prefers-reduced-motion: reduce) {
    animation:none;
    &::after{ animation:none; }
  }
`;

export const ProjectGrid = styled.div`
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:1.5rem;
  position:relative;
  z-index:2;
  max-width:1400px;

  @media (max-width:992px){
    grid-template-columns:repeat(2,1fr);
  }

  @media (max-width:600px){
    grid-template-columns:1fr;
  }
`;

export const ProjectCard = styled.div`
  background:rgba(26,26,26,0.9);
  backdrop-filter:blur(25px);
  border:1px solid rgba(255,87,51,0.2);
  border-radius:24px;
  padding:2.8rem 2rem;
  box-shadow:0 20px 45px rgba(0,0,0,0.4);
  transition:all 0.45s cubic-bezier(0.25,0.46,0.45,0.94);
  position:relative;
  overflow:hidden;
  opacity:0;
  transform:translateY(35px) scale(0.95);
  animation:${projectCardIn} 0.9s ease-out forwards;
  animation-delay:${props => props.delay}s;
  z-index:2;

  &::before{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(120deg,
      rgba(255,87,51,0.25),
      rgba(255,142,83,0.18),
      rgba(255,167,38,0.15));
    opacity:0;
    transition:opacity 0.45s ease;
    border-radius:24px;
  }

  &::after{
    content:"";
    position:absolute;
    top:-40%;
    left:-40%;
    width:180%;
    height:180%;
    background:radial-gradient(circle, rgba(255,87,51,0.3) 0%, transparent 65%);
    transform:rotate(15deg);
    opacity:0;
    transition:all 0.45s ease;
  }

  &:hover{
    transform:translateY(-15px) scale(1.05);
    border-color:rgba(255,87,51,0.7);
    box-shadow:
      0 35px 70px rgba(255,87,51,0.3),
      0 0 0 1px rgba(255,87,51,0.4);
  }

  &:hover::before{ opacity:1; }
  &:hover::after{
    opacity:0.7;
    transform:rotate(15deg) scale(1.15);
  }

  @media (prefers-reduced-motion: reduce){
    animation:none;
    opacity:1;
    transform:none;
  }
`;

export const ProjectImage = styled.img`
  width:100%;
  height:200px;
  object-fit:cover;
  margin-bottom:1.5rem;
  border-radius:16px;
`;

export const ProjectTitle = styled.h3`
  font-size:clamp(1.4rem,2vw,1.6rem);
  font-weight:900;
  margin:0 0 1.2rem;
  color:#ffffff;
  position:relative;
  z-index:3;
  letter-spacing:-0.01em;
`;

export const ProjectDesc = styled.p`
  margin:0 0 2.5rem;
  font-size:1.05rem;
  line-height:1.7;
  color:rgba(255,255,255,0.88);
  position:relative;
  z-index:3;
`;

export const ProjectLinks = styled.div`
  display:flex;
  gap:1rem;
  margin-top:2rem;
  position:relative;
  z-index:5;
`;

export const ProjectButton = styled.a`
  text-decoration:none;
  font-weight:800;
  font-size:0.95rem;
  padding:${props => props.large ? "18px 36px" : "14px 24px"};
  border-radius:20px;
  color:#ffffff;
  display:inline-flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  backdrop-filter:blur(20px);
  letter-spacing:0.5px;
  white-space:nowrap;
  text-transform:uppercase;
  border:2px solid;
  transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  position:relative;
  overflow:hidden;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background: rgba(255,87,51,0.2);
          border-color: rgba(255,87,51,0.5);
          box-shadow:0 8px 25px rgba(255,87,51,0.2);
          &:hover{
            background: rgba(255,87,51,0.4);
            border-color:#ff5733;
            transform:translateY(-4px) scale(1.05);
            box-shadow:
              0 20px 40px rgba(255,87,51,0.5),
              0 0 0 1px rgba(255,87,51,0.4);
          }
        `;
      case "secondary":
        return css`
          background: rgba(120,120,120,0.2);
          border-color: rgba(200,200,200,0.4);
          box-shadow:0 8px 25px rgba(120,120,120,0.2);
          &:hover{
            background: rgba(120,120,120,0.4);
            border-color:#ffffff;
            transform:translateY(-4px) scale(1.05);
            box-shadow:
              0 20px 40px rgba(255,255,255,0.3),
              0 0 0 1px rgba(255,255,255,0.3);
          }
        `;
      case "gradient":
        return css`
          background: linear-gradient(135deg,#ff5733,#ff8e53,#ffa726);
          border-color: rgba(255,87,51,0.7);
          box-shadow:
            0 15px 35px rgba(255,87,51,0.4),
            0 0 25px rgba(255,142,83,0.3);
          &:hover{
            transform:translateY(-6px) scale(1.08);
            box-shadow:
              0 30px 60px rgba(255,87,51,0.6),
              0 0 40px rgba(255,142,83,0.5);
          }
        `;
      default:
        return "";
    }
  }}

  &::before{
    content:"";
    position:absolute;
    top:0;
    left:-100%;
    width:100%;
    height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
    transition:left 0.6s;
  }

  &:hover::before{ left:100%; }

  &:hover span:last-child{
    transform:translateX(8px);
  }

  span:last-child{
    font-size:1.1rem;
    transition:transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  @media (prefers-reduced-motion: reduce){
    transition:none;
  }
`;

export const SeeAllContainer = styled.div`
  margin-top:70px;
  text-align:center;
  position:relative;
  z-index:2;
`;