import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; 
import './i18n';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';

ReactDOM.render(
  <DataProvider>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </DataProvider>,
  document.getElementById('root')
);