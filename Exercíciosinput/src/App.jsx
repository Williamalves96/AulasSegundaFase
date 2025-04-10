import { useState } from "react";
import "./App.css";
import React from "react";
import OracaoDevWeb from "./OracaoDevWeb";
import OracaoFrontend from "./OracaoFrontend";

function App() {
  return (
    <div className="container-app">
      <h1> Painel de orações </h1>
      <h2> Olá, seja bem-vindo ao painel de orações! </h2>

      <h3> Clique nos botões abaixo para ver as orações: </h3>
      
      <OracaoDevWeb />
      <OracaoFrontend />
    </div>
  );
}

export default App;
