import React, { Component } from 'react';
import BetterNumberItem from './BetterNumberItem';


class BetterNumberList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nums: [1, 2, 3, 4, 5] };
        // need to bind remove because child componenet will use it for onClick
        this.remove = this.remove.bind(this);
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n != num)
        }));
    }

    render() {
        // remove warning for key.  Add key attribute.  Helps react identify props
        // keys need to be unique
        // Can use index of array as keys but only if data does not change.  Would not be good if data is reordered
        let nums = this.state.nums.map((n, i) => <BetterNumberItem value={n} key={i} remove={this.remove} />);
        // Solution is to install and use 3rd party library such as shortid or uuid.
        return <div>
            <h1>Better Number List</h1>
            <ul>{nums}</ul>
        </div>;
    }
}

export default BetterNumberList;