import styled, { keyframes, css } from "styled-components";

/* Animations */
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

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`;

const slideIn = keyframes`
  from { opacity:0; transform:translateX(100%); }
  to { opacity:1; transform:translateX(0); }
`;

/* SECTION */
export const ContactSection = styled.section`
  padding: 90px 20px;
  background: var(--bg, #0a0a0a);
  color: var(--text, #fff);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  align-items:center;

  &::before {
    content:"";
    position:absolute;
    inset:0;
    background:
      radial-gradient(circle at 20% 30%, rgba(255,87,51,0.15) 0%, transparent 55%),
      radial-gradient(circle at 80% 70%, rgba(255,142,83,0.12) 0%, transparent 55%);
    filter:blur(18px);
    animation:${contactBgFloat} 14s ease-in-out infinite;
    z-index:0;
  }
`;

/* TOP */
export const ContactHeading = styled.h1`
  font-size: clamp(2.8rem,6vw,4.2rem);
  font-weight:900;
  margin: 0 auto 1.2rem auto;
  background: linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation:${contactHeadingPop} 1.2s ease-out both;

  &::after{
    content:"";
    display:block;
    margin:10px auto 0;
    width:110px;
    height:5px;
    border-radius:999px;
    background:linear-gradient(90deg,#ff5733,#ff8e53,#ffa726);
    animation:${lineGrow} 1.2s ease-out 0.4s both;
  }
`;

export const ContactText = styled.p`
  font-size:1.1rem;
  color:rgba(255,255,255,0.85);
  margin-bottom: 3rem;
  line-height:1.7;
  max-width: 600px;
  text-align:center;
`;

export const StatusBadge = styled.div`
  display:inline-flex;
  align-items:center;
  gap:0.6rem;
  background: rgba(81,255,0,0.15);
  padding:0.6rem 1.2rem;
  border-radius:50px;
  border:1px solid rgba(11,255,60,0.3);
  margin-bottom:1rem;

  .dot {
    width:8px;
    height:8px;
    background:#00ff04;
    border-radius:50%;
    animation:${pulseDot} 2s infinite;
  }
`;

/* LAYOUT */
export const ContactContainer = styled.div`
  max-width:1200px;
  width:100%;
  display:flex;
  gap:4rem;
  justify-content:space-between;
  z-index:2;

  @media (max-width:968px){
    flex-direction:column;
  }
`;

export const InfoSide = styled.div`
  display:flex;
  flex-direction:column;
  gap:2rem;
  flex:1;
  animation:${slideInUp} 0.8s ease;
`;

export const FormSide = styled.div`
  flex:1;
  animation:${slideInUp} 1s ease;
`;

/* CARD */
export const InfoItem = styled.div`
  display:flex;
  gap:1rem;
  padding:1.5rem;
  background:rgba(26,26,26,0.4);
  border-radius:16px;
  border:1px solid rgba(255,87,51,0.15);
  transition:all 0.3s ease;

  &:hover{
    transform:translateY(-8px);
    box-shadow:0 15px 35px rgba(255,87,51,0.25);
    border-color:rgba(255,87,51,0.5);
  }

  .icon{
    width:45px;
    height:45px;
    background:linear-gradient(135deg,#ff5733,#ff8e53);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:12px;
    color:#fff;
    transition:transform 0.3s ease;
  }

  &:hover .icon{
    transform:scale(1.15) rotate(8deg);
  }
`;

export const ContactEmail = styled.a`
  color:#ff8e53;
  text-decoration:none;

  &:hover{
    text-decoration:underline;
  }
`;

/* FORM */
export const ContactForm = styled.form`
  display:flex;
  flex-direction:column;
  gap:1.2rem;
  padding:2rem;
  background:rgba(26,26,26,0.6);
  border-radius:20px;
`;

/* INPUT */
const input = css`
  padding:15px;
  border-radius:12px;
  border:1px solid rgba(255,87,51,0.3);
  background:#111;
  color:#fff;
  transition:all 0.3s ease;

  &:hover{
    border-color:rgba(255,87,51,0.6);
  }

  &:focus{
    border-color:#ff5733;
    box-shadow:0 0 10px rgba(255,87,51,0.4);
    outline:none;
  }
`;

export const ContactInput = styled.input`${input}`;
export const ContactTextarea = styled.textarea`
  ${input}
  min-height:120px;
`;

/* BUTTON */
export const ContactButton = styled.button`
  padding:15px;
  border:none;
  border-radius:12px;
  background:linear-gradient(90deg,#ff5733,#ff8e53);
  color:#fff;
  font-weight:bold;
  cursor:pointer;
  position:relative;
  overflow:hidden;
  transition:all 0.3s ease;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;

  &:hover{
    transform:translateY(-4px);
    box-shadow:0 12px 30px rgba(255,87,51,0.4);
  }

  &::before{
    content:"";
    position:absolute;
    top:0;
    left:-100%;
    width:50%;
    height:100%;
    background:linear-gradient(
      to right,
      transparent,
      rgba(255,255,255,0.4),
      transparent
    );
    animation:${shimmer} 3s infinite;
  }

  &:disabled{
    opacity:0.6;
    cursor:not-allowed;
    transform:none;
    box-shadow:none;
  }

  &:disabled::before{
    display:none;
  }
`;

/* MESSAGE POPUP */
export const MessageContainer = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  gap:12px;
  padding:14px 20px;
  border-radius:12px;
  font-weight:600;
  animation:${slideIn} 0.4s ease;
  backdrop-filter:blur(12px);
  cursor: pointer;

  background:${props =>
    props.status === "success"
      ? "rgba(34,197,94,0.95)"
      : "rgba(239,68,68,0.95)"};

  box-shadow:0 10px 30px rgba(0,0,0,0.4);
`;

export const MessageText = styled.span`
  font-size:0.95rem;
`;

export const SuccessIcon = styled.div`
  display:flex;
  align-items:center;

  svg{ width:22px; height:22px; }
`;

export const ErrorIcon = styled.div`
  display:flex;
  align-items:center;

  svg{ width:22px; height:22px; }
`;
