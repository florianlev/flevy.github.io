import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>A propos de moi</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Actuellement finissant en DEC Informatique au CEGEP de Matane, j'ai acquis des compétences dans les domaines du développement de logiciels,
              web (back-end) , jeu vidéo (JavaScript, Unity, Unreal), conception de base de données.

              J'ai également un diplôme français en administration de réseaux et systèmes: BTS Service Informatique aux Organisations (Diplôme d'état équivalant au DEC)
              et 2 ans d'expérience dans le domaine.
              </p>

            <p>
              Mes domaines d'expertise concernent principalement le développement de logiciels, web back-end (intégration ou conception d'API) et jeux vidéo. 
              </p>
            
              J'ai une très bonne faculté d'adaptation, je souhaiterais joindre mon dynamisme à une entreprise qui
              me permettrait d'évoluer.
              <p>
              J’aime me tenir informé sûr les dernières technologies. 
              J’aime le challenge d’avoir à résoudre ou comprendre un problème qui demande beaucoup de temps. 
              Je suis multitâche et patient.
              </p> 

            <p>
            Certains de mes projets sont mis en ligne sur mon serveur VPS sous Docker.
            </p>

            <p>
            Durant mon temps libre, je suis musicien : je fais de la batterie et de la basse. 
            </p>
            <p>Vous pouvez me retrouver sur <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/">Github</a>,
             <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/florian-levy-99b851bb/"> Linkedin </a> 
             ou me contacter par Mail : <a target="_blank" rel="noopener noreferrer" href="mailto:flolevy33@gmail.com">flolevy33@gmail.com</a></p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
