// This is a static page "Resume" section
import Resume from '../components/Resume';
import { RiJavascriptFill } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";

export default function HomePage() {

  const ulStyle = {
    marginTop: '25px',
    fontSize: '25px'
  }



    return (
      <div className="container pt-5" style={ulStyle}>
        <h1>Education</h1>
        <ul style={ulStyle}><br></br>
        Magna Cum Laude
        <br></br>
        University of the Cordilleras
        <br></br>
        Bachelor of Science - BS, Information Technology · (2016 - 2020)
        <br></br>
        <br></br>
        Udacity
        <br></br>
        Nanodegree, Cloud Developer · (2021 - 2021)
        <br></br>
        <br></br>
        UCI Coding Bootcamp
        Bootcamp Certificate (March 2024)
        <br></br>
        <br></br>
        </ul>
        <br></br>
        <h1>Skills Acquired</h1>
        <br></br>
        <ul style={ulStyle}>
          <RiJavascriptFill />JavaScript <RiJavaLine />Java<br></br>
          <br></br>
          <FaNetworkWired />Network Configuration   <FaPython />Python<br></br>
          <br></br>
          <PiFileSqlFill />SQL    <SiMysql />MySQL<br></br>
          <br></br>
          <FaAws />AWS    <FaDesktop />Computer Hardware<br></br>
          <br></br>
          <MdDesktopMac />Information Technology<br></br>
        </ul>
        <br></br>
        <Resume/>
        <br></br>
        <br></br>
        <br></br>
      </div>

      
    );
  }
  