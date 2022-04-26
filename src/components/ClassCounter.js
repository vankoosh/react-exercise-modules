import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //set initial state at load / reload
      count: 0, // it has to be am object {}, with key:value pairs
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1, //what to update, count in this case
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1, //access the count
    });
  };

  render() {
    return (
      <div className="counter">
        <h1>This is my CLASS counter. It belongs to {this.props.header}</h1>
        <p className="count">The count is: {this.state.count}</p>
        <button onClick={this.increment} className="plus">
          +
        </button>
        <button onClick={this.decrement} className="minus">
          -
        </button>
      </div>
    );
  }
}
