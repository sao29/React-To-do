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
   if(contador+1 >= reyesGodos.length){
     setcontador(0)
   }

   setmensaje(<h2>la aficion principal de <span className="Rojo"> {reyesGodos[contador].nombre}</span> es <span className="Verde">
     {reyesGodos[contador].aficion}</span> </h2>)
 }
  return (
    <>
     <button onClick={cambio}> ver siguiente</button>
      <div> {mensaje}</div>  
       
    </>
  )
}
export default App;