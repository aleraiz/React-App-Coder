import React, {useState} from 'react';
import './ItemCount.scss'

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
        <div className='agregar'>
          <div className='itemCountDiv'>
            <button onClick={decrement}>-</button>
            <h4>{count}</h4>
            <button onClick={increment}>+</button>
          </div>
          <div className='addButtonDiv'>
            <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>

  );
};

export default ItemCount;
