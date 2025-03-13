import React from "react";
import "./App.css";
import Conversao from "./components/Conversao";
import Conversao2 from "./components/Conversao2";
import Estado from "./components/Estado";
import Aviso from "./components/aviso";
import ConversorTemp from "./components/ConversorTemp";
import AnoBissexto from "./components/AnoBissexto";

function App() {
  return (
    <div className="container-app">
      <Conversao2 />
      <Conversao />
      <Estado />
      <Aviso />
      <ConversorTemp />
      <AnoBissexto />
    </div>
  );
}

export default App;
