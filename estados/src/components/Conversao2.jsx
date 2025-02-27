
import './Conversao2.css'
import { useState } from 'react'



function Conversao2() {
  const [km, setkm] = useState(0)
  const [milha, setmilhas] = useState(0)
  const [leguas, setLeguas] = useState(0)

  
 function converterkmParaLeguas (){
  let entrada2 = Number(prompt('KM:'))
   setLeguas((entrada2/4.828).toFixed(2))
   setkm(entrada2)

 };

  function converterkmParaMilha() {
    let entrada = Number(prompt('KM:'))
    setmilhas((entrada / 1.6).toFixed(2))
    setkm(entrada)
  };

  return (
    <div className="container-conversao2">
      <h2>km ➡️➡️ milhas</h2>
      <button onClick={converterkmParaMilha}>converter</button>
      <p>
        km :KM:{km}
      </p>
        milha: Milhas:{milha}
      <p>
      </p>

      <button onClick={converterkmParaLeguas}>converter</button>
      <p>
        km :KM:{km}
      </p>
      <p>
        Leguas: leguas:{leguas}
      </p>
    </div>
  )
}
export default Conversao2 