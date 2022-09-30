import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleUserInput}
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

// HACK target.value insert into <p> useState


