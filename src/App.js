import first from './svgs/first.svg';
import second from './svgs/second.svg';
import './App.css';
import SplashScreen from './screens/SplashScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div style={{display:"flex", flexDirection:"row"}}> */}
          <img src={first} className="App-logo" alt="logo" style={{opacity:0.5}} />
        {/* <img src={second} className="App-logo" alt="logo" style={{opacity:0.5}} /> */}
        {/* </div> */}
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
      </header>
      <SplashScreen />
    </div>
  );
}

export default App;
