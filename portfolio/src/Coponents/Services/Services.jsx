import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section" id="Services">
      <div className="services-container">
        <h2>Tjenester</h2>
        <p className="services-intro">Dette kan jeg hjelpe deg med:</p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Koding</h3>
            <p>
              Jeg har utviklet flere prosjekter med HTML, CSS, JavaScript og C#. Jeg kan hjelpe deg med å bygge moderne og responsive nettsider.
            </p>
          </div>

          <div className="service-card">
            <h3>Frontend-utvikling</h3>
            <p>
              Jeg har bygget nettsider med HTML, CSS, JavaScript, C# og React – med fokus på ytelse og brukeropplevelse.
            </p>
          </div>

          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Jeg designer nettsider som setter brukeropplevelse i fokus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
