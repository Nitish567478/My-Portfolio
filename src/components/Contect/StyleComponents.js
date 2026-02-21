import styled, { keyframes, css } from "styled-components";

const contactHeadingPop = keyframes`
  0% { opacity:0; transform:translateY(-35px) scale(0.9); }
  100% { opacity:1; transform:translateY(0) scale(1); }
`;

const lineGrow = keyframes`
  0% { transform:translateX(-50%) scaleX(0); opacity:0; }
  100% { transform:translateX(-50%) scaleX(1); opacity:1; }
`;

const contactBgFloat = keyframes`
  0%,100% { transform:translateY(0) scale(1); }
  33% { transform:translateY(-25px) scale(1.08); }
  66% { transform:translateY(12px) scale(0.97); }
`;

export const ContactSection = styled.section`
  padding: 90px 20px;
  background: var(--bg);
  color: var(--text);
  text-align: center;
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
    filter:blur(18px);
    animation:${contactBgFloat} 14s ease-in-out infinite;
    pointer-events:none;
    z-index:0;
  }

  @media (max-width:768px){
    padding:70px 15px;
  }

  @media (max-width:480px){
    padding:60px 12px;
  }

  @media (prefers-reduced-motion: reduce){
    &::before{ animation:none; }
  }
`;

export const ContactHeading = styled.h2`
  font-size: clamp(2.8rem,6vw,4.2rem);
  font-weight:900;
  margin-bottom:1.5rem;
  background: linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  position:relative;
  letter-spacing:-0.03em;
  animation:${contactHeadingPop} 1.2s ease-out both;
  z-index:2;

  &::after{
    content:"";
    position:absolute;
    left:50%;
    bottom:-18px;
    transform:translateX(-50%);
    width:110px;
    height:5px;
    border-radius:999px;
    background:linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
    animation:${lineGrow} 1.2s ease-out 0.4s both;
    box-shadow:0 3px 15px rgba(255,87,51,0.6);
  }

  @media (prefers-reduced-motion: reduce){
    animation:none;
    &::after{ animation:none; }
  }
`;

export const ContactText = styled.p`
  font-size:1.15rem;
  color:rgba(255,255,255,0.85);
  margin:1.5rem auto 3rem;
  line-height:1.8;
  z-index:2;
  position:relative;
`;

export const ContactEmail = styled.a`
  color:#ff8e53;
  font-weight:800;
  text-decoration:none;
  position:relative;
  transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);

  &::after{
    content:"";
    position:absolute;
    bottom:-2px;
    left:0;
    width:0;
    height:2px;
    background:linear-gradient(90deg,#ff5733,#ffa726);
    transition:width 0.4s ease;
  }

  &:hover{
    color:#ffa726;
    text-shadow:0 0 20px rgba(255,142,83,0.6);
  }

  &:hover::after{
    width:100%;
  }
`;

export const ContactForm = styled.form`
  max-width:700px;
  margin:4rem auto;
  display:flex;
  flex-direction:column;
  gap:1.5rem;
  padding:2rem;
  background:rgba(26,26,26,0.6);
  backdrop-filter:blur(25px);
  border-radius:24px;
  border:1px solid rgba(255,87,51,0.2);
  box-shadow:0 25px 60px rgba(0,0,0,0.5);
  position:relative;
  z-index:2;

  @media (max-width:768px){
    padding:1.5rem;
    margin:3rem auto;
  }

  @media (max-width:480px){
    padding:1.2rem;
  }
`;

const sharedInputStyles = css`
  width:100%;
  padding:18px 22px;
  border-radius:18px;
  border:2px solid rgba(255,87,51,0.25);
  background:rgba(15,15,15,0.9);
  color:#ffffff;
  outline:none;
  font-size:1.05rem;
  font-weight:500;
  transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  backdrop-filter:blur(15px);

  &::placeholder{
    color:rgba(255,255,255,0.5);
  }

  &:focus{
    border-color:#ff5733;
    box-shadow:0 0 0 4px rgba(255,87,51,0.2);
    transform:translateY(-2px);
    background:rgba(20,20,20,0.95);
  }

  @media (prefers-reduced-motion: reduce){
    transition:none;
  }
`;

export const ContactInput = styled.input`
  ${sharedInputStyles}
`;

export const ContactTextarea = styled.textarea`
  ${sharedInputStyles}
  min-height:160px;
  resize:vertical;
`;

export const ContactButton = styled.button`
  width:100%;
  padding:18px 28px;
  border:none;
  border-radius:20px;
  font-weight:800;
  cursor:pointer;
  color:#ffffff;
  background:linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  position:relative;
  overflow:hidden;
  transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  box-shadow:0 15px 35px rgba(255,87,51,0.3);
  letter-spacing:0.8px;
  text-transform:uppercase;
  font-size:0.95rem;

  &::before{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,#ffa726,#ff8e53,#ff5733);
    opacity:0;
    transition:opacity 0.4s ease;
  }

  &:hover{
    transform:translateY(-5px) scale(1.02);
    box-shadow:0 25px 55px rgba(255,87,51,0.45);
  }

  &:hover::before{
    opacity:1;
  }

  &:active{
    transform:translateY(-2px) scale(1);
  }

  &:hover svg{
    transform:translateX(8px);
  }

  svg{
    font-size:1.25rem;
    transition:transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  @media (prefers-reduced-motion: reduce){
    transition:none;
  }
`;