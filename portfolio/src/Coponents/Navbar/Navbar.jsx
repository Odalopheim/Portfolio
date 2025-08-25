import React, { useState } from 'react';
import './Navbar.css';
import uia_logo from '../../assets/uia_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Venstre side med logo */}
        <div className="left-side">
          <img src={uia_logo} alt="UIA Logo" className="uia-logo" />
          <div className="logo">
            Oda<span>.</span>
          </div>
        </div>

        {/* Hamburger meny knapp */}
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigasjon */}
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#Hero" onClick={() => setIsOpen(false)}>Hjem</a></li>
            <li><a href="#About" onClick={() => setIsOpen(false)}>Om meg</a></li>
            <li><a href="#Services" onClick={() => setIsOpen(false)}>Tjenester</a></li>
            <li><a href="#MyWork" onClick={() => setIsOpen(false)}>Prosjekter</a></li>
            <li><a href="#Contact" onClick={() => setIsOpen(false)}>Kontakt</a></li>
          </ul>
        </nav>

        {/* LinkedIn knapp */}
        <a
          href="https://www.linkedin.com/in/odalundeopheim"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Navbar;
