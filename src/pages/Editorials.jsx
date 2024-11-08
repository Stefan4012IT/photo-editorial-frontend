import React, { useContext } from 'react';
import NoiseBackgroundLight from '../components/NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';

const Editorials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
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
      <Header />
      <div className="editorials">
        <div className="editorials-container container">
          <div className="editorials-content container-content">
            <h2 className='titles'>EDITORIALS</h2>
            <div className="editorials-grid">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Editorials