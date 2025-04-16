import React from "react";

function AprovadoReprovado() {
  const [nota, setNota] = React.useState(0);
  const [notaDois, setNotaDois] = React.useState(0);
  const [media, setMedia] = React.useState(0);

  const calcularMedia = () => {
    const mediaCalculada = (nota + notaDois) / 2;
    setMedia(mediaCalculada);
  };

  const verificarStatus = () => {
    if (media >= 7) {
      return (
        <div className="aprovado">
          <p>Aprovado</p>
        </div>
      );
    } else if (media < 7 && media >= 4) {
      return (
        <div className="recuperacao">
          <p>Recuperação</p>
        </div>
      );
    } else {
      return (
        <div className="reprovado">
          <p>Reprovado</p>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Digite a primeira nota:</h2>
      <input
        type="number"
        onChange={(e) => setNota(parseFloat(e.target.value))}
      />
      <h2>Digite a segunda nota:</h2>
      <input
        type="number"
        onChange={(e) => setNotaDois(parseFloat(e.target.value))}
      />
      <h2>A média é: {media}</h2>
      <input type="button" value="Calcular Média" onClick={calcularMedia} />
      {verificarStatus()} 
    </div>
  );
}

export default AprovadoReprovado;
