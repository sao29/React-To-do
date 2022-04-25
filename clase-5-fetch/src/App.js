import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';


function App() {
// se renderiza primero cuando se inicia y luego cuando el componente se carga en pantalla por ello cuando lo queremos usar solo uns vez se usa 👍 UseEfect

// const [nombre, setnombre] = useState("")
// const [imagen, setimagen] = useState("")
const [datos, setdatos] = useState([])

useEffect(() => {
  // const url="https://randomuser.me/api";
  const url="https://randomuser.me/api/?results=2";
  const peticion=fetch(url);
  peticion
  .then(datos => datos.json())
  .then(lectura =>
     {
      //  setnombre(`${lectura.results[0].name.first} ${lectura.results[0].name.last} `)
      //  setimagen(`${lectura.results[0].picture.large}`)
      //👍el metodo map lleva dos parate la primera es la variable en donde se va a guardar los result y despues lo que quiero que se haga con cada uno de los valores
      lectura.results.map((persona)=>{
        setdatos((e)=> 
          [...e,<div key={persona.email}>
          <div>{persona.name.first} {persona.name.last} </div>
          <div>
          <img src={persona.picture.large} />
          </div>
          </div>])
     
        })
  
    })

  .catch(()=> console.log("error"))


},[])





  return (
  <>
  <h1>Empleado del mes</h1>
  {datos}
  
  {/* {nombre} */}
  {/* <div> <img src={imagen}></img>  </div> */}
  
  </>
  );
}

export default App;
