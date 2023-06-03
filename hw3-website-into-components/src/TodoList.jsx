import React from "react";
import { useState } from "react";
import "./style.css";

export default function App() {
  const [todoList, setTodoList] = useState([
    "clean up",
    "practice React",
    "do sports",
  ]);

  const [newTodo, setNewTodo] = useState();

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        placeholder="your new todo"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setTodoList([...todoList, newTodo]);
        }}
      >
        Add
      </button>
    </div>
  );
}
