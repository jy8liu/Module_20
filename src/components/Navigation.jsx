// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Nav';


export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
        <h1 className='mb-0'>Renz</h1>
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
        About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/portfolio">
        Porfolio
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
        Contact
        </Link>,
        <Link key={5} className="nav-link text-light" to="/resume">
        Resume
        </Link>,          
      ]}
    />
  );
}
