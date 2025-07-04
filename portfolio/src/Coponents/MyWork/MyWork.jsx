import React from 'react';
import './MyWork.css';

const MyWork = () => {
  return (
    <section className="mywork-section" id="MyWork">
      <div className="mywork-container">
        <h2>Mine Prosjekter</h2>
        <p className="mywork-description">
          Her er noen av prosjektene jeg har jobbet med. Flere kommer!
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Prosjekt 1" />
            <h3>Prosjekt 1</h3>
            <p>En nettside laget for en lokal bedrift med fokus på enkelhet og brukervennlighet.</p>
            <a href="#" target="_blank" rel="noreferrer">Se prosjekt</a>
          </div>

          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Prosjekt 2" />
            <h3>Prosjekt 2</h3>
            <p>En portefølje for en designer laget med React og responsivt design.</p>
            <a href="#" target="_blank" rel="noreferrer">Se prosjekt</a>
          </div>

          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Prosjekt 3" />
            <h3>Prosjekt 3</h3>
            <p>Et interaktivt skjema med validering og live feedback, laget med HTML/CSS/JS.</p>
            <a href="#" target="_blank" rel="noreferrer">Se prosjekt</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;

