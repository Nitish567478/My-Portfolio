import React, { useEffect, useState } from "react";
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

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}+</>;
};

const Achievements = () => {
  return (
    <Section id="achievements">

      {/* <TopStatsSection>
        <TotalNumber>
          <Counter target={300} />
        </TotalNumber>
        <TotalLabel>Total Problems Solved</TotalLabel>
      </TopStatsSection> */}

      <AchievementsHeading>Coding Achievements</AchievementsHeading>

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

    </Section>
  );
};

export default Achievements;