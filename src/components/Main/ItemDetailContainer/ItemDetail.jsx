import React from 'react'
import './ItemDetail.scss'


const ItemDetail = ({item}) => {
    console.log(item);

    if (item) {
  return (
    <div className='productsCard'>
        <img src={item.imageUrl} alt={item.name} />
        <div>
            <h3>{item.name}</h3>
            <h4>$ {item.price}</h4>
        </div>
        <p>{item.description}</p>  
        <p>Stock disponible : {item.stock}</p>
    </div>
    ) 
    }else {
        return (
            <div>
                <h4>No encontramos el producto</h4>
            </div>
        )
    }
}

export default ItemDetail