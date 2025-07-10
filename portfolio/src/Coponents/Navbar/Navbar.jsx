import React from 'react';
import './Navbar.css';
import uia_logo from '../../assets/uia_logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="left-side">
          <img src={uia_logo} alt="UIA Logo" className="uia-logo" />
          <div className="logo">
            Oda<span>.</span>
          </div>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#Hero">Hjem</a></li>
            <li><a href="#About">Om meg</a></li>
            <li><a href="#Services">Tjenester</a></li>
            <li><a href="#MyWork">Prosjekter</a></li>
            <li><a href="#Contact">Kontakt</a></li>
          </ul>
        </nav>

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
