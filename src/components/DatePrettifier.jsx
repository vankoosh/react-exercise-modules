import React, { useState } from "react";

const log = () => {
  //if the initial state is logic-heavy, put it in a fn and pass into useState so it doesnt mount with the component every time
  return "white";
};

export default function DatePrettifier() {
  const [count, setCount] = useState(15); //the initial state
  const [currentState, setUpdateCurrentStateFunction] = useState(() => log());

  function plus() {
    setCount((prevCount) => prevCount + 1); //previous state gets passed in by default into setCount as param fn, you can use it or not
  }

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  function red() {
    setUpdateCurrentStateFunction("yellow");
  }

  return (
    <div>
      <button className="plus" onClick={plus}>
        +
      </button>
      <p>{count}</p>
      <p className="red">{currentState}</p>
      <button className="minus" onClick={minus}>
        -
      </button>
      <button onClick={red}>CHANGE BACKGROUND</button>
    </div>
  );
}
