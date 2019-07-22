import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from "./actions";

class Counter extends React.Component {
    state = { count: 0 };

    increment = () => {
        this.props.increment();
    };

    decrement = () => {
        this.props.decrement();
    };

    reset = () => {
        this.props.dispatch({ type: 'RESET' });
    };

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count"></span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>reset</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 
const mapDispatchToProps = {
    increment,
    decrement
};

//connect is a higher-order function which is a fancy way of saying it returns a function when you call it
//connect passes the entire state to your mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Counter);