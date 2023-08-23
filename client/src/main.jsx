import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import NavBar from './component/navBar';
import Pokemones from './component/pokemones';
import Pokemon from './component/pokemon';
import PokeFigt from './component/pokeFight';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
         <Route path="/nav" element={<NavBar/>} />
          <Route path="/Pokemones" element={<Pokemones/>} />
      
          <Route path="/pokemon/:id" element={<Pokemon/>} />
           
          <Route path="/Pokemon/:id/fight" element={<PokeFigt/>} />
      
      </Routes>
    </Router>
  </React.StrictMode>
);
