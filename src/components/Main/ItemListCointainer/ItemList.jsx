import React from 'react'
import Item from './Item';
import './ItemList.scss'

const ItemList = ({items}) => {
    console.log(items);
  return (
    <div className='containerProducts'>
        {
        items.map( itemIterado => {
            return <Item
            key={itemIterado.id}
            item={itemIterado}
            />
        })
            }
    </div>
  )
}

export default ItemList