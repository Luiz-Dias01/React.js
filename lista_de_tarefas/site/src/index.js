import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import Consulta from './pages/Consulta';
import Inserir from './pages/Inserir';
import Alterar from './pages/Alterar';
import Deletar from './pages/Deletar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/Consulta' element = {<Consulta />} />
        <Route path='/Inserir' element = {<Inserir />} />
        <Route path='/Alterar' element = {<Alterar />} />
        <Route path='/Deletar' element = {<Deletar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


