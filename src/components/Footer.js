import React from 'react';


const Footer = ({ footerdata,bgColor }) => {
  return (
    <footer style={{ backgroundColor: bgColor}}>
      <p>{footerdata}</p>
    </footer>
  );
};

export default Footer;