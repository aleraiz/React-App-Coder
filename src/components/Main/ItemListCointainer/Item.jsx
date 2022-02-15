import React from 'react'
import ItemCount from '../ItemCount'
import './Item.scss'

const Item = ({item}) => {
  return (
    <div className='productsCard'>
        <img src={item.imageUrl} alt={item.name} />
        <div>
            <h3>{item.name}</h3>
            <h4>$ {item.price}</h4>
        </div>
        <ItemCount
        initial={1}
        stock={item.stock}
      />
      <p>Stock disponible : {item.stock}</p>
    </div>
  )
}

export default Item