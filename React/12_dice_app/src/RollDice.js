import React, { Component } from "react";
import Die from './Die';
import './RollDice.css';


class RollDice extends Component{

    constructor(props){
        super(props);
        this.state = {
            isRolling: false,
            dice1: 1,
            dice2: 1
        };

        this.getNum = this.getNum.bind(this);
    }

    getNum() {
        // Random number 1 - 10
        let rand = Math.floor(Math.random() * 6)+1;
        this.setState({dice1 : rand});
        rand = Math.floor(Math.random() * 6)+1;
        this.setState({dice2 : rand, isRolling : true, isRolling : true});

        // Set isRolling back to false after 1 second
        setTimeout(() => {
            this.setState({isRolling : false})
        }, 1000);
    }

    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-die">
                <Die dieValue={this.state.dice1} rolling={this.state.isRolling}/>
                <Die dieValue={this.state.dice2} rolling={this.state.isRolling}/>
                <div className="RollDice-button-div">
                    <button className="RollDice-button" onClick={this.getNum} disabled={this.state.isRolling}>
                        {this.state.isRolling? "Rolling..." : "Roll"}
                    </button>
                </div>
                </div>
            </div>
        )
    }
}

export default RollDice;