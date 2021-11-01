import React, { Component } from "react";
import "./Die.css";

class Die extends Component{

    render(){
        let dieType = `Die-${this.props.dieValue}`;
        let shake = this.props.rolling ? " Die-isShaking" : ""; 
        return(
            <div className="Die">
                <div className={dieType + shake}></div>
            </div>
        );
    }
}

export default Die;