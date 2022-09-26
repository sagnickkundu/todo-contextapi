import * as React from 'react';
import { ITodo } from '../@types/todo';

type Props = {
  todo: ITodo;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, deleteTodo }) => {
  return (
    <div>
      <div>
        <h1 >{todo.title}</h1>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};
export default Todo;