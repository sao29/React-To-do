import React from 'react'

function Actividad1({reyes}) {
    const url = "https://www.html6.es/img/rey_";
    const resultado= reyes.map(e => 
    <div key={e.nombre} className='rey'> 
    <span className='rojo'> {e.nombre.toUpperCase()} </span>
     ha comido {e.reinado*e.vacasComidas*365}  en sus{e.reinado} anos de reindado
     <img src={url+e.nombre.toLowerCase()+".png"}/>
     
     
     </div> ) 
  return (
        <>
        {resultado}
        </>
  )
}

export default Actividad1