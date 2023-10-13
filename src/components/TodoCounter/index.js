import { useContext } from 'react';
import "./TodoCounter.css";
import { TodoContext } from '../../contexts/TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS.
    </h1>
  );
}

export { TodoCounter };
