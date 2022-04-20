import React from 'react';

export default function Counter() {
  let count = 0;

  const plus = () => {
    
  }

  return (
    <div>
      <h1>This is my counter</h1>
      <p>The count is {count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}