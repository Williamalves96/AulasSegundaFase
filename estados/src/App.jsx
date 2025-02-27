
  import { useState } from 'react'
  import './App.css'
import Conversao from './components/Conversao';
import Conversao2 from './components/Conversao2';

  function App() {
    const [usuario, setUsuario] = useState("Juca ");
    const [nome, setNome] = useState("Juca");
    const [senha,setSenha] = useState ("senha");

  function lernome(){
    let nome = prompt("Digite seu nome")
    setNome(nome);
  }
    function lerUsuario(){
      let resposta = prompt("digite o novo usuario?")
      setUsuario(resposta);
      let pw=  prompt('Digite sua nova senha :')
      let pw2= prompt ('confirme sua senha:')
      if(pw==pw2){
        setSenha (pw)
      }else {
        alert ("as senhas sao diferentes")
      }

    }
    return (
      <>
       <Conversao2/>
      <Conversao /> 
        <h1>Estados</h1>
        Nome: {nome}
        <div>
        Usuário: {usuario}
        senha: {senha}
        </div>
        <button onClick={lernome}>Alterar nome</button>
        <button onClick={lerUsuario}> Trocar Usuario </button>
      </>
    )
  }

  export default App
