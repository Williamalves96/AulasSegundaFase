import { useState } from "react";

import "./App.css";
// import { useState } from "react";

function App() {
  const [inputUsername, setInputValue] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [mensagemErro, setMensagemErro] = useState(false);
  function efetuarLoguin() {
    if (inputUsername === "" || inputPassword === "") {
      alert("Preencha todos os campos");
      return;
    }

    if (inputUsername !== "GillBats" || inputPassword !== "1235") {
      setMensagemErro(true);
      return;
    } else {
      setMensagemErro(false);
      alert(`Loguin efetuado com sucesso ${inputUsername}`);
    }
    // Aqui você pode adicionar a lógica para efetuar o loguin
    // Por exemplo, você pode fazer uma requisição para um servidor
    // ou verificar as credenciais em um banco de dados
    // Para fins de demonstração, vamos apenas exibir um alerta
    // alert("Loguin efetuado com sucesso");
    // alert(`Loguin efetuado com sucesso ${inputUsername}`);


  }
  return (
    <div className="container-app">
      <h1> inputs controlados </h1>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={inputUsername}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <label htmlFor="">senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        // value={inputPassword}
        // onChange={(event) => setInputPassword(event.target.value)}
        // value={inputPassword}
        // onChange={(event) => setInputPassword(event.target.value)}
        // value={inputPassword}
        value={inputPassword}
        onChange={(event) => setInputPassword(event.target.value)}
      />

      {mensagemErro && (
        <span className="mensagemErro">credenciais invalidas </span>
      )}
      <button onClick={efetuarLoguin}> Loguin </button>
    </div>
  );
}

export default App;
