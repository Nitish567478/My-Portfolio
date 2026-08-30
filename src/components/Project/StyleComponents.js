import styled from "styled-components";

export const ProjectsSection = styled.section`
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

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
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
  max-width: 650px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.92rem;
  }
`;

export const ProjectActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.25s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "primary":
        return `
          background: ${theme.gradient};
          color: #ffffff;
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(255, 87, 51, 0.4);
          }
        `;
      case "secondary":
        return `
          background: ${theme.surfaceHover};
          color: ${theme.text};
          border-color: ${theme.border};
          &:hover {
            border-color: ${theme.borderHighlight};
            color: ${theme.accent};
            transform: translateY(-2px);
          }
        `;
      case "accent":
        return `
          background: ${theme.accentSoft};
          color: ${theme.accent};
          border-color: ${theme.borderHighlight};
          &:hover {
            background: ${theme.accent};
            color: #ffffff;
            transform: translateY(-2px);
          }
        `;
      default:
        return "";
    }
  }}
`;

export const SeeAllSection = styled.div`
  margin-top: 45px;
  text-align: center;
`;

export const AllProjectsBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1.5px solid ${({ theme }) => theme.borderHighlight};
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.gradient};
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(255, 87, 51, 0.4);
  }
`;

/* Case Study Modal */
export const CaseStudyModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  padding: 20px;
`;

export const CaseStudyModalContent = styled.div`
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.borderHighlight};
  border-radius: 28px;
  max-width: 780px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 36px;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 87, 51, 0.25);
  animation: modalScale 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes modalScale {
    from { opacity: 0; transform: scale(0.94); }
    to { opacity: 1; transform: scale(1); }
  }

  @media (max-width: 580px) {
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

export const ModalTitleRow = styled.div`
  margin-bottom: 20px;
  padding-right: 40px;

  h2 {
    font-size: 1.6rem;
    font-weight: 900;
    color: ${({ theme }) => theme.text};
    margin: 0 0 6px 0;
  }

  .subtitle {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.textSecondary};
    margin: 0;
  }
`;

export const ModalHeaderDetails = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 14px 18px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  margin-bottom: 24px;

  .detail-item {
    font-size: 0.85rem;
    display: flex;
    gap: 6px;

    .label {
      font-weight: 700;
      color: ${({ theme }) => theme.accent};
    }
    .val {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const ModalBodySection = styled.div`
  h4 {
    font-size: 1.05rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    margin: 18px 0 8px 0;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    font-size: 0.92rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 14px;
  }
`;

export const ArchitectureFlowBox = styled.div`
  background: rgba(0, 0, 0, 0.45);
  border: 1px dashed ${({ theme }) => theme.borderHighlight};
  padding: 14px 18px;
  border-radius: 12px;
  margin: 12px 0 18px 0;

  code {
    font-size: 0.85rem;
    color: #ff8e53;
    line-height: 1.5;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 18px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};

    .check-icon {
      color: #22c55e;
      margin-top: 3px;
      flex-shrink: 0;
    }
  }
`;

export const ModalCTAFooter = styled.div`
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;