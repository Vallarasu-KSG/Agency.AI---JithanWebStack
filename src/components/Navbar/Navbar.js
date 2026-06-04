import React, { useState } from "react";
import "./Navbar.css";
import { ArrowRight, Menu, X } from "lucide-react";
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon"></div>
        <h2>
          agency<span>.ai</span>
        </h2>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#our-work">Our Work</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="theme-btn">
          <ThemeToggleBtn
            theme={theme}
            setTheme={setTheme}
          />
        </button>

        <button className="connect-btn">
          Connect
          <ArrowRight size={18} />
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