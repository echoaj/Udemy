import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {

    render() {
        let pokemon = this.props.hand;
        let totalExp = this.props.score;
        let isWinner = this.props.isWinner;
        let winStatus;

        if(isWinner){
            winStatus = <h1 className="Pokedex-win">{isWinner ? "Winner" : "Looser"}</h1>
        }else{
            winStatus = <h1 className="Pokedex-loose">{isWinner ? "Winner" : "Looser"}</h1>
        }

        return (
            <div className="Pokedex">
                {/* <h1>Pokedex</h1> */}
                {winStatus}
                <h4 className="Pokedex-total-exp">Total Exp: {totalExp}</h4>
                
                {pokemon.map(poke => (
                    <Pokecard
                        className="Pokedex-root"
                        id={poke.id}
                        name={poke.name}
                        type={poke.type}
                        exp={poke.exp}
                    />
                ))}
            </div>
        )
    }

}

export default Pokedex;