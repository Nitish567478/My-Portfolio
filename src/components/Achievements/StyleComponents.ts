import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 20px;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--bg),
    rgba(255,87,51,0.08)
  );
  color: var(--text);
  text-align: center;
`;

export const TopStatsSection = styled.div`
  margin-bottom: 80px;
`;

export const TotalNumber = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: #ff5733;
`;

export const TotalLabel = styled.p`
  font-size: 1.2rem;
  color: var(--text);
  opacity: 0.8;
`;

export const AchievementsHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #ff5733, #ff8e53);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AchievementCard = styled.div`
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  padding: 40px 20px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: 0.4s ease;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 20px 40px rgba(255,87,51,0.4);
    border-color: rgba(255,87,51,0.6);
  }
`;

export const AchievementNumber = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #ff5733;
  margin-bottom: 10px;
`;

export const AchievementTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
`;