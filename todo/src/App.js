// import './App.css';
import TodoItem from './TodoItem';
import  TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import CreateTodoButtom from './CreateTodoButtom';
import {TodoCounter} from './TodoCounter';
import react from "react";


function App() {

  const todos=[
    {text:'Cortar cebolla', completed:true},
    {text:'Tormar el curso de intro a react', completed:false},
    {text:'Llorar con la llorona', completed:false}
  ];
  return (
    <react.Fragment>
       <TodoCounter />    
       <TodoSearch />
       <TodoList>
         {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} 
         completed= {todo.completed}
         />))}
       </TodoList>
       <CreateTodoButtom />      
    </react.Fragment>
  );
}

export default App;
