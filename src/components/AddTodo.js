import React from "react";
import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a to do");
      return;
    }

    onAdd({ name, completed });

    setName("");
    setCompleted(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>To do</label>
        <input
          type="text"
          placeholder="Name of to do"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <input type="submit" value="Add to do" className="btn btn-block" />
    </form>
  );
};

export default AddTodo;
