import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const radarPulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.85;
  }
  50% {
    transform: scale(2.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const lineGlow = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const floatAnim = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`;

const textShimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AboutSection = styled.section`
  padding: 100px 30px;
  max-width: 1680px;
  width: 95%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 70px 16px;
    width: 100%;
  }
`;

export const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: ${({ theme }) => theme.accentSoft};
  border: 1px solid ${({ theme }) => theme.borderHighlight};
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 800;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 16px;
  animation: ${floatAnim} 4s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(255, 87, 51, 0.2);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 900;
  color: ${({ theme }) => theme.text};
  margin-bottom: 12px;
  letter-spacing: -0.02em;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 680px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.92rem;
  }
`;

/* Quick Metrics / Milestone Highlight Bar */
export const MetricsBar = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricBox = styled(motion.div)`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 18px 20px;
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${({ theme }) => theme.borderHighlight};
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 87, 51, 0.2);
  }

  .metric-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: ${({ $iconBg }) => $iconBg || "rgba(255, 87, 51, 0.12)"};
    color: ${({ $iconColor }) => $iconColor || "#ff5733"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .metric-content {
    h4 {
      font-size: 1.15rem;
      font-weight: 900;
      color: ${({ theme }) => theme.text};
      margin: 0 0 2px 0;
    }
    p {
      font-size: 0.78rem;
      color: ${({ theme }) => theme.textSecondary};
      margin: 0;
      font-weight: 600;
    }
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutCard = styled(motion.div)`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 28px;
  padding: 36px;
  backdrop-filter: blur(16px);
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &:hover {
    border-color: ${({ theme }) => theme.borderHighlight};
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25), ${({ theme }) => theme.glow};
  }

  @media (max-width: 580px) {
    padding: 24px 18px;
  }
`;

export const StoryHeading = styled.h3`
  font-size: 1.55rem;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ff5733 0%, #ff8e53 50%, #6366f1 100%);
  background-size: 200% auto;
  animation: ${textShimmer} 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StoryParagraph = styled.p`
  font-size: 0.98rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 16px;
`;

export const HighlightSpan = styled.strong`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
`;

export const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const StrengthItem = styled(motion.div)`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 14px;
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.borderHighlight};
    background: ${({ theme }) => theme.surfaceHover};
  }

  .icon-wrapper {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: ${({ theme }) => theme.accentSoft};
    color: ${({ theme }) => theme.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  &:hover .icon-wrapper {
    transform: rotate(10deg) scale(1.1);
  }

  h4 {
    font-size: 0.92rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin: 0 0 2px 0;
  }

  p {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 0;
  }
`;

/* Animated Academic Background Timeline */
export const TimelineCard = styled(motion.div)`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 28px;
  padding: 36px;
  backdrop-filter: blur(16px);
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: ${({ theme }) => theme.borderHighlight};
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25), ${({ theme }) => theme.glow};
  }

  @media (max-width: 580px) {
    padding: 24px 16px;
  }
`;

export const TimelineHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  .heading-left {
    display: flex;
    align-items: center;
    gap: 10px;

    h3 {
      font-size: 1.35rem;
      font-weight: 800;
      color: ${({ theme }) => theme.text};
      margin: 0;
    }

    svg {
      color: ${({ theme }) => theme.accent};
      font-size: 1.4rem;
    }
  }

  .live-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    background: rgba(34, 197, 94, 0.12);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
      animation: ${radarPulse} 2s infinite;
    }
  }
`;

export const TimelineList = styled.div`
  position: relative;
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  /* Animated Glowing Vertical Spine */
  &::before {
    content: "";
    position: absolute;
    top: 6px;
    bottom: 10px;
    left: 7px;
    width: 3px;
    background: linear-gradient(
      180deg,
      #ff5733 0%,
      #ff8e53 35%,
      #6366f1 70%,
      rgba(255, 87, 51, 0.2) 100%
    );
    background-size: 100% 200%;
    animation: ${lineGlow} 6s ease infinite;
    border-radius: 999px;
  }
`;

export const TimelineItem = styled(motion.div)`
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 18px;
  padding: 16px 18px;
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    transform: translateX(6px) translateY(-2px);
    border-color: ${({ theme }) => theme.borderHighlight};
    box-shadow: 0 10px 25px rgba(255, 87, 51, 0.15);
    background: ${({ theme }) => theme.surfaceHover};
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

export const TimelineIcon = styled.div`
  position: absolute;
  left: -35px;
  top: 18px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ $color, theme }) => $color || theme.accent};
  box-shadow: 0 0 12px ${({ $color, theme }) => $color || theme.accent};
  border: 3px solid ${({ theme }) => theme.background};
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 1.5px solid ${({ $color, theme }) => $color || theme.accent};
    animation: ${radarPulse} 2.5s infinite;
  }
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;

  .edu-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 6px;
  }

  .edu-desc {
    font-size: 0.84rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    margin: 8px 0 0 0;
  }
`;

export const TimelineYear = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  background: ${({ theme }) => theme.accentSoft};
  border: 1px solid ${({ theme }) => theme.borderHighlight};
  border-radius: 999px;
  color: ${({ theme }) => theme.accent};
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.02em;
`;

export const TimelineTag = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  background: ${({ $bg }) => $bg || "rgba(99, 102, 241, 0.12)"};
  color: ${({ $color }) => $color || "#6366f1"};
  border: 1px solid ${({ $border }) => $border || "rgba(99, 102, 241, 0.25)"};
`;

export const TimelineTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin: 0 0 4px 0;
  line-height: 1.35;
`;

export const TimelineOrg = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.textMuted};
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;