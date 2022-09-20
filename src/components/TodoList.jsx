import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { title: "excercise", selected: false, id: 0 },
    { title: "shower", selected: false, id: 1 },
    { title: "cook", selected: false, id: 2 },
  ]);

  function onTodoItemClicked(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.selected = !todo.selected;
    setTodos(newTodos);
  }
  

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onClick={onTodoItemClicked} />
      ))}
    </div>
  );
}
