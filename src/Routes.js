import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import PacotesePromocoes from './Pages/PacotesePromos';
import FaleConosco from './Pages/FaleConosco';
import Cadastro from "./Pages/Cadastro";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Canvas from "./Components/OffCanvas";

function Rotas() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pctsepromos" element={<PacotesePromocoes />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/cadastre-se" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
      <Footer />
      <Login />
    </Router>
  );
}

export default Rotas;