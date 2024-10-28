import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from './NoiseBackgroundDark';
import NoiseBackgroundVelvet from './NoiseBackgroundVelvet';

const MenuCircleBox = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <div className="menu-circle-box">
      {/* Prikazujemo pozadinu na osnovu aktivne teme */}
      {theme === 'light' ? (
        <NoiseBackgroundLight />
      ) : theme === 'dark' ? (
        <NoiseBackgroundDark />
      ) : theme === 'velvet' ? (
        <NoiseBackgroundLight />
      ) : theme === 'dark-velvet' ? (
        <NoiseBackgroundDark />
      ) : null}

      {/* Prikazujemo svaku "circle-box" komponentu osim one sa aktivnom temom */}
      {theme !== 'dark' && (
        <div className="circle-box" onClick={() => setTheme('dark')}>
          <div className="circle-dark">
            <div className="first-half">
              <NoiseBackgroundDark />
            </div>
            <div className="second-half">
              <NoiseBackgroundLight />
            </div>
          </div>
          <span className="circle-text">dark</span>
        </div>
      )}

      {theme !== 'light' && (
        <div className="circle-box" onClick={() => setTheme('light')}>
          <div className="circle-light">
            <div className="first-half">
              <NoiseBackgroundLight />
            </div>
            <div className="second-half">
              <NoiseBackgroundDark />
            </div>
          </div>
          <span className="circle-text">light</span>
        </div>
      )}

      {theme !== 'velvet' && (
        <div className="circle-box" onClick={() => setTheme('velvet')}>
          <div className="circle-velvet">
            <div className="first-half">
              <NoiseBackgroundLight />
            </div>
            <div className="second-half">
              <NoiseBackgroundVelvet />
            </div>
          </div>
          <span className="circle-text">velvet</span>
        </div>
      )}

      {theme !== 'dark-velvet' && (
        <div className="circle-box" onClick={() => setTheme('dark-velvet')}>
          <div className="circle-dark-velvet">
            <div className="first-half">
              <NoiseBackgroundDark />
            </div>
            <div className="second-half">
              <NoiseBackgroundVelvet />
            </div>
          </div>
          <span className="circle-text">dark-velvet</span>
        </div>
      )}
    </div>
  );
};

export default MenuCircleBox;
