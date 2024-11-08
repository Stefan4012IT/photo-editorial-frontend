import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeContext } from './context/ThemeContext';
import './scss/main.scss';
import Home from './pages/Home';
import Editorials from './pages/Editorials';

function App() {

  const { theme } = useContext(ThemeContext);

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
  }, [theme]);

  return (
    <Router basename="/photo-editorial-frontend">
      <Routes>
        {/* Ruta za početnu stranicu */}
        <Route path="/" element={<Home />} />
        <Route path="/editorials" element={<Editorials />} />

        {/* Dodaj druge rute ovde ako bude potrebno */}
      </Routes>
    </Router>
  );
}

export default App;
