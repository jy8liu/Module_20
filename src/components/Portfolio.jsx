import { FaGithub, FaFirefoxBrowser } from "react-icons/fa";

const Portfolio = ({ project, style }) => {
  const cardBody = {
    width: '100%',
    position: 'absolute',
    backgroundColor: '#FADFA1',
    bottom: 0
  };

  const imageStyle = {
    width: '100%',
    transition: 'all 0.3s ease-in-out'
  };

  const iconStyle = {
    margin: '10px',
  };

  return (
    <div className="col-6">
      <div className="card" style={style}>
        <img src={project.image} className="card-img-top" alt={project.title} style={imageStyle}/>
        <div className="card-body" style={cardBody}>
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description} (Links will take a few min to load)</p>
          <a href={project.github} className="btn btn-primary" style={iconStyle}><FaGithub/></a>
          <a href={project.demo} className="btn btn-primary" style={iconStyle}><FaFirefoxBrowser/></a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio