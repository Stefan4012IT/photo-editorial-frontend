import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const availableLanguages = [
    { code: 'en', label: 'ENG' },
    { code: 'sr', label: 'SRB' },
    { code: 'ru', label: 'RUS' },
  ];

  const normalized = i18n.language.split('-')[0];
  const [lang, setLang] = useState(
    availableLanguages.some((language) => language.code === normalized) ? normalized : 'en'
  );

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLang(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};
