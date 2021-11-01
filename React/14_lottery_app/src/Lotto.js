import React, { Component } from 'react'
import './Lotto.css';
import Ball from './Ball';


class Lotto extends Component{

    static defaultProps = {
        title: "Lottery",
        numBalls: 6,
        maxNum: 40
    }

    constructor(props){
        super(props);
        this.state = {
            nums: Array.from({length: this.props.numBalls})
        };
        this.handleClick = this.handleClick.bind(this);
    }

    getNum() {
        let max = this.props.numBalls;
        let rand = Math.floor(Math.random() * max) + 1;
        return rand
    }

    handleClick(){
        let newNums= [...this.state.nums];
        for (let i = 0; i < newNums.length; i++) {
            newNums[i] = this.getNum();
        }
        this.setState({nums : newNums})
        // More complex way to set state (using function)
        // this.setState(cs => ({ nums: cs.nums.map(n => this.getNum())}));
    }

    render(){
        return (
            <section className="Lotto">
                <h1 id="title">{this.props.title}</h1>
                <div className="Lotto-balls">
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <div className="Lotto-submit">
                    <button id="submit" onClick={this.handleClick}>Generate</button>
                </div>
            </section>
        );
    }
}

export default Lotto;