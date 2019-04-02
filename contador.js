import React, { useState } from 'react'; //useState es un hucks

function Contador(props){
  const[contador, setContador] = useState(0);
  return(
    <div>
      <p>conteo:{contador}</p>
      <button onClick={()=>setContador(contador+1)}>Incrementar</button>
    </div>
  )
}
export default Contador;