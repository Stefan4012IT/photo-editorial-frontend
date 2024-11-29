import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/components/_button.scss'; 
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import { ThemeContext } from '../context/ThemeContext';

const ButtonSend = () => {

  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

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
            {t('btnSend')}
        </span>
    </div>
  );
};

export default ButtonSend;