import styled, { keyframes, css } from "styled-components";

const contactHeadingPop = keyframes`
  0% { opacity:0; transform:translateY(-35px) scale(0.9); }
  100% { opacity:1; transform:translateY(0) scale(1); }
`;

const lineGrow = keyframes`
  0% { transform:scaleX(0); opacity:0; }
  100% { transform:scaleX(1); opacity:1; }
`;

const contactBgFloat = keyframes`
  0%,100% { transform:translateY(0) scale(1); }
  33% { transform:translateY(-25px) scale(1.08); }
  66% { transform:translateY(12px) scale(0.97); }
`;

const slideInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseDot = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

export const ContactSection = styled.section`
  padding: 90px 20px;
  background: var(--bg, #0a0a0a);
  color: var(--text, #fff);
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

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  animation: ${slideInUp} 0.8s ease-out 0.3s both;
  align-items: flex-start;
`;

export const FormSide = styled.div`
  animation: ${slideInUp} 0.8s ease-out 0.5s both;
`;

export const ContactHeading = styled.h1`
  font-size: clamp(2.8rem,6vw,4.2rem);
  font-weight:900;
  margin: 0 auto 1.5rem auto;  
  background: linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  position:relative;
  letter-spacing:-0.03em;
  animation:${contactHeadingPop} 1.2s ease-out both;
  z-index:2;
  width: fit-content;
  display: block;   

  &::after{
    content:"";
    position:absolute;
    left: 50%;   
    transform: translateX(-50%);   
    bottom:-18px;
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
  margin: 0 0 3rem 0;
  line-height:1.8;
  z-index:2;
  position:relative;
  max-width: 500px;
  text-align: left;
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(81, 255, 0, 0.15);
  backdrop-filter: blur(20px);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: 1px solid rgba(11, 255, 60, 0.3);
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  align-self: flex-start;
  margin-bottom: 1rem;
  animation: ${slideInUp} 0.6s ease-out both;

  .dot {
    width: 10px;
    height: 10px;
    background: #00ff04;
    border-radius: 50%;
    animation: ${pulseDot} 2s infinite;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background: rgba(26,26,26,0.4);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255,87,51,0.15);
  transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  width: 100%;
  text-align: left;

  &:hover {
    transform: translateX(12px);
    box-shadow: 0 20px 40px rgba(255,87,51,0.15);
    border-color: rgba(255,87,51,0.3);
  }

  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #ff5733, #ff8e53);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1.4rem;
    color: white;
    box-shadow: 0 8px 25px rgba(255,87,51,0.3);
  }

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
  }

  p, a {
    margin: 0;
    color: rgba(255,255,255,0.8);
    font-size: 0.95rem;
    line-height: 1.5;
  }
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
  display:flex;
  flex-direction:column;
  gap:1.5rem;
  padding:2.5rem;
  background:rgba(26,26,26,0.6);
  backdrop-filter:blur(25px);
  border-radius:24px;
  border:1px solid rgba(255,87,51,0.2);
  box-shadow:0 25px 60px rgba(0,0,0,0.5);
  position:relative;
  z-index:2;

  @media (max-width:768px){
    padding:2rem;
  }

  @media (max-width:480px){
    padding:1.5rem;
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
  color:#fff;
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
    color: #fff;
  }

  &:hover{
    transform:translateY(-5px) scale(1.02);
    box-shadow:0 25px 55px rgba(255,87,51,0.45);
    color: #fff;
  }

  &:hover:not(:disabled)::before{
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

export const MessageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  z-index: 10000;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  animation: ${slideInUp} 0.4s ease-out;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);

  ${props => props.status === 'success' 
    ? css`
        background: rgba(34, 197, 94, 0.9);
        color: white;
        border-color: rgba(34, 197, 94, 0.3);
      ` 
    : css`
        background: rgba(239, 68, 68, 0.9);
        color: white;
        border-color: rgba(239, 68, 68, 0.3);
      `
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;

export const MessageText = styled.span`
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const SuccessIcon = styled.div`
  svg { width: 24px; height: 24px; }
`;

export const ErrorIcon = styled.div`
  svg { width: 24px; height: 24px; }
`;
