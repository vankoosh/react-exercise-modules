import React from "react";

export default class Mount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          INCREMENT
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          DECREMENT
        </button>
        <p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {this.state.count}
        </p>
      </div>
    );
  }
}
