import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const staggerIn = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const Nav = styled.nav`
  width: 100%;
  background: var(--bg);
  color: var(--text);
  backdrop-filter: blur(25px);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.accentSoft};
  transition: all 0.4s ease;
  animation: ${slideDown} 0.8s ease-out;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const NavContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 20px;
`;

export const Logo = styled.div`
  color: #ffffff;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  padding: 12px 20px;
  background: linear-gradient(135deg, #ff5733, #ff8e53, #ffa726);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: 2px solid rgba(255, 87, 51, 0.4);
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 87, 51, 0.15);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.1) rotate(2deg);
    border-color: #ff5733;
    text-shadow: 0 0 25px rgba(255, 87, 51, 0.6);
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 10px 16px;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(13, 13, 13, 0.98);
    backdrop-filter: blur(30px);
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 2rem 0;
    border-top: 2px solid rgba(255, 87, 51, 0.4);
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    max-height: calc(100vh - 70px);
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #111827;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #60a5fa, #a78bfa, #fb7185);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #3b82f6, #8b5cf6, #f43f5e);
    }

    ${(props) =>
      props.$isOpen
        ? `
      display: flex;
      transform: translateY(0);
      opacity: 1;
    `
        : `
      display: none;
    `}
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 3rem 1rem;
  }
`;


export const NavItem = styled.li`
  opacity: 0;
  transform: translateX(20px);
  animation: ${staggerIn} 0.6s forwards;
  
  @media (max-width: 768px) {
    animation-delay: ${({ $index }) => $index * 0.1}s;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.95) !important;
  text-decoration: none !important;
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 25px;
  transition: color 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  letter-spacing: 0.5px;
  display: block;
  backdrop-filter: blur(15px);

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff5733, #ff8e53);
    border-radius: 2px;
    transition: width 0.4s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #ffffff !important;
  }

  &:hover::before {
    width: 85%;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 1.4rem 2.5rem;
    width: 85%;
    max-width: 350px;
    margin: 0 auto 0.5rem;
    border-radius: 20px;
  }
`;


export const ToggleButton = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ToggleLine = styled.span`
  width: 28px;
  height: 3px;
  background: linear-gradient(90deg, #ff5733, #ff8e53);
  border-radius: 3px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
  box-shadow: 0 2px 8px rgba(255, 87, 51, 0.4);

  /* Line 1 */
  &:nth-child(1) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(45deg) translate(6px, 6px)" : "none"};
  }

  /* Line 2 */
  &:nth-child(2) {
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
    transform: ${(props) => (props.$isOpen ? "scale(0)" : "none")};
  }

  /* Line 3 */
  &:nth-child(3) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(-45deg) translate(7px, -7px)" : "none"};
  }
`;

export const ThemeToggle = styled.button`
  width: 70px;
  height: 34px;
  background: ${({ darkMode }) =>
    darkMode ? "#a04848" : "#0d0d0d"};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  padding: 0;
  outline: none;

  display: flex;
  align-items: center;

  &::before {
    content: "${({ darkMode }) => (darkMode ? "" : "")}";
    position: absolute;
    left: 10px;
    font-size: 10px;
    font-weight: 700;
    color: white;
    letter-spacing: 1px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: ${({ darkMode }) => (darkMode ? "38px" : "4px")};
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &:active {
    transform: scale(0.95);
  }
`;


export const lightTheme = {
  background: "#ffffff",
  text: "#111111",
  navBg: "rgba(255,255,255,0.95)",
  accent: "#ff5733",
  accentSoft: "rgba(255,87,51,0.3)",
  gradient: "linear-gradient(135deg, #ff5733, #ff8e53, #ffa726)",
  shadow: "0 4px 20px rgba(0,0,0,0.1)"
};

export const darkTheme = {
  background: "#0d0d0d",
  text: "#ffffff",
  navBg: "rgba(13,13,13,0.95)",
  accent: "#ff5733",
  accentSoft: "rgba(255,87,51,0.3)",
  gradient: "linear-gradient(135deg, #ff5733, #ff8e53, #ffa726)",
  shadow: "0 4px 20px rgba(0,0,0,0.3)"
};