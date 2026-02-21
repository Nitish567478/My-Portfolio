import styled, { keyframes } from "styled-components";

const headingPop = keyframes`
  0% { opacity:0; transform:translateY(-35px) scale(0.9); }
  100% { opacity:1; transform:translateY(0) scale(1); }
`;

const lineGrow = keyframes`
  0% { transform:translateX(-50%) scaleX(0); opacity:0; }
  100% { transform:translateX(-50%) scaleX(1); opacity:1; }
`;

const bgFloat = keyframes`
  0% { transform:translateY(0) scale(1); }
  100% { transform:translateY(-20px) scale(1.05); }
`;

export const FeaturedSection = styled.section`
  padding:100px 20px;
  background: var(--bg);
  color: var(--text);
  position:relative;
  overflow:hidden;
  min-height:100vh;

  &::before{
    content:"";
    position:absolute;
    inset:0;
    background:
      radial-gradient(circle at 10% 20%, rgba(255,107,53,0.15) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(255,149,30,0.12) 0%, transparent 50%);
    filter:blur(20px);
    animation:${bgFloat} 15s ease-in-out infinite alternate;
    pointer-events:none;
    z-index:0;
  }

  @media(max-width:480px){
    padding:60px 16px;
  }
`;

export const FeaturedTitle = styled.h2`
  font-size:clamp(2.8rem,6vw,4.2rem);
  font-weight:900;
  text-align:center;
  margin:0 auto 5rem;
  background:linear-gradient(90deg,#ff6b35,#f7931e,#ffba08);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  letter-spacing:-0.03em;
  position:relative;
  animation:${headingPop} 1.2s both;
  z-index:2;

  &::after{
    content:"";
    position:absolute;
    left:50%;
    bottom:-20px;
    transform:translateX(-50%);
    width:120px;
    height:5px;
    border-radius:999px;
    background:linear-gradient(90deg,#ff6b35,#f7931e,#ffba08);
    animation:${lineGrow} 1s 0.4s both;
    box-shadow:0 3px 15px rgba(255,107,53,0.6);
  }
`;

export const FeaturedProjectWrapper = styled.div`
  max-width:1400px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:4rem;
  align-items:center;
  background:rgba(20,20,20,0.85);
  backdrop-filter:blur(30px);
  border:1px solid rgba(255,107,53,0.25);
  border-radius:28px;
  padding:4rem;
  box-shadow:
    0 35px 70px rgba(0,0,0,0.6),
    inset 0 1px 0 rgba(255,255,255,0.1);
  position:relative;
  z-index:2;
  transition:all 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
  overflow:hidden;

  &::before{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(135deg,
      rgba(255,107,53,0.15),
      rgba(255,149,30,0.1));
    opacity:0;
    transition:opacity 0.5s ease;
  }

  &:hover{
    transform:translateY(-15px) scale(1.02);
    border-color:rgba(255,107,53,0.6);
    box-shadow:
      0 50px 100px rgba(255,107,53,0.3),
      0 0 0 1px rgba(255,107,53,0.4);
  }

  &:hover::before{ opacity:1; }

  @media(max-width:768px){
    grid-template-columns:1fr;
    gap:3rem;
    padding:3rem 2rem;
  }

  @media(max-width:480px){
    padding:2.5rem 1.5rem;
    border-radius:24px;
  }
`;

export const FeaturedImage = styled.div`
  position:relative;
  z-index:2;

  img{
    width:100%;
    height:300px;
    object-fit:cover;
    border-radius:24px;
    transition:all 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
    box-shadow:0 20px 40px rgba(0,0,0,0.4);
  }

  ${FeaturedProjectWrapper}:hover & img{
    transform:scale(1.08) rotate(2deg);
    filter:drop-shadow(0 30px 60px rgba(255,107,53,0.5));
  }
`;

export const FeaturedContent = styled.div`
  position:relative;
  z-index:3;
`;

export const FeaturedProjectTitle = styled.h3`
  font-size:clamp(1.8rem,3vw,2.4rem);
  font-weight:900;
  margin:0 0 1.5rem;
  color:#ffffff;
  letter-spacing:-0.02em;
`;

export const FeaturedDescription = styled.p`
  margin:0 0 2.5rem;
  font-size:1.15rem;
  line-height:1.8;
  color:rgba(255,255,255,0.92);
`;

export const FeaturedLinks = styled.div`
  display:flex;
  gap:1.5rem;
  margin-bottom:2rem;

  @media(max-width:768px){
    flex-direction:column;
  }
`;

export const ProjectLink = styled.a`
  text-decoration:none;
  font-weight:800;
  font-size:1.05rem;
  padding:16px 28px;
  border-radius:24px;
  background:rgba(255,107,53,0.2);
  border:2px solid rgba(255,107,53,0.5);
  color:#ffffff;
  transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  display:inline-flex;
  align-items:center;
  gap:12px;
  backdrop-filter:blur(20px);

  &:hover{
    transform:translateY(6px);
    border-color:#ff6b35;
    background:rgba(255,107,53,0.35);
    box-shadow:0 20px 45px rgba(255,107,53,0.5);
  }
`;

export const ProjectTech = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:0.8rem;
`;

export const TechTag = styled.span`
  padding:8px 16px;
  background:rgba(255,107,53,0.15);
  border:1px solid rgba(255,107,53,0.3);
  border-radius:20px;
  font-size:0.85rem;
  font-weight:600;
  color:rgba(255,255,255,0.95);
  backdrop-filter:blur(10px);
`;