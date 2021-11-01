import React, { Component } from "react";

class ScoreKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {
            score : 0,
        };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
        this.quintupleKill = this.quintupleKill(this);
        this.octupleKill = this.octupleKill.bind(this);
    }

    singleKill(){
        // don't increase the score like this.
        this.setState({score : this.state.score + 1});
    }

    tripleKill(){
        // The code below does not add 3 to score because setState() is Asynchronous.
        // You can't assume the previous call has finished when you call it.
        // Also sometimes react will batch calls together into one for performance reasons.
        // It will sometimes assume you want the latest one to updated.
        this.setState({score: this.state.score + 1})
        this.setState({score: this.state.score + 1})
        this.setState({score: this.state.score + 1})
    }

    quintupleKill(){
        // Solution is use alternate "callback form"
        this.setState(st => {
            return {score: st.score + 5};
        });
    }

    addEight(curState){
        return { score: curState.score + 10};
    }

    octupleKill(){
        // Solution is use alternate "callback form"
        this.setState(this.addEight);
    }

    render(){
        return (
            <div>
                <h1>Score: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
                <button onClick={this.quintupleKill}>Quintuple Kill</button>
                <button onClick={this.octupleKill}>Octuple Kill</button>
            </div>
        )
    }
}

export default ScoreKeeper;