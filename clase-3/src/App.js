import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const App=()=> {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();

// const disminuir =()=>{
//  setContador(contador -1)
// }
const sumar =()=>{
  setResultado(Number(numero1) +Number(numero2));
}

const num1 =(e)=>{
 setNumero1(e.target.value)
}

const num2 =(e)=> {
  setNumero2(e.target.value)
}


// varibles para el contador  ejercicio dos
// const [contador, setContador] = useState(0)
// const aumentar =()=>{
//  setContador(contador+1)
// }

// const restablecer =()=>{
//  setContador( 0)
// }
//ejemplo para cambiar el nombre 
  // const cambiar =()=>{
  //   setNombre("pedro")
  // }
  return (
    <div className="caja">
      {/*ejemplo cambiar nombre  <h1> me llamo {nombre}</h1> */}
      
      {/* ejemplo dos aumentar , disminuir y restablecer con el onclick y el useSet
      <button onClick={()=> setContador(contador-1)} type='button'> disminuir</button>    
      <button onClick={aumentar} type='button'> aumentar</button>    
      <button onClick={restablecer} type='button'> restablecer</button>  
      <h1>{contador}</h1>   */}

      <input type="number" onChange={num1} value={numero1}/> +
      <input type="number" onChange={num2} value={numero2}/> =
      <input  type="number" readOnly value={resultado} ></input> 
      <button onClick={sumar}>Sumar</button>
    </div>
  );
}

export default App;
