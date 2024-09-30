import React from 'react';
import Portfolio from '../components/Portfolio.jsx';

export default function PortfolioPage() {
  const cardStyle = {
    width: '100%',
    height: '580px',
    margin: '20px',
    alignItems: 'center',
    textAlign: 'center',
  };

  const cardStyleTop = {
    ...cardStyle,
    marginTop: '90px',
    marginLeft: '20px',
    marginRight: '20px',
  };

  const cardStyleBottom = {
    ...cardStyle,
    marginBottom: '130px',
    marginLeft: '20px',
    marginRight: '20px',
  };

  const projects = [
    {
      title: "PaperCut Pals",
      description: "PAPERCUT PALS is a MERN Stack Single-Page Application that brings book lovers together in a virtual book club environment. It offers personalized book suggestions based on user preferences and provides a platform for literary discussion and discovery.",
      image: "https://github.com/girlnotfound/PAPERCUT-PALS/blob/main/client/public/images/BookwormPalsTrans.png?raw=true",
      github: "https://github.com/girlnotfound/PAPERCUT-PALS",
      demo: "https://papercut-pals.onrender.com"
    },
    {
      title: "Quantum Rig",
      description: "Quantum Rig is a full-stack web application that allows users to create and manage custom PC builds. Users can sign up, log in, and create personalized PC builds by selecting and commenting on various parts.",
      image: "https://raw.githubusercontent.com/CloudOfAlemar/quantum-rig/6012bd6480d24d56024828da5bd5567c66eb00df/public/img/quantum-rig-bg.svg",
      github: "https://github.com/CloudOfAlemar/quantum-rig/tree/fixed",
      demo: "https://quantum-rig-k6zh.onrender.com"
    },
    {
      title: "Tech Blog",
      description: "This tech blog has been developed using express, sessions, bcrypt, sequalize, and handlebars. Certain routes are closed off from non members and require signing up before adding blog posts and/or commenting.",
      image: "https://github.com/renzsupnet/14_Tech_Blog/blob/main/public/img/profile.png?raw=true",
      github: "https://github.com/renzsupnet/14_Tech_Blog/tree/main",
      demo: "https://one4-tech-block.onrender.com"
    },
    {
      title: "JATE PWA",
      description: "A simple text editor that is an installable PWA application that uses service workers",
      image: "https://github.com/renzsupnet/19_JATE_PWA/blob/main/assets/screenshots/manifest.png?raw=true",
      github: "https://github.com/renzsupnet/19_JATE_PWA/tree/main",
      demo: "https://one9-jate-pwa.onrender.com"
    },
    {
      title: "Weather Dashboard",
      description: "A challenge to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
      image: "https://github.com/renzsupnet/06_Weather_DashBoard/blob/main/assets/images/results.png?raw=true",
      github: "https://github.com/renzsupnet/06_Weather_DashBoard",
      demo: "https://renzsupnet.github.io/06_Weather_DashBoard/"
    },
    {
      title: "Note Taker",
      description: "An Express JS application about taking notes and applying routing principles.",
      image: "https://github.com/renzsupnet/11_Note_Taker/blob/main/public/assets/img/sample.png?raw=true",
      github: "https://github.com/renzsupnet/11_Note_Taker/tree/main",
      demo: "https://one1-note-taker-zplh.onrender.com"
    },
    {
      title: "Web API Challenge",
      description: "A challenge to create a blog that displays the title, content and author from localStorage.",
      image: "https://github.com/renzsupnet/04_Web_API_Challenge/blob/main/assets/images/blog.png?raw=true",
      github: "https://github.com/renzsupnet/04_Web_API_Challenge",
      demo: "https://renzsupnet.github.io/04_Web_API_Challenge/"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {projects.map((project, index) => (
          <Portfolio 
            key={index} 
            project={project} 
            style={index < 2 ? cardStyleTop : index > 5 ? cardStyleBottom : cardStyle}
          />
        ))}
      </div>
    </div>
  );
}