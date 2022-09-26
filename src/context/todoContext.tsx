import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
  };
  return <TodoContext.Provider value={{ todos, saveTodo, deleteTodo }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;