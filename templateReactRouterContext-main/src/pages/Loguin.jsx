import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

function Loguin() {
  const [inputUsername, setInputUsername] = useState();
  const [inputSenha, setInputSenha] = useState();
  const { usuario } = useContext(GlobalContext);
  const navigate = useNavigate();
  function efetuarLoguin() {
    const usuarios = usuario.find(
      (u) => u.username == inputUsername && u.senha == inputSenha
    );

    if (usuario) {
      alert("loguin efetuado");
      
      navigate("/home");

    } else {
      alert("Credenciais incorretas");
    }
  }
  return (
    <div>
      <h1> Login</h1>
      <div>
        username
        <input
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
        />
      </div>
      <div>
        senha
        <input
          type="text"
          value={inputSenha}
          onChange={(e) => setInputSenha(e.target.value)}
        />
        <button onClick={efetuarLoguin}>Loguin </button>
      </div>
    </div>
  );
}
export default Loguin;
