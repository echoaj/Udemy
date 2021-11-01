import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

class Pokegame extends Component{

    static defaultProps = {
        pokemon: [
            { id: 4, name: "Charmander", type: "fire", exp: 62 },
            { id: 7, name: "Squirtle", type: "water", exp: 63 },
            { id: 11, name: "Metapod", type: "bug", exp: 72 },
            { id: 12, name: "Butterfree", type: "flying", exp: 178 },
            { id: 25, name: "Pikachu", type: "electric", exp: 112 },
            { id: 39, name: "Jigglepuff", type: "normal", exp: 95 },
            { id: 94, name: "Gengar", type: "poison", exp: 225 },
            { id: 133, name: "Eevee", type: "normal", exp: 65 }
        ]
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    render(){
        let pokemon = this.props.pokemon
        this.shuffleArray(pokemon);

        // Split list in 2
        let pdex1 = this.props.pokemon.slice(0, 4);
        let pdex2 = this.props.pokemon.slice(4, 8);

        // Add up the total of each exp value in list
        let top = pdex1.reduce((a, b) => a + b.exp, 0)
        let bottom = pdex2.reduce((a, b) => a + b.exp, 0)
        return (
            <div>
                <h1 className="Pokegame-title">Pokemon Game</h1>
                <Pokedex score={top} hand={pdex1} isWinner={top>bottom}/>
                <Pokedex score={bottom} hand={pdex2} isWinner={bottom>top}/>
            </div>
        )
    }

}

export default Pokegame;