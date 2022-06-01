import logo from './logo.svg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';
import Leena from './components/Leena.js';
import Loyalty from './components/Loyalty.js';
import Home from './components/Home.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar style="dark"/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/leena" element={ <div><Leena /><Footer /></div> } />
          <Route path="/loyalty" element={ <div><Loyalty /><Footer /></div> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
