import React, { Component } from "react";

class IconAdder extends Component{

    static defaultProps = {
        options: ["&", "@", "!", "^", "%", "(", ")", "~", "`", "<", ">"]
    }

    constructor(props){
        super(props)
        this.state = {
            icons: ["#", "*"]
        }
        this.addIcon = this.addIcon.bind(this);
    }
/*  // Wrong way of doing this.
    addIcon(){
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        let icons = this.state.icons;
        icons.push(newIcon);
        this.setState({icons: icons});
    }
*/
    addIcon(){
        // Proper way of doing it.  Copy data stucture and modify the copy
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        // create new array object
        this.setState({icons: [...this.state.icons, newIcon]});
    }

    render(){
        const icons = this.state.icons.map(i => <h1>{i}</h1>)
        return(
            <div>
                <p><h1>Icons:</h1> {icons}</p>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        );
    }
}

export default IconAdder;