import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiFileText } from "react-icons/fi";
import {
  Nav,
  NavContainer,
  Logo,
  LogoAccent,
  NavMenu,
  NavItem,
  NavLink,
  RightActions,
  ThemeToggleButton,
  ResumeNavButton,
  MobileMenuButton,
  MobileDrawer,
  DrawerOverlay
} from "./StyleComponents";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Robust Scroll Spy using viewport intersection
      const sections = ["home", "about", "skills", "achievements", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#home");
    setActiveSection("home");
  };

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 75;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavContainer>
          <Logo href="#home" onClick={handleLogoClick}>
            NITISH<LogoAccent>.DEV</LogoAccent>
          </Logo>

          {/* Desktop Nav Links */}
          <NavMenu>
            {menuItems.map((item) => (
              <NavItem key={item.href}>
                <NavLink
                  href={item.href}
                  $isActive={activeSection === item.href.substring(1)}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>

          {/* Right Action buttons */}
          <RightActions>
            <ResumeNavButton
              href="/Nitish_Kumar_Yadav.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FiFileText />
              <span>Resume</span>
            </ResumeNavButton>

            <ThemeToggleButton
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </ThemeToggleButton>

            <MobileMenuButton
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </MobileMenuButton>
          </RightActions>
        </NavContainer>
      </Nav>

      {/* Mobile Drawer */}
      {isOpen && <DrawerOverlay onClick={closeMenu} />}
      <MobileDrawer $isOpen={isOpen}>
        <div className="drawer-header">
          <Logo href="#home" onClick={handleLogoClick}>
            NITISH<LogoAccent>.DEV</LogoAccent>
          </Logo>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            <FiX size={24} />
          </button>
        </div>

        <ul className="drawer-menu">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.substring(1) ? "active" : ""}
                onClick={(e) => handleNavLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <ResumeNavButton
            href="/Nitish_Kumar_Yadav.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{ width: "100%", justifyContent: "center" }}
          >
            <FiFileText />
            <span>Download Resume</span>
          </ResumeNavButton>
        </div>
      </MobileDrawer>
    </>
  );
};

export default Navbar;