import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import HomePage from './components/HomePage';
import PolitiquePage from './components/PolitiquePage';
import Sport from './components/Sport';
import Education from './components/Education';
import Religion from './components/Religion';
import Culture from './components/Culture';
import Autres from './components/Autres';
import ActualitesPage from './components/ActualitesPage';
// Importez les autres pages ici

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
=       <Route path="/" element={<ActualitesPage />} />
        <Route path="/politique" element={<PolitiquePage/>} />
        <Route path="/Sport" element={<Sport/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/religion" element={<Religion/>} />
        <Route path="/autres" element={<Autres/>} />
        <Route path="/culture-et-art" element={<Culture/>} />
        {/* Ajoutez des routes pour les autres sections */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
