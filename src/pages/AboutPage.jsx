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
                <h1> <img src="https://avatars.githubusercontent.com/u/31431868?s=96&v=4" style={imageStyle}/> WHO AM I? <GrGamepad/></h1>
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
        👋 Hi, I’m @renzsupnet
        </li>
        <li>
        👀 I’m interested in a programming job/ games
        </li>
        <li>
        🌱 I’m currently learning Coding @ UCI Coding Bootcamp
        </li>
        <li>
        🎓 I have a Bachelor of Science Degree in Information Technology
        </li>
        <li>
        👓Graduated as Magna cum laude from the University of the Cordilleras, Baguio City, Philippines
        </li>
      </ul>
      <br></br>
      <h3>I learned:</h3>
      <h4><RiJavascriptFill />Javascript  <FaPython />Python  <PiFileSqlFill />SQL</h4>
      
    </div>
  );
}
