import React, {useEffect} from 'react';

export default function Thought({props}) {
  // const { thought, removeThought } = props;

  useEffect(() => {
    const timeRemaining = props.thought.expiresAt - Date.now();
    setTimeout(() => {
      props.removeThought(props.thought.id);
    }, timeRemaining);
  }, [props.thought]);

  const handleRemoveClick = () => {
    props.removeThought(props.thought.id);
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
      <div className="text">{props.thought.text}</div>
    </li>
  );
}
