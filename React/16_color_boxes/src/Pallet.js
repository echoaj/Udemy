import React, { Component } from 'react';
import Box from './Box';
import './Pallet.css';

class Pallet extends Component {

    static defaultProps = {
        squares: 18,
        color_choices: ["red", "blue", "orange", "green", 
                        "purple", "violet", "grey", "yellow", 
                        "tan", "magenta", "pink", "brown",
                        "chartreuse", "cyan", "black", "crimson",
                        "salmon", "khaki", "indigo", "seashell"]
    };

    render() {
        return (
            <div className="Pallet">
                {[...Array(this.props.squares)].map(i => <Box colors={this.props.color_choices}/>)}
            </div>
        );
    }
}

export default Pallet;