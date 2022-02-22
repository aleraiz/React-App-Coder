import React from 'react'
import './ItemDetail.scss'
import ItemCount from '../ItemCount'


const ItemDetail = ({item}) => {

    if (item) {
  return (
    <div className='productsCardDetail'>
        <div className='divImg'>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.description}</p>
        </div>

        <div className='divOther'>
            <div className='productCard'>
                <h3>{item.name}</h3>
                <h4>$ {item.price}</h4>
            </div>
            <div className='addCart'>
                <ItemCount
                    initial={1}
                    stock={item.stock}
                />
                <p>Stock disponible : {item.stock}</p>
            </div>
        </div>
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