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

const certificateFiles = import.meta.glob("../../assets/certificates/*.{jpeg,jpg,png}", { eager: true, as: "url" });

const allCertificates = Object.entries(certificateFiles)
  .map(([path, url]) => {
    const fileName = path.split("/").pop();
    return {
      id: fileName,
      url,
      name: fileName,
      type: "image",
      description: "Image certificate"
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

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
