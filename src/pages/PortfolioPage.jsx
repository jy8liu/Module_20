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
      title: "Fitness Tracker",
      description: "Fitness Tracker is a meal prep website.",
      image: "https://github.com/CrisSal2/Arugula-Week/blob/main/client/public/images/arugula-week.onrender.com_.png?raw=true",
      github: "https://github.com/CrisSal2/Arugula-Week",
      demo: "https://arugula-week.onrender.com/"
    },
    {
      title: "Quantum Rig",
      description: "Quantum Rig is a full-stack web application that allows users to create and manage custom PC builds. Users can sign up, log in, and create personalized PC builds by selecting and commenting on various parts.",
      image: "https://raw.githubusercontent.com/CloudOfAlemar/quantum-rig/6012bd6480d24d56024828da5bd5567c66eb00df/public/img/quantum-rig-bg.svg",
      github: "https://github.com/CloudOfAlemar/quantum-rig/tree/fixed",
      demo: "https://quantum-rig-k6zh.onrender.com"
    },
    {
      title: "Weather Dashboard",
      description: "Made in HTML and CSS.",
      image: "https://github.com/jy8liu/Module_6/blob/main/assets/images/home.png?raw=true",
      github: "https://github.com/jy8liu/Module_6",
      demo: "https://jy8liu.github.io/Module_6/"
    },
    {
      title: "Note Taker",
      description: "Express JS note taking app.",
      image: "https://github.com/jy8liu/Module_11/raw/main/public/assets/img/index.png?raw=true",
      github: "https://github.com/jy8liu/Module_11",
      demo: "https://module-11.onrender.com/"
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