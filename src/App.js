import './App.scss';
import Header from './components/Header/Header';
import ItemCount from './components/Main/ItemCount';
import ItemListContainer from './components/Main/ItemListCointainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
