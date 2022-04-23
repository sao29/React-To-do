import "./App.css";
import React, {useState} from "react";

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]
  const [cantidad, setcantidad] = useState(0);
  const [resultado1, setresultado1] = useState(0);
  const [resultado2, setresultado2] = useState(0);
  const [resultado3, setresultado3] = useState(0);
  const [resultado4, setresultado4] = useState(0);

  const modificar =(e)=>{
    setcantidad(e.target.value);
    setresultado1(e.target.value*cambios[1].cambio);
    setresultado2(e.target.value*cambios[2].cambio);
    setresultado3(e.target.value*cambios[3].cambio);
    setresultado4(e.target.value*cambios[4].cambio);

  }
  return (
    <>
        <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" value={cantidad} onChange={modificar}/> 

      
        <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u1" type="number" value={resultado1} onChange={modificar}/> 

      
        <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u2" type="number" value={resultado2} onChange={modificar}/> 

      
        <label htmlFor="u3">{cambios[3].moneda}</label>
        <input id="u3" type="number" value={resultado3} onChange={modificar}/> 

      
        <label htmlFor="u4">{cambios[3].moneda}</label>
        <input id="u4" type="number" value={resultado4} onChange={modificar}/> 

      
    </>
  )
}

export default App;