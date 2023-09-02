import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Cliente from './pages/Cliente';
import Veiculo from './pages/Veiculo';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Cliente />}/>
        <Route path='/Veiculo' element = {<Veiculo />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


