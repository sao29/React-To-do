import React from 'react'
import  './TodoSearch.css';
import { useState } from 'react';

function TodoSearch({cambio, setCambio}) {

  // const [cambio, setCambio] = useState("");

  // const cambiosEvento = (event)=>{
  //   console.log(event.target.value);
  //   setCambio(event.target.value)
  // }
  const cambiosEvento = (e)=> {
     setCambio(e.target.value)
  }

  return (
    <>
    

    <input
  className="TodoSearch"
  placeholder="Ingresa algo"
  value={cambio}
	onChange={cambiosEvento}
      />
    <p> {cambio} </p>
    
    </>
   
  )
}

export default TodoSearch