import "./App.css";
import React,{useState} from "react";

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]
  const [contador, setcontador] = useState(0);
  const [mensaje, setmensaje] = useState();

 const cambio =()=> {
   setcontador(contador+1);
 }
  return (
    <>
     <button onClick={cambio}> ver siguiente</button>
      <div> {mensaje}</div>  
       
    </>
  )
}
export default App;