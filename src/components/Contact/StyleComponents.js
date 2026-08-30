import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 100px 30px;
  max-width: 1680px;
  width: 95%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 70px 16px;
    width: 100%;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 45px;
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
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 900;
  color: ${({ theme }) => theme.text};
  margin-bottom: 12px;
  letter-spacing: -0.02em;
  word-break: break-word;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.92rem;
  }
`;

export const ContactLayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2.5rem;
  align-items: start;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const InfoCardsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const ContactCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.borderHighlight};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    gap: 12px;
  }
`;

export const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
`;

export const CardBody = styled.div`
  flex: 1;
  min-width: 0; // Essential to prevent flex child overflow!
  overflow: hidden;

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textMuted};
    margin: 0 0 2px 0;
  }

  p {
    font-size: 0.92rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 480px) {
      font-size: 0.82rem;
    }
  }
`;

export const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.surfaceHover};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderHighlight};
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 0.72rem;
  }
`;

export const SocialLinksRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 8px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px;
  border-radius: 14px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  box-sizing: border-box;
  width: 100%;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.gradient};
    color: #ffffff;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 87, 51, 0.35);
  }
`;

export const FormCardCol = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const FormCard = styled.form`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 32px 28px;
  backdrop-filter: blur(16px);
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 580px) {
    padding: 22px 16px;
    border-radius: 20px;
    gap: 14px;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const inputStyles = `
  width: 100%;
  max-width: 100%;
  padding: 13px 16px;
  border-radius: 12px;
  font-size: 0.92rem;
  font-family: inherit;
  transition: all 0.25s ease;
  box-sizing: border-box;
`;

export const FormInput = styled.input`
  ${inputStyles}
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accentSoft};
  }
`;

export const FormTextarea = styled.textarea`
  ${inputStyles}
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: ${({ theme }) => theme.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accentSoft};
  }
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.gradient};
  color: #ffffff;
  border: none;
  font-size: 0.98rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 8px 24px rgba(255, 87, 51, 0.35);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(255, 87, 51, 0.55);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const StatusAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 600;
  box-sizing: border-box;
  word-break: break-word;

  background: ${({ $status }) =>
    $status === "success"
      ? "rgba(34, 197, 94, 0.15)"
      : "rgba(239, 68, 68, 0.15)"};
  border: 1px solid
    ${({ $status }) =>
      $status === "success"
        ? "rgba(34, 197, 94, 0.4)"
        : "rgba(239, 68, 68, 0.4)"};
  color: ${({ $status }) =>
    $status === "success" ? "#22c55e" : "#ef4444"};
`;
