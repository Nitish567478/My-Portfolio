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
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;

  background: linear-gradient(135deg, #ff5733, #ff8e53);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 4px 8px rgba(255,87,51,0.4);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    width: 80%;
    height: 4px;
    background: #ff5733;
    border-radius: 2px;
  }
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

export const CardContain = styled.div`
  perspective: 1000px;
  width: 330px;
  height: 300px;
  margin: 20px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  
  ${(props) => props.flipped && `
    transform: rotateY(180deg);
  `}
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(225, 218, 218, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 20px 40px rgba(255,87,51,0.4);
    border-color: rgba(255,87,51,0.6);
  }
`;

// export const CardBack = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   transform: rotateY(180deg);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 30px;
//   box-sizing: border-box;
//   background: #ff5733;
//   backdrop-filter: blur(12px);
//   border-radius: 20px;
//   border: 1px solid rgba(255,87,51,0.3);
//   box-shadow: 0 8px 32px rgba(255,87,51,0.2);
// `;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const CardHeading = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 12px 0;
  color: #fff;
  font-weight: 700;
`;

export const CardDescription = styled.p`
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.6;
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
`;

export const Button = styled.button`
  margin-top: 40px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #ff5733, #ff8e53);
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(255, 87, 51, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(255, 87, 51, 0.45);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: min(95%, 960px);
  max-height: 90vh;
  overflow-y: auto;
  background: rgba(16, 16, 16, 0.95);
  border-radius: 16px;
  padding: 28px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: #ff5733;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ModalHeading = styled.h3`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 18px;
  text-align: center;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
  margin-bottom: 18px;
`;

export const ModalCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 14px;
  padding: 8px;
  text-align: center;
  min-height: 220px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalSelectedImage = styled.img`
  width: 100%;
  max-height: 360px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const ModalCardTitle = styled.h4`
  font-size: 1.05rem;
  color: #fff;
  margin: 8px 0 4px;
`;

export const ModalCardDescription = styled.p`
  font-size: 0.95rem;
  color: #ddd;
`;

export const ExternalLink = styled.a`
  display: inline-block;
  margin: 12px auto 0;
  padding: 10px 18px;
  background: linear-gradient(135deg, #ff5733, #ff8e53);
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;
