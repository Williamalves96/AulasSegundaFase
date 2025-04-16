import { useState } from "react";       
import "./App.css";
import React from "react";
import OracaoDevWeb from "./OracaoDevWeb";
import OracaoFrontend from "./OracaoFrontend";
import OracaBackend from "./OracaBackend";
import AprovadoReprovado from "./exerciciosInputs/AprovadoReprovado";


function App() {
  const [oracao, setOracao] = useState();
  
  return (
    <div className="container-app">
      <h1> Painel de orações </h1>
      <h2> Olá, seja bem-vindo ao painel de orações! </h2>

      <h3> Clique nos botões abaixo para ver as orações: </h3>

      <button onClick={() => setOracao(<OracaoDevWeb />)}>
        Oração do desenvolvedor Web
      </button>


      <button onClick={() => setOracao(<OracaBackend />)}>
        Oração do Backend
      </button>

      <button onClick={() => setOracao(<OracaoFrontend />)}>
        Oração do Frontend
      </button>

      {oracao}
      <p>
        <strong>Nota:</strong> As orações são fictícias e criadas para fins de
        entretenimento.
      </p>

      <h2> Exercício de Aprovado/Reprovado </h2>
      <h3> Digite as notas e clique no botão para calcular a média: </h3>
      <AprovadoReprovado />
      <p>
        <strong>Nota:</strong> O status de aprovação é baseado na média das notas.
      </p>
    </div>
  );
}

export default App;
