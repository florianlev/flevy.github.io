import React from 'react';
//import HideText from '@components/HideText';

export default [
  {
  name: 'Fermeture des bars',
  
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Fermeture des bars
      </div>
      <div className='portfolio-item__desc'>
        Jeu sur Android solo multijoueur. Projet réaliser dans le cadre du cours Programmation Mobile au CEGEP De Matane 
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
      <div className='portfolio-item__desc'>
        Reproduction du jeu Paper.IO. Jeu multijoueur pouvant se jouer jusqu'à 10 joueurs. Projet réaliser dans le cadre du cours Jeu multijoueur au CEGEP De Matane.        
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
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/programmation-mobile-projet-phonegap-fermeture-des-bars-2019"><i className="fab fa-github"></i></a>
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
        Marina Connect
      </div>
      <div className='portfolio-item__desc'>
        Application communautaire permettant de découvrir les animaux marins de la région de Matane.
        Plus de détails dans la page GitHub
        Projet réaliser dans le cadre du cours Projet base de données au CEGEP De Matane.
      </div>
      <div className='portfolio-item__icon'>
      <div>Technologies : </div>
        <i className="fab fa-android"></i>
        <i className="fab fa-php"></i>

      </div>
      <div className='portfolio-item__desc'>
      JAVA,, WikiMedia, MySQL, PostgreSQL, Android Studio
      </div>
      <div className='portfolio-item__links'>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/projet-bd-2018-marina-totale-decouverteFaune"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}, {
  name: 'npm-module-boilerplate',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        NPM Module Boilerplate
      </div>
      <div className='portfolio-item__desc'>
         Boilerplate plate code to create and publish an NPM package
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://dev.to/flexdinesh/publish-your-own-npm-package---5b71">Blog</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/flexdinesh/npm-module-boilerplate">More</a>
      </div>
    </div>
  )
}, {
  name: 'axios-retry-interceptor',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Axios Retry Interceptor
      </div>
      <div className='portfolio-item__desc'>
        Configurable Axios Interceptor to retry failed http calls.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/flexdinesh/axios-retry-interceptor">More</a>
      </div>
    </div>
  )
}, {
  name: 'browser-or-node',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Browser or Node
      </div>
      <div className='portfolio-item__desc'>
        Javascript library to check the runtime JS env
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/browser-or-node">NPM</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/flexdinesh/browser-or-node">More</a>
      </div>
    </div>
  )
}]