import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './Game';
import Rando from './Rando';
import Game2 from './Game2_Alternate';
import Button from './Button';
import BrokenClick from './BrokenClick';
import ButtonScore from './ButtonScore';
import './App.css';


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

class App extends Component{
  render(){
    return(
      <div>
        <Rando maxNum={7}/>
        <Game/>
        <Button/>
        <BrokenClick/>
        <ButtonScore/>
      </div>
    )
  }
}

export default App;
