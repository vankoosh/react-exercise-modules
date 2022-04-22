import React, { useState } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

    return (
      <div className="counter">
        <h1>This is my counter</h1>
        <p className="count">The count is: {count}</p>
        <button onClick={increment} className="plus">
          +
        </button>
        <button onClick={decrement} className="minus">
          -
        </button>
      </div>
    );

}














// let count = 0;

// export default class Counter extends React.Component {
//   plus() {
//     count++;
//     document.querySelector(".count").innerHTML = "The count is: " + count;
//   }

//   minus() {
//     count--;
//     document.querySelector(".count").innerHTML = "The count is: " + count;
//   }

//   render() {
//     return (
//       <div className="counter">
//         <h1>This is my counter</h1>
//         <h5>{this.props.header}</h5>
//         <p className="count">The count is: 0</p>
//         <button onClick={this.plus} className="plus">
//           +
//         </button>
//         <button onClick={this.minus} className="minus">
//           -
//         </button>
//       </div>
//     );
//   }
// }









export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="counter">
        <h1>This is my counter</h1>
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
