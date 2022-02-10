import './App.scss';
import Header from './components/Header/Header';
import Contador from './components/Main/Contador';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Contador/>
    </div>
  );
}

export default App;
