import React from 'react'
import './TodoItem.css'

function TodoItem(props) {

//   const onComplete =() => {
//  alert("se a completado " + hola.text)
//   }

  // const onDelete =() => {
  //   alert ("se a eliminado "+ props.text)
  // }
  

  return (
    <li className="TodoItem">
      <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
       &#10004;
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  )
}

export default TodoItem