import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from './NoiseBackgroundDark';
import NoiseBackgroundVelvet from './NoiseBackgroundVelvet';

const MenuLanguageBox = () => {
    const { setTheme, theme } = useContext(ThemeContext);

  return (
    <div className="menu-language-box">
        {theme === 'light' ? (
        <NoiseBackgroundLight />
      ) : theme === 'dark' ? (
        <NoiseBackgroundDark />
      ) : theme === 'velvet' ? (
        <NoiseBackgroundLight />
      ) : theme === 'dark-velvet' ? (
        <NoiseBackgroundDark />
      ) : null}
      <div className="lang-box">
        <span className='lang-text'>SRB</span>
      </div>
      <div className="lang-box">
        <span className='lang-text'>RUS</span>
      </div>
    </div>
  )
}

export default MenuLanguageBox