// This is a static page "Contact" section 
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function ContactPage() {
    const logoStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '0.5 rem',
      marginBottom: '125px'
  }

    const containerStyle = {
      marginTop: '50px'
    }
    return (
      <div className="container pt-5" style={containerStyle}>
        <h1>Contact</h1>
        <form>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name"  required/>
              </div>
              
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required/>
              </div>

              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Message</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
              </div>

              
              <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <br></br>
        <div className="container text-center">
                <div style={logoStyle}>
                    <h1 className="mx-2">
                        <a href="https://github.com/renzsupnet" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                            <FaGithub style={{ color: "#C96868" }}/>
                        </a>
                    </h1>
                    <h1 className="mx-2">
                        <a href="mailto:rcbsupnet@gmail.com" style={{color: 'white'}}>
                            <SiGmail style={{ color: "#C96868" }}/>
                        </a>
                    </h1>
                </div>
            </div>
      </div>
    );
  }
  