import React from "react";

// function to be trigered on this one item component
function getClassName(selected) {
  if (selected) {
    return "TodoItemContainer selected";
  } else {
    return "TotdoItemContainer";
  }
}

export default function TodoItem({ todo, onClick }) {
  return (
    <div className={getClassName(todo.selected)} onClick={() => onClick(todo.id)} >
      <p className="TodoTitle">{todo.title}</p>
    </div>
  );
}
