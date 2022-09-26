import * as React from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../@types/todo';

const AddTodo: React.FC = () => {
  const { saveTodo, clearList } = React.useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };
  return (
    <form className="form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <input type="text" placeholder="Add Task..." onChange={handleForm} id="title" required className='task-input'/>
      <div className='buttons'>
      <button type="submit" className="btn add-task-btn">
          {'Add Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};
export default AddTodo;