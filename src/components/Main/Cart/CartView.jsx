import React from 'react'
import useCartContext from '../../../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {

  const {itemsInCart, removeItemFromCart, clearCart } = useCartContext();

  if ( itemsInCart.length === 0){
    return (
      <div>
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    )
  } else {
    return(
      <div>
        <h2>Carrito de compras</h2>
        <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                  itemsInCart.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>$ {item.price}</td>
                        <td>{item.qty}</td>
                        <td>$ {(item.qty*item.price).toFixed(0)}</td>
                        <td>
                          <button onClick={()=>removeItemFromCart(item.id)}>Eliminar</button>
                        </td>
                    </tr>
                  ))
              }
            </tbody>
        </table>

        <button onClick={()=>{alert('Compra realizada')}}>Pagar</button>
        <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    )
  }
}

export default CartView