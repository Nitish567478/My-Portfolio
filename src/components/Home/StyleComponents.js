import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
`;

const blinkCursor = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const spinGlow = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const floatBadge = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 100px 30px 60px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 15%;
    left: 5%;
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, rgba(255, 87, 51, 0.18) 0%, rgba(255, 142, 83, 0.04) 50%, transparent 70%);
    filter: blur(90px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 15%;
    right: 5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(168, 85, 247, 0.03) 50%, transparent 70%);
    filter: blur(90px);
  }
`;

export const HeroContainer = styled.div`
  max-width: 1680px;
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3.5rem;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 24px;

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
    animation: ${pulseAnimation} 2s infinite;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.8rem, 5.5vw, 4.8rem);
  font-weight: 900;
  line-height: 1.08;
  color: ${({ theme }) => theme.text};
  margin-bottom: 14px;
  letter-spacing: -0.025em;
`;

export const HeroName = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

export const HeroRoleWrapper = styled.div`
  font-size: clamp(1.6rem, 3.2vw, 2.4rem);
  font-weight: 700;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 2.8rem;
`;

export const RolePrefix = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  margin-right: 8px;
`;

export const TypewriterText = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CursorBlink = styled.span`
  display: inline-block;
  width: 3px;
  height: 2rem;
  background: ${({ theme }) => theme.accent};
  margin-left: 6px;
  border-radius: 2px;
  animation: ${blinkCursor} 1s infinite;
`;

export const HeroDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 36px;
  max-width: 680px;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: ${({ theme }) => theme.gradient};
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(255, 87, 51, 0.35);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(255, 87, 51, 0.55);
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(12px);

  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.borderHighlight};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }
`;

export const OutlineButton = styled.a`
  ${buttonBase}
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    background: ${({ theme }) => theme.accentSoft};
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
`;

export const SocialIconButton = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.15rem;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSoft};
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-3px) scale(1.08);
    box-shadow: 0 8px 20px rgba(255, 87, 51, 0.25);
  }
`;

export const HeroStatsRow = styled.div`
  display: flex;
  gap: 2.5rem;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.border};
  width: 100%;

  @media (max-width: 960px) {
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.span`
  font-size: 1.6rem;
  font-weight: 900;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatLabel = styled.span`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.textMuted};
  font-weight: 500;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: clamp(340px, 42vw, 540px);
  height: clamp(340px, 42vw, 540px);
  border-radius: 36px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 28px;
    position: relative;
    z-index: 2;
    box-shadow: ${({ theme }) => theme.shadow};
    border: 1px solid ${({ theme }) => theme.border};
  }

  .badge-top-left {
    top: -15px;
    left: -20px;
    animation: ${floatBadge} 4s ease-in-out infinite;

    @media (max-width: 480px) {
      left: 0;
    }
  }

  .badge-bottom-right {
    bottom: -15px;
    right: -20px;
    animation: ${floatBadge} 4s ease-in-out infinite 2s;

    @media (max-width: 480px) {
      right: 0;
    }
  }
`;

export const ImageGlowRing = styled.div`
  position: absolute;
  inset: -6px;
  border-radius: 36px;
  background: conic-gradient(from 0deg, #ff5733, #ff8e53, #6366f1, #a855f7, #ff5733);
  opacity: 0.45;
  filter: blur(12px);
  animation: ${spinGlow} 12s linear infinite;
  z-index: 0;
`;

export const FloatingBadge = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);

  .badge-icon {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.accent};

    &.success {
      color: #22c55e;
    }
  }

  h4 {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  p {
    font-size: 0.72rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 0;
  }
`;
