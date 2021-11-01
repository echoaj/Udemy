import React, { Component } from "react";
import "./Pokecard.css";


class Pokecard extends Component {

    website = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

    getPoke(id) {
        // adding 0s in front of number ex: 4 -> 004
        var extension;
        if (id < 10) {
            extension = `00${id}.png`;
        } else if (id < 100) {
            extension = `0${id}.png`;
        } else {
            extension = `${id}.png`;
        }
        return this.website + extension;
    }

    render() {
        let { id, name, type, exp } = this.props;
        return (
            <div className="Pokecard">
                <div className="Pokecard-img-div">
                    <img className="Pokecard-img" src={this.getPoke(id)} alt="Unavailable"/>
                </div>
                <div className="Pokecard-info">
                    <h2 className="Pokecard-name">
                        {name}
                    </h2>
                    <div className="Pokecard-type">
                        <h5>TYPE</h5>
                        <p>{type}</p>
                    </div>
                    <div className="Pokecard-exp">
                        <h5>EXP</h5>
                        <p>{exp}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokecard;