import React, { Component } from "react";

class BrokenClick extends Component{

    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
        // without this line of code we get an error.
        // we are binding the handle click function to this instance
        this.handleClick = this.handleClick.bind(this);
    }

    // Pretty standard in JS to take in event when handeling click
    // this.setState give you an error because it is not being called in our instance.
    // we need to bind()
    handleClick(event){
        this.setState({clicked: true});
    }

    render(){
        return(
           <div>
               <h1>{this.state.clicked ? 'Clicked!' : 'Not Clicked!!!'}</h1>
               <button onClick={this.handleClick}>Click Me!</button> 
           </div>
        )
    }
}

export default BrokenClick;

/*  ------------------- Notes -----------------------

2nd way of binding function (syntax is experimental)
The expression below is not javaScript
handleClick = () => {
    ...
}

3rd way binding directly in render
handleclick() {
    ...
}
render(){
    return <button onClick={this.handleClick.bind(this)}>... 
}

4rth way usng arrow function in rnder

    return <button onClick={() => this.handleClick()}>...

*/