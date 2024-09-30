import React from 'react';
//import resumePDF from '../assets/Profile.pdf';

const ResumeDownload = () => {
  const buttonStyle = {
    marginBottom: '75px'
  }
  return (
    <a href={resumePDF} download="Resume.pdf">
      <button style={buttonStyle}>Download Resume</button>
    </a>
  );
};

export default ResumeDownload;