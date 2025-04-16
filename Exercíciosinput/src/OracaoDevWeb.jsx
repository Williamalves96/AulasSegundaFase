import React from "react";
import "./OracaoDevWev.css";

function OracaoDevWeb() {
  const [oracaoWeb, setOracaoWeb] = React.useState("");
  function toggleOracaoWeb() {
    setOracaoWeb(!oracaoWeb);
    console.log(oracaoWeb);
  }

  return (
    <div className="container-oracaoWeb">
      <p>
        - Oração do desenvolvedor Web Divino Stack Overflow, que estais na
        nuvem, Santificado seja o nosso deploy. Venha a nós o CSS alinhado, Seja
        feita a responsividade, Assim no Chrome como no Firefox. O código nosso
        de cada dia nos dai hoje, Perdoai os nossos console.log, Assim como nós
        perdoamos os commits sem mensagem. Não nos deixei cair em callback hell,
        Mas livrai-nos dos bugs de produção. Amém, amém, git commit -m
        "Aleluia".
      </p>
    </div>
  );
}

export default OracaoDevWeb;
