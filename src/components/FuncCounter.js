import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>This is my FUNC counter. It belongs to {props.header}</h1>
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
