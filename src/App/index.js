import "./App.css";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/Modal";
import { useTodos } from "./useTodos";
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    sincronizeTodos,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    setOpenModal,
    addTodo
  } = useTodos();

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} loading={loading} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />

      <TodoList>
        {loading && (
          <>
            <TodosLoading /> <TodosLoading /> <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {!loading &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              description={todo.description}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}

      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </>
  );
}

export default App;
