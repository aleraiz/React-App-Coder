import './App.scss';
import Header from './components/Header/Header';
import ItemCount from './components/Main/ItemCount';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListCointainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Prueba from './Prueba/Prueba';
import {CartContextProvider} from './context/CartContext';
import CartView from './components/Main/Cart/CartView';

function App() {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
            <Route
              path='/'
              element={<ItemListContainer/>}
            />
            <Route
              path='/categoria/:categoryid'
              element={<ItemListContainer/>}
            />
            <Route
              path='/item/:id'
              element={<ItemDetailContainer/>}
            />
              <Route
              path='/cartView'
              element={<CartView/>}
            />
        </Routes>
      </div>
    </BrowserRouter>
  </CartContextProvider> 
  );
}

export default App;
