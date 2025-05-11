import React, { useContext, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/main.scss';
import Home from './pages/Home';
import Editorials from './pages/Editorials';
import ScrollToTop from './components/ScrollToTop';
import Editorial from './pages/Editorial';

function App() {

  // const basename = process.env.PUBLIC_URL || '/';
  return (
    <Router>
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