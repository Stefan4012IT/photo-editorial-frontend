import React, { createContext, useState, useEffect } from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 
  const [currentPage, setCurrentPage] = useState('home'); // Držimo info o stranici

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--border-color-first', '#222222');
      root.style.setProperty('--text-color-first', '#222222');
      root.style.setProperty('--text-color-second', '#D9D9D9');
      root.style.setProperty('--theme-color-opposite', '#222222');
    } else if (theme === 'dark') {
      root.style.setProperty('--border-color-first', '#D9D9D9');
      root.style.setProperty('--text-color-first', '#D9D9D9');
      root.style.setProperty('--text-color-second', '#222222');
      root.style.setProperty('--theme-color-opposite', '#D9D9D9');
    } else if (theme === 'velvet') {
      root.style.setProperty('--border-color-first', '#222222');
      root.style.setProperty('--text-color-first', '#222222');
      root.style.setProperty('--text-color-second', '#D9D9D9');
      root.style.setProperty('--theme-color-opposite', '#33191a');
    } else if (theme === 'dark-velvet') {
      root.style.setProperty('--border-color-first', '#D9D9D9');
      root.style.setProperty('--text-color-first', '#D9D9D9');
      root.style.setProperty('--text-color-second', '#D9D9D9');
      root.style.setProperty('--theme-color-opposite', '#33191a');
    }

    if (currentPage === 'home') {
      if (theme === 'light') {
        root.style.setProperty('--border-color-first', '#222222');
        root.style.setProperty('--text-color-first', '#222222');
        root.style.setProperty('--text-color-second', '#D9D9D9');
        root.style.setProperty('--theme-color-opposite', '#222222');
      } else if (theme === 'dark') {
        root.style.setProperty('--border-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-second', '#222222');
        root.style.setProperty('--theme-color-opposite', '#D9D9D9');
      } else if (theme === 'velvet') {
        root.style.setProperty('--border-color-first', '#222222');
        root.style.setProperty('--text-color-first', '#222222');
        root.style.setProperty('--text-color-second', '#D9D9D9');
        root.style.setProperty('--theme-color-opposite', '#33191a');
      } else if (theme === 'dark-velvet') {
        root.style.setProperty('--border-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-second', '#D9D9D9');
        root.style.setProperty('--theme-color-opposite', '#33191a');
      }
    } else if (currentPage === 'editorials') {
      if (theme === 'light') {
        root.style.setProperty('--border-color-first', '#222222');
        root.style.setProperty('--text-color-first', '#222222');
        root.style.setProperty('--text-color-second', '#D9D9D9');
        root.style.setProperty('--theme-color-opposite', '#222222');
      } else if (theme === 'dark') {
        root.style.setProperty('--border-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-second', '#222222');
        root.style.setProperty('--theme-color-opposite', '#D9D9D9');
      } else if (theme === 'velvet') {
        root.style.setProperty('--border-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-second', '#D9D9D9');
        root.style.setProperty('--theme-color-opposite', '#33191a');
      } else if (theme === 'dark-velvet') {
        root.style.setProperty('--border-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-first', '#D9D9D9');
        root.style.setProperty('--text-color-second', '#D9D9D9');
        root.style.setProperty('--theme-color-opposite', '#33191a');
      }
    }
  }, [theme, currentPage]); // Ažurira se kada se promeni tema ili stranica

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentPage, setCurrentPage }}>
      {children}
    </ThemeContext.Provider>
  );
};
