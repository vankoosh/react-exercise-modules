import React from 'react';
import "./App.css";
import Mount from "./components/Mount.js";

export default class App extends React.Component {
  constructor(props) {
    console.log("Constructor for App.js");
    super(props);
    this.state = {
      mount: true,
    }
  }
  
  mount = () => {
    console.log("Mounted");
    this.setState({ mount: true })
  };

  unmount = () => {
    console.log("Unmounted");
    this.setState({ mount: false })
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => {this.mount()}} disabled={this.state.mount}>MOUNT</button>
        <button onClick={() => {this.unmount()}} disabled={!this.state.mount}>UNMOUNT</button>
        {this.state.mount ? <Mount /> : null}
      </div>
    );
  }
}

