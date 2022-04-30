import React from 'react'
import './TodoItem.css'

function TodoItem(hola) {

  const listo =() => {
 alert("se a completado " + hola.text)
  }

  const borrar =() => {
    alert ("se a eliminado "+ hola.text)
  }
  

  return (
    <li className="TodoItem">
      <span onClick={listo} className={`Icon Icon-check ${hola.completed && 'Icon-check--active'}`}>
       &#10004;
      </span>
      <p className={`TodoItem-p ${hola.completed && 'TodoItem-p--complete'}`}>
        {hola.text}
      </p>
      <span onClick={borrar} className="Icon Icon-delete">
        X
      </span>
    </li>
  )
}

export default TodoItem