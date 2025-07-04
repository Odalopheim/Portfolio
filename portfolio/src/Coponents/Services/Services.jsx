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
            <h3>🌐 Webdesign</h3>
            <p>
              Jeg lager moderne, brukervennlige og responsive nettsider som passer alle skjermstørrelser.
            </p>
          </div>

          <div className="service-card">
            <h3>⚙️ Frontend-utvikling</h3>
            <p>
              Jeg bygger nettsider med HTML, CSS, JavaScript og React – med fokus på ytelse og brukeropplevelse.
            </p>
          </div>

          <div className="service-card">
            <h3>🎨 UI/UX Design</h3>
            <p>
              Jeg designer intuitive brukergrensesnitt som gjør det enkelt og behagelig å bruke nettsiden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
