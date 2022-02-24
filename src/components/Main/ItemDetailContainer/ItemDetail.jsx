import React from 'react'
import './ItemDetail.scss'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {

    let [inCart, setInCart] = React.useState(false);

    function onAdd(count){
        setInCart(true);
        alert(`Agregaste ${count} elementos al carrito`)
      }

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

                {/* rendering condicional */}

                {/* if */}
                { inCart? (
                        <Link to="/cart">
                        <button>Finalizar tu compra</button>
                        </Link>
                    ) : (
                        <ItemCount
                        initial={1}
                        stock={item.stock}
                        onAdd={onAdd}
                    />

                        ) }

       
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