import React from 'react';
//import HideText from '@components/HideText';

export default [
{
  name: 'Developpement',


  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Développement
      </div>
      
      <div className='portfolio-item__desc'style={{justifyContent:'center', height: '55vh'}} >
        JAVA (Spring, Hibernate, JAVAFX), C#, PHP (POO), Node.JS (Socket.io, express, NPM),
        JavaScript (React.JS, AJAX), DOM, HTML5, CSS3, Services Web (PHP, NodeJS), XML, JSON, C++, Android Studio (JAVA, API GoogleMap, Gestures, GPS ...),
        PhoneGAP Cordova, Wordpress, powershell.
        
      </div>
    </div>
    
  )
},
{
  name: 'Base de données',


  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Base de données
      </div>
      
      <div className='portfolio-item__desc' style={{ justifyContent:'center', height: '55vh'}}>
      SQL (Triggers, Stored Procedure), PDO, MySQL, PostgreSQL, SQL Server, MongoDB
      </div>
    </div>
    
  )
},
{
  name: 'JeuxVideo',


  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Developpement Jeux Vidéos
      </div>
      
      <div className='portfolio-item__desc' style={{justifyContent:'center', height: '50vh'}} >
        Unity 3D (C#), Unreal Engine, JavaScript (EaselJS, CreateJS, SVG.JS, Hammer.JS etc..), Multijoueur (NodeJS : SocketIO, SmartFox)
      </div>
    </div>
    
  )
},{
  name: 'Methodo',


  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Methodologie
      </div>
      
      <div className='portfolio-item__desc' style={{justifyContent:'center', height: '50vh'}} >
        Modèle MVC, MVVM, MVP, POO, UML, 
      </div>
    </div>
    
  )
},{
  name: 'Systemes',


  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Systèmes
      </div>
      
      <div className='portfolio-item__descListe'  >
        <ul><li>OS : Windows Server 2008, 2012, 2016, Linux (Ubuntu Server, CentOS, Mandriva, Debian)</li>
        <li>Services : Serveur Web (Apache, Nginx, IIS) | reverse proxy : nginx, haproxy | proxy: Squid | Annuaire : Active Directory, RADIUS
        | Mail : Microsoft Exchange,Postfix | ToIP : Asteriks | Virtualisation : ProxMox, vmware, HyperV | DNS : Bind9 | Supervision : Centreon Nagios |
        Load Balancing BDD : Galera Cluster (MariaDB) | LoadBalancing : Hearbeat, nginx haproxy | FTP : proftpd | Firewall : iptables, pfsense, IPcop </li>
        </ul>
      </div>
    </div>
    
  )
},{
  name: 'Réseaux',


  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Réseaux
      </div>
      
      <div className='portfolio-item__descListe'  style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50vh'}} >
      <ul><li>Services : 802.1x, VLAN, DNS, DHCP, SMTP, POP, Anti-Virus, parefeu, routage.</li>
      <li>Constructeurs : Cisco, Netgear, DELL, HP, Dlink, Synology</li>
      <li>Stockage : NAS, Sauvergade, rsync, etc...</li>
      <li>Protocoles : TCP/IP, IPv4, IPv6, SNMP, DNS, DHCP, SSH</li></ul> 
      </div>
    </div>
    
  )
},{
  name: 'Logiciels',


  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Logiciels
      </div>
      
      <div className='portfolio-item__desc'  style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '50vh'}} >
      Visual Studio Code, eclipse, Git (Github), GitKraken, SVN, TeamViewer, Intelij, Visual Studio, Excel, VIM.
      </div>
    </div>
    
  )
},]