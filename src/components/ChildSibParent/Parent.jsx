import React from "react";
import Child from './Child';
import Sibling from './Sibling';

// PARENT COMPONENT
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
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
}

// HACKchange selection in child to change text in another child
