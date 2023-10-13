import { BsFillCheckSquareFill, BsXLg } from "react-icons/bs"
import "./TodoItem.css";

function TodoItem({ description, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <BsFillCheckSquareFill />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {description}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <BsXLg />
      </span>
    </li>
  );
}

export { TodoItem };
