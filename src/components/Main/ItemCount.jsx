import React, {useState} from 'react';

const ItemCount = ({stock, initial}) => {
  const[count,setCount] = useState(initial);
  
  function increment (){
    if(count < stock){
    setCount(count+1);
    }
  }

  function decrement (){
    if (count > 1){
    setCount(count-1)};
  }

  function onAdd(){
    alert(`Agregaste ${count} elementos al carrito`)
  }
  

    return (
        <div>
          <button onClick={decrement}>-</button>
          <h3>{count}</h3>
          <button onClick={increment}>+</button>
          <button onClick={onAdd}>Agregar al carrito</button>
        </div>

  );
};

export default ItemCount;
