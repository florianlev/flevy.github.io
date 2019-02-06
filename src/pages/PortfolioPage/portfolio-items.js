import React from 'react';
//import HideText from '@components/HideText';

export default [
  {
  name: 'Keep the Wolf from the Door',

  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      "Keep the Wolf from the Door"
      </div>
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}>
      Ce projet à été conçu sur une période de 48h lors d'une compétition de création de jeu vidéo intercollégial à Valleyfield avec une équipe multidisciplinaire du cégep de Matane.
      </div>

      <div className='portfolio-item__desc'>
        Unity 3D
      </div>

      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/Keep-the-Wolf-from-the-Door"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/ugDJAtHcDXY"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
    
  )
}, {
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      "Fermeture des bars"
      </div>
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}>
        Jeu sur Android solo multijoueur. Projet réalisé dans le cadre du cours Programmation Mobile au CEGEP De Matane. Plus de détails dans la page GitHub ci dessous.
      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>
        <i className="fab fa-node"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
      </div>

      <div className='portfolio-item__desc'>
      Librairies :  CreateJS, HammerJS, NodeJS, Socket.io, HowlerJS, PhoneGap
      </div>

      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/programmation-mobile-projet-phonegap-fermeture-des-bars-2019"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer"><i className="fab fa-google-play"  style={{color: 'red'}}></i></a>
      </div>
    </div>
    
  )
}, {
  name: 'paper-io',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Reproduction du jeu Paper.IO
      </div>
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
        Reproduction du jeu Paper.IO. Jeu multijoueur pouvant se jouer jusqu'à 10 joueurs. Projet réalisé dans le cadre du cours Jeu multijoueur au CEGEP De Matane.         Plus de détails dans la page GitHub ci dessous.
       
      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>
        <i className="fab fa-node"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
      </div>
      <div className='portfolio-item__desc' >
      Librairies : SVG.js, Socket.io, TweenJS(CreateJS)
      </div>
      <div className='portfolio-item__links'>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/projet-multijoueur-nodejs-2018-florianlev"><i className="fab fa-github"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="http://paper-io.com/">Reference</a>
      </div>
    </div>
  )
}, {
  //style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}

  name: 'Application Android Decouverte Faune',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        "Marina Connect"
      </div>
      <div className='portfolio-item__desc'>
        Application communautaire permettant de découvrir les animaux marins de la région de Matane.
        Projet réalisé dans le cadre du cours Projet base de données au CEGEP De Matane.
        Plus de détails dans la page GitHub ci dessous.
      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>
        <i className="fab fa-android"></i>
        <i className="fab fa-php"></i>

      </div>
      <div className='portfolio-item__desc'>
      JAVA, WikiMedia, MySQL, PostgreSQL, Android Studio
      </div>
      <div className='portfolio-item__links'>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/projet-bd-2018-marina-totale-decouverteFaune"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}, {
  name: 'Find-it',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        "Find-IT"
      </div>
      <div className='portfolio-item__desc'>
      Reprise du concept du jeu Géocatching existant sur Android et Iphone Application Android permettant de découvrir les lieux de sa région.
      Réalisé dans le cadre du cours Programmation Mobile au CEGEP De Matane.
      Plus de détails dans la page GitHub ci dessous.

      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>

        <i className="fab fa-android"></i>
        <i className="fab fa-php"></i>
      </div>
      <div className='portfolio-item__desc'>
      JAVA, MySQL, Android Studio, XML
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/programmation-mobile-2018-projet-java-find-it"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=AvuVy9JRl9Y&feature=youtu.be"><i className="fab fa-youtube"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.geocaching.com/play">Reference</a>

      </div>
    </div>
  )
}, {
  name: 'Application traitant données de méteorites de la NASA',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Application traitant données de méteorites de la NASA      
      </div>
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
      Application traitant les données de méteorites et de seisme provenant d'un fichier XML de la NASA
      Réalisé dans le cadre du cours Structure de données au CEGEP de Matane.
      Plus de détails dans la page GitHub ci dessous.
      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>
      </div>
      <div className='portfolio-item__desc'>
      JAVA, Spring, XML, JavaFX
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/projet-ioc-2018-florianlev"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}, {
  name: 'Jeu GameJam',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Jeu GameJam Rimouski (Québec)
      </div>
      <div className='portfolio-item__desc'>
      Réalisation d'un jeu 3D lors d'une GameJam a Rimouski (Québéc) 
      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>
      </div>
      <div className='portfolio-item__desc'>
      Unity 3D, C#
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/2000dollars"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}, {
  name: 'Sudoku',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        SUDOKU
      </div>
      <div className='portfolio-item__desc'>
      Premier projet d'un SUDOKU en C#
      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>
      </div>
      <div className='portfolio-item__desc'>
      C#
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/u3mr1_ZFM7k"><i className="fab fa-youtube"></i></a>

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/SUDOKU_C-"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}]