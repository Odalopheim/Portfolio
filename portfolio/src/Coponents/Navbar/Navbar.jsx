import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">Oda<span>.</span></div>
        <nav>
          <ul className="nav-links">
            <li><a href="#Hero">Hjem</a></li>
            <li><a href="#About">Om meg</a></li>
            <li><a href="#Services">Tjenester</a></li>
            <li><a href="#MyWork">Prosjekter</a></li>
            <li><a href="#Contact">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
