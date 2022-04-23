import React from 'react'

function Cena({nombre,precio,color,settotal}) {
    const ruta ="https://www.html6.es/img/rey_";
    const imagen = `${ruta}${nombre.toLowerCase()}.png`;
  const comprar =(elemento)=>{
    settotal((e)=> e+precio);
    elemento.target.parentNode.parentNode.parentNode.style.display="none";
  }
    return (
     <>
    <div className='rey' style={{backgroundColor:color}}>
        <h1>{nombre}</h1>
        <img src={imagen} alt="fotto" />
        <div className='titulo'>Precio:</div>
        <div className='precio'>
             {precio}  
             <div>
                <button onClick={comprar}> comprar</button>
             </div>
        </div>
    
    </div>
     </>
  );
}

export default Cena