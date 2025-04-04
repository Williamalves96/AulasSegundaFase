import React from "react";
import { useState } from "react";
import "./Imc.css";

function Imc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  return (
    <div className="container-Imc">
      <h2> imc</h2>
      <button onClick={imc}>Resultado</button>
      <p>{imc}</p>
    </div>
  );
}

function calcularImc() {
  const imc = peso / (altura * altura);
  setImc(imc);
}

export default imc;
