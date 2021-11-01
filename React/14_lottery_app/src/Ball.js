import React, { Component } from 'react'
import './Ball.css';


class Ball extends Component{
    
    render(){
        return (
            <div className="Ball">
                <h1 id="Ball-Value">{this.props.num}</h1>
            </div>
        );
    }
}

export default Ball;