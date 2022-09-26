import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [editItem, setEditItem] = React.useState(null)
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

  const clearList = () => {
    setTodos([]);
  }

  const editTask = (title: string, id: number) => {
    const newTodo = todos.map(todo => (todo.id === id ? { title, id } : todo))

    console.log(newTodo)

    setTodos(newTodo)
    setEditItem(null)
  }
  return <TodoContext.Provider value={{ todos, editItem, saveTodo, deleteTodo, clearList, editTask }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;