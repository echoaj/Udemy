import React, { Component } from "react";


class ButtonScore extends Component {

    constructor(props) {
        super(props);;
        this.state = {
            num: 0
        }
        this.getNum = this.getNum.bind(this);

    }

    getNum() {
        // Random number 1 - 10
        let rand = Math.floor(Math.random() * 10)+1;
        this.setState({num : rand});
    }

    render() {
        return (
            <div>
                <h1>{this.state.num === 7 ? `You Win` : `Random number ${this.state.num}` }</h1>
                {this.state.num !== 7 && <button onClick={this.getNum}>Generate Number</button>}
            </div>
        )
    }
}

export default ButtonScore;

/* Notes

Downward Data Flow is when a smart parent class passes down its state as a prop to dumb child classes*/