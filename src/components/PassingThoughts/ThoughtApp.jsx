// TODOdependency problem for useEffect
import React, { useState } from "react";
import Thought from './Thought';
import AddThoughtForm from './AddThoughtForm';
// hello

// UTILITIES FUNCTIONS
function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

let nextId = 0;
function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

// THE ACTUAL APP
export default function ThoughtApp() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((prev) => [thought, ...prev]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((prev) =>
      prev.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
