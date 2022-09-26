import * as React from "react";
import { TodoContextType, ITodo } from "../@types/todo";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/TodoListItem";

const Todos = () => {
  const { todos, deleteTodo } = React.useContext(
    TodoContext
  ) as TodoContextType;
  return (
    <>
      {todos.length ? (
        <ul className="list">
          {todos.map((todo: ITodo) => (
            <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} />
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </>
  );
};

export default Todos;
