import React, { useEffect, useState } from "react";

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


// THOUGHT COMPONENT
function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);
  }, [thought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}


// ADD THOUGHT TO FORM COMPONENT
function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };

    if (text.length > 0) {
      props.addThought(thought);
      setText("");
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
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
