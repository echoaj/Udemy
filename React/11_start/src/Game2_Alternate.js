
/*
This file is the exact same as Game.js but with using an
alternate syntax for state.
*/

import React, { Component } from 'react'

class Game2 extends Component {

    // If you perfer this you can use it.
    // This is not JavaScript.  Babble converts this into JavaScript.
    // This syntax will not work if you do not have babble imported or configured.
    state = {
        score: 1,
        gameOver: false
    };

    render(){
        return (
            <div>
                <h1>This is your score {this.state.score}.</h1>
            </div>
        )
    }
}

export default Game2;