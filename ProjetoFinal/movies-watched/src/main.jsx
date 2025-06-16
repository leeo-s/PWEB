import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Filme from './pages/Filme.jsx';
import Busca from './pages/Busca.jsx';
import Favoritos from './pages/Favoritos.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='filme/:id' element={<Filme />} />
          <Route path='busca' element={<Busca />} />
          <Route path='favoritos' element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
