import styled, { css, keyframes } from "styled-components";

// --- Keep your original animations ---
const slideInLeft = keyframes` to { opacity: 1; transform: translateX(0); } `;
const slideInRight = keyframes` to { opacity: 1; transform: translateX(0); } `;
const fadeUp = keyframes` to { opacity: 1; transform: translateY(0); } `;
const blink = keyframes` 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } `;
const pulse = keyframes` 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } `;
const expand = keyframes` to { transform: scaleX(1); } `;
const float = keyframes` 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(2deg); } `;
const rotateRing = keyframes` 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } `;
const underlineExpand = keyframes` 0%,100% { width: 0; } 50% { width: 100%; } `;
const glowPulse = keyframes` 0%,100% { opacity:0; transform:scale(1); box-shadow:0 0 4px rgba(255,87,51,0.6); } 50% { opacity:1; transform:scale(1.2); box-shadow:0 0 12px rgba(255,87,51,0.8); } `;


const float3D = keyframes`
  0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
  50% { transform: translateY(-20px) rotateX(10deg) rotateY(5deg); }
`;

const ringPulse = keyframes`
  0%, 100% { transform: translateZ(-40px) scale(1); opacity: 0.6; }
  50% { transform: translateZ(-60px) scale(1.15); opacity: 0.3; }
`;

const glowSpin = keyframes`
  from { filter: hue-rotate(0deg) brightness(1); }
  to { filter: hue-rotate(360deg) brightness(1.2); }
`;

const driftCenter = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateZ(60px) scale(1); }
  50% { transform: translate(-50%, calc(-50% - 10px)) translateZ(78px) scale(1.02); }
`;

const imageReveal = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) translateZ(20px) scale(0.92);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translateZ(60px) scale(1);
    filter: blur(0);
  }
`;

const imageGlowPulse = keyframes`
  0%, 100% { box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3); }
  50% { box-shadow: 0 24px 52px rgba(255, 87, 51, 0.18); }
`;

const heroImageVariantStyles = {
  center: css`
    left: 50%;
    top: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%) translateZ(60px);
    animation: ${imageReveal} 0.8s ease-out,
      ${driftCenter} 5.2s ease-in-out 0.8s infinite,
      ${imageGlowPulse} 3.8s ease-in-out infinite;
    z-index: 4;
  `,
};

const heroImageHoverStyles = {
  center: css`
    transform: translate(-50%, calc(-50% - 12px)) translateZ(92px) scale(1.05);
  `,
};

// --- New 3D BG Components ---
export const KeyboardBG = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150vw;
  height: 120vh;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 12px;
  transform: translate(-50%, -30%) rotateX(65deg) rotateZ(-15deg);
  z-index: 1;
  pointer-events: none;
  opacity: 0.5;
`;

export const Key = styled.div.attrs(props => ({
  style: {
    transform: `translateZ(${props.isPressed ? '-20px' : '0px'})`,
    background: props.isPressed 
      ? 'linear-gradient(135deg, #ff5733, #ff8e53)' 
      : 'rgba(255, 255, 255, 0.03)',
    boxShadow: props.isPressed 
      ? '0 0 20px rgba(255, 87, 51, 0.5)' 
      : '0 4px 0 rgba(0,0,0,0.2)',
  }
}))`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.1s ease-out;
`;
 
export const Section = styled.section`
  min-height: 100vh;
  background: var(--bg, #0a0a0a);
  color: var(--text, #fff);
  position: relative;
  overflow: hidden;
  perspective: 1200px; /* Added for 3D effect */
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
  @media (max-width:768px){ flex-direction: column; text-align:center; gap:3rem; }
`;

export const HeroLeft = styled.div`
  flex:1;
  max-width:600px;
  opacity:0;
  transform: translateX(-50px);
  animation:${slideInLeft} 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards;
  @media (max-width:768px){ order:2; }
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
  @media (max-width:768px){ order:1; }
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
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1.1rem 2.2rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: inherit;
  user-select: none;

  /* Shimmer sweep effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent 0%, 
      rgba(255,255,255,0.4) 50%, 
      transparent 100%
    );
    transition: left 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  &:hover::before {
    left: 100%;
  }

  /* Initial glow */
  box-shadow: ${props => 
    props.variant === 'primary' 
      ? '0 10px 25px rgba(255,87,51,0.3)'
      : props.variant === 'secondary'
      ? '0 8px 20px rgba(0,0,0,0.1)'
      : '0 8px 20px rgba(0,0,0,0.1)'
  };

  ${props => {
    switch (props.variant) {
      case "primary":
        return `
          background: linear-gradient(135deg, #ff5733 0%, #ff8e53 50%, #ff6b3a 100%);
          color: #fff;
          border: none;

          &:hover {
            transform: translateY(-5px) scale(1.05);
            background: linear-gradient(135deg, #ff8e53 0%, #ff5733 50%, #ff6b3a 100%);
            box-shadow: 
              0 25px 50px rgba(255,87,51,0.6),
              0 0 35px rgba(255,87,51,0.4);
          }
        `;

      case "secondary":
        return `
          background: rgba(255,255,255,0.12);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(15px);

          &:hover {
            background: rgba(255,87,51,0.18);
            border-color: rgba(255,87,51,0.6);
            transform: translateY(-5px) scale(1.05);
            box-shadow: 
              0 20px 40px rgba(255,87,51,0.35),
              0 0 25px rgba(255,87,51,0.2);
          }
        `;

      case "outline":
        return `
          background: rgba(255,255,255,0.05);
          color: #fff;
          border: 2px solid rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);

          &:hover {
            background: linear-gradient(135deg, #ff5733 0%, #ff8e53 100%);
            border-color: transparent;
            color: #fff;
            transform: translateY(-5px) scale(1.05);
            box-shadow: 
              0 20px 45px rgba(255,87,51,0.55),
              0 0 30px rgba(255,87,51,0.35);
          }
        `;

      default:
        return "";
    }
  }}

  /* Arrow slide animation */
  &:hover span {
    transform: translateX(8px);
  }

  /* Active state */
  &:active {
    transform: translateY(-2px) scale(1.02);
    transition: all 0.2s ease;
  }

  /* Ripple click effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    z-index: 2;
    pointer-events: none;
  }

  &:active::after {
    width: 400px;
    height: 400px;
  }

  /* Focus accessibility */
  &:focus-visible {
    outline: 2px solid rgba(255,87,51,0.8);
    outline-offset: 2px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
  }
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
  &:hover { color: #ff5733; background: rgba(255,87,51,0.1); transform: translateY(-3px); box-shadow: 0 10px 25px rgba(255,87,51,0.3); }
`;

export const ImageBox = styled.div`
  width: clamp(360px, 46vw, 520px);
  height: clamp(360px, 46vw, 520px);
  position: relative;
  padding: 12px;
  margin: 15px;
  cursor: pointer;
  perspective: 1200px;
  transform-style: preserve-3d;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 35%, rgba(255, 167, 38, 0.2), transparent 34%),
    radial-gradient(circle at 50% 50%, rgba(255, 87, 51, 0.1), transparent 65%);
  box-shadow: 0 36px 70px rgba(0, 0, 0, 0.55);
  
  /* Upgraded Animation */
  animation: ${float3D} 6s ease-in-out infinite;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    transform: rotateY(10deg) rotateX(8deg) scale(1.04);
    animation-play-state: paused;
    box-shadow: 0 44px 90px rgba(255, 87, 51, 0.18);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: inset 0 0 28px rgba(255, 87, 51, 0.28);
    animation: ${glowSpin} 10s linear infinite;
  }
`;

export const ImageRing = styled.div`
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #ff5733, #ff8e53, transparent, #ff5733);
  
  /* Dual Animation: Rotation + 3D Pulsing */
  animation: 
    ${rotateRing} 8s linear infinite, 
    ${ringPulse} 4s ease-in-out infinite;
    
  transform: translateZ(-40px);
  opacity: 0.6;
  filter: blur(2px);
  pointer-events: none;
  transition: filter 0.5s ease, opacity 0.5s ease;
`;

export const HeroImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})`
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.6s ease, box-shadow 0.6s ease, filter 0.6s ease,
    border-color 0.6s ease, opacity 0.6s ease;
  ${(props) => heroImageVariantStyles[props.variant || "center"]}

  &:hover {
    border-color: rgba(255, 255, 255, 0.36);
    filter: saturate(1.1) brightness(1.06);
  }

  ${ImageBox}:hover & {
    box-shadow: 0 30px 60px rgba(255, 87, 51, 0.22);
    filter: saturate(1.08) brightness(1.05);
    ${(props) => heroImageHoverStyles[props.variant || "center"]}
  }

  @media (max-width: 768px) {
    width: 84%;
    height: 84%;
  }
`;

export const HeroStats = styled.div` display:flex; gap:2rem; `;
export const StatItem = styled.div` text-align:center; `;
export const StatNumber = styled.span` display:block; font-size:2rem; font-weight:800; background:linear-gradient(135deg,#ff5733,#ff8e53); -webkit-background-clip:text; -webkit-text-fill-color:transparent; `;
export const StatLabel = styled.span` font-size:0.9rem; color:rgba(255,255,255,0.7); `;
