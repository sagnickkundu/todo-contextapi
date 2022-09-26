export interface ITodo {
    id: number;
    title: string;
    
  }
  export type TodoContextType = {
    todos: ITodo[];
    editItem: any;
    saveTodo: (todo: ITodo) => void;
    deleteTodo: (id: number) => void;
    clearList: () => void;
    editTask: (title: string, id: number) => void
  };