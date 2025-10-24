import React from 'react';
import './MyWork.css';

const MyWork = () => {
  return (
    <section className="mywork-section" id="MyWork">
      <div className="mywork-container">
        <h2>Mine Prosjekter</h2>
        <p className="mywork-description">
          Her er noen av prosjektene jeg har jobbet med.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Prosjekt i GIS</h3>
            <p>Et prosjekt hvor vi jobbet med store geografiske datasett og jobbet med å anvende dem på en god måte.</p>
            <a href="https://github.com/Odalopheim/GiS-MAppeInnlevering5" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
          </div>
    
  


           <div className="project-card">
            <h3>Prosjekt med oppgave fra kartverket</h3>
            <p>Et prosjekt hvor vi jobbet med hele prosessfasen. Der vi laget et produkt for Kartverket hvor brukere kunne melde av feil i kartet.</p>
            <a href="https://github.com/Odalopheim/Kartverket1" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Database oppgave</h3>
            <p>En oppgave hvor vi jobbet med databaser og SQL-spørringer.</p>
            <a href="https://github.com/simholmen/IS309-assignment2" target="_blank" rel="noreferrer">
                Se på GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyWork;

