import React from "react";
import Child from './Child';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Frarthur" };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />;
  }
}

// TODOtarget.value changes header text class compo
