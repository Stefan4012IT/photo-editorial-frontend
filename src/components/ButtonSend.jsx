import React, {useContext} from 'react';
import '../scss/components/_button.scss'; 
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import { ThemeContext } from '../context/ThemeContext';

const ButtonSend = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="btn-send">
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
        <span className='btn-text'>
            SEND
        </span>
    </div>
  );
};

export default ButtonSend;