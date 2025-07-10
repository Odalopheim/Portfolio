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
            <img src="https://via.placeholder.com/400x250" alt="Mitt GitHub Prosjekt" />
            <h3>Prosjekt i GIS</h3>
            <p>Et prosjekt hvor vi jobbet med store geografiske datasett og jobbet med å anvende dem på en god måte.</p>
            <a href="https://github.com/Odalopheim/GiS-MAppeInnlevering5" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
          </div>
    
  


           <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Mitt GitHub Prosjekt" />
            <h3>Prosjekt fra med oppgave fra kartverket</h3>
            <p>Et prosjekt hvor vi jobbet med helle prosessfasen.</p>
            <a href="https://github.com/Odalopheim/Kartverket1" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
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

