import React from 'react';
import './Hero.css';
import profil from '../../assets/profil.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-text">
          <h1 className="hero-title">
            Hei, jeg er <span className="hero-highlight">Oda</span>
          </h1>
          <p className="hero-description">
            Jeg er en webutvikler med fokus på design, frontend og brukeropplevelse.
          </p>
          <a href="#Contact" className="hero-button">
            Kontakt meg
          </a>
        </div>

        <div className="hero-image-wrapper">
          <img src={profil} alt="Profilbilde" className="hero-image" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
