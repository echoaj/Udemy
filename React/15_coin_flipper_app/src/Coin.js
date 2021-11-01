import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    heads = "https://4.bp.blogspot.com/-7PwEP2RUkJY/UcsufEDWr5I/AAAAAAAADD4/1aoajpaTluw/s1600/2010_cent_obverse.png";
    tails = "https://coins.thefuntimesguide.com/files/lincoln-memorial-cent-1.png";

    render() {
        var side = this.props.side === "tails" ? this.tails : this.heads;
        var displayType = this.props.enable === null ? "none" : "block";
        return (
            <div className="Coin" style={{ display: displayType }}>
                <img className="Coin-img" src={side} alt="Unavailable"></img>
            </div>
        );
    }
}

export default Coin;