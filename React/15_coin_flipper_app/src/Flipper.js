import React, { Component } from 'react';
import Coin from './Coin';
import './Flipper.css';

class Flipper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            side: null,
            flips: 0,
            heads: 0,
            tails: 0,
        };
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        let num = Math.floor(Math.random() * 2);
        let choice = num === 0 ? "tails" : "heads";
        this.setState({ side: choice });
        this.setState(state => { return { flips: state.flips + 1 }; }); // Using callback for in increment flip
        if (choice === "tails") {
            this.setState(state => { return { tails: state.tails + 1 }; });
        } else {
            this.setState(state => { return { heads: state.heads + 1 }; });
        }
    }

    render() {
        return (
            <div data-testid="flipperdiv" className="Flipper">
                <h1>Coin Flipper</h1>
                <Coin side={this.state.side} enable={this.state.side} />
                <button onClick={this.flipCoin}>Flip</button>
                <p>{this.state.flips} Flips | {this.state.heads} Heads | {this.state.tails} tails</p>
            </div>
        );
    }

}

export default Flipper;