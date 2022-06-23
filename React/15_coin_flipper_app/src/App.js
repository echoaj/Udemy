import React, { Component } from 'react';
import './App.css';
import Flipper from './Flipper';

class App extends Component {
  render() {
    return (
      <div data-testid="flipper" className="App">
        <Flipper />
      </div>
    );
  }
}

export default App;
