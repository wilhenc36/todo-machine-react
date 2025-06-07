import "./CreateTodoButton.css";
import { BsPlus } from "react-icons/bs";

function CreateTodoButton({ setOpenModal }) {
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
