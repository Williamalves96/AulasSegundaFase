import React from 'react'
import './Produto.css'


function Produto(props) {
  return (
    <div className="container-produto">
        <h2>{props.modelo}</h2>
        <p>R$ {props.preco.toFixed(2)}</p>
        <p>{props.id}</p>          
    </div>
    )
}

export default Produto