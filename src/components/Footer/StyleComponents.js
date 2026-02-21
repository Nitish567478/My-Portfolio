import styled, { keyframes } from "styled-components";

const namePop = keyframes`
  0% { opacity:0; transform:translateY(-25px) scale(0.9); }
  100% { opacity:1; transform:translateY(0) scale(1); }
`;

const lineGrow = keyframes`
  0% { transform:translateX(-50%) scaleX(0); opacity:0; }
  100% { transform:translateX(-50%) scaleX(1); opacity:1; }
`;

const footerBgFloat = keyframes`
  0%,100% { transform:translateY(0) scale(1); }
  25% { transform:translateY(-12px) scale(1.04); }
  50% { transform:translateY(6px) scale(0.98); }
  75% { transform:translateY(-8px) scale(1.02); }
`;

export const FooterSection = styled.footer`
  padding: 50px 20px;
  background: var(--bg);
  color: var(--text);
  text-align:center;
  position:relative;
  overflow:hidden;

  &::before{
    content:"";
    position:absolute;
    inset:0;
    background:
      radial-gradient(circle at 20% 30%, rgba(255,87,51,0.14) 0%, transparent 55%),
      radial-gradient(circle at 80% 70%, rgba(255,142,83,0.11) 0%, transparent 55%);
    filter:blur(20px);
    animation:${footerBgFloat} 16s ease-in-out infinite;
    pointer-events:none;
    z-index:0;
  }

  @media (max-width:992px){
    padding:45px 18px;
  }

  @media (max-width:768px){
    padding:40px 16px;
  }

  @media (max-width:480px){
    padding:35px 14px;
  }

  @media (prefers-reduced-motion: reduce){
    &::before{ animation:none; }
  }
`;

export const FooterContainer = styled.div`
  max-width:1200px;
  margin:0 auto;
  position:relative;
  z-index:1;
`;

export const FooterName = styled.h3`
  font-size: clamp(1.6rem,3vw,2.2rem);
  font-weight:900;
  margin:0 0 1.2rem;
  background:linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  letter-spacing:-0.03em;
  position:relative;
  animation:${namePop} 1s ease-out both;

  &::after{
    content:"";
    position:absolute;
    left:50%;
    bottom:-8px;
    transform:translateX(-50%);
    width:60px;
    height:3px;
    border-radius:999px;
    background:linear-gradient(90deg,#ff5733,#ff8e53);
    box-shadow:0 2px 10px rgba(255,87,51,0.5);
    animation:${lineGrow} 1s ease-out 0.3s both;
  }

  @media (max-width:480px){
    font-size:1.7rem;
  }

  @media (prefers-reduced-motion: reduce){
    animation:none;
    &::after{ animation:none; }
  }
`;

export const FooterText = styled.p`
  margin:0 0 2.5rem;
  font-size:1.05rem;
  color:rgba(255,255,255,0.8);
  line-height:1.7;
  max-width:500px;
  margin-left:auto;
  margin-right:auto;

  @media (max-width:480px){
    font-size:0.95rem;
    margin-bottom:2rem;
  }
`;

export const FooterLinks = styled.div`
  display:flex;
  justify-content:center;
  gap:1.2rem;
  flex-wrap:nowrap;
  overflow-x:auto;
  padding:8px 0;
  scrollbar-width:thin;
  position:relative;
  z-index:2;

  &::-webkit-scrollbar{
    height:5px;
  }

  &::-webkit-scrollbar-track{
    background:rgba(255,255,255,0.05);
    border-radius:3px;
  }

  &::-webkit-scrollbar-thumb{
    background:linear-gradient(90deg, rgba(255,87,51,0.7), rgba(255,142,83,0.6));
    border-radius:3px;
  }

  &::-webkit-scrollbar-thumb:hover{
    background:linear-gradient(90deg,#ff5733,#ff8e53);
  }

  @media (max-width:768px){
    flex-wrap:wrap;
    overflow-x:visible;
    gap:0.9rem;
  }

  @media (max-width:480px){
    gap:0.7rem;
  }
`;

export const FooterLink = styled.a`
  text-decoration:none;
  font-weight:800;
  font-size:1rem;
  padding:14px 24px;
  border-radius:18px;
  background:rgba(255,87,51,0.16);
  border:2px solid rgba(255,87,51,0.35);
  color:#ffffff;
  display:inline-flex;
  align-items:center;
  gap:10px;
  backdrop-filter:blur(20px);
  transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  flex-shrink:0;
  white-space:nowrap;
  position:relative;
  overflow:hidden;

  &::before{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(120deg, rgba(255,87,51,0.3), rgba(255,142,83,0.2));
    opacity:0;
    transition:opacity 0.4s ease;
    border-radius:inherit;
  }

  &:hover{
    transform:translateY(-5px) scale(1.05);
    border-color:#ff5733;
    box-shadow:0 18px 40px rgba(255,87,51,0.4);
  }

  &:hover::before{
    opacity:1;
  }

  &:hover span{
    transform:translateX(8px);
  }

  span{
    font-size:1.15rem;
    transition:transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  @media (max-width:480px){
    padding:11px 16px;
    font-size:0.85rem;
    border-radius:14px;
  }

  @media (prefers-reduced-motion: reduce){
    transition:none;
  }
`;