import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from '../components/NoiseBackgroundDark';
import NoiseBackgroundVelvet from '../components/NoiseBackgroundVelvet';
import { ThemeContext } from '../context/ThemeContext';
import '../scss/components/_button.scss'; 

const ButtonLoadMore = ({onClick}) => {

  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    
    <div className="btn-load-more" onClick={onClick}>
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
            {t('btnLoadMore')}
        </span>
    </div>
  );
};

export default ButtonLoadMore;