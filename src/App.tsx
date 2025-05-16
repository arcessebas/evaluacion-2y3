import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Servicios from './pages/Servicios';
import QuienesSomos from './pages/Quienes-somos';
import Contacto from './pages/contacto';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default App;
