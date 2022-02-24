import React from 'react'

const Prueba = () => {

    
    const getName = ({name})=> {
        // si recibre parametro
        alert(`hola ${name}`)
    }

    const getNamee = ()=> {
        //si no recibe parametro (en la funcion getName no iria {name})
        alert("hola mundo")
    }

    const sinVocales = (e)=> {

        if(e.key === "a" || e.key === "e" || e.key === "i" || e.key === "o" || e.key === "u" ){
            return;
        } else

        console.log(e.key)
    
    }

  return (
    <>
    {/* Si la funcion recibe parametro, la sintaxis tiene que ser asi */}
    <button onClick={()=> getName({name:"jorge"})}>click</button>
    {/* Si la funcion NO recibe parametro, la sintaxis tiene que ser asi */}
    <button onClick={getNamee}>click</button>
    <input type="text" onKeyDown={sinVocales} ></input>
    
    </>

    
  )
}

export default Prueba