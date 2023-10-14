import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../contexts/TodoContext";
import { BsPlus } from "react-icons/bs";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <BsPlus />
    </button>
  );
}

export { CreateTodoButton };
