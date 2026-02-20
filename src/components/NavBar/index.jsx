import React, { useState, useEffect } from "react";
import {
  Nav,
  NavContainer,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  ToggleButton,
  ToggleLine,
} from "./StyleComponents";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo onClick={closeMenu}>NITISH</Logo>

        <ToggleButton onClick={toggleMenu} $isOpen={isOpen}>
          <ToggleLine $isOpen={isOpen} />
          <ToggleLine $isOpen={isOpen} />
          <ToggleLine $isOpen={isOpen} />
        </ToggleButton>

        <NavMenu $isOpen={isOpen}>
          {menuItems.map((item, index) => (
            <NavItem 
              key={item.href} 
              $isOpen={isOpen} 
              $index={index}
              onClick={closeMenu}
            >
              <NavLink href={item.href}>{item.label}</NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};
 
export default Navbar;
