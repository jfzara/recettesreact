// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des pages
import Accueil from './pages/Accueil';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Recettes from './pages/DetailRecette';
import DetailRecette from './pages/DetailRecette';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/recettes/:id" element={<DetailRecette />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
