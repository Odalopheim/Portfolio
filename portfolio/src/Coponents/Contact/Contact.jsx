import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-container">
        <h2>Kontakt meg</h2>
        <p>Ta gjerne kontakt hvis du vil samarbeide eller bare si hei!</p>

        <div className="contact-info">
          <div className="contact-item">
            <strong>📞 Telefon:</strong> <a href="tel:+4799999999">+47 475 23 578</a>
          </div>
          <div className="contact-item">
            <strong>📧 E-post:</strong> <a href="mailto:oda@example.com">odalo124@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>💼 LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/odalundeopheim"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/odalundeopheim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
