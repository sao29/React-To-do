import React from 'react'
//substing accede a un determinado numero de texto
function Actividad3({reyes}) {
    const resultado = reyes.find(e => e.nombre.substring(0,1)=="e"  || e.nombre.substring(0,1)== "E")
    
    return (
    <>
    {resultado.nombre}
    </>
  )
}

export default Actividad3