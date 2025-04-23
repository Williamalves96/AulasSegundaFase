import { useEffect, useState } from "react";
import "./App.css";
import Produto from "./components/Produto";

function App() {
  const [inputModelo, setInputModelo] = useState("");
  const [inputPreco, setInputPreco] = useState("");

  const [produtos, setProdutos] = useState([
    { id: Date.now(), modelo: "galaxy A55", preco: 1809 },
    { id: Date.now() + 1, modelo: "galaxy A06s", preco: 900 },
  ]);

  useEffect(() => console.log(produtos), [produtos]);
  function testar() {
    // console.log(setProdutos);
    let produto = {
      id: Date.now(),
      modelo: "ProdutoX",
      preco: 10,
    };
    setProdutos([produto, ...produtos]);
  }

   function cadastrar() {
      if (inputModelo === "" || inputPreco === "") {
        alert("Preencha todos os campos");
        return;
      }
     let produto = {
       id: Date.now(),
       modelo: inputModelo,
       preco: Number (inputPreco),
     };
     setProdutos([produto, ...produtos]);
   }

  return (
    <div className="container-app">
      <div className="form-produto">
        <label htmlFor="">Modelo</label>
        <input
          type="text"
          value={inputModelo}
          onChange={(event) => setInputModelo(event.target.value)}
        />
        <label htmlFor="">Preço</label>
        <input
          type="number"
          value={inputPreco}
          onChange={(event) => setInputPreco(event.target.value)}
        />
        <button onClick={cadastrar}>CADASTRAR</button>
      </div>

      {/* <Produto modelo={"galaxy A15"} preco={809} />
      <Produto modelo={"galaxy A16"} preco={1500} /> */}
      {/* <Produto modelo={"galaxy A17"} preco={2000} /> */}
      {/* <Produto modelo={produtos[0].modelo} preco={produtos[0].preco} />
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco} />
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco} /> */}

      <button onClick={testar}>testar</button>

      {/* {produtos.map((p,index) => (
        <Produto key={index} modelo={p.modelo} preco={p.preco} />
      ))} */}
      <div className="cards">
        {produtos.map((p) => (
          <Produto key={p.id} modelo={p.modelo} preco={p.preco} id={p.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
