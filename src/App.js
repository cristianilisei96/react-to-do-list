import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Button from "./components/Button";

function App() {
  const [showAddToDo, setShowAddToDo] = useState(false);
  const [todos, setTodos] = useState([]);

  // Add To do
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  // Delete To do
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Completed
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearToDos = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddToDo(!showAddToDo)}
        showAdd={showAddToDo}
      />
      {showAddToDo && <AddTodo onAdd={addTodo} />}
      <hr />
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleCompleted} />
      ) : (
        "No to do to show"
      )}
      {todos.length > 0 && (
        <>
          <hr />
          <footer>
            <h4>You have {todos.length} to do</h4>
            <Button
              color="red"
              text={todos.length > 1 ? "Clear all" : "Clear"}
              onClick={clearToDos}
            />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
