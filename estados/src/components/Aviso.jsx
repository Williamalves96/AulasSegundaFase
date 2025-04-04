import { useState } from "react";

import React from "react";
import "./Aviso.css"; 

function Aviso() {
  const [avisar, setAvisar] = useState(false);
  function toggleAvisar() {
    setAvisar(!avisar);
    console.log(avisar);
  }

  return (
    <div className="container-aviso">
      {avisar && <p>proibido celular na sala de aula</p>}

      <button onClick={toggleAvisar}> Aviso </button>
      
    </div>
  );
}

export default Aviso;
