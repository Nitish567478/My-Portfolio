import styled from "styled-components";

export const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: ${({ $scrolled }) => ($scrolled ? "10px 0" : "18px 0")};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.navBg : "transparent"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.border : "transparent")};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $scrolled, theme }) => ($scrolled ? theme.shadow : "none")};
`;

export const NavContainer = styled.div`
  max-width: 1680px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Logo = styled.a`
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export const LogoAccent = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  margin: 0;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  display: inline-block;
  padding: 8px 18px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: 999px;
  color: ${({ $isActive, theme }) =>
    $isActive ? "#ffffff" : theme.textSecondary};
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.gradient : "transparent"};
  text-decoration: none;
  box-shadow: ${({ $isActive }) =>
    $isActive ? "0 4px 15px rgba(255, 87, 51, 0.4)" : "none"};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: ${({ $isActive, theme }) =>
      $isActive ? "#ffffff" : theme.text};
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.gradient : theme.surfaceHover};
    transform: translateY(-1px);
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ResumeNavButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  background: ${({ theme }) => theme.gradient};
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(255, 87, 51, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 87, 51, 0.5);
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

export const ThemeToggleButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.borderHighlight};
    color: ${({ theme }) => theme.accent};
    transform: rotate(15deg) scale(1.05);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 860px) {
    display: flex;
  }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10500;
`;

export const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: min(85vw, 340px);
  height: 100vh;
  background: ${({ theme }) => theme.backgroundAlt};
  border-left: 1px solid ${({ theme }) => theme.border};
  z-index: 11000;
  display: flex;
  flex-direction: column;
  padding: 24px;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.6);

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .close-btn {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }

  .drawer-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;

    li a {
      display: block;
      padding: 12px 18px;
      font-size: 1.05rem;
      font-weight: 600;
      color: ${({ theme }) => theme.textSecondary};
      border-radius: 12px;
      transition: all 0.2s ease;

      &.active, &:hover {
        background: ${({ theme }) => theme.surface};
        color: ${({ theme }) => theme.accent};
      }
    }
  }

  .drawer-footer {
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.border};
  }
`;