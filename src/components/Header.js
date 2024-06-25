import React from 'react';

const Header = ({ shopName, bgColor, color }) => {
  return (
    <header style={{ backgroundColor: bgColor, color }}>
      <h1>{shopName}</h1>
    </header>
  );
};

export default Header;