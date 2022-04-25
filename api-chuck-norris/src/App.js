import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [chiste, setchiste] = useState("")

// const otro =()=>{
//   const url= 'https://api.icndb.com/jokes/random';
//   const peticion= fetch(url);
//   peticion.then(datos=> datos.json())
//   .then(lectura => setchiste(lectura.value.joke))
//   .catch(console.log)

// }
//   useEffect(()=>{
//     otro();
//   },[])

//👍Segundo metodo sin el random en la url 


// const [chiste, setchiste] = useState([])

const otro =()=>{
  const url= 'https://api.icndb.com/jokes/';
  const peticion= fetch(url);
  peticion.then(datos=> datos.json())
  //SE AGREGA MAP PARA LA VARIABLE LECTURA LO RECORRA UNO A UNO Y EJECUTE LAS SIGUIENTES ACCIONES 
  .then(lectura => lectura.value.map( chistes =>
    setchiste(e => [...e,<div className='chis' key={chistes.id}>{chistes.id}.- {chistes.joke} </div>])))
  .catch(console.log)

}
  useEffect(()=>{
    otro();
  },[])



  return (
  <>


  
  {/* {chiste}
  <button onClick={otro}>otro chiste</button> */}

  {chiste}


  </>
  );
}

export default App;
