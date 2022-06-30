import logo from './logo.svg';
// import NavBar from './components/NavBar';
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
import NavBarNew from './components/NavBarNew';
import FooterNew from './components/FooterNew';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBarNew />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/leena"
            element={
              <div>
                <Leena />
                <FooterNew />
              </div>
            }
          />
          <Route
            path="/loyalty"
            element={
              <div>
                <Loyalty />
                <FooterNew />
              </div>
            }
          />
        </Routes>
        {/* <FooterNew /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
