import React from 'react';
import '../scss/layout/_header.scss'; // Uvoz stilova

const Header = () => {
  return (
    <header className="header container">
      <div className="header-container">
        <h1 className='grid-item title'>PHOTO EDITORIAL</h1>
        <div className="circle"></div>
      </div>
    </header>
  );
};

export default Header;