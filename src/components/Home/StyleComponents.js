import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  to { opacity: 1; transform: translateX(0); }
`;

const fadeUp = keyframes`
  to { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%,50% { opacity: 1; }
  51%,100% { opacity: 0; }
`;

const pulse = keyframes`
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const expand = keyframes`
  to { transform: scaleX(1); }
`;

const float = keyframes`
  0%,100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.4); opacity: 0; }
`;

const rotateRing = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
 
const underlineExpand = keyframes`
  0%,100% { width: 0; }
  50% { width: 100%; }
`;

const glowPulse = keyframes`
  0%,100% { opacity:0; transform:scale(1); box-shadow:0 0 4px rgba(255,87,51,0.6); }
  50% { opacity:1; transform:scale(1.2); box-shadow:0 0 12px rgba(255,87,51,0.8); }
`;

export const Section = styled.section`
  min-height: 100vh;
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
    z-index: 1;
  }
`;

export const Hero = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  gap: 4rem;

  @media (max-width:768px){
    flex-direction: column;
    text-align:center;
    gap:3rem;
  }

  @media (max-width:480px){
    gap:2rem;
  }
`;

export const HeroLeft = styled.div`
  flex:1;
  max-width:600px;
  opacity:0;
  transform: translateX(-50px);
  animation:${slideInLeft} 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards;

  @media (max-width:768px){
    order:2;
    text-align:center;
  }
`;

export const HeroRight = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:2rem;
  opacity:0;
  transform: translateX(50px);
  animation:${slideInRight} 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.5s forwards;

  @media (max-width:768px){
    order:1;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.8rem,5vw,4.2rem);
  font-weight:800;
  margin-bottom:1.2rem;
  line-height:1.1;
  background: linear-gradient(135deg,#ffffff 0%,#f0f0f0 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
`;

export const HeroName = styled.span`
  background: linear-gradient(135deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  position:relative;

  &::after{
    content:"";
    position:absolute;
    bottom:-8px;
    left:0;
    width:50px;
    height:3px;
    background:linear-gradient(90deg,#ff5733,#ff8e53);
    border-radius:2px;
    animation:${expand} 0.8s ease-out 1s forwards;
    transform:scaleX(0);
  }
`;

export const HeroRole = styled.h2`
  font-size: clamp(1.6rem,3.5vw,2.5rem);
  font-weight:400;
  margin-bottom:1.8rem;
  color:rgba(255,255,255,0.9);
  min-height:3rem;
  display:flex;
  align-items:center;
`;

export const StrongText = styled.strong`
  background: linear-gradient(135deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-weight:700;
  position:relative;
  margin-left:10px;

  &::before{
    content:"";
    position:absolute;
    bottom:-4px;
    left:0;
    width:0;
    height:2px;
    background:linear-gradient(90deg,#ff5733,#ff8e53);
    border-radius:1px;
    animation:${underlineExpand} 2s ease-in-out infinite;
  }

  &::after{
    content:"";
    position:absolute;
    top:-2px;
    right:-8px;
    width:4px;
    height:4px;
    background:#ff5733;
    border-radius:50%;
    animation:${glowPulse} 2s infinite 0.5s;
  }
`;

export const Cursor = styled.span`
  width:3px;
  height:2.8rem;
  background: linear-gradient(to bottom,#ff5733,#ff8e53);
  margin-left:6px;
  border-radius:2px;
  animation:${blink} 1.2s infinite, ${pulse} 2s infinite;
  box-shadow:0 0 6px rgba(255,87,51,0.5);
`;

export const HeroDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.8);
  margin-bottom: 3rem;
  max-width: 550px;
  opacity: 0;
  transform: translateY(20px);
  animation:${fadeUp} 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.8s forwards;
`;

export const HeroButtons = styled.div`
  display:flex;
  gap:1.2rem;
  flex-wrap:wrap;
  opacity:0;
  transform:translateY(30px);
  animation:${fadeUp} 1s cubic-bezier(0.25,0.46,0.45,0.94) 1.2s forwards;
`;

export const Button = styled.a`
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:1.1rem 2.2rem;
  font-weight:600;
  border-radius:50px;
  text-decoration:none;
  transition:0.4s;
  font-size:1rem;
  position:relative;
  overflow:hidden;

  ${props => {
    switch(props.variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg,#ff5733,#ff8e53);
          color: white;
          box-shadow: 0 10px 30px rgba(255,87,51,0.4);
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(255,87,51,0.6);
          }
        `;
      case 'secondary':
        return `
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          &:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
          }
        `;
      case 'outline':
        return `
          color: white;
          border: 2px solid rgba(255,255,255,0.3);
          background: transparent;
          &:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-2px);
          }
        `;
      default:
        return '';
    }
  }}
`;

export const HeroSocial = styled.div`
  display:flex;
  gap:1rem;
  margin-top:2rem;
  opacity:0;
  transform:translateY(20px);
  animation:${fadeUp} 1s cubic-bezier(0.25,0.46,0.45,0.94) 1.6s forwards;
`;

export const SocialLink = styled.a`
  width:48px;
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:rgba(255,255,255,0.7);
  border-radius:12px;
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,0.1);
  transition:all 0.3s ease;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #ff5733;
    background: rgba(255,87,51,0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255,87,51,0.3);
  }
`;

export const ImageBox = styled.div`
  width: clamp(240px,32vw,340px);
  height: clamp(240px,32vw,340px);
  border-radius:50%;
  position:relative;
  padding:15px;
  margin:15px;
  border:15px solid transparent;
  background: linear-gradient(135deg,rgba(255,87,51,0.15),rgba(255,142,83,0.1));
  box-shadow:0 50px 100px rgba(0,0,0,0.6);
  animation:${float} 6s ease-in-out infinite;
  transition: all 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
  overflow:hidden;

  &::before{
    content:"";
    position:absolute;
    inset:-15px;
    border-radius:50%;
    background:conic-gradient(
      from 0deg,
      transparent,
      #ff5733,
      #ff8e53,
      transparent
    );
    filter:blur(12px);
    opacity:0;
    transition:opacity 0.5s ease;
    z-index:-1, +1;
  }

  &:hover{
    transform:scale(1.08) rotate(360deg);
    border:15px solid rgba(255,87,51,0.7);
    box-shadow:
      0 80px 160px rgba(255,87,51,0.5),
      0 0 0 1px rgba(255,255,255,0.2);
    animation-play-state:paused;
  }

  &:hover::before{
    opacity:1;
  }
`;

export const ImageRing = styled.div`
  position:absolute;
  inset:-4px;
  border-radius:50%;
  background:conic-gradient(#ff5733,#ff8e53,transparent);
  z-index:-1;
  animation:${rotateRing} 8s linear infinite;
  opacity:0.6;
`;

export const HeroImage = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:50%;
`;

export const HeroStats = styled.div`
  display:flex;
  gap:2rem;
`;

export const StatItem = styled.div`
  text-align:center;
`;

export const StatNumber = styled.span`
  display:block;
  font-size:2rem;
  font-weight:800;
  background:linear-gradient(135deg,#ff5733,#ff8e53);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
`;

export const StatLabel = styled.span`
  font-size:0.9rem;
  color:rgba(255,255,255,0.7);
`;
