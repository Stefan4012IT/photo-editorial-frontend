import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../scss/layout/_header.scss';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from './NoiseBackgroundDark';
import NoiseBackgroundVelvet from './NoiseBackgroundVelvet';
import MenuCircleBox from './MenuCircleBox';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className="header container">
      <div className="header-container container-content">
        <h1 className='grid-item head-title'>PHOTO EDITORIAL</h1>
        <div className="circle-main-box">
          <div className="circle main-circle">
            <div className="first-half">
              {/* <NoiseBackgroundLight /> */}
              {
            theme === 'light' ? (
                <NoiseBackgroundLight />
            ) : theme === 'dark' ? (
                <NoiseBackgroundDark />
            ) : theme === 'velvet' ? (
                <NoiseBackgroundLight />
            ) : theme === 'dark-velvet' ? (
                <NoiseBackgroundDark />
            ) : (
                null
            )
            }
            </div>
            <div className="second-half">
              {/* <NoiseBackgroundDark /> */}
              {
            theme === 'light' ? (
                <NoiseBackgroundDark />
            ) : theme === 'dark' ? (
                <NoiseBackgroundLight />
            ) : theme === 'velvet' ? (
                <NoiseBackgroundVelvet />
            ) : theme === 'dark-velvet' ? (
                <NoiseBackgroundVelvet />
            ) : (
                null
            )
            }
            </div>
          </div>
        </div>
        <MenuCircleBox />
        
        
      </div>
    </header>
  );
};

export default Header;