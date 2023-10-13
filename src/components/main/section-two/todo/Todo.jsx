import "./Todo.css";
import deleteImg from "./assets/delete.svg";
import editImg from "./assets/edit.svg";
import markAsDoneImg from "./assets/mark-as-done.svg";

const Todo = ({ todo, deleteTodo, markAsDoneTodo }) => {
  const deleteItem = () => {
    deleteTodo(todo.id);
  };

  const markAsDoneItem = () => {
    markAsDoneTodo(todo.id);
  };

  return (
    <div key={todo.id.toString()} className="lists">
      <h4 className={todo.done ? "done" : ""}>{todo.title}</h4>
      <div className="images">
        <img src={deleteImg} onClick={deleteItem} alt="delete" />
        <img src={editImg} alt="edit" />
        <img src={markAsDoneImg} onClick={markAsDoneItem} alt="mark as done" />
      </div>
    </div>
  );
};

export default Todo;
