import * as React from "react";
import { ITodo } from "../@types/todo";

type Props = {
  todo: ITodo;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, deleteTodo }) => {
  return (
    <li className="list-item">
      <span>{todo.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
        <button className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};
export default Todo;
