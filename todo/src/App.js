// import './App.css';
import TodoItem from './TodoItem';
import  TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import CreateTodoButtom from './CreateTodoButtom';
import {TodoCounter} from './TodoCounter';
import react from "react";
import { useState } from 'react';



function App() {
  //todos ahora todosarray
  const todosArray=[
    {text:'Cortar cebolla', completed:true},
    {text:'Tormar el curso de intro a react', completed:false},
    {text:'Llorar con la llorona', completed:false},
    {text:'Llorar con ', completed:false},
    {text:'lala', completed:false},
   
  ];
  const [todos, setTodo] = useState(todosArray) // del array 
  const [cambio, setCambio] = useState(""); // del modulo counter


//recorrido del array todo para ver cuales estan marcado como completos

const completeTodo = todos.filter(e => e.completed == true).length;
console.log(" los completados son " + completeTodo)
const totalTodos = todos.length;
// console.log("el segundo es "+ totalTodos)

let serchedTodo = [];

if (!cambio.length >= 1)
//cambio es la varible que recibe el valor del input con useState
{
serchedTodo = todos;
//va se igual a la lista almacenada en el useState

}else{
serchedTodo = todos.filter(e => {

  const todoText = e.text.toLowerCase();
  //lo que se este en el array convertirlo en minusculas
  const searchText = cambio.toLowerCase();
  //lo que se ingrese en el input canvertirlo en minusculas
  return todoText.includes(searchText);

  //1.- Niega, 2. Niega el anterior, 3. Niega el anterior y así…
})

}
// esta funcion se encarga de verificar cuando recibe un texto cual de ellos cumple con la funcion
const completeTodos = (texto)=> {
const todoIndex = todos.findIndex( todo => todo.text == texto)


const newTodos = [...todos];
newTodos[todoIndex].completed = true;
setTodo(newTodos);
//alternativa
// todos[todoIndex]={
//   text: todos[todoIndex].text,
//   completed:true
// }
}

//borrar
const deleteTodos = (texto)=> {
  const todoIndex = todos.findIndex( todo => todo.text == texto)
  const newTodos = [...todos];
  //splice (desde donde empieza a cortar o la poscion)
  //y el segundo parametro cuantas posiciones se quieren sacar
  newTodos.splice(todoIndex ,1)
  setTodo(newTodos);
}


  return (
    <react.Fragment>
       <TodoCounter
       total={totalTodos}
       completed={completeTodo}
       />    
       <TodoSearch 
         cambio= {cambio}
         setCambio={setCambio}
       />
       <TodoList>
         {serchedTodo.map(todo =>(
         <TodoItem 
         key={todo.text} 
         text={todo.text} 
         completed= {todo.completed}
         onComplete={()=> completeTodos(todo.text) }
         onDelete={()=> deleteTodos(todo.text) }
         />))}
       </TodoList>
       <CreateTodoButtom />      
    </react.Fragment>
  );
}

export default App;
