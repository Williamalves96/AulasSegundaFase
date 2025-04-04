import React from "react";

import { useState } from "react";
import "./Estado.css";

function Estado() {
  const [usuario, setUsuario] = useState("Juca ");
  const [nome, setNome] = useState("Juca");
  const [senha, setSenha] = useState("senha");

  function lernome() {
    let nome = prompt("Digite seu nome");
    setNome(nome);
  }
  function lerUsuario() {
    let resposta = prompt("digite o novo usuario?");
    setUsuario(resposta);
    let pw = prompt("Digite sua nova senha :");
    let pw2 = prompt("confirme sua senha:");
    if (pw == pw2) {
      setSenha(pw);
    } else {
      alert("as senhas sao diferentes");
    }
  }
  return (
    <div className="container-estado">
      <h1>Estados</h1>
      Nome: {nome}
      <div>
        Usuário: {usuario}
        senha: {senha}
      </div>
      <p>
        <button onClick={lernome}>Alterar nome</button>
      </p>
      <button onClick={lerUsuario}> Trocar Usuario </button>
    </div>
  );
}

export default Estado;
