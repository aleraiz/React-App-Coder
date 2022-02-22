import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import './Item.scss'

const Item = ({item}) => {
  return (
    <div className='productsCard'>
      <Link to={`/item/${item.id}`}><img src={item.imageUrl} alt={item.name} /></Link>
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