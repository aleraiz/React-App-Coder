import './App.scss';
import Header from './components/Header/Header';
// import ItemCount from './components/Main/ItemCount';
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
// import ItemListContainer from './components/Main/ItemListCointainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer
        idProduct = {7}
      />
    </div>
  );
}

export default App;
