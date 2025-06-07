import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TODOS = [
  { id: 1, description: "Ir al supermercado.", completed: false },
  { id: 2, description: "Preparar el almuerzo.", completed: true },
  { id: 3, description: "Ir al gym.", completed: false },
];

const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", TODOS);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.description.toLowerCase();
    const todoSearch = searchValue.toLowerCase();

    return todoText.includes(todoSearch);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      id: newTodos.length + 1,
      description: text,
      completed: false,
    });

    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.id === id);

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        sincronizeTodos
      };
};

export { useTodos };
