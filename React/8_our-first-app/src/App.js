import logo from './logo.svg';
import './App.css';
// importing format:
// import defaults, {nondefaults, nondefaults} from './file'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App; // eports App function
// default means when we import the entire file the default thing that exports is App
// export {fun1, fund2, fun3}  export many things
// use export default when there is a "most likely" thing to export