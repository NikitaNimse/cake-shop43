import React from 'react';


const Footer = ({ footerText,bgColor }) => {
  return (
    <footer style={{ backgroundColor: bgColor}}>
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;