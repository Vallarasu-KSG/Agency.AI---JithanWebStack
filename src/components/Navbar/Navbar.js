import React, { useState } from "react";
import "./Navbar.css";
import { ArrowRight, Menu, X } from "lucide-react";
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToContact = () => {
    setMenuOpen(false);
    document
      .getElementById("contact-us")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon"></div>
        <a href="/">
          agency<span>.ai</span>
        </a>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>

        <li>
          <a href="#our-work" onClick={closeMenu}>
            Our Work
          </a>
        </li>

        <li>
          <a href="#contact-us" onClick={closeMenu}>
            Contact Us
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="theme-btn">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        </button>

        <button className="connect-btn" onClick={scrollToContact}>
          Connect <ArrowRight size={18} />
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;