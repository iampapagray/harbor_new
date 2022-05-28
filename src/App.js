import logo from './logo.svg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';
import Leena from './components/Leena.js';
import Loyalty from './components/Loyalty.js';
import MiniGame from './components/MiniGame.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar style="light"/>
        <Routes>
          <Route path="/" element={ <MiniGame /> } />
          <Route path="/leena" element={ <div><Leena /><Footer /></div> } />
          <Route path="/loyalty" element={ <div><Loyalty /><Footer /></div> } />
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
