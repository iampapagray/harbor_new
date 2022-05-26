import logo from './logo.svg';
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "embed/Build/Harbour.loader.js",
  dataUrl: "embed/Build/Harbour.data.unityweb",
  frameworkUrl: "embed/Build/Harbour.framework.js.unityweb",
  codeUrl: "embed/Build/Harbour.wasm.unityweb",
});

function App() {
  return (
    <div className="App">
      <Unity className="game-embed" unityContext={unityContext} />
      {/* <iframe className="game-embed" src="https://cmgeneral.blob.core.windows.net/$web/index.html"></iframe> */}
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
