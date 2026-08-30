import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 30px;
  max-width: 1680px;
  width: 95%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
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

export const StatsBannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatMilestoneCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 28px 20px;
  text-align: center;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.borderHighlight};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .desc {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 4px 0 0 0;
  }
`;

export const MilestoneNum = styled.h3`
  font-size: 2.2rem;
  font-weight: 900;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
`;

export const MilestoneLabel = styled.p`
  font-size: 0.92rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

export const GoogleAmbassadorCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1.5px solid rgba(66, 133, 244, 0.4);
  border-radius: 28px;
  padding: 36px 40px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2.5rem;
  align-items: center;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px -10px rgba(66, 133, 244, 0.25), 0 0 30px rgba(234, 67, 53, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4285f4 0%, #ea4335 33%, #fbbc05 66%, #34a853 100%);
  }

  &:hover {
    border-color: rgba(66, 133, 244, 0.8);
    transform: translateY(-4px);
    box-shadow: 0 25px 60px -10px rgba(66, 133, 244, 0.35);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 28px 20px;
    gap: 1.5rem;
  }
`;

export const GoogleBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

export const GooglePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 800;
  background: rgba(66, 133, 244, 0.15);
  border: 1px solid rgba(66, 133, 244, 0.4);
  color: #4285f4;
`;

export const SwagPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 800;
  background: rgba(52, 168, 83, 0.15);
  border: 1px solid rgba(52, 168, 83, 0.4);
  color: #34a853;
`;

export const GoogleTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  line-height: 1.2;

  .google-g { color: #4285f4; }
  .google-o1 { color: #ea4335; }
  .google-o2 { color: #fbbc05; }
  .google-g2 { color: #4285f4; }
  .google-l { color: #34a853; }
  .google-e { color: #ea4335; }
`;

export const GoogleDesc = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 18px;
`;

export const GoogleSwagList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SwagItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.84rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  padding: 8px 12px;
  background: ${({ theme }) => theme.surfaceHover};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};

  svg {
    color: #fbbc05;
    flex-shrink: 0;
  }
`;

export const GoogleVisualBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  background: rgba(66, 133, 244, 0.06);
  border: 1px dashed rgba(66, 133, 244, 0.3);
  border-radius: 20px;

  .google-icon-large {
    font-size: 3.2rem;
    margin-bottom: 12px;
    filter: drop-shadow(0 0 16px rgba(66, 133, 244, 0.5));
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    margin: 0 0 4px 0;
  }

  p {
    font-size: 0.82rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 0;
  }
`;

export const HackathonOrganizerCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1.5px solid rgba(255, 87, 51, 0.4);
  border-radius: 28px;
  padding: 36px 40px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2.5rem;
  align-items: center;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px -10px rgba(255, 87, 51, 0.25), 0 0 30px rgba(99, 102, 241, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff5733 0%, #ff8e53 50%, #6366f1 100%);
  }

  &:hover {
    border-color: rgba(255, 87, 51, 0.8);
    transform: translateY(-4px);
    box-shadow: 0 25px 60px -10px rgba(255, 87, 51, 0.35);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 28px 20px;
    gap: 1.5rem;
  }
`;

export const HackathonVisualBox = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  border: 1.5px solid rgba(255, 87, 51, 0.4);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 87, 51, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .image-overlay-badge {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 8px 14px;
    border-radius: 12px;
    background: rgba(8, 9, 13, 0.88);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 0.88rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0;
    }

    p {
      font-size: 0.74rem;
      color: #ff8e53;
      margin: 0;
      font-weight: 700;
    }
  }

  @media (max-width: 900px) {
    height: 220px;
  }
`;

export const CertificatesHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CertificatesHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`;

export const ViewAllBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 700;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.borderHighlight};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.gradient};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

export const CertificateCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const CertCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${({ theme }) => theme.borderHighlight};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

export const CertImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${CertCard}:hover img {
    transform: scale(1.06);
  }
`;

export const CertOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.3s ease;

  span {
    font-size: 0.8rem;
    font-weight: 600;
  }

  ${CertCard}:hover & {
    opacity: 1;
  }
`;

export const CertInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .issuer {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 0;
  }
`;

export const CertTag = styled.span`
  align-self: flex-start;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  margin-bottom: 4px;
`;

export const CertTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1.4;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 20px;
`;

export const ModalCardWrapper = styled.div`
  background: ${({ theme }) => theme.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  max-width: 1080px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  h3 {
    font-size: 1.35rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 2px 0 0 0;
  }
`;

export const ModalCloseButton = styled.button`
  width: 38px;
  height: 38px;
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

export const ModalGrid = styled.div`
  padding: 24px 30px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ModalCertCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalCertImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export const ModalCertFooter = styled.div`
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .badge {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 2px 6px;
    background: ${({ theme }) => theme.accentSoft};
    color: ${({ theme }) => theme.accent};
    border-radius: 4px;
    margin-bottom: 4px;
  }

  h4 {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 2px 0 0 0;
  }

  .open-link {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: ${({ theme }) => theme.accentSoft};
    color: ${({ theme }) => theme.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.accent};
      color: #ffffff;
    }
  }
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  padding: 20px;
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 70vh;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .lightbox-caption {
    margin-top: 18px;
    text-align: center;

    h4 {
      font-size: 1.15rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 0.88rem;
      color: #94a3b8;
      margin: 0 0 12px 0;
    }
  }

  .full-view-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    background: linear-gradient(135deg, #ff5733, #ff8e53);
    color: #ffffff;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: -45px;
  right: 0;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #ff5733;
  }
`;
