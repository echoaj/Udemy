import React, { Component } from 'react'
import './App.css';
import Lotto from './Lotto';


class App extends Component{

  render(){
    return (
      <div className="App">
        <Lotto/>
        <Lotto title="Mini Daily" numBalls={4} maxNum={10} />
      </div>
    )
  }
}


export default App;
