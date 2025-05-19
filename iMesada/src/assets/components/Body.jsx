import React, { use, useState } from "react";
import "./Body.css";

function Body() {
  const [inputValor, setinputValor] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [inputTransacao, setInputTransacao] = useState("");
  const [movimentacoes, setMovimentacoes] = useState([]);

  function creditar() {
    let transacao = {
      id: Date.now(),
      movimentacao: inputTransacao,
      valor: Number(inputValor),
      tipo: "credito",
    };
    setMovimentacoes([transacao, ...movimentacoes]);
    setSaldo(saldo + Number(inputValor));
  }

  function debitar() {
    let transacao = {
      id: Date.now(),
      movimentacao: inputTransacao,
      valor: Number(inputValor),
      tipo: "debito",
    };
  }
  return (
    <div className="container-body">
      <h1> Controlinho Financeiro </h1>
      <h3> Saldo R$ {saldo}</h3>
      <input
        type="text"
        placeholder="transação"
        value={inputTransacao}
        onChange={(event) => setInputTransacao(event.target.value)}
      />{" "}
      <br />
      <input
        type="Number"
        placeholder="valor"
        value={inputValor}
        onChange={(event) => setinputValor(event.target.value)}
      />{" "}
      <br />
      <div>
        <button
          onClick={() => setSaldo(saldo - Number(inputValor))}
          className="botao-debto"
        >
          {" "}
          Debto{" "}
        </button>
        <button
          onClick={() => setSaldo(saldo + Number(inputValor))}
          className="botao-credit"
        >
          {" "}
          Credit{" "}
        </button>
      </div>
      <div>
        {creditar}
        {debitar}
      </div>
    </div>
  );
}

export default Body;
