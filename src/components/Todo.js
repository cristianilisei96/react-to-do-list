import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${todo.completed ? "completed" : "not-completed"}`}
      onDoubleClick={() => onToggle(todo.id)}
    >
      {todo.completed === false ? (
        <>
          <h3>
            {todo.name}
            <div>
              <FaCheck
                style={{
                  color: "green",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                onClick={() => onToggle(todo.id)}
              />
              <FaTrash
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onDelete(todo.id)}
              />
            </div>
          </h3>
          <h3 style={{ color: "red" }}>Work in progress</h3>
        </>
      ) : (
        <>
          <h3 style={{ textDecoration: "line-through" }}>
            {todo.name}
            <div>
              <FaTrash
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onDelete(todo.id)}
              />
            </div>
          </h3>
          <h3 style={{ color: "green" }}>Completed</h3>
        </>
      )}
    </div>
  );
};

export default Todo;
