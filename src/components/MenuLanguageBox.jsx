import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import NoiseBackgroundLight from './NoiseBackgroundLight';
import NoiseBackgroundDark from './NoiseBackgroundDark';

const MenuLanguageBox = () => {
    const { setTheme, theme } = useContext(ThemeContext);
    const { lang, setLang, availableLanguages } = useContext(LanguageContext);
    const { i18n } = useTranslation();

    const handleChangeLanguage  = (newLang) => {
      setLang(newLang);
      i18n.changeLanguage(newLang); // Menja jezik
    };


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
      {availableLanguages
        .filter((language) => language.code !== lang) // Filtriramo aktivni jezik
        .map((language) => (
          <div
            key={language.code}
            className="lang-box"
            onClick={() => handleChangeLanguage(language.code)}
          >
            <span className="lang-text">{language.label}</span>
          </div>
        ))}
      
    </div>
  )
}

export default MenuLanguageBox