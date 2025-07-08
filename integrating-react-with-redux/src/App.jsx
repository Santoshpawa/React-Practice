// App.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./main";

export default function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Redux To-Do App</h2>
      <div>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd} style={styles.button}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={styles.deleteButton}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
    marginTop: "3rem",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    marginRight: "0.5rem",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "1.5rem",
  },
  todoItem: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  deleteButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
