import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(() => {return 15}); // this way the initial computation wont rerender every time

  function increment() {
    setCount((prevCount) => prevCount + 1);
  };

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="counter">
      <h1>This is my FUNC counter. It belongs to...</h1>
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
