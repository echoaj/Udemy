import React, { Component } from 'react';
import IconAdder from './IconAdder';
import ScoreKeeper from './ScoreKeeper';

class App extends Component{
  render(){
    return(
      <div class="App">
        <ScoreKeeper/>
        <IconAdder/>
      </div>
    )
  }
}

export default App;