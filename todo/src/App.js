// import './App.css';
import TodoItem from './TodoItem';
import  TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import CreateTodoButtom from './CreateTodoButtom';
import {TodoCounter} from './TodoCounter';
import react from "react";
import { useState } from 'react';



function App() {
  const todosArray=[
    {text:'Cortar cebolla', completed:true},
    {text:'Tormar el curso de intro a react', completed:false},
    {text:'Llorar con la llorona', completed:false},
    {text:'lala', completed:false},
   
  ];
  const [todos, setTodo] = useState(todosArray)
  const [cambio, setCambio] = useState("");


//recorrido del array todo para ver cuales estan marcado como completos

const completeTodo = todos.filter(todo => todo.completed == true).length;

const totalTodos = todos.length;
// console.log("el segundo es "+ totalTodos)

let serchedTodo = [];

if (!cambio.length >= 1)
//cambio es la varible que recibe el valor del input con useState
{
serchedTodo = todos;
//va se igual a la lista almacenada en el useState

}else{
serchedTodo = todos.filter(todo => {

  const todoText = todo.text.toLowerCase();
  //lo que se este en el array convertirlo en minusculas
  const searchText = cambio.toLowerCase();
  //lo que se ingrese en el input canvertirlo en minusculas
  return todoText.includes(searchText);

  //1.- Niega, 2. Niega el anterior, 3. Niega el anterior y así…
})

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
         {serchedTodo.map(todo =>(<TodoItem key={todo.text} text={todo.text} 
         completed= {todo.completed}
         />))}
       </TodoList>
       <CreateTodoButtom />      
    </react.Fragment>
  );
}

export default App;
