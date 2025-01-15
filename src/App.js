import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import './scss/main.scss';
import Home from './pages/Home';
import Editorials from './pages/Editorials';
import ScrollToTop from './components/ScrollToTop';
import Editorial from './pages/Editorial';

function App() {


  return (
    <Router basename="/photo-editorial-frontend">
      <ScrollToTop />
      <Routes>
        {/* Ruta za početnu stranicu */}
        <Route path="/" element={<Home />} />
        <Route path="/editorials" element={<Editorials />} />
        <Route path="/editorial/:id" element={<Editorial />} />
        <Route path="*" element={<p>Page not found!</p>} />
        {/* Dodaj druge rute ovde ako bude potrebno */}
      </Routes>
    </Router>
  );
}

export default App;
