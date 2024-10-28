import React, {useContext} from 'react';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import { ThemeContext } from '../context/ThemeContext';
import '../scss/components/_button.scss'; 

const ButtonLoadMore = () => {

  const { theme } = useContext(ThemeContext);

  return (
    
    <div className="btn-load-more">
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
        <span className='btn-text'>
            LOAD MORE
        </span>
    </div>
  );
};

export default ButtonLoadMore;