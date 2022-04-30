import React from 'react'
import  './TodoSearch.css';

function TodoSearch() {
  const cambiosEvento = (event)=>{
    console.log(event.target.value);
  }
  return (
    <input 
    onChange={cambiosEvento}
    placeholder='escribe algo'
    className="TodoSearch" />
  )
}

export default TodoSearch