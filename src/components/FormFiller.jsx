import { useState } from "react";

export default function Input() {
  const [userInput, setuserInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setuserInput(e.target.value);
        }}
      />
      <h1>{userInput}</h1>
    </div>
  );
}

//>> target.value insert into <p> somewhere else with useState
