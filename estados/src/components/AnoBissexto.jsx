import "./AnoBissexto.css";
import React, { useState } from "react";

function AnoBissexto() {
  const [resultado, setResultado] = useState("resultado não informado");
  

  function lerAno() {
    let ano = Number(prompt("Informe o ano"));
    if (ano % 4 === 0 && ano % 100 !== 0) {
      setResultado("Esse ano é bissexto");
    } else if (ano % 400 === 0) {
      setResultado("Esse ano é bissexto");
    } else {
      setResultado("Esse ano não é bissexto");
    }
  }

  return (
    <div className="container-AnoBissexto">
      <h2>Esse ano é bissexto?</h2>

      <button onClick={lerAno}> informar ano </button>

      <p>{resultado}</p>
    </div>
  );
}

export default AnoBissexto;
