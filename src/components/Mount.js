import React from 'react';

export default class Mount extends React.Component {
  constructor(props) {
    console.log("Constructor for Mount.js");
    super(props);
    this.state = {
      count: 0
    }
  }

  increment() {
    console.log("increment fn");
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    console.log("decrement fn");
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    console.log("Rendered Mount.js");
    return (
      <div>
        <button onClick={()=>{this.increment()}}>INCREMENT</button>
        <button onClick={()=>{this.decrement()}}>DECREMENT</button>
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
  )}
}