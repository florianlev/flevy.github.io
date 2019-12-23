import React from 'react';
import Popup from "reactjs-popup";
//import HideText from '@components/HideText';

export default [
    {
  name: 'Tom Sawyer',

  render: (
    <div className='portfolio-item'>

        <Popup  trigger={<div >
            <div className='portfolio-item__title'>
                Tom Sawyer
            </div>
        <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
        Jeu mobile Android / IOS sur Tom Sawyer réalisé avec une petite équipe dans le cadre d'un emploi chez Cube Noir (Groupe PVP).
        Jeu promotionnant la nouvelle télé série sur Tom Sawyer produit par le Groupe PVP diffusé sur Radio-Canada.
        </div>
        <div className='portfolio-item__icon'>

        <div>Technologies : </div>
        </div>

      <div className='portfolio-item__desc'>
      Unity 3D, C#, PHP, Symfony, MYSQL
      </div>


        <div className='portfolio-item__desc'>
        Jeu disponible sur les stores
     </div>
     <div className='portfolio-item__links'>
         <a target="_blank" rel="noopener noreferrer" style={{color: 'red'}} href="https://play.google.com/store/apps/details?id=com.pvp.TomSawyer"><i className="fab fa-google-play" ></i></a>
        <a target="_blank" rel="noopener noreferrer"   style={{color: 'red'}} href="https://apps.apple.com/ca/app/la-patrouille-de-tom/id1473630660?l=fr&ls=1"><i className="fab fa-app-store-ios"></i></a>
      </div>

        <div className='portfolio-item__desc'>
        Cliquez ici pour plus de details
        </div>

       </div>} modal  position = "center">

<div className='title'>

    Tom Sawyer
</div>
<div className='desc'>
    <div className='icon'>Contribution : </div>
    <ul style={{marginLeft: "-10px", paddingLeft: "10px"}}>
        <li>Développement d'un jeu mobile IOS / Android</li>
        <li>Programmation du gameplay</li>
        <li>Programmation outils de gamedesign / missions</li>
        <li>Intégration IAP dans le jeu (Monetisation IOS / Android)</li>
        <li>Gestion de la publication sur les stores IOS/ Android</li>
        <li>Programmation système UI / Popup</li>
        <li>Programmation d''API en PHP Symfony</li>
        <li>Intégrations d'assets / Animations</li>
        <li>Intégration de la Localisation pour plusieurs langues</li>
        <li>Programmation de personnalisation de personnages</li>
        <li>Programmation de système de sauvegarde du jeu (JSON)</li>
        <li>Développement agile (SCRUM)</li>
        </ul>
</div>


     <div className='portfolio-item__links'>
         <a target="_blank" rel="noopener noreferrer" style={{color: 'red'}} href="https://play.google.com/store/apps/details?id=com.pvp.TomSawyer"><i className="fab fa-google-play" ></i></a>
        <a target="_blank" rel="noopener noreferrer"   style={{color: 'red'}} href="https://apps.apple.com/ca/app/la-patrouille-de-tom/id1473630660?l=fr&ls=1"><i className="fab fa-app-store-ios"></i></a>
      </div>


          </Popup>

    </div>

  )
},
  {
  name: 'Keep the Wolf from the Door',

  render: (
    <div className='portfolio-item'>

        <Popup  trigger={<div >
            <div className='portfolio-item__title'>
                "Keep the Wolf from the Door"
            </div>
        <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
            Ce projet à été conçu sur une période de 48h lors d'une compétition de création de jeu vidéo intercollégial à Valleyfield avec une équipe multidisciplinaire du cégep de Matane.
        </div>

        <div className='portfolio-item__links'>
         <a target="_blank" rel="noopener noreferrer" href="https://github.com/florianlev/Keep-the-Wolf-from-the-Door"><i className="fab fa-github" ></i></a>
        <a target="_blank" rel="noopener noreferrer"  href="https://youtu.be/ugDJAtHcDXY"><i className="fab fa-youtube"></i></a>
      </div>

        <div className='portfolio-item__desc'>
        Cliquez ici pour plus de details
        </div>
       </div>} modal  position = "center">

<div className='title'>

    "Keep the Wolf from the Door"
</div>
<div className='desc'>
    Ce projet à été conçu sur une période de 48h lors d'une compétition de création de jeu vidéo intercollégial à Valleyfield avec une équipe multidisciplinaire du cégep de Matane.
    Jeu réalisé avec Unity3D / C#
    Code disponnible sur le GitHub en dessous.
</div>
      <div className='links'>
         <a target="_blank" rel="noopener noreferrer" style={{color: 'red'}} href="https://github.com/florianlev/Keep-the-Wolf-from-the-Door"><i className="fab fa-github" ></i></a>
        <a target="_blank" rel="noopener noreferrer" style={{color: 'red'}} href="https://youtu.be/ugDJAtHcDXY"><i className="fab fa-youtube"></i></a>
      </div>


          </Popup>

    </div>

  )
}, {
  render: (
    <div className='portfolio-item'>
        <Popup  trigger={<div >
            <div className='portfolio-item__title'>
                "Fermeture des bars"
            </div>
            <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
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
        </div>
      <div className='portfolio-item__desc'>
        Cliquez ici pour plus de details
        </div>


       </div>} modal  position = "center">


    <div className='title'>

    "Fermeture des bars"
    </div>

    <div className="desc">

    <div className='icon'>Description : </div>

    C'est un jeu mutilijoueur pour mobile.
    Le client à était coder en JavaScript à l'aide de plusieurs librairies
    Create JS (dessin, spritesheet), HammerJS (gesture tactile), HowlerJS (sons,musique)
    Le jeu fonctionne sur telephone avec Cordova PhoneGap.
    Le serveur pour le mutilijoueur est réaliser en NodeJS avec la librairie SocketIO et les échanges de données
    client/serveur sont faites en JSON.
    Code disponnible sur le GitHub en dessous.

    </div>


    <div className="desc">

    <div className='icon'>Contribution : </div>
    <li>Intégration visuel</li>
    <li>Conception du GamePlay</li>
    <li>Jouabilitée multijoueur</li>
    <li>Serveur multijoueur nodeJS / Socket IO</li>
    <li> API pour appreciation des utilisateurs PHP avec BD MySQL</li>
    <li>Systeme de room</li>
    </div>


            <div className='icon'>

    <div>Technologies : </div>
        <i className="fab fa-node"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i></div>

      <div className='desc'>
      Librairies :  CreateJS, HammerJS, NodeJS, Socket.io, HowlerJS, PhoneGap
      </div>

      <div className='links'>
        <a target="_blank" rel="noopener noreferrer" style={{color: 'red'}} href="https://github.com/florianlev/programmation-mobile-projet-phonegap-fermeture-des-bars-2019"><i className="fab fa-github"></i></a>
      </div>
       </Popup>

    </div>

  )
}, {
  name: 'paper-io',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Reproduction du jeu Paper.IO
      </div>
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
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
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
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
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
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
      <div className='portfolio-item__desc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
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