import React, { use, useState } from "react";
import "./Body.css";

function Body() {
  const [inputValor, setinputValor] = useState("");
  const [saldo, setSaldo] = useState(0);

  return (
    <div className="container-body">
      <h1> Controlinho Financeiro </h1>
      R${saldo}
      <input
        type="Number"
        placeholder="valor"
        value={inputValor}
        onChange={(event) => setinputValor(event.target.value)}
      />
      <div>
        <button
          onClick={() => setSaldo(saldo - inputValor)}
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
    </div>
  );
}

export default Body;
