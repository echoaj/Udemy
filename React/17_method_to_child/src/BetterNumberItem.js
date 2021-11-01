import React, { Component } from 'react';

class BetterNumberItem extends React.Component {

    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt){
        this.props.remove(this.props.value);
    }

    render() { 
        return <li>
            {this.props.value}
            <button onClick={this.handleRemove}>X</button>
        </li>;
    }
}
 
export default BetterNumberItem;

/*
        Notes

Problem with code bellow
<button onClick={this.props.remove}>X</button>

can't pass anything to remove method.

*/