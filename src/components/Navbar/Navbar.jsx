import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img
        src={menu_open}
        onClick={openMenu}
        alt="open menu"
        className="nav-mob-open"
      />
      <img
        src={menu_close}
        onClick={closeMenu}
        alt="close menu"
        className="nav-mob-close"
      />
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        {[
          { name: "home", href: "#home" },
          { name: "about", href: "#about" },
          { name: "projects", href: "#work" },
          { name: "contact", href: "#contact" },
        ].map((item) => (
          <li
            key={item.name}
            className={`list-element ${menu === item.name ? "active" : ""}`}
            onClick={() => handleMenuClick(item.name)}
          >
            <AnchorLink className="anchor-link" href={item.href}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <AnchorLink className="anchor-link connect-link" href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
