import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/main.scss';
import Home from './pages/Home';

function App() {


  return (
    <Router basename="/photo-editorial-frontend">
      <Routes>
        {/* Ruta za početnu stranicu */}
        <Route path="/" element={<Home />} />

        {/* Dodaj druge rute ovde ako bude potrebno */}
      </Routes>
    </Router>

  );
}

export default App;
