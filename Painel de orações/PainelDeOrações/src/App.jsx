import "./App.css";
import { useState } from "react";
import OracaododesenvolvedorWeb from "./components/OracaododesenvolvedorWeb";
import OracaoDoEstudante from "./components/OracaoDoEstudante";
import OracaoDoFullstack from "./components/OracaoDoFullstack";

function App() {
  const [painel, setPainel] = useState('');

  function tratarDevWeb() {
    if (painel == '') {
      setPainel(<OracaododesenvolvedorWeb />);
    } else {
      setPainel('');
    }
  }

  return (
    <div className="container">
      <div className="botoes">
        <button onClick={tratarDevWeb}>🙏 Oração do Desenvolvedor Web</button>
        <button onClick={() => setPainel(<OracaoDoEstudante />)}>
          📚 Oração do Estudante
        </button>
        <button onClick={() => setPainel(<OracaoDoFullstack />)}>
          💻 Oração do Fullstack
        </button>
      </div>

      {painel && <div className="painel-oracao">{painel}</div>}
    </div>
  );
}

export default App;
