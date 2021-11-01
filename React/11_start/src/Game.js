import React, { Component } from 'react'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        }
    }

    render(){
        return (
            <div>
                <h1>This is your score {this.state.score}.</h1>
            </div>
        )
    }
}

export default Game;

/*
----------NOTES---------
When using state it must be declared in a class component not functional component.
this.state is reserved in react like this.props is.
this.state is always defined in constructor. Always needs super(props) too.

this.props is defined there for don't need to intialize it
this.state needs to be initialized otherwise you get an error when using it.

When changing state in react, NEVER directly change the state by doing this
ex: this.state.score = 5;
instead use:
this.setState({score: 5})   
// Also can't setState inside a constructor.
// And should setState in render()

The reason why we use this.setState() is because this is all happen asynchronously.
There is no guarante this will all happen right away. 
Has to do with react works. We are requesting react to make the change.
React is controlling it based on performance constraints and the whole Componenet gets
re-rendered when the state changes.

Alernative ways to call setState();
Pass in function:
    this.setState((state, props) =>
    {
        return {counter: state.counter + props.step}
    })
Can also pass in callback.
setState(stateChange [,callback])
Will guarantee callback will be called after state is changed.

forceUpdate()

*/