import React, {useState} from 'react';

const Contador = ({nombre}) => {
  const[contador,setContador] = useState(0);
  
  
    return (
        <>
        <h1>{contador}</h1>
        <button onClick={()=> setContador(contador+1)}>sumar</button>
        <button onClick={()=> setContador(contador-1)}>restar</button>
        </>

   );
};

export default Contador;
