// This is a static page "About Us" section 
import { RiJavascriptFill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { FaPython } from "react-icons/fa6";
import { PiFileSqlFill } from "react-icons/pi";
export default function AboutPage() {
  const imageStyle = {
    borderRadius: '50%',
    height: '100px',
    width: '100px'
  }
  return (
    <div className="container">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-12">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h1> <img src="https://avatars.githubusercontent.com/jy8liu" style={imageStyle}/> WHO AM I? <GrGamepad/></h1>
                <p className="lead mb-0">
                  A short summary about me
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ul>
        <li>
         Hi, I’m @jy8liu
        </li>
        <li>
        I'm interested in Full Stack Development
        </li>
        <li>
        I'm currently a software engineering student at UC Irvine
        </li>
      </ul>
      <br></br>
      <h3>I learned:</h3>
      <h4><RiJavascriptFill />Python  <FaPython />C++  <PiFileSqlFill /> JS </h4>
      
    </div>
  );
}
