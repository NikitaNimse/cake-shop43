import React from 'react';

const Header = ({ Name, bgColor, color }) => {
  return (
    <header style={{ backgroundColor: bgColor, color }}>
      <h1>{Name}</h1>
    </header>
  );
};

export default Header;