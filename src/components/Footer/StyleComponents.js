import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 80px 20px 36px;
  background: ${({ theme }) => theme.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.border};
  position: relative;
`;

export const FooterContainer = styled.div`
  max-width: 1680px;
  width: 95%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const FooterTopRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  margin-bottom: 50px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterBrandCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-bottom: 12px;
  display: inline-block;

  span {
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FooterTagline = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 460px;
  margin: 0;
`;

export const FooterLinksCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: 860px) {
    align-items: flex-start;
  }
`;

export const FooterNavRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 860px) {
    gap: 12px;
  }
`;

export const FooterNavLink = styled.a`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const FooterSocialRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const FooterSocialBtn = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSoft};
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.borderHighlight};
    transform: translateY(-2px);
  }
`;

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin-bottom: 24px;
`;

export const FooterBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CopyrightText = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textMuted};
  margin: 0;

  strong {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const BackToTopBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.gradient};
    color: #ffffff;
    border-color: transparent;
    transform: translateY(-2px);
  }
`;