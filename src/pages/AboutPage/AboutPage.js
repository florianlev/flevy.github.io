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

              Je suis un développeur logiciel et web "back-end"
              J'ai une très bonne faculté d'adaptation, je souhaiterai joindre mon dynamisme à une entreprise qui
              me permettrait d'évoluer. 
              J’aime me tenir informé concernant les dernières technologies. 
              J’aime le challenge d’avoir à régler ou comprendre un problème qui demande beaucoup de temps. 
              Je suis multitâche, très patient et méticuleux dans mon travail.
              </p> 
              <p>
              Ayant eu une expérience en tant qu' Administrateur réseau et ma récente formation en programmation au CEGEP De Matane
              je me sens largement plus polyvalent et multitâches. 
              </p>  
              <p>
              J'ai un réel intérêt pour la programmation back-end dont mes compétences se résument : 
              <ul>
                <li> - Programmation Web : </li><ul>
                 <li> - PHP</li> 
                 <li> - HTML 5 / CSS</li>
                 <li> - JAVASCRIPT </li>
                 <li> - NODE.JS </li>
                 </ul>
                 <li> Programmation logiciel : </li>
                 
              </ul>

    
     : PHP - HTML 5 / CSS , JAVASCRIPT - NODE.JS
              logiciel, de jeux vidéo, l'univers Linux, concevoir des bases de données SQL, des applications back end :
              PHP - HTML 5 / CSS - JAVA (Spring, hibernate)- C# - JAVASCRIPT - NODE.JS  - Unity - Docker.
              Je suis également familier avec les design pattern et les architectures MVC, MVVM.
            </p>  
            <p>
            Certains de mes projets sont mit en ligne sur mon serveur VPS sous Docker.
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
