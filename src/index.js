import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // Uvozimo ThemeProvider
import './i18n';
import { LanguageProvider } from './context/LanguageContext';

ReactDOM.render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>,
  document.getElementById('root')
);