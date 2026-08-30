import styled, { keyframes } from "styled-components";

const haloSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SkillsSection = styled.section`
  padding: 100px 30px;
  max-width: 1680px;
  width: 95%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: ${({ theme }) => theme.accentSoft};
  border: 1px solid ${({ theme }) => theme.borderHighlight};
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 16px;
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
  max-width: 640px;
  line-height: 1.6;
`;

export const ViewControlRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
`;

export const ViewToggleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.borderHighlight : theme.border};
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.gradient : theme.surface};
  color: ${({ $isActive, theme }) =>
    $isActive ? "#ffffff" : theme.textSecondary};
  backdrop-filter: blur(14px);
  box-shadow: ${({ $isActive, theme }) =>
    $isActive ? "0 8px 24px rgba(255, 87, 51, 0.4)" : "none"};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffffff;
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.gradient : theme.surfaceHover};
    transform: translateY(-2px);
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 24px;
  perspective: 1200px;
  margin-top: 10px;

  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
`;

export const SkillTiltWrapper = styled.div`
  transform-style: preserve-3d;
  height: 100%;
`;

export const SkillCard3D = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(16px);
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ $glowColor, theme }) => $glowColor || theme.accent};
    box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.5), 0 0 25px ${({ $glowColor }) => `${$glowColor}25`};
  }

  @media (max-width: 580px) {
    padding: 20px 14px;
  }
`;

export const CardGlowHalo = styled.div`
  position: absolute;
  inset: -1px;
  border-radius: 24px;
  background: radial-gradient(circle at 50% 0%, ${({ $color }) => `${$color}35`}, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${SkillCard3D}:hover & {
    opacity: 1;
  }
`;

export const SkillIconBox3D = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  transform: translateZ(45px);
  transition: transform 0.3s ease;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transform: translateZ(20px);
  }

  ${SkillCard3D}:hover & {
    transform: translateZ(55px) scale(1.1);
  }
`;

export const IconGlowRing = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: 22px;
  border: 1.5px dashed ${({ $color }) => $color || "#ff5733"};
  opacity: 0.4;
  animation: ${haloSpin} 10s linear infinite;
  pointer-events: none;
`;

export const SkillName3D = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 6px;
  transform: translateZ(25px);
`;

export const SkillCategoryTag3D = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.textMuted};
  font-weight: 700;
  margin-bottom: 16px;
  transform: translateZ(20px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SkillLevelBar3D = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 14px;
  transform: translateZ(15px);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
`;

export const SkillLevelFill3D = styled.div`
  height: 100%;
  width: ${({ $level }) => $level}%;
  background: ${({ $color, theme }) => $color || theme.accent};
  border-radius: 999px;
  box-shadow: 0 0 10px ${({ $color }) => $color};
`;

export const SkillFooterRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateZ(20px);
`;

export const SkillLevelPercent = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
`;

export const InspectHint = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.textMuted};
  font-weight: 600;
  transition: color 0.2s ease;

  ${SkillCard3D}:hover & {
    color: ${({ theme }) => theme.text};
  }
`;

/* 3D Hologram Skill Inspector Modal */
export const SkillModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  padding: 20px;
`;

export const SkillModalCard = styled.div`
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ $glowColor, theme }) => $glowColor || theme.borderHighlight};
  border-radius: 28px;
  max-width: 560px;
  width: 100%;
  padding: 36px;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px ${({ $glowColor }) => `${$glowColor}25`};
  animation: modalPop 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }

  @media (max-width: 480px) {
    padding: 24px 18px;
  }
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #ffffff;
  }
`;

export const ModalIconHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;

  .icon-3d-box {
    width: 64px;
    height: 64px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid ${({ theme }) => theme.borderHighlight};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  .exp-label {
    font-size: 0.82rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 2px 0 0 0;
  }
`;

export const ModalSkillName = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin: 4px 0 0 0;
`;

export const ModalCategoryBadge = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
`;

export const ModalProficiencyRow = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};

  .prof-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.88rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 8px;

    .val {
      color: ${({ theme }) => theme.accent};
    }
  }

  .prof-bar {
    width: 100%;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    overflow: hidden;
  }

  .prof-fill {
    height: 100%;
    border-radius: 999px;
  }
`;

export const ModalSectionTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin: 18px 0 10px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.accent};
  }
`;

export const ModalConceptList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    color: ${({ theme }) => theme.textSecondary};

    .check-icon {
      flex-shrink: 0;
    }
  }
`;

export const ModalProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};

    .proj-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }
`;