import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import '../scss/layout/_header.scss';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from './NoiseBackgroundDark';
import NoiseBackgroundVelvet from './NoiseBackgroundVelvet';
import MenuCircleBox from './MenuCircleBox';
import MenuLanguageBox from './MenuLanguageBox';
import { LanguageContext } from '../context/LanguageContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { lang, availableLanguages } = useContext(LanguageContext);


  const currentLanguage = availableLanguages.find((language) => language.code === lang) || availableLanguages.find((language) => language.code === 'en');

  return (
    <header className="header container">
      <div className="header-container container-content">
        <h1 className='grid-item head-title'><Link to="/">{t('mainTitle')}</Link></h1>

        <div className="menu-items">
        <div className="language-box">
          <span className='lang-text'>{currentLanguage ? currentLanguage.label : 'ENG'}</span>
        </div>
        <div className="circle-main-box">
          <div className="circle main-circle">
            <div className="first-half">
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
        <MenuLanguageBox />
        </div>
        
        
      </div>
    </header>
  );
};

export default Header;