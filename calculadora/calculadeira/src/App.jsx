import { useState } from "react";
import "./App.css";

function App() {
  const [inputUm, setInputUm] = useState("");
  const [inputDois, setInputDois] = useState("");
  const [resultado, setResultado] = useState("");

  function tratarN2(event) {
    setInputDois(event.target.value);
    setResultado("");
  }

  function somar() {
    setResultado(Number(inputUm) + Number(inputDois));
    limpar();
  }

  function subtrair() {
    setResultado(Number(inputUm) - Number(inputDois));
  }

  function multiplicar() {
    setResultado(Number(inputUm) * Number(inputDois));
  }

  function dividir() {
    setResultado(Number(inputUm) / Number(inputDois));
  }

  function limpar() {
    setInputUm("");
    setInputDois("");
  }

  return (
    <div className="calculadora-container">
      <h1>Calculadora</h1>

      <input
        type="number"
        placeholder="Digite o primeiro número"
        value={inputUm}
        onChange={(event) => setInputUm(event.target.value)}
      />

      <input
        type="number"
        placeholder="Digite o segundo número"
        value={inputDois}
        onChange={tratarN2}
      />

      <div className="botoes">
        <button onClick={somar}>➕</button>
        <button onClick={subtrair}>➖</button>
        <button onClick={multiplicar}>✖️</button>
        <button onClick={dividir}>➗</button>
        <button onClick={limpar} className="limpar">
          🧹
        </button>
      </div>

      <div className="resultado">
        {resultado !== "" && <>Resultado: {resultado}</>}
      </div>
    </div>
  );
}

export default App;
