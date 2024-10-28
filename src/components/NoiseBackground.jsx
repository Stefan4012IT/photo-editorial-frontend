import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from './NoiseBackgroundDark';
import NoiseBackgroundVelvet from './NoiseBackgroundVelvet';

const NoiseBackground = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === 'light') {
    return <NoiseBackgroundLight />;
  } else if (theme === 'dark') {
    return <NoiseBackgroundDark />;
  } else if (theme === 'velvet') {
    return <NoiseBackgroundVelvet />;
  } else {
    // Dodaj opcije za sve teme
    return null;
  }
};

export default NoiseBackground;

