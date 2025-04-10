import React from "react";
import "./OracaoFrontend.css";
function OracaoFrontend() {
  const [oracaoFrontend, setOracaoFrontend] = React.useState("");
  function toggleOracaoFrontend() {
    setOracaoFrontend(!oracaoFrontend);
    console.log(oracaoFrontend);

    return (
      <div className="container-oracaoFrontend">
        {oracaoFrontend && (
          <p>
            - **Oração do Frontend** Ave CSS, cheia de bugs, O framework
            éconvosco, Bendita sois vós entre as telas, E bendito é o fruto do
            vosso DOM: o pixel perfeito. Santa Documentação, mãe da UI, Rogai
            por nós, devs visuais, Agora e na hora do push final. Hover..
          </p>
        )}

        <button onClick={toggleOracaoFrontend}> Oração do Frontend </button>
      </div>
    );
  }
}

export default OracaoFrontend;
