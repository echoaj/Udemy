import React, { Component } from 'react';

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.getColor()
        };
        this.handleClick = this.handleClick.bind(this);
    }

    getColor() {
        let length = this.props.colors.length;
        let index = Math.floor(Math.random() * length);
        var newColor = this.props.colors[index];
        return newColor
    }

    handleClick(){
        do {
            var oldColor = this.state.color;
            var newColor = this.getColor();
        } while (oldColor === newColor);
        this.setState({ color: newColor });
    }

    render() {
        return (
            <div
                onClick={this.handleClick}
                style={{ backgroundColor: this.state.color }}>

            </div>
        );
    }
}

export default Box;