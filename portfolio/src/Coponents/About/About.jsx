import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="about-container">
        <h2>Om meg</h2>
        <p>
          Jeg er en frontend- og backend-utvikler som liker å designe og utvikle moderne nettsider.
        </p>
         <div className='about-stats'>
             <img src="https://github-readme-stats.vercel.app/api?username=Odalopheim&show_icons=true&title_color=#4dffb3&text_color=#4dffb3&icon_color=#4dffb3" alt="" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Odalopheim&layout=compact" alt="" />
            <img src="https://nirzak-streak-stats.vercel.app/?user=Odalopheim&theme=green" alt="" />
          </div>
      </div>
    </section>
  );
};

export default About;
