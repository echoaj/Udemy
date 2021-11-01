import React, { Component } from "react";

class Rando extends Component{
    constructor(props){
        super(props);
        this.state = { num:0 }
        this.makeTimer();   // this technically gives you a warning. not good to call in consturctor
    }

    // every 1 second we assign state num to a new random number.
    makeTimer(){
        setInterval(() => {
            // create new random number when we call it between 0 and maxNum.
            let rand = Math.floor(Math.random() * this.props.maxNum)
            this.setState({num: rand});
        }, 1000);
    }

    render(){
        return(
            <h1>Random number: {this.state.num}</h1>
        )
    }
}

export default Rando;