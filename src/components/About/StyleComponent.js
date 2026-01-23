import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 80px 20px;
  background: #0b0f19;
  color: #ffffff;
`;

export const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 15px;

  strong {
    color: #ffffff;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const EducationList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;

  /* Center line */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-50%);
  }

  /* Mobile view */
  @media (max-width: 768px) {
    &::before {
      left: 15px;
    }
  }
`;

export const EducationItem = styled.div`
  position: relative;
  width: 50%;
  padding: 18px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);

  /* Dot on line */
  &::before {
    content: "";
    position: absolute;
    top: 22px;
    width: 14px;
    height: 14px;
    background: #38bdf8;
    border-radius: 50%;
    border: 3px solid #0b0f19;
  }

  /* Left side item */
  &.left {
    align-self: flex-start;
    text-align: right;
    padding-right: 40px;

    &::before {
      right: -7px;
    }
  }

  /* Right side item */
  &.right {
    align-self: flex-end;
    text-align: left;
    padding-left: 40px;

    &::before {
      left: -7px;
    }
  }

  /* Mobile: all items left */
  @media (max-width: 768px) {
    width: 100%;
    align-self: flex-start;
    text-align: left;
    padding-left: 45px;
    padding-right: 20px;

    &::before {
      left: 8px;
      right: auto;
    }

    &.left,
    &.right {
      text-align: left;
    }
  }
`;

export const EduTitle = styled.h4`
  font-size: 1.05rem;
  margin: 0;
  color: #ffffff;
`;

export const EduText = styled.p`
  margin: 6px 0 0;
  font-size: 0.95rem;
  color: #cbd5e1;
`;

export const EduYear = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: 0.85rem;
  color: #94a3b8;
`;
