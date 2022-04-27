import React, { useState } from 'react';


export default function DatePrettifier() {
  const [count, setCount] = useState(15);
  const [theme, setTheme] = useState({ theme: "red" });
  
  function plus() {
    setCount(prevCount => prevCount + 1);
  }
  
  function minus() {
    setCount((prevCount) => prevCount - 1);
  }
  
  
  return (
    <div>
      <button className="plus" onClick={plus}>
        +
      </button>
      <p>{count}</p>
      <p>{theme}</p>
      <button className="minus" onClick={minus}>
        -
      </button>
    </div>
  );
  
}