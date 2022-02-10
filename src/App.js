import './App.scss';
import Header from './components/Header/Header';
import ItemCount from './components/Main/ItemCount';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <ItemCount
        initial={1}
        stock={8}
      />
    </div>
  );
}

export default App;
