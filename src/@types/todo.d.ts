export interface ITodo {
    id: number;
    title: string;
    
  }
  export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    deleteTodo: (id: number) => void;
  };