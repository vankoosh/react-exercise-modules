import React, { useState } from "react";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

export default function PickPizzaTopping() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({ target }) => {
    setSelected((prev) => {
      if (prev.includes(target.value)) {
        return prev.filter((t) => t !== target.value);
      } else {
        return [target.value, ...prev];
      }
    });
  };

  return (
    <div>

      {options.map((option) => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}

      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}
