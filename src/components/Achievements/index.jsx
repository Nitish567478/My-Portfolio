import React, { useEffect, useState } from "react";
//import assets from "../Certificate";



import {
  Section,
  TopStatsSection,
  TotalNumber,
  TotalLabel,
  AchievementsHeading,
  AchievementsGrid,
  AchievementCard,
  AchievementNumber,
  AchievementTitle,
  CardContain, 
  CardInner,
  CardFront,
  CardImage,
  // CardBack,
  CardHeading,
  CardDescription,
  Card,
  Button,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalHeading,
  ModalGrid,
  ModalCard,
  ModalImage,
  ModalCardTitle,
  ModalCardDescription,
  ExternalLink,
} from "./StyleComponents";

const achievementsData = [
  { title: "Problem Solver", number: 10 },
  { title: "Logic Builder", number: 30 },
  { title: "Code Challenger", number: 50 },
  { title: "Algorithm Enthusiast", number: 100 },
  { title: "Bug Buster", number: 150 },
  { title: "Coding Prodigy", number: 200 },
  { title: "Solution Master", number: 250 },
  { title: "Algorithm Expert", number: 300 },
];

const externalCertificates = [
  { id: "uiux.jpg", url: "https://i.ibb.co/q3nMZKqK/uiux.jpg", name: "uiux.jpg", type: "image", description: "Image certificate" },
  { id: "sql.png", url: "https://i.ibb.co/MDhvb4rW/sql.png", name: "sql.png", type: "image", description: "Image certificate" },
  { id: "robo.jpg", url: "https://i.ibb.co/t127d24/robo.jpg", name: "robo.jpg", type: "image", description: "Image certificate" },
  { id: "python.png", url: "https://i.ibb.co/mWB8VGv/python.png", name: "python.png", type: "image", description: "Image certificate" },
  { id: "participation.jpg", url: "https://i.ibb.co/fVDwVFmm/participation.jpg", name: "participation.jpg", type: "image", description: "Image certificate" },
  { id: "Participate-UIUX.jpg", url: "https://i.ibb.co/wFLBYww9/Participate-UIUX.jpg", name: "Participate-UIUX.jpg", type: "image", description: "Image certificate" },
  { id: "NHAI.jpg", url: "https://i.ibb.co/3mFNXMkj/NHAI.jpg", name: "NHAI.jpg", type: "image", description: "Image certificate" },
  { id: "javascript.png", url: "https://i.ibb.co/8LZ9LKx8/javascript.png", name: "javascript.png", type: "image", description: "Image certificate" },
  { id: "html.png", url: "https://i.ibb.co/0V83YY2F/html.png", name: "html.png", type: "image", description: "Image certificate" },
  { id: "git.png", url: "https://i.ibb.co/vxTyVpY3/git.png", name: "git.png", type: "image", description: "Image certificate" },
  { id: "flexbox.png", url: "https://i.ibb.co/ymB1Qrn6/flexbox.png", name: "flexbox.png", type: "image", description: "Image certificate" },
  { id: "bootstrap.png", url: "https://i.ibb.co/RTB6CrTD/bootstrap.png", name: "bootstrap.png", type: "image", description: "Image certificate" }
];

const allCertificates = externalCertificates.sort((a, b) => a.name.localeCompare(b.name));


const cardData = allCertificates.slice(0, 4);

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  let start = 0;
  const duration = 1500;
  let startTime = null;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;

    const value = Math.min((progress / duration) * target, target);
    setCount(Math.floor(value));

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [target]);

  return <>{count}+</>;
};

const Achievements = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <Section id="achievements">
      <AchievementsHeading>Achievements & Certificates</AchievementsHeading>

      <AchievementsGrid>
        {achievementsData.map((item, index) => (
          <AchievementCard key={index}>
            <AchievementNumber>
              <Counter target={item.number} />
            </AchievementNumber>
            <AchievementTitle>{item.title}</AchievementTitle>
          </AchievementCard>
        ))}
      </AchievementsGrid>

      <Card>
        {cardData.map((item, index) => (
          <CardContain key={item.id}>
            {/* Flip commented out for static display */}
            <CardInner
              flipped={false}
              // onClick={() => toggleFlip(index)}
            >
              <CardFront>
                <CardImage src={item.url} alt={item.name} />
              </CardFront>
            </CardInner>
          </CardContain>
          
        ))}
      </Card>
      <Button onClick={openModal}>My All Certificate ↗</Button>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalHeading>All Certificates</ModalHeading>
            <ModalGrid>
              {allCertificates.map((item, index) => (
                <ModalCard
                  key={item.id}
                  style={{
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  <ModalImage src={item.url} alt={item.name} />
                  <ExternalLink href={item.url} target="_blank" rel="noopener noreferrer">
                    Open Certificate ↗
                  </ExternalLink>
                </ModalCard>
              ))}
            </ModalGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Achievements;
