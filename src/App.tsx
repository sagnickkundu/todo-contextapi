import * as React from "react";
import TodoProvider from "./context/todoContext";
import Todos from "./containers/TodoList";
import AddTodo from "./components/TodoInputForm";
import "./App.scss";

export default function App() {
  return (
    <TodoProvider>
      <div className="container">
        <div className="app-wrapper">
          <h1>My Todos</h1>
          <div className="main">
            <AddTodo />
            <Todos />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
