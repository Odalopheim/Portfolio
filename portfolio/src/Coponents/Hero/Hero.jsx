import React from 'react';
import './Hero.css';
import profil from '../../assets/profil.jpg';

const Hero = () => {
  return (
    <section id="Hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Hei, jeg er <span className="hero-highlight">Oda</span>
          </h1>

          <p className="hero-description">
            Jeg er en 22 år gammel student ved Universitetet i Agder, som går 3 året på IT og informasjonssystemer.
          </p>

          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/odalundeopheim"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/odalopheim"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button github"
            >
              GitHub
            </a>
            <a
              href="cv.pdf"
              download
              className="hero-button resume"
            >
              Last ned CV
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={profil} alt="Profilbilde" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
