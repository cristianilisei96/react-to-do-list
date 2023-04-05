import React from "react";
import { FaTimes } from "react-icons/fa";

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${todo.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(todo.id)}
    >
      {todo.reminder === false ? (
        <>
          <h3>
            {todo.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(todo.id)}
            />
          </h3>
          <p style={{ color: "red" }}>In progress</p>
        </>
      ) : (
        <>
          <h3 style={{ textDecoration: "line-through" }}>
            {todo.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(todo.id)}
            />
          </h3>
          <h3>Done</h3>
        </>
      )}

      <p>{todo.day}</p>
    </div>
  );
};

export default Todo;
